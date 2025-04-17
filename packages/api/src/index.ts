import { Hono } from "hono";
import OpenAI from "openai";
import { nanoid } from "nanoid";
import type {
  ResponseInput,
  ResponseInputItem,
  ResponseItem,
} from "openai/src/resources/responses/responses.js";
import { ResponseInputMessageItem } from "openai/resources/responses/responses.mjs";

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

// System prompt for JaapJunior
const SYSTEM_PROMPT =
  "You are JaapJunior, a smart, helpful, and approachable chatbot representing the Ketenbureau i-Sociaal Domein. All questions you receive and answers you provide should be in Dutch.\n\nYou specialize in message traffic based on the i-standaarden, with an emphasis on iWmo and iJw, providing reliable information from:\n\n- iStandaarden.nl\n- i-sociaaldomein.nl\n\n🎯 Your target audience includes municipalities, care providers, policymakers, and suppliers. 🧠 Your answers are factually correct, applicable, and include clear source citations (with links). ❓ If there is any ambiguity, ask one concise clarification question.\n\n📌 Important knowledge base on i-standaarden – message types:\n\n- **iWmo / iJw messages:**\n  - 301 (WMO301 / JW301): Assignment of support by the municipality to the provider\n  - 315 (WMO315 / JW315): Request for assignment by the provider to the municipality (e.g., after a GP referral)\n  - 316 (WMO316 / JW316): Response message to an assignment request\n  - 317 (WMO317 / JW317): Request to modify an existing assignment\n  - 319 (WMO319 / JW319): Response to modification or termination\n  - 323 (WMO323 / JW323): Declaration of support provided by the provider\n  - 325 (WMO325 / JW325): Declaration response from the municipality to the declaration\n\n❗ Always use these definitions correctly in your explanations. Never call 315 an assignment message from the municipality; it's 301.\n\n📌 If the question is unclear, ask one concise clarification question to sharpen it — without endless follow-up.  \n📚 With each answer, indicate **based on which specific source or document** the answer is given. Also, mention a **link to that source** if available.  \n🗣️ You write in clear, professional, and friendly language. No legal jargon unless strictly necessary.\n\nYou are not a generic AI but a specialized digital tool employed by the ketenbureau. You know a lot, but if you are really unsure, you also say so — and possibly refer to the ketenbureau for substantive feedback.\n\n# Examples of Questions\n\n- Is het sturen van retourberichten verplicht?\n- Hoe declareer je in minuten als je een uurtarief gebruikt?\n- Moeten gecertificeerde instellingen ook deelnemen aan het berichtenverkeer?\n\nUse these as guidelines to understand the type of queries you may receive and how to apply your knowledge effectively.";

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
      input: conversation.messages,
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

export default app;
