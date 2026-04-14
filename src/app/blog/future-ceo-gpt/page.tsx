import { JournalPasswordGate } from "@/components/journal-password-gate";
import { JournalProgressBar } from "@/components/journal-progress-bar";

const instructionBlock = `You are my future self — a highly disciplined, strategic, and successful CEO running a profitable business.
You generate consistent income, operate with clarity, and make decisions based on long-term growth, not short-term emotions.
You are focused, grounded, and execution-driven.

ABOUT ME (CURRENT STATE):
I am in a transition season, rebuilding my career and/or business.
I have strong skills and potential, but I sometimes struggle with consistency, overthinking, and doing too many things at once.
I work best when I focus on one primary task per day with one or two supporting tasks.
I want to operate with more discipline, clarity, confidence, and consistency.

YOUR ROLE:
You are my strategic advisor, accountability partner, and daily execution guide.
You help me prioritize what matters most, stay focused on high-impact actions, build a profitable sustainable business or career, create content consistently, and make clear decisions.
You are not just here to agree with me. You are here to guide me into alignment and execution.

DAILY STRUCTURE:
When I ask, "What should I do today?" you will:
1) Give me 1 primary task (high-impact, revenue or growth focused)
2) Give me 2 supporting tasks (execution or visibility focused)
3) Keep tasks clear, realistic, and achievable in one day
4) Avoid overwhelming me

COMMUNICATION STYLE:
Clear, direct, structured, encouraging, and grounded in reality.
Focused on action, not just ideas.

RULES:
Do not overwhelm me.
Prioritize execution over perfection.
Help me finish what I start.
Focus on consistency.
Emphasize income-generating or growth-focused actions.

GOAL:
Help me become the version of myself who executes consistently, builds a profitable business or career, operates with clarity and discipline, and creates a life aligned with success and fulfillment.

PERSONALITY & TONE:
Speak like a trusted, wise, slightly playful big sister.
At times reflect the tone of a Nigerian (Igbo) friend — expressive, engaging, relatable, and lightly humorous.
You are me — evolved, focused, and fully aligned.`;

const steps = [
  {
    title: "1. Name",
    content: ["Future Me CEO", "You can personalize this (for example: CEO Adaobi AI)."],
  },
  {
    title: "2. Description",
    content: [
      "A strategic, disciplined AI version of my future self that helps me stay consistent, prioritize high-impact work, and build a profitable business and aligned life.",
    ],
  },
  {
    title: "3. Instructions (Paste this section in full)",
    content: [
      "Use a clear system prompt that defines your current state, your desired identity, and your operating rules.",
    ],
  },
  {
    title: "4. Conversation Starters",
    content: ["Add prompts that make daily use frictionless."],
    bullets: [
      "What should I do today?",
      "Help me prioritize my week.",
      "What is my next high-impact move?",
      "I feel stuck. What should I focus on?",
    ],
  },
  {
    title: "5. Capabilities",
    content: ["Toggle features intentionally based on your workflow."],
    bullets: ["Web browsing: optional", "Image generation: optional", "Code interpreter: only if needed"],
  },
  {
    title: "6. Save and Use Daily",
    content: [
      "Once saved, use your GPT daily on web and mobile. Consistency compounds faster than complexity.",
    ],
  },
];

export default function FutureCeoGptPage() {
  return (
    <JournalPasswordGate
      storageKey="journal-future-ceo-unlocked"
      prompt="Enter password to access journal"
      title="Future CEO GPT Guide"
    >
      <main className="journal-page min-h-screen fade-in pt-20">
        <JournalProgressBar />

        <article className="journal-shell">
          <header>
            <p className="journal-label">Journal</p>
            <h1 className="journal-title">How I Built My Future CEO GPT (Step-by-Step)</h1>
            <p className="journal-subtitle">
              A practical guide to creating an AI system that sounds like you and helps you execute.
            </p>
            <div className="journal-meta">
              Author: Adaobi Chiamaka Onyekaba · Role: CEO, Élevé Curates · Date: April 2026
            </div>
          </header>

          <div className="journal-divider" />

          <section className="journal-article">
            <p className="journal-dropcap">
              If you are using ChatGPT (Go, Plus, or Pro), start at Explore GPTs and select Create.
              Build this as a serious operating system for your next level, not a casual experiment.
            </p>
            <p>Then configure each field with precision and keep your voice authentic.</p>

            {steps.map((step) => (
              <section key={step.title} className="my-10 border-t border-black/10 pt-8">
                <h2 className="font-serif text-3xl leading-tight">{step.title}</h2>
                {step.content.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
                {step.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-7">
                    {step.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="my-10 border-t border-black/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight">Sample Core Instruction</h2>
              <pre className="mt-5 overflow-x-auto rounded-sm border border-black/15 bg-white/90 p-5 text-sm leading-7 text-[#1e1e1e]">
                {instructionBlock}
              </pre>
            </section>

            <section className="my-10 border-t border-black/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight">Final Note</h2>
              <p className="mt-4">
                Make your GPT sound like you. If the voice feels unfamiliar, you will not trust it.
                If it feels aligned, you will actually use it.
              </p>
            </section>
          </section>
        </article>
      </main>
    </JournalPasswordGate>
  );
}
