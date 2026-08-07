/* ============================================================
   EDIT ZONE
   নতুন খবর যোগ করতে চাইলে শুধু NEWS_ALL অ্যারের একদম উপরে
   (শুরুতে, প্রথম আইটেম হিসেবে) একটা নতুন অবজেক্ট বসিয়ে দিন।

   - "section" ফিল্ড দিয়ে ঠিক হয় খবরটা কোন বিভাগের পেজে যাবে —
     এখন পর্যন্ত দুইটা ভ্যালু আছে: "gaming" আর "tech"
     (নতুন বিভাগ চাইলে SECTIONS অ্যারেতেও যোগ করতে হবে, নিচে দেখুন)
   - সবচেয়ে উপরের (প্রথম) gaming আইটেমটাই হোমপেজে Hero/Breaking
     হিসেবে দেখায়।
   - হোমপেজের "Latest" গ্রিডে হিরো বাদে সর্বোচ্চ PAGE_SIZE-টা
     gaming খবর দেখানো হয়।
   - এর বাইরের পুরনো খবর হোমপেজে লিস্ট হয় না — সেগুলো archive.html,
     gaming.html বা tech.html-এ পাওয়া যাবে।
   - প্রতিটা আইটেমে link ফিল্ডে আসল আর্টিকেল পেজের ফাইলনেম দিন
     (না থাকলে "#" রাখুন)।
   ============================================================ */

const SECTIONS = [
  { slug: "gaming", label: "Gaming", file: "gaming.html" },
  { slug: "tech",   label: "Tech & Hacking", file: "tech.html" }
];

const NEWS_ALL = [
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Layoffs Hit Staff at Crossfire Developer That\u2019s No Moon",
    body: "In yet another sweep of layoffs within the gaming space, Crossfire developer That\u2019s No Moon has axed an as-yet undetermined number of staff.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Call of Duty: World at War Multiplayer Nearly Had a Much Larger Focus on Vehicles",
    body: "Dataminers have discovered content that suggests Call of Duty: World at War would've had a much larger focus on vehicle combat in its multiplayer.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New Interrupt Injection Attack Can Bypass Spectre v2 Defenses on Intel and AMD CPUs",
    body: "An unprivileged Linux program can time a hardware interrupt to land in the gap between a processor sanitizing its branch predictor and the kernel using it, re-poisoning the predictor after the defense",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ThreatsDay: Odysseus RCE, Samsung One-Click Takeover, iCloud Backdoor Fight + 27 More Stories",
    body: "Apparently, opening the thing is now enough. A repo can run before the first prompt, a package can hide among hundreds, and a harmless-looking PDF can finish the job.\n\nThis week runs on cheap leverage",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Layoffs Hit Staff at Crossfire Developer That\u2019s No Moon",
    body: "In yet another sweep of layoffs within the gaming space, Crossfire developer That\u2019s No Moon has axed an as-yet undetermined number of staff.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Quake Gets Free New Campaign Co-Developed by MachineGames for Game's 30th Anniversary",
    body: "The 2021 remaster of Quake has gotten a new 19-level campaign co-developed by MachineGames in honor of the FPS' 30th anniversary.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New Zapscape KVM Flaw Could Let Privileged L1 Guest Code Escape to Linux Hosts",
    body: "Zapscape, a new Linux kernel vulnerability, could allow an attacker with kernel privileges inside an L1 guest virtual machine (VM) to escape KVM isolation and execute code on the host. The risk applie",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cisco Patches 12 SD-WAN and IOS XE Flaws, Including Three 9.8 CVSS Score Bugs",
    body: "Cisco has rolled out updates to address multiple critical security vulnerabilities impacting Catalyst SD-WAN and IOS XE Software as part of a comprehensive internal security review.\n\nThe security issu",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "BREAKING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "Sony PlayStation 6 Hardware Leaks Shake the Industry",
    body: "Rumors regarding AMD's next-gen chipset architectures for the PlayStation 6 have officially leaked today, suggesting unannounced AI upscaling capabilities designed to run native 4K games at 120 FPS smoothly.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "BREAKING",
    category: "HACKING",
    color: "var(--violet)",
    title: "North Korea-Linked npm Packages Hide Malware in Fake Ethereum Transfers",
    body: "Researchers uncovered a new supply-chain technique, dubbed NullReceiver, that conceals control-server addresses inside empty Ethereum transactions across two trojanized npm packages.",
    time: "2 hr ago",
    link: "#"
  },
  {
    section: "gaming",
    tag: "MAJOR",
    category: "MOBILE",
    color: "var(--cyan)",
    title: "PUBG Mobile World Cup 2026 Day 1 Leaderboard Shakeup",
    body: "Following an intense opening day of the $3M World Cup in Paris, Southeast Asian teams completely dominated the Miramar drops, leaving European favorites fighting hard to stay inside the top 10 rankings.",
    time: "3 hr ago",
    link: "#"
  },
  {
    section: "tech",
    tag: "MAJOR",
    category: "CYBERCRIME",
    color: "var(--amber)",
    title: "Ransom Cartel Founder Sentenced to 16 Years in Federal Prison",
    body: "A Belarusian national behind the Ransom Cartel ransomware-as-a-service operation was sentenced after conspirators extorted companies across the US and abroad between 2021 and 2023.",
    time: "5 hr ago",
    link: "#"
  },
  {
    section: "gaming",
    tag: "INDIE",
    category: "INDIE",
    color: "var(--amber)",
    title: "Pixel-Art RPG 'Echoes of the Void' Surpasses Kickstarter Goal",
    body: "Today, the highly anticipated solo-developed space rogue-like 'Echoes of the Void' achieved 400% funding on Kickstarter within just 24 hours, locking in a cross-platform console release.",
    time: "8 hr ago",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "INFRASTRUCTURE",
    color: "var(--cyan)",
    title: "Iranian-Backed Hackers Breach US Water Utilities Across Two States",
    body: "Officials confirmed Iranian-linked hackers accessed systems at water facilities in Minnesota and Michigan, causing widespread disruption though supplies themselves were not affected.",
    time: "9 hr ago",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "New Nvidia Driver Fixes Frame Spikes in Latest RPG Releases",
    body: "Game Ready Driver 560.81 is available today, August 7, 2026, optimizing performance for major upcoming August PC titles.",
    time: "10 hr ago",
    link: "#"
  },
  {
    section: "gaming",
    tag: "UPDATE",
    category: "RPG",
    color: "var(--amber)",
    title: "Lies of P: Complete Edition",
    body: "The base game along with its 'Overture DLC' releases this August, expanding the grim puppet narrative.",
    time: "12 hr ago",
    link: "lies-of-p-complete-edition.html"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "ESPORTS",
    color: "var(--violet)",
    title: "T1 Secures Dominant Victory in LCK Summer Playoffs",
    body: "Faker and the T1 roster sweep the grand finals in Seoul, solidifying their path to the upcoming World Championship.",
    time: "14 hr ago",
    link: "t1-lck-victory.html"
  },
  {
    section: "gaming",
    tag: "MAJOR",
    category: "PC",
    color: "var(--cyan)",
    title: "Valve Announces Steam Deck OLED 2 Prototype Details",
    body: "New hardware leaks suggest enhanced battery life and a higher refresh rate display arriving for next-gen portable gaming.",
    time: "16 hr ago",
    link: "steam-deck-oled2.html"
  },
  {
    section: "gaming",
    tag: "INDIE",
    category: "INDIE",
    color: "var(--amber)",
    title: "Local Bangladeshi Devs Release 'Chithi' Adventure Game",
    body: "A small indie team from Dhaka launches their narrative puzzle game centered around traditional letter writing and folklore.",
    time: "18 hr ago",
    link: "chithi-adventure-game.html"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "TECH",
    color: "var(--brand)",
    title: "AI Agent Frameworks Reach New Efficiency Peaks",
    body: "New benchmarks show autonomous agent frameworks can now operate with 40% less overhead, enabling deeper research capabilities locally.",
    time: "20 hr ago",
    link: "ai-agent-frameworks.html"
  },
  {
    section: "gaming",
    tag: "BREAKING",
    category: "GTA 6",
    color: "var(--brand)",
    title: "GTA 6 Trailer Breaks 200M Views in 24 Hours",
    body: "Rockstar confirms the 2026 launch window as the reveal trailer shatters every prior record for a single-day view count across platforms.",
    time: "22 hr ago",
    link: "gta6.html"
  },
  {
    section: "gaming",
    category: "VALORANT",
    color: "var(--cyan)",
    title: "New Valorant Agent Teased for Next Season",
    body: "A controller-class agent with gravity-bending abilities is set to reshape map control in competitive play.",
    time: "1 day ago",
    link: "valorant-agent.html"
  },
  {
    section: "gaming",
    category: "CYBERPUNK",
    color: "var(--violet)",
    title: "Cyberpunk Expansion: \"Phantom City\" DLC",
    body: "A full redesign of Night City's districts arrives this winter, alongside a rebalanced skill tree.",
    time: "1 day ago",
    link: "cyberpunk-dlc.html"
  },
  {
    section: "gaming",
    category: "UPDATE",
    color: "var(--amber)",
    title: "Fortnite Chapter Update Adds New Biome",
    body: "A snow-covered zone brings fresh loot pools and a limited-time mode to the island.",
    time: "1 day ago",
    link: "fortnite-update.html"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "CONSOLE",
    color: "var(--brand)",
    title: "Nintendo Switch 2 & Elden Ring Craze",
    body: "August 2026 is stacked with the launch of Elden Ring: Tarnished Edition on Nintendo Switch 2, breaking the usual summer drought.",
    time: "2 days ago",
    link: "nintendo-switch-2.html"
  },
  {
    section: "gaming",
    tag: "MAJOR",
    category: "INDUSTRY",
    color: "var(--cyan)",
    title: "Xbox Division Restructuring",
    body: "A major reset for Microsoft's Xbox division, shifting back toward console exclusivity and structural optimization.",
    time: "2 days ago",
    link: "xbox-restructuring.html"
  }
];

const LAUNCHES = [
  { game: "Marvel Tōkon: Fighting Souls", platform: "PS5, PC", req: "Day 1 Server Patches Live" },
  { game: "The Sinking City 2", platform: "PC, PS5, Xbox Series X/S", req: "Aug 18, 2026" },
  { game: "Resonance: A Plague Tale Legacy", platform: "PC, Xbox Series X/S, PS5", req: "Aug 27, 2026" },
  { game: "Grand Theft Auto VI (GTA 6)", platform: "PS5, Xbox Series X/S", req: "Pre-orders opening soon" }
];

const PAGE_SIZE = 6; // হোমপেজে হিরো বাদে "Latest" গ্রিডে (gaming বিভাগ থেকে) একসাথে কতগুলো খবর দেখাবে
/* ============================================================ */
