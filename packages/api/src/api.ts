import Database from "better-sqlite3";
import { Hono } from "hono";
import { validator } from "hono-openapi/valibot";
import { except } from "hono/combine";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import * as jose from "jose";
import type { ChatMessage } from "llamaindex";
import { nanoid } from "nanoid";
import * as v from "valibot";
import { llms, prompts, query } from "./agent.js";
import { getEnvOrThrow } from "./get-env.js";
import { getRandomItem } from "./random.js";

interface Conversation {
	id: string;
	messages: (ChatMessage | ChatMessage[])[];
	createdAt: Date;
	updatedAt: Date;
}

type Variables = JwtVariables;

const sendMessageSchema = v.object({
	inputText: v.string(),
	model: v.union([
		v.literal("flash"),
		v.literal("4.1"),
		v.literal("4.1-nano"),
		v.literal("rate"),
	]),
});

// In-memory store for conversations
// Note: In a production environment, you would use a database instead
const conversations = new Map<string, Conversation>();

export const api = new Hono<{ Variables: Variables }>()
	.use(
		"/*",
		except(
			["/api/v1/auth", "/api/v1"],
			jwt({
				secret: getEnvOrThrow("JWT_SECRET"),
			}),
		),
	)

	.get("/", (c) => {
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
							modelFirst,
							promptFirst,
						),
						query(
							inputText,
							conversation.messages as ChatMessage[],
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
					selectedModel,
					"robin",
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

		const db = new Database("storage.sqlite");
		db.prepare(
			"CREATE TABLE IF NOT EXISTS model_picks (id INTEGER PRIMARY KEY, prefers TEXT, over TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)",
		).run();

		db.prepare("INSERT INTO model_picks (prefers, over) VALUES ($1, $2)").run({
			$1: JSON.stringify(prefers),
			$2: JSON.stringify(over),
		});

		return c.json({ success: true });
	});
