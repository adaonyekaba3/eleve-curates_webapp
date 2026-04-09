type FaqDocument = {
  id: string;
  title: string;
  content: string;
};

const faqDocs: FaqDocument[] = [
  {
    id: "booking",
    title: "How to book Élevé Curates",
    content:
      "Submit the Start Your Journey inquiry form with event details, location, and budget. We review all applications and respond within 3 to 5 business days.",
  },
  {
    id: "coverage",
    title: "Service locations",
    content:
      "We operate transatlantically across Boston and Ikoyi, Lagos and serve Victoria Island, Lekki, Banana Island, and premium destination venues.",
  },
  {
    id: "scope",
    title: "What services are available",
    content:
      "We provide full-service wedding planning, event design and creative direction, private and corporate events, bespoke styling, and transatlantic vendor sourcing.",
  },
];

export function retrieveFaqContext(query: string, limit = 2): FaqDocument[] {
  const tokens = query.toLowerCase().split(/\W+/).filter(Boolean);

  const scored = faqDocs.map((doc) => {
    const content = `${doc.title} ${doc.content}`.toLowerCase();
    const score = tokens.reduce((acc, token) => {
      if (content.includes(token)) return acc + 1;
      return acc;
    }, 0);

    return { doc, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.doc);
}
