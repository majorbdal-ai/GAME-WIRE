const NEWS_ALL = [
  {
    tag: "BREAKING",
    category: "FIGHTER",
    color: "var(--brand)",
    title: "Marvel Tokon: Fighting Souls Officially Launches Today",
    body: "The highly anticipated anime-style fighter 'Marvel Tokon: Fighting Souls' drops today on PS5 and PC, featuring an explosive roster, smooth rollback netcode, and tactical tag-team mechanics.",
    time: "just now",
    link: "#"
  },
  {
    tag: "MAJOR",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "PlayStation 5 Pro Details Finally Revealed",
    body: "Sony officially announces specs for the PS5 Pro today, August 6, 2026, promising 4K gaming at 120FPS for titles like GTA 6.",
    time: "2 hr ago",
    link: "#"
  },
  {
    tag: "UPDATE",
    category: "ESPORTS",
    color: "var(--violet)",
    title: "Valorant Patch Notes: Duelist Meta Receives Massive Shakeup",
    body: "Riot Games releases a surprising mid-summer balance patch, introducing major ability reworks for key Duelists to diversify team compositions.",
    time: "6 hr ago",
    link: "#"
  },
  {
    tag: "INDIE",
    category: "INDIE",
    color: "var(--amber)",
    title: "Indie Sensation 'Tactical Toad' Surpasses 1 Million Copies sold",
    body: "The cozy turn-based strategy indie game 'Tactical Toad' hits a massive milestone today, proving that small-studio passion projects are dominating the 2026 gaming market.",
    time: "8 hr ago",
    link: "#"
  },
  {
    tag: "TRENDING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "Nintendo Switch 2 & Elden Ring Craze",
    body: "August 2026 is stacked with the launch of Elden Ring: Tarnished Edition on Nintendo Switch 2, breaking the usual summer drought.",
    time: "10 hr ago",
    link: "nintendo-switch-2.html"
  },
  {
    tag: "UPDATE",
    category: "RPG",
    color: "var(--amber)",
    title: "Lies of P: Complete Edition",
    body: "The base game along with its 'Overture DLC' releases this August, expanding the grim puppet narrative.",
    time: "12 hr ago",
    link: "lies-of-p-complete-edition.html"
  },
  {
    tag: "TRENDING",
    category: "ESPORTS",
    color: "var(--violet)",
    title: "T1 Secures Dominant Victory in LCK Summer Playoffs",
    body: "Faker and the T1 roster sweep the grand finals in Seoul, solidifying their path to the upcoming World Championship.",
    time: "14 hr ago",
    link: "t1-lck-victory.html"
  },
  {
    tag: "MAJOR",
    category: "PC",
    color: "var(--cyan)",
    title: "Valve Announces Steam Deck OLED 2 Prototype Details",
    body: "New hardware leaks suggest enhanced battery life and a higher refresh rate display arriving for next-gen portable gaming.",
    time: "16 hr ago",
    link: "steam-deck-oled2.html"
  },
  {
    tag: "INDIE",
    category: "INDIE",
    color: "var(--amber)",
    title: "Local Bangladeshi Devs Release 'Chithi' Adventure Game",
    body: "A small indie team from Dhaka launches their narrative puzzle game centered around traditional letter writing and folklore.",
    time: "18 hr ago",
    link: "chithi-adventure-game.html"
  },
  {
    tag: "TRENDING",
    category: "TECH",
    color: "var(--brand)",
    title: "AI Agent Frameworks Reach New Efficiency Peaks",
    body: "New benchmarks show autonomous agent frameworks can now operate with 40% less overhead, enabling deeper research capabilities locally.",
    time: "20 hr ago",
    link: "ai-agent-frameworks.html"
  },
  {
    tag: "BREAKING",
    category: "GTA 6",
    color: "var(--brand)",
    title: "GTA 6 Trailer Breaks 200M Views in 24 Hours",
    body: "Rockstar confirms the 2026 launch window as the reveal trailer shatters every prior record for a single-day view count across platforms.",
    time: "22 hr ago",
    link: "gta6.html"
  },
  {
    category: "VALORANT",
    color: "var(--cyan)",
    title: "New Valorant Agent Teased for Next Season",
    body: "A controller-class agent with gravity-bending abilities is set to reshape map control in competitive play.",
    time: "1 day ago",
    link: "valorant-agent.html"
  },
  {
    category: "CYBERPUNK",
    color: "var(--violet)",
    title: "Cyberpunk Expansion: \"Phantom City\" DLC",
    body: "A full redesign of Night City's districts arrives this winter, alongside a rebalanced skill tree.",
    time: "1 day ago",
    link: "cyberpunk-dlc.html"
  },
  {
    category: "UPDATE",
    color: "var(--amber)",
    title: "Fortnite Chapter Update Adds New Biome",
    body: "A snow-covered zone brings fresh loot pools and a limited-time mode to the island.",
    time: "1 day ago",
    link: "fortnite-update.html"
  }
];

const LAUNCHES = [
  { game: "Marvel Tokon: Fighting Souls", platform: "PS5, PC", req: "Aug 6, 2026" },
  { game: "The Sinking City 2", platform: "PC, PS5, Xbox Series X/S", req: "Aug 18, 2026" },
  { game: "Resonance: A Plague Tale Legacy", platform: "PC, Xbox Series, PS5", req: "Aug 27, 2026" },
  { game: "Metal Gear Solid Master Collection Vol. 2", platform: "Switch 2, PC, PS5", req: "Aug 27, 2026" }
];

const PAGE_SIZE = 6;
