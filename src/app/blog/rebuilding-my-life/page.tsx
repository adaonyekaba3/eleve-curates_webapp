import Link from "next/link";
import Image from "next/image";
import { JournalPasswordGate } from "@/components/journal-password-gate";
import { JournalProgressBar } from "@/components/journal-progress-bar";

const articleParagraphs = [
  "My name is Adaobi Chiamaka. In Igbo, it means: 'First daughter — God is beautiful.' And my life, in ways I am still learning to articulate, is living proof of that.",
  "Before everything changed, I spent over three years at American Express as a Backend Software Engineer and Quality Engineering Specialist. I built real systems — microservices, APIs, data pipelines, enterprise infrastructure. Java Spring, Snowflake, Spark, Hadoop. On paper, I was thriving. I was competent. I was accomplished. But in my spirit, I knew something was not right. From day one, there was a quiet misalignment I could not ignore — like I had been placed somewhere I was capable of succeeding, but not necessarily called to stay. Eventually, life caught up with that truth.",
  "But my unraveling did not begin with my layoff. It began with loss.",
  "In April 2025, I lost my grandmother — Mama Akenyi. She was 96 years old, the strongest, most faithful, most gracious woman I have ever known. She raised generations of us — children, grandchildren, spread across the United States and the United Kingdom — and still found time and energy to call each of us. Constantly. Checking in. Praying. Loving. Even at 96, she was still pouring into everyone around her.",
  "She lived simply, but intentionally. She ate incredibly well — a life rooted in fruits, vegetables, and nourishment that sustained her strength well into old age. She did not just talk about health. She embodied it.",
  "On her final day, she said something that will stay with me for the rest of my life: 'Give me my shoes — I am ready to go.' She knew God like that. She knew she was going home. That level of certainty, that depth of relationship with God, marked me in a way I am still uncovering.",
  "My grandmother also taught me something else that has stayed with me just as deeply: your health is one of the most important things you will ever be given, and it is your responsibility to preserve and protect it. Alongside faith, it is everything.",
  "She walked miles every day — sometimes with me as a child, sometimes on her own — modeling discipline, movement, and care for the body God gave her.",
  "And today, I carry that with me.",
  "When I close my eyes, I can still see her smile — full, warm, radiant. The kind of smile that made you feel seen, safe, and loved without her saying a word.",
  "We — her children and grandchildren — carry that smile with us now. In our lives. In our choices. In the way we keep going.",
  "I live with PCOS — navigating hormonal skin challenges like hyperpigmentation and scarring — and for a long time, that journey required patience, discipline, and grace with myself. But I made a decision: I would not abandon my body.",
  "Since 2024, I have been in the best shape of my life — 135 pounds, strong, consistent, and grounded in routines that support my health.",
  "And I say this with full conviction: I am never going back to a life led by stress, imbalance, and neglect. That version of me no longer exists.",
  "But grief did not end with her passing.",
  "In January 2026, she was laid to rest in our village in Imo State, beside my grandfather — a civil engineer whose work helped build the Holland Tunnel and created a pathway for our family life abroad. My entire family gathered to honor her life.",
  "And I was not there.",
  "I could not afford the trip. I did not have any time off left. So I watched her burial on YouTube. I watched my father lay his mother to rest through a screen. And something in me felt suspended. Like I could not fully breathe. Like I could not fully move forward. Like life was continuing, but I had not caught up to it yet.",
  "And still, somehow, God was moving.",
  "That same month, I bought my first car — in full, in cash. A reliable Toyota Corolla. No loan. No pressure. I remember sitting with that moment and realizing that even in grief, even in uncertainty, I was being guided. Protected from decisions I was not ready to carry.",
  "Then February came, and I lost my job.",
  "And I did not cry. Not once. Instead, I worshipped.",
  "Because in the same moment that I lost what I thought was stability, I received provision. A severance package. Financial runway. Support that made no logical sense in a moment like that. It did not feel like destruction. It felt like release.",
  "Shortly after, my mom asked me a simple question: 'Do you want to go to Lagos for a wedding?'",
  "I had not been back to Nigeria in sixteen years.",
  "Sixteen.",
  "Saying it out loud did not even feel real. Because as a child, Nigeria was a constant in my life. And then suddenly, it was not. Life in America took over. Responsibilities shifted. Finances changed. And without realizing it, I had grown up feeling disconnected from a part of myself I deeply missed — my culture, my environment, my sense of home.",
  "So I said yes.",
  "In March 2026, I went to Lagos. I stayed in Ikoyi with my cousin — one of the most brilliant, grounded, and hardworking people I know — and what I experienced there changed me in ways I am still processing.",
  "I came back to life.",
  "I felt aligned. I felt replenished. And I laughed again — fully. The kind of laughter that comes from your body, your soul, your mind, your spirit all at once.",
  "I reconnected with one of my closest friends from Boston. We had not spoken in months. She had not been back to Lagos in over fifteen years either. And somehow, we found our way back to each other there. We danced. We went to the beach. We talked like no time had passed. We remembered why we are still friends in our 30s.",
  "My family restored my faith. But Lagos restored my joy.",
  "Being in that environment — surrounded by warmth, excellence, ambition, and love — did something to me. It opened something in me that had been closed for a long time.",
  "When I returned, I knew I could not go back to who I was before. So I did not.",
  "After 48 hours of rest, I did something that would quietly change the trajectory of my life.",
  "I built an AI version of my future self.",
  "Not as a novelty. Not as an experiment. But as a system — one that could hold structure when my emotions fluctuated, and clarity when my circumstances felt uncertain. But more importantly, I made it sound like me. Like the voice in my head that tells me the truth. Like a Nigerian big sister who will encourage you, correct you, and still laugh with you.",
  "Because if it does not feel like you, you will not use it.",
  "What I created was not just a tool. It was a mirror — a reflection of the version of myself who already had the discipline, clarity, and consistency I was trying to build. And I gave her instructions. Not loosely. Not vaguely. But with intention.",
  "I let go of the version of myself that no longer fit — including my wardrobe. I released most of my clothes from my previous life, keeping only a few structured pieces that represented a season I still respect. But everything else, I had outgrown.",
  "In Lagos, I experienced a different standard. Nigerian tailoring with warm brands like Nancy Stitches Atelier. Nigerian and European brands. The craftsmanship, the intentionality, the cultural richness — it shifted how I saw myself. Luxury, for me, became alignment: how you feel when you show up in your own life.",
  "And I chose to rebuild from that place.",
  "Not just in how I dressed — but in how I cared for myself. I leaned into full-body care in a way I had not before. Skincare. Haircare. Massage therapy — lymphatic drainage and hammam spa treatments.",
  "I invested in myself without guilt.",
  "By the time I returned to the United States on March 31st, I was not the same woman who had left.",
  "I came back transformed. Aligned. Clear. No longer afraid. I came back with plans. With vision. With direction that I know God has instructed me to follow.",
  "And even now, as I build, as I navigate challenges, as I stretch into new levels — happiness remains at the center. Not perfection. Happiness.",
  "After my layoff, I built something that helped me hold onto that clarity: an AI version of my future self. A version of me who executes consistently, builds strategically, generates income, and moves with clarity.",
  "And slowly, everything began to shift.",
  "I booked my first clients. I built international relationships. I created momentum. But more than anything, I became someone new.",
  "Today, I am building Élevé Curates — a luxury event and bespoke styling brand rooted in faith, excellence, and cultural authenticity.",
  "I am building a life that reflects who I truly am.",
  "In Igbo, we say: Chukwujekwu. God has the final say. And in my life, He always will.",
  "— Adaobi Chiamaka Onyekaba, CEO, Élevé Curates",
];

export default function RebuildingMyLifePage() {
  return (
    <JournalPasswordGate
      storageKey="journal-rebuilding-unlocked"
      prompt="Enter password to access journal"
      title="Rebuilding My Life"
    >
      <main className="journal-page min-h-screen fade-in pt-20">
        <JournalProgressBar />

        <article className="journal-shell">
          <header>
            <p className="journal-label">Journal</p>
            <h1 className="journal-title">
              How I Rebuilt My Life, Identity, and Business After Loss, Layoff, and Learning to Trust Again
            </h1>
            <p className="journal-subtitle">
              A personal reflection on grief, restoration, and rebuilding from alignment.
            </p>
            <div className="journal-meta">
              Author: Adaobi Onyekaba · Role: CEO, Élevé Curates · Date: April 2026
         
            </div>
            <div className="mt-8 overflow-hidden rounded-sm border border-black/10 bg-[#ece7dc]">
              <Image
                src="/images/speema-picture.JPG"
                alt="Adaobi Chiamaka Onyekaba in an editorial portrait"
                width={1600}
                height={2000}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </header>

          <div className="journal-divider" />

          <section className="journal-article">
            {articleParagraphs.slice(0, 36).map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "journal-dropcap" : ""}>
                {paragraph}
              </p>
            ))}

            <div className="journal-divider" />

            <aside className="journal-callout">
              <p className="journal-label">Linked Guide</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">
                Build Your Future CEO System
              </h2>
              <p className="mt-3 text-[16px] leading-7 text-[#3f3d39]">
                Create your own AI version of yourself with practical instructions that support focus, consistency, and high-impact execution.
              </p>
              <Link
                href="/blog/future-ceo-gpt"
                className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f8f5ef] transition hover:bg-[#202020]"
              >
                View Step-by-Step Guide
              </Link>
            </aside>

            {articleParagraphs.slice(36).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <footer className="mt-14 border-t border-black/10 pt-8">
            <p className="font-serif text-2xl leading-snug text-[#191919] md:text-3xl">
              If this resonated with you, you are not behind. You are rebuilding.
            </p>
            <Link
              href="/inquire"
              className="mt-6 inline-flex rounded-full border border-black px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-[#f8f5ef]"
            >
              Work With Élevé Curates
            </Link>
          </footer>
        </article>
      </main>
    </JournalPasswordGate>
  );
}
