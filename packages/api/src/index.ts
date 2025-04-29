import { Hono } from "hono";
import { validator } from "hono-openapi/valibot";
import { except } from "hono/combine";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import * as jose from "jose";
import { nanoid } from "nanoid";
import OpenAI from "openai";
import type {
	ResponseInput,
	ResponseInputItem,
} from "openai/src/resources/responses/responses.js";
import * as v from "valibot";
import { SYSTEM_PROMPT } from "./prompt.js";

interface Conversation {
	id: string;
	messages: ResponseInput;
	createdAt: Date;
	updatedAt: Date;
}

type Variables = JwtVariables;

function getEnvOrThrow(name: string) {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Environment variable ${name} is not set`);
	}
	return value;
}

const sendMessageSchema = v.object({
	input_text: v.string(),
	model: v.optional(v.union([v.literal("4.1"), v.literal("4.1-nano")])),
});

// In-memory store for conversations
// Note: In a production environment, you would use a database instead
const conversations = new Map<string, Conversation>();

const app = new Hono<{ Variables: Variables }>()
	.use(
		"/api/v1/*",
		except(
			"/api/v1/auth",
			jwt({
				secret: getEnvOrThrow("JWT_SECRET"),
			}),
		),
	)

	.get("/api/v1", (c) => {
		return c.text("OK");
	})

	.post("/api/v1/auth", async (c) => {
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

	// Get all conversations
	.get("/api/v1/conversations", (c) => {
		const conversationList = Array.from(conversations.values()).map((conv) => ({
			id: conv.id,
			createdAt: conv.createdAt,
			updatedAt: conv.updatedAt,
			messageCount: conv.messages.length,
		}));

		return c.json(conversationList);
	})

	// Create a new conversation
	.post("/api/v1/conversations", (c) => {
		const id = nanoid();
		const now = new Date();

		const conversation: Conversation = {
			id,
			messages: [
				{
					role: "system",
					content: [
						{
							type: "input_text",
							text: SYSTEM_PROMPT,
						},
					],
				},
			],
			createdAt: now,
			updatedAt: now,
		};

		conversations.set(id, conversation);

		return c.json({ id, createdAt: now });
	})

	// Get a specific conversation
	.get("/api/v1/conversations/:id", (c) => {
		const id = c.req.param("id");
		const conversation = conversations.get(id);

		if (!conversation) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		return c.json({
			...conversation,
			messages: conversation.messages.filter(
				(m) => !("role" in m) || m.role !== "system",
			),
		});
	})

	// Send a message in a conversation
	.post(
		"/api/v1/conversations/:id",
		validator("json", sendMessageSchema),
		async (c) => {
			try {
				const openai = new OpenAI({
					apiKey: process.env.OPENAI_API_KEY,
				});

				const conversationId = c.req.param("id");
				const { input_text: inputText, model: selectedModel } =
					c.req.valid("json");

				if (!inputText) {
					return c.json({ error: "input_text is required" }, 400);
				}

				const conversation = conversations.get(conversationId);
				if (!conversation) {
					return c.json({ error: "Conversation not found" }, 404);
				}

				// Add the new user message
				const userMessage: ResponseInputItem = {
					role: "user",
					content: [
						{
							type: "input_text",
							text: inputText,
						},
					],
				};

				conversation.messages.push(userMessage);

				const model = selectedModel === "4.1" ? "gpt-4.1" : "gpt-4.1-nano";

				// Call OpenAI API using the chat completions endpoint
				const response = await openai.responses.create({
					model,
					input: conversation.messages.map((message) => {
						if ("id" in message) {
							message.id = message.id?.replace("resp_", "msg_");
						}
						return message;
					}),
					text: {
						format: {
							type: "text",
						},
					},
					reasoning: {},
					tools: [
						{
							type: "file_search",
							vector_store_ids: ["vs_68011edd316c8191b7725b9391f04a78"],
						},
					],
					temperature: 1,
					max_output_tokens: 2048,
					top_p: 1,
					store: true,
				});

				// Add the assistant response to the conversation
				const assistantMessage = response.output.find(
					(out) => out.type === "message",
				);

				if (!assistantMessage) {
					throw new Error("No assistant message found in response");
				}

				conversation.messages.push(assistantMessage);
				conversation.updatedAt = new Date();

				// Return the response with conversation details
				return c.json({
					...response,
					conversation_id: conversation.id,
					message_count: conversation.messages.length - 1,
				});
			} catch (error: unknown) {
				console.error("Error calling OpenAI API:", error);
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				return c.json({ error: errorMessage }, 500);
			}
		},
	);

export type AppType = typeof app;
export default app;
