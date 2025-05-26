import { Hono } from "hono";
import { validator } from "hono-openapi/valibot";
import type { JwtVariables } from "hono/jwt";
import * as jose from "jose";
import type { ChatMessage } from "llamaindex";
import { nanoid } from "nanoid";
import * as v from "valibot";
import { llms, prompts, query } from "./agent.js";
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

interface Conversation {
	id: string;
	messages: (ChatMessage | ChatMessage[])[];
	createdAt: Date;
	updatedAt: Date;
}

type Variables = JwtVariables;

const availableModels = [
	{ label: "GPT-4.1", value: "4.1" },
	{ label: "Gemini 2.5 Pro", value: "2.5-pro" },
	{ label: "Llama 4", value: "llama-4" },
	{ label: "Mistral Medium", value: "mistral-medium" },
] as const satisfies ReadonlyArray<{
	label: string;
	value: keyof typeof llms;
}>;

const sendMessageSchema = v.object({
	inputText: v.string(),
	model: v.union([
		v.union(
			availableModels.map((model) =>
				v.literal(model.value),
			) as unknown as WrapTupleElements<ValuesTuple<typeof availableModels>>,
		),
		v.literal("rate"),
	]),
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

export const api = new Hono<{ Variables: Variables }>()
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
		validator("json", sendMessageSchema),
		async (c) => {
			try {
				const conversationId = c.req.param("id");
				const { inputText, model: selectedModel } = c.req.valid("json");

				const conversation = conversations.get(conversationId);
				if (!conversation) {
					return c.json({ error: "Conversation not found" }, 404);
				}

				if (selectedModel === "rate") {
					let modelFirst: keyof typeof llms;
					let modelSecond: keyof typeof llms;
					let promptFirst: keyof typeof prompts;
					let promptSecond: keyof typeof prompts;

					const availableModels = Object.keys(llms) as (keyof typeof llms)[];
					const availablePrompts = Object.keys(
						prompts,
					) as (keyof typeof prompts)[];

					do {
						modelFirst = getRandomItem(availableModels);
						modelSecond = getRandomItem(availableModels);

						promptFirst = getRandomItem(availablePrompts);
						promptSecond = getRandomItem(availablePrompts);
					} while (modelFirst === modelSecond && promptFirst === promptSecond);

					const [responseFirst, responseSecond] = await Promise.all([
						query(
							inputText,
							conversation.messages as ChatMessage[],
							db,
							modelFirst,
							promptFirst,
						),
						query(
							inputText,
							conversation.messages as ChatMessage[],
							db,
							modelSecond,
							promptSecond,
						),
					]);

					conversation.messages.push([
						responseFirst.message,
						responseSecond.message,
					]);

					return c.json([responseFirst.message, responseSecond.message]);
				}

				const response = await query(
					inputText,
					conversation.messages as ChatMessage[],
					db,
					selectedModel,
					"may13",
				);

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
	});
