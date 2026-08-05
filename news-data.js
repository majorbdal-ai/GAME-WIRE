/* ============================================================
   EDIT ZONE
   নতুন খবর যোগ করতে চাইলে শুধু NEWS_ALL অ্যারের একদম উপরে
   (শুরুতে, প্রথম আইটেম হিসেবে) একটা নতুন অবজেক্ট বসিয়ে দিন।

   - সবচেয়ে উপরের (প্রথম) আইটেমটাই সবসময় স্বয়ংক্রিয়ভাবে
     Hero/Breaking হিসেবে দেখাবে।
   - হোমপেজের "Latest" গ্রিডে হিরো বাদে সর্বোচ্চ PAGE_SIZE-টা
     খবর দেখানো হয় (সবচেয়ে নতুনগুলো)।
   - এর বাইরের পুরনো খবরগুলো হোমপেজে লিস্ট হয় না — সেগুলো শুধু
     archive.html পেজে নাম দিয়ে সার্চ করলে খুঁজে পাওয়া যাবে।
   - প্রতিটা আইটেমে link ফিল্ডে আসল আর্টিকেল পেজের ফাইলনেম দিন,
     যাতে হোমপেজ ও আর্কাইভ দুই জায়গা থেকেই সেই পেজ খোলা যায়।
   ============================================================ */
const NEWS_ALL = [
  {
    tag: "TRENDING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "Nintendo Switch 2 & Elden Ring Craze",
    body: "August 2026 is stacked with Elden Ring: Tarnished Edition launching on Nintendo Switch 2, breaking the usual summer drought.",
    time: "just now",
    link: "#"
  },
  {
    tag: "MAJOR",
    category: "INDUSTRY",
    color: "var(--cyan)",
    title: "Xbox Division Restructuring",
    body: "A major reset of Microsoft's Xbox division, shifting back toward console exclusivity and structural optimization.",
    time: "just now",
    link: "#"
  },
  {
    tag: "UPDATE",
    category: "RPG",
    color: "var(--amber)",
    title: "Lies of P: Complete Edition",
    body: "The base game bundled with its 'Overture DLC', releasing this August.",
    time: "just now",
    link: "#"
  },
  {
    tag: "TRENDING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "Nintendo Switch 2 & Elden Ring Craze",
    body: "August 2026 is stacked with the launch of Elden Ring: Tarnished Edition on Nintendo Switch 2, breaking the usual summer drought.",
    time: "just now",
    link: "nintendo-switch-2.html"
  },
  {
    tag: "UPDATE",
    category: "RPG",
    color: "var(--amber)",
    title: "Lies of P: Complete Edition",
    body: "The base game along with its 'Overture DLC' releases this August, expanding the grim puppet narrative.",
    time: "4 hr ago",
    link: "lies-of-p-complete-edition.html"
  },
  {
    tag: "TRENDING",
    category: "ESPORTS",
    color: "var(--violet)",
    title: "T1 Secures Dominant Victory in LCK Summer Playoffs",
    body: "Faker and the T1 roster sweep the grand finals in Seoul, solidifying their path to the upcoming World Championship.",
    time: "6 hr ago",
    link: "t1-lck-victory.html"
  },
  {
    tag: "MAJOR",
    category: "PC",
    color: "var(--cyan)",
    title: "Valve Announces Steam Deck OLED 2 Prototype Details",
    body: "New hardware leaks suggest enhanced battery life and a higher refresh rate display arriving for next-gen portable gaming.",
    time: "8 hr ago",
    link: "steam-deck-oled2.html"
  },
  {
    tag: "INDIE",
    category: "INDIE",
    color: "var(--amber)",
    title: "Local Bangladeshi Devs Release 'Chithi' Adventure Game",
    body: "A small indie team from Dhaka launches their narrative puzzle game centered around traditional letter writing and folklore.",
    time: "10 hr ago",
    link: "chithi-adventure-game.html"
  },
  {
    tag: "TRENDING",
    category: "TECH",
    color: "var(--brand)",
    title: "AI Agent Frameworks Reach New Efficiency Peaks",
    body: "New benchmarks show autonomous agent frameworks can now operate with 40% less overhead, enabling deeper research capabilities locally.",
    time: "12 hr ago",
    link: "ai-agent-frameworks.html"
  },
  {
    tag: "BREAKING",
    category: "GTA 6",
    color: "var(--brand)",
    title: "GTA 6 Trailer Breaks 200M Views in 24 Hours",
    body: "Rockstar confirms the 2026 launch window as the reveal trailer shatters every prior record for a single-day view count across platforms.",
    time: "14 hr ago",
    link: "gta6.html"
  },
  {
    category: "VALORANT",
    color: "var(--cyan)",
    title: "New Valorant Agent Teased for Next Season",
    body: "A controller-class agent with gravity-bending abilities is set to reshape map control in competitive play.",
    time: "16 hr ago",
    link: "valorant-agent.html"
  },
  {
    category: "CYBERPUNK",
    color: "var(--violet)",
    title: "Cyberpunk Expansion: \"Phantom City\" DLC",
    body: "A full redesign of Night City's districts arrives this winter, alongside a rebalanced skill tree.",
    time: "41 min ago",
    link: "cyberpunk-dlc.html"
  },
  {
    category: "UPDATE",
    color: "var(--amber)",
    title: "Fortnite Chapter Update Adds New Biome",
    body: "A snow-covered zone brings fresh loot pools and a limited-time mode to the island.",
    time: "1 hr ago",
    link: "fortnite-update.html"
  }
];

const LAUNCHES = [
  { game: "Grand Theft Auto 6", platform: "Console", req: "Nov 2026" },
  { game: "Resonance: A Plague Tale Legacy", platform: "PC, Xbox Series, PS5", req: "Aug 27, 2026" },
  { game: "The Sinking City 2", platform: "PC, PS5, Xbox Series", req: "Aug 18, 2026" },
  { game: "Marvel Tokon: Fighting Souls", platform: "PS5, PC", req: "Aug 6, 2026" },
  { game: "Marvel Tokon: Fighting Souls", platform: "PS5 / PC", req: "Aug 6, 2026" },
  { game: "The Sinking City 2", platform: "PC / PS5 / Xbox", req: "Aug 18, 2026" }
];

const PAGE_SIZE = 6; // হোমপেজে হিরো বাদে "Latest" গ্রিডে একসাথে কতগুলো খবর দেখাবে
/* ============================================================ */
