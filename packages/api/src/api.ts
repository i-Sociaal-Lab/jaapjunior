import { vValidator } from "@hono/valibot-validator";
import { Hono, type MiddlewareHandler } from "hono";
import { bearerAuth } from "hono/bearer-auth";
import { except } from "hono/combine";
import { HTTPException } from "hono/http-exception";
import type { JwtVariables } from "hono/jwt";
import { jwt } from "hono/jwt";
import * as jose from "jose";
import type { ChatMessage } from "llamaindex";
import { nanoid } from "nanoid";
import * as v from "valibot";
import { agents, llms } from "./agent.js";
import { getEnvOrThrow } from "./get-env.js";
import { getRandomItem } from "./random.js";

// Define a generic type to extract the 'value' type
type ExtractValue<T> = T extends { value: infer V } ? V : never;

// Define a type to map an array of objects to a tuple of their 'value' types
type ValuesTuple<Arr extends Readonly<unknown[]>> = {
	[K in keyof Arr]: ExtractValue<Arr[K]>;
};

// Generic type to wrap each element of a tuple
type WrapTupleElements<TTuple extends Readonly<v.Literal[]>> = {
	[P in keyof TTuple]: v.LiteralSchema<TTuple[P], undefined>;
};

type ToLiteralSchema<T> = T extends v.Literal
	? v.LiteralSchema<T, undefined>
	: never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never;

type UnionToTuple<T> = UnionToIntersection<
	T extends any ? () => T : never
> extends () => infer R
	? [...UnionToTuple<Exclude<T, R>>, R]
	: [];

interface Conversation {
	id: string;
	messages: (ChatMessage | ChatMessage[])[];
	createdAt: Date;
	updatedAt: Date;
}

type Variables = JwtVariables;

const availableModels = [
	{ label: "GPT-4.1", value: "4.1" },
	{ label: "Qwen 3", value: "qwen3" },
] as const satisfies ReadonlyArray<{
	label: string;
	value: keyof typeof llms;
}>;

const agentsSchema = v.union(
	Object.keys(agents).map((model) =>
		v.literal(model),
	) as unknown as UnionToTuple<ToLiteralSchema<keyof typeof agents>>,
);

const oneOffMessageSchema = v.object({
	q: v.string(),
	agent: v.optional(agentsSchema),
});

const sendMessageSchema = v.object({
	inputText: v.string(),
	agent: v.optional(agentsSchema),
	model: v.optional(
		v.union([
			v.union(
				availableModels.map((model) =>
					v.literal(model.value),
				) as unknown as WrapTupleElements<ValuesTuple<typeof availableModels>>,
			),
			v.literal("rate"),
		]),
	),
});

const feedbackSchema = v.object({
	messageContent: v.string(),
	conversationContent: v.array(v.any()),
	name: v.optional(v.string()),
});

const conversations = new Map<string, Conversation>();

export interface IStatement {
	// biome-ignore lint/suspicious/noExplicitAny: This is a workaround for Bun's type system
	run: (params?: any) => void;
	// biome-ignore lint/suspicious/noExplicitAny: This is a workaround for Bun's type system
	all: (params?: any) => unknown[];
}

export interface IDB {
	prepare: (query: string) => IStatement;
}

let db: IDB;
if (typeof Bun !== "undefined") {
	const { Database } = await import("bun:sqlite");
	db = new Database(getEnvOrThrow("DB_PATH"));
} else {
	const Database = await import("better-sqlite3").then((m) => m.default);
	db = new Database(getEnvOrThrow("DB_PATH"));
}

db.prepare(
	"CREATE TABLE IF NOT EXISTS model_picks (id INTEGER PRIMARY KEY, prefers TEXT, over TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)",
).run();
db.prepare(
	"CREATE TABLE IF NOT EXISTS model_responses (id INTEGER PRIMARY KEY, model TEXT, response_time REAL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)",
).run();
db.prepare(
	"CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY, message_content TEXT, conversation_content TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)",
).run();

try {
	db.prepare("ALTER TABLE feedback ADD COLUMN name TEXT").run();
} catch {}

const myJwt = jwt({
	secret: getEnvOrThrow("JWT_SECRET"),
});

const myBearerAuth = bearerAuth({
	token: getEnvOrThrow("API_TOKEN"),
});

const authMiddleware: MiddlewareHandler = (ctx, next) => {
	const credentials = ctx.req.raw.headers.get("Authorization");
	if (!credentials) {
		throw new HTTPException(401, {
			message: "missing credentials",
			res: Response.json({
				error: "invalid_request",
				errDescription: "missing credentials",
			}),
		});
	}

	const parts = credentials.split(/\s+/);
	const token = parts[1];

	const tokenIsJwt = token.matchAll(/\./g).toArray().length === 2;

	if (tokenIsJwt) {
		return myJwt(ctx, next);
	} else {
		return myBearerAuth(ctx, next);
	}
};

export const api = new Hono<{ Variables: Variables }>()
	.use(
		"/*",
		except(
			[
				"/api/v1",
				"/api/v1/auth",
				"/api/v1/picks",
				"/api/v1/responses",
				"/api/v1/feedback",
			],
			authMiddleware,
		),
	)
	.get("/", (c) => {
		return c.text("OK");
	})

	.get("/authenticated", (c) => {
		return c.text("OK");
	})

	.post("auth", async (c) => {
		const { password } = await c.req.json();

		// TODO: make this more secure. Currently fine for the POC-env
		if (password === getEnvOrThrow("SHARED_PASSWORD")) {
			const secret = new TextEncoder().encode(getEnvOrThrow("JWT_SECRET"));
			const alg = "HS256";

			const jwt = await new jose.SignJWT()
				.setProtectedHeader({ alg })
				.setIssuedAt()
				.sign(secret);

			c.status(200);
			return c.json({ jwt: jwt });
		}

		c.status(401);
		return c.text("Unauthorized");
	})

	// Send one-off question
	.post("question", vValidator("json", oneOffMessageSchema), async (c) => {
		const { q, agent = "jw" } = c.req.valid("json");

		const response = await agents[agent].query(q, [], db);

		return c.json({ response: response.message.content });
	})

	// Create a new conversation
	.post("conversations", (c) => {
		const id = nanoid();
		const now = new Date();

		const conversation: Conversation = {
			id,
			messages: [],
			createdAt: now,
			updatedAt: now,
		};

		conversations.set(id, conversation);

		return c.json({ id, createdAt: now });
	})

	// Get a specific conversation
	.get("conversations/:id", (c) => {
		const id = c.req.param("id");
		const conversation = conversations.get(id);

		if (!conversation) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		return c.json(conversation);
	})

	// Send a message in a conversation
	.post(
		"conversations/:id",
		vValidator("json", sendMessageSchema),
		async (c) => {
			try {
				const conversationId = c.req.param("id");
				const {
					inputText,
					model: selectedModel,
					agent = "jw",
				} = c.req.valid("json");

				const conversation = conversations.get(conversationId);
				if (!conversation) {
					return c.json({ error: "Conversation not found" }, 404);
				}

				if (selectedModel === "rate") {
					let modelFirst: keyof typeof llms;
					let modelSecond: keyof typeof llms;

					const availableModels = Object.keys(llms) as (keyof typeof llms)[];

					do {
						modelFirst = getRandomItem(availableModels);
						modelSecond = getRandomItem(availableModels);
					} while (modelFirst === modelSecond);

					const [responseFirst, responseSecond] = await Promise.all([
						agents[agent].query(
							inputText,
							conversation.messages as ChatMessage[],
							db,
							modelFirst,
						),
						agents[agent].query(
							inputText,
							conversation.messages as ChatMessage[],
							db,
							modelSecond,
						),
					]);

					conversation.messages.push([
						responseFirst.message,
						responseSecond.message,
					]);

					return c.json([responseFirst.message, responseSecond.message]);
				}

				const response = await agents[agent].query(
					inputText,
					conversation.messages as ChatMessage[],
					db,
					selectedModel,
				);

				conversation.messages.push({
					content: inputText,
					role: "user",
				});
				conversation.messages.push(response.message);

				return c.json([response.message]);
			} catch (error: unknown) {
				console.error("Error calling model:", error);
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				return c.json({ error: errorMessage }, 500);
			}
		},
	)

	// Pick a message in a conversation
	.post("conversations/:id/pick", async (c) => {
		const conversationId = c.req.param("id");
		const { prefers, over } = await c.req.json();

		const conversation = conversations.get(conversationId);
		if (!conversation) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		const idx = conversation.messages.findIndex((m) => {
			return (
				Array.isArray(m) &&
				(m[0].content === prefers.content || m[1].content === prefers.content)
			);
		});
		conversation.messages[idx] = prefers;

		db.prepare("INSERT INTO model_picks (prefers, over) VALUES ($1, $2)").run({
			$1: JSON.stringify(prefers),
			$2: JSON.stringify(over),
		});

		return c.json({ success: true });
	})

	.get("models", (c) => {
		return c.json(availableModels);
	})

	.get("responses", async (c) => {
		const rows = db.prepare("SELECT * FROM model_responses").all();
		return c.json(rows);
	})

	.get("picks", async (c) => {
		const rows = db.prepare("SELECT * FROM model_picks").all();
		return c.json(rows);
	})

	.get("feedback", async (c) => {
		const rows = db.prepare("SELECT * FROM feedback").all();
		return c.json(rows);
	})

	.post("feedback", vValidator("json", feedbackSchema), async (c) => {
		const { messageContent, conversationContent, name } = c.req.valid("json");

		db.prepare(
			"INSERT INTO feedback (message_content, conversation_content, name) VALUES ($1, $2, $3)",
		).run({
			$1: messageContent,
			$2: JSON.stringify(conversationContent),
			$3: name || null,
		});

		return c.json({ success: true });
	});
