import { NextResponse } from "next/server";
import { z } from "zod";
import { retrieveFaqContext } from "@/lib/rag";

const ragQuerySchema = z.object({
  query: z.string().min(3).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = ragQuerySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid query payload" }, { status: 400 });
    }

    const context = retrieveFaqContext(parsed.data.query);
    return NextResponse.json({ context });
  } catch (error) {
    console.error("RAG retrieval failed", error);
    return NextResponse.json({ error: "RAG retrieval failed" }, { status: 500 });
  }
}
