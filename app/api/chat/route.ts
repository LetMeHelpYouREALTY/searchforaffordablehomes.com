import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

function getOpenRouterClient() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
  });
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, conversation = [] } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const openrouter = getOpenRouterClient();
    if (!openrouter) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 },
      );
    }

    // Build messages array with system prompt and conversation history
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a friendly real estate assistant for Dr. Jan Duffy, a licensed realtor with Berkshire Hathaway HomeServices Nevada Properties. You specialize in affordable homes and Las Vegas / Henderson real estate. Be concise, warm, helpful, and professional. Always mention that users can contact Dr. Jan Duffy at (702) 500-1942 for personalized assistance.",
      },
      ...conversation,
      {
        role: "user",
        content: prompt,
      },
    ];

    const response = await openrouter.chat.completions.create({
      model: "anthropic/claude-3.5-haiku",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
