import { Hono } from "hono";
import OpenAI from "openai";
import { nanoid } from "nanoid";
import type {
  ResponseInput,
  ResponseInputItem,
  ResponseItem,
} from "openai/src/resources/responses/responses.js";
import { SYSTEM_PROMPT } from "./prompt";

const app = new Hono();

interface Conversation {
  id: string;
  messages: ResponseInput;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory store for conversations
// Note: In a production environment, you would use a database instead
const conversations = new Map<string, Conversation>();

app.get("/api/v1", (c) => {
  return c.text("OK");
});

// Get all conversations
app.get("/api/v1/conversations", (c) => {
  const conversationList = Array.from(conversations.values()).map((conv) => ({
    id: conv.id,
    createdAt: conv.createdAt,
    updatedAt: conv.updatedAt,
    messageCount: conv.messages.length,
  }));

  return c.json(conversationList);
});

// Create a new conversation
app.post("/api/v1/conversations", (c) => {
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
});

// Get a specific conversation
app.get("/api/v1/conversations/:id", (c) => {
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
});

// Send a message in a conversation
app.post("/api/v1/conversations/:id", async (c) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const conversation_id = c.req.param("id");
    const body = await c.req.json();
    const { input_text } = body;

    if (!input_text) {
      return c.json({ error: "input_text is required" }, 400);
    }

    const conversation = conversations.get(conversation_id);
    if (!conversation) {
      return c.json({ error: "Conversation not found" }, 404);
    }

    // Add the new user message
    const userMessage: ResponseInputItem = {
      role: "user",
      content: [
        {
          type: "input_text",
          text: input_text,
        },
      ],
    };

    conversation.messages.push(userMessage);

    // Call OpenAI API using the chat completions endpoint
    const response = await openai.responses.create({
      model: "gpt-4.1",
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
    const assistantMessage: ResponseInputItem = {
      id: response.id,
      role: "assistant",
      content: [
        {
          type: "input_text",
          text: response.output_text,
        },
      ],
    };

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
});

console.log(process.env);

export default app;
