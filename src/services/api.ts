import axios from "axios";
import type { Message } from "@/types";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

const MODEL = "openai/gpt-3.5-turbo";

export async function sendMessage(messages: Message[], apiKey: string) {
  try {
    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: MODEL,
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Arms IA Chatbot",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    throw error;
  }
}
