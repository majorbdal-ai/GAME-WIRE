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
    title: "IGN's Top-Reviewed Nintendo Switch 2 Games",
    body: "Not all Nintendo games are created equal. Here are the 10 best Nintendo games we've played in the Switch 2 generation.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Join Us: Watch 11 Minutes of Exclusive Gameplay from the Upcoming Cult Simulator | gamescom 2026",
    body: "Wolf Haus Games revealed 11 minutes of gameplay for Join Us at gamescom 2026, alongside a PS5 announcement and a trailer featuring real-life former cult members.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Dragon\u2019s Dogma 2: Dark Arisen Will Send You On a Chilly Loot Grind | gamescom 2026",
    body: "Dragon's Dogma 2's Dark Arisen expansion adds a whole new region with clever winter weather effects, an old-but-new loot grind, and... a dragon that vomits zombies. We're so back.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Pok\u00e9mon Company Looks to Smart Device Integrations as Future Targets",
    body: "President and CEO of The Pok\u00e9mon Company, Tsunekazu Ishihara, shared a small bit of insight about the company\u2019s possible future plans with wearable technology during a panel discussion at the inaugura",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Indie Dev Posts Video Reporting Stolen Laptops at gamescom as CD Projekt Red and More Step in to Help",
    body: "Ryan Laley, the solo indie developer behind upcoming asymmetrical horror game Mimic, has shared a video confirming his gamescom was \"cut short\" after he and other developers had their laptops stolen.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New SLEEPWALKER Backdoor Waits for One Crafted Packet, Then Runs Its Own Bytecode",
    body: "An independent malware researcher has documented a previously unreported Windows backdoor, dubbed SLEEPWALKER, that stays inert in memory until a specifically crafted network packet reaches the machin",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Everything We Learnt about Silver Palace at gamescom",
    body: "Everything We Learnt about Silver Palace at gamescom",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Unpatched Kaltura mwEmbed Flaws Could Let Remote Attackers Read Files and Run Code",
    body: "The CERT Coordination Center (CERT/CC) has disclosed two unpatched vulnerabilities in Kaltura's HTML5 video player library that allow a remote, unauthenticated attacker to read arbitrary files from a ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Imagine the SOC Without a Queue: From Alert Backlog to AI Hypothesis Engine",
    body: "The SOC we've always known was built around a model that guarantees most of the alert queue will never receive analyst review. There's never time. In a traditional SOC, the typical progression follows",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Resonance: A Plague Tale Legacy's Game Director and Star on Why Sophia Is So Special and Why This Prequel Let the Team 'Get Some Fresh Air' | gamescom 2026",
    body: "Resonance: A Plague Tale Legacy has just been released on PS5, Xbox Series X/S, and PC, and we had the chance at gamescom to speak to David Dedeine, co-founder of Asobo and game director, and Anna Dem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "FBI Disrupts China-Linked QTFY Infrastructure Used to Steal Data From U.S. Organizations",
    body: "The U.S. Department of Justice (DoJ) on Wednesday announced the disruption of two hacking platforms named QScan and QTRouter operated by Chinese threat actors to target critical infrastructure and oth",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Nimbus Manticore Expands Toolset With TWOSTROKE-Like Backdoor and SSH Tunneler",
    body: "Cybersecurity researchers have discovered additional infrastructure and previously undocumented malware associated with Nimbus Manticore, an Iranian state-sponsored hacking group affiliated with the I",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "What Console Should You Buy for GTA 6? We Break Down PS5 vs. Xbox Pricing, Deals, and More",
    body: "What is the best console to play Grand Theft Auto 6 on? We break down PS5, PS5 Pro, and Xbox Series X pricing, expected frame rates, and new or upcoming hardware deals, alongside whether it's worth wa",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New GPUThor Rowhammer Defeats ECC on NVIDIA RTX A6000 to Gain Host Root Access",
    body: "Academic researchers have disclosed a Rowhammer attack impacting NVIDIA workstation GPUs with GDDR6 memory that defeats error correction codes (ECC), the mitigation NVIDIA recommends against GPU Rowha",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CISA Adds Six Exploited Flaws to KEV, Including NetScaler, Linux, and SQL Server Bugs",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added six flaws to its Known Exploited Vulnerabilities (KEV) catalog, including a high-severity security vulnerability imp",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto III \u2013 The Legacy Review",
    body: "Replaying the pioneering 2001 classic 25 years later and paying tribute to the game that didn\u2019t just change the trajectory of the GTA series forever \u2013 it changed the business.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "After GTA 6: Extended Look Showed Rockstar's Game Running at 30fps, Tech Experts Say a 60fps Console Version Is 'Extremely Unlikely' and 'Genuinely Challenging' Even on PC",
    body: "Getting Rockstar's hugely ambitious GTA 6 running at 60fps on current consoles will be \"extremely unlikely\", the tech experts at Digital Foundry have said, after analysis of footage from the Grand The",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Spark RAT Targets Cambodia, Abuses Vulnerable OPSWAT Driver to Disable Security Tools",
    body: "Individuals and organizations in Cambodia have emerged as the target of a new campaign that delivers an open-source remote access trojan (RAT) called Spark RAT.\n\n\"The samples employ diverse lure theme",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "GoCaracal Malware Uses Ethereum Smart Contract to Fetch Replacement C2 Address",
    body: "Threat actors linked by Arctic Wolf to Dark Caracal with medium confidence deployed a previously undocumented Go-based malware framework, GoCaracal, during a June 2026 intrusion at an unnamed communic",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "99 Details from The GTA 6 Extended Look",
    body: "Love Fist, gameplay, and other Vice City memories. Here are 99 new details we spotted in the GTA 6 Extended Look:",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "NBA 2K27 Is Making Major Upgrades to Both Ends of the Court",
    body: "NBA 2K27 Is Making Major Upgrades to Both Ends of the Court",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Amazon Kiro Prompt Injection Can Exfiltrate Sensitive Data Through Kiro Powers",
    body: "Cybersecurity researchers have disclosed details of a vulnerability in Amazon Kiro, an artificial intelligence (AI)-powered, agentic integrated development environment (IDE), that could facilitate dat",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "What the Data Says About AI in Security Operations in 2026",
    body: "AI is officially mainstream in security operations. According to Prophet Security's State of AI in Security Operations 2026 report (produced from ViB\u2019s survey of 250+ cybersecurity pros), 40% of secur",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "[UPDATE] EA Motive Confirms Iron Man Game Leak After Gameplay Trailer Spreads on Social Media",
    body: "Gameplay footage from what appears to be EA Motive Studio's Iron Man game has leaked online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "6 More Magic: The Gathering Crossovers We Want in Universes Beyond",
    body: "With MTG\u2019s Universes Beyond lineup expanding, here are 7 more ideal fantasy and sci-fi crossovers we want to see, including Narnia, The Cosmere, and The Elder Scrolls.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "APT28-Linked HOOKEDGE Backdoor Targets European Government and Diplomatic Organizations",
    body: "Cybersecurity researchers have flagged a fresh set of campaigns targeting government and diplomatic organizations in Romania, Spain, and T\u00fcrkiye between late September 2025 and early April 2026.\n\nThes",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ThreatsDay: 296K IoT Botnet, 100+ Water Systems Targeted, SharePoint RCE Chain + 27 New Stories",
    body: "A fake login page. A fake security scan. A fake productivity app. Apparently, pretending to be useful is still one of the easier ways into a machine.\n\nThe rest of the week gets stranger: botnets borro",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Here's How You Can Already Save $5 on Your GTA 6 Preorder",
    body: "If you are already planning to spend $100 on the GTA 6 Ultimate Edition, Amazon has a tidy trick to knock $5 off your preorder right now.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Nvidia's DLSS 5 Leaks Online, and Modders Have Already Turned It Into a Slop Filter",
    body: "Nvidia's DLSS 5 Leaks Online, and Modders Have Already Turned It Into a Slop Filter",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical cPanel Flaw Could Let One Hosting Customer Take Root Control of a Whole Server",
    body: "cPanel has released patches for a security flaw affecting domain parking and addon domain functionality in cPanel and WebHost Manager (WHM), which could allow code execution as the root user.\n\nThe vul",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "PaperCut Zero-Day Exploited in Attacks, Affecting All NG and MF Versions",
    body: "PaperCut has alerted customers that bad actors are actively exploiting a vulnerability impacting all versions of its PaperCut NG and PaperCut MF print management software in zero-day attacks.\n\nThe com",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "EA Motive's Iron Man Game Trailer Seemingly Leaked With Early Look at Gameplay",
    body: "Gameplay footage from what appears to be EA Motive Studio's Iron Man game has leaked online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Gallipoli Review",
    body: "Gallipoli is the most beautiful game in the WW1 series yet, with excellent maps, fun new classes, and a continued focus on teamwork in order to win.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Three CVSS 10.0 ServiceNow Flaws Could Let Unauthenticated Attackers Execute Code and SQL",
    body: "ServiceNow has released patches for four security flaws impacting the ServiceNow AI Platform, three of them rated 10.0 on the CVSS scoring system and exploitable, in certain circumstances, by an unaut",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "China-Made ZBT Routers Ship With Two Implants Giving Unauthenticated Attackers Root Access",
    body: "VulnCheck has disclosed two previously undocumented factory implants in firmware for routers built by Shenzhen Zhibotong Electronics (ZBT), each of which gives an unauthenticated remote attacker the a",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 6 Is Already Bringing Back Characters from GTA 5",
    body: "Grand Theft Auto 6 will feature at least one character from GTA Online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Capcom Is Making Life-Sized Statues of Lady Dimitrescu and Albert Wesker, and the Internet Is Being Totally Normal About It",
    body: "Capcom is making thirsty fans\u2019 dreams come true for Resident Evil\u2019s 30th anniversary exhibition, revealing that it will display life-sized statues of Lady Dimitrescu and Albert Wesker.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Two Unitree G1 EDU Humanoid Robot Flaws Enable Root RCE, One Starts Over Bluetooth",
    body: "Security researcher Olivier Laflamme has disclosed two independent root remote code execution (RCE) chains affecting the Unitree G1 EDU, including a Bluetooth Low Energy (BLE) path that can reach root",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Key Reasons Why Identity Fabric Matters in 2026",
    body: "An Identity Fabric knits fragmented identity systems into a coherent layer that observes how identities behave across applications, APIs, and infrastructure. As enterprise access spans more cloud serv",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "12 Game, Movie, and TV Show Trailers You Might Have Missed This Week",
    body: "This week's trailer bounty included the extended look at Grand Theft Auto 6, tons of footage from gamescom, a first look at the new Pok\u00e9mon stop-motion series coming to Disney+, a new Ali G movie, and",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Save 42% Off the PS Portal, the Only Way You'll Be Able to Play Grand Theft Auto 6 on a Handheld",
    body: "Forget the price hike.GTA 6 will only be available on PlayStation 5 and Xbox, to start out.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ownCloud Flaw Exploited to Steal Nuclear Records From Philippine Research Body",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Thursday added a critical security flaw impacting ownCloud to its Known Exploited Vulnerabilities (KEV) catalog following reports th",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "19 Chrome and Edge Extensions Found With Wallet-Stealing and Crypto-Draining Code",
    body: "Cybersecurity researchers have discovered a cluster of 18 Google Chrome and one Microsoft Edge extensions that were published over the last six months and harbored wallet secret stealing and cryptocur",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Rockstar Approached Netflix for Exclusive GTA 6 Extended Look, Not the Other Way Around",
    body: "The big Grand Theft Auto 6 extended look (mostly) went off without a hitch, and apparently, it was Rockstar Games' idea to bring it to Netflix in the first place, not the other way around.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Save 56% Off a Like New Logitech G29 Racing Wheel and Pedal Set for Gran Turismo and Forza Horizon 6",
    body: "Your racing simulator just got more simulating.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Berlin Refuses to Pay Hackers Who Stole Data From the City's State Network",
    body: "Berlin's state government has confirmed that it is the target of an extortion attempt following the August compromise of the city's state administrative network, and said it will not meet the extortio",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Android 17 Adds OS-Wide ECH to Hide Website Visits From Network Providers",
    body: "Google on Thursday announced new network security protections in Android 17 to bolster connection privacy, address cellular vulnerabilities, and safeguard the privacy of users' home networks.\n\nTopping",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "NBA 2K27 Review So Far",
    body: "So far, new features have put a spotlight on longstanding issues.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Kick Streamer Neon Responds After Rockstar Seemingly Includes a Reference to Him in GTA 6 Netflix Showcase",
    body: "Prominent Kick streamer Neon has responded after Rockstar appeared to reference him in a side mission shown during their special GTA 6 first-look trailer on Netflix.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cosmos EVM Flaw Exploited After Cosmos Labs Knew Every Blockchain Running It Was Vulnerable",
    body: "Cosmos Labs has warned that a critical balance-handling flaw in the shared Cosmos EVM module was exploited to drain funds from six blockchains between August 20 and August 25, 2026.\n\nThe vulnerability",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Chain Two PaperCut Flaws to Execute Code Without Authentication",
    body: "Malicious actors are exploiting a newly patched security flaw in PaperCut NG and MF to execute arbitrary code on susceptible instances, as the company released a fresh emergency fix with additional ha",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Grand Theft Auto 6 Gameplay Just Makes Me Want a PC Version Even More",
    body: "After watching the Grand Theft Auto 6 Extended Look on Netflix, I came away awed by how good it looks on the base consoles. But more than anything, it made me want to see it running on a high-end PC e",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Devs at Rockstar Celebrate as Extended Look Finally Reveals Gameplay After Years of Development",
    body: "Rockstar Games has finally revealed an official look at GTA 6 gameplay, and members of the development team couldn't be happier to finally see fans' reactions.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI Says Reward Hacking Drove AI Agents to Exploit Zero-Days and Breach Hugging Face",
    body: "OpenAI on Wednesday revealed that reward hacking was a key driver behind the artificial intelligence (AI)-powered hack of Hugging Face last month, adding that it found evidence of misaligned behavior ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Next.js Patches Critical AVIF and Windows Flaws Enabling Unauthenticated RCE",
    body: "Credit:&nbsp;Hacktron\nVercel has released security patches for two critical-severity vulnerabilities in the Next.js web framework, both of which allow unauthenticated remote code execution, one exploi",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "I Turned a Skeleton Into a Roast Chicken in Fable, and I\u2019d Do It Again | gamescom 2026",
    body: "We finally played Fable, and there's a surprising amount of depth to be found in its spell-slinging combat. Our hands-on preview:",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Project Motor Racing Adding Nine New Cars, New Track Next Month",
    body: "The V8 Power Pack, featuring historic US muscle and Gen 3 Australian V8 Supercars, arrives on September 15.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Learn How to Build Security Operations Ready for AI-Powered Attacks",
    body: "Security teams have spent years trying to detect threats faster. AI is changing the harder part: how much time defenders have left to act.\n\nAdvanced AI models can now help attackers discover vulnerabi",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Alleged TeamPCP Hackers Charged in Australia Over Major Supply Chain Attacks",
    body: "The Australian Federal Police (AFP) has charged two Western Australian men with a combined total of 14 offences over their alleged role in TeamPCP, the cybercrime group behind the March 2026 compromis",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Exclusive: LEGO Batman: Legacy of the Dark Knight Deluxe Edition - Mayhem Collection DLC Trailer Reveals The Joker and Harley Quinn Story Mission and More",
    body: "During our IGN gamescom Studio livestream, we were able to exclusively reveal the LEGO Batman: Legacy of the Dark Knight Deluxe Edition - Mayhem Collection DLC trailer, which features an exciting look",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Star Wars Zero Company Review",
    body: "An excellent tactical game with the same cinematic feel as the Star Wars Jedi games.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "NovaCookies Campaigns Abuse Genuine Docusign Notifications to Steal Microsoft 365 Sessions",
    body: "Cybersecurity researchers have disclosed details of a new adversary-in-the-middle (AitM) phishing toolkit called NovaCookies that's used as a proxy to redirect Microsoft 365 sign-ins, while capturing ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CISA Red Team Compromised Two Critical Infrastructure Orgs, One Detected Nothing",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has published the results of two red team assessments it conducted simultaneously against two critical infrastructure organizations, us",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Fable: After Watching a Full Quest, I Couldn\u2019t Be More Excited to Play It | gamescom 2026",
    body: "Beer, swearing, and aggressive strangers. I feel at home. After watching a full quest from Fable, I couldn't be more excited to play it. Our preview:",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Persona 4 Revival: The Good and the Bad of Our First Hands-On \u2013 Gamescom 2026",
    body: "In the pantheon of the Persona series, its fourth entry is held in high regard, and time will tell if Persona 4 Revival will prove to be the best of the bunch. The little bit I got to see is at least ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Claude Opus 4.6 Bypasses Gym Booking Limit, Cancels Other Users' Reservations in Tests",
    body: "Aikido Security has published research that recreates the Australian gym-booking incident in a synthetic environment, finding that Claude Opus 4.6, running on the OpenClaw agent harness, exploited a c",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI Bans Russian ChatGPT Accounts Used to Run Influence Operation",
    body: "OpenAI on Tuesday said it banned a cluster of Russian ChatGPT accounts that used VPNs to bypass access restrictions and run an influence operation, which relied on its artificial intelligence (AI) too",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metro 2039 Developers on How Russia's Invasion of Ukraine Changed Their Plans",
    body: "After finishing the four-or-so-hour preview build of Metro 2039, the upcoming first-person shooter sequel from Ukrainian developer 4A Games and falling completely in love with it, I reached out to the",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metro 2039: The First Hands-On Preview",
    body: "In an age where single-player first-person shooters are slowly going extinct because they only make money for their publisher once while multiplayer live-service shooters vie for our time and attentio",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "INTERPOL Operation Jackal IV Arrests 58, Identifies 263 in Global Cyber Fraud Crackdown",
    body: "An eight-month INTERPOL operation targeting West African organized crime groups has led to arrests of 58 people and the identification of 263 suspects.\n\n\"The operation, which brought together 22 count",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Newly SLEEPWALKER Backdoor Waits for One Crafted Packet, Then Runs Its Own Bytecode",
    body: "An independent malware researcher has documented a previously unreported Windows backdoor, dubbed SLEEPWALKER, that stays inert in memory until a specifically crafted network packet reaches the machin",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Sea of Remnants Director Reveals 10 Minutes of Exclusive Gameplay, Details the Game\u2019s Hidden Secrets",
    body: "Watch 10 exclusive minutes of Sea of Remnants gameplay as the game's creative director details the RPG's roguelike structure, dice mechanics, and hidden secrets.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Gears of War: E-Day Campaign Hands-On Preview: To Quote Marcus Fenix, \u201cNice\u201d",
    body: "I\u2019m now not only more fired up to finish Gears of War: E-Day\u2019s prequel story than ever, but I\u2019m also more confident than ever that, at least based on the small slice I\u2019ve played so far, E-Day has stru",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical Gitea RCE Actively Exploited as Reported Attack Drops Miner-Like Payload",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Tuesday warned of active exploitation efforts targeting a recently patched critical security flaw impacting Gitea.\n\nThe vulnerabilit",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Fake Apple Support AI Calls Target Stolen-Device Owners for Passcodes and 2FA Codes",
    body: "Cybersecurity researchers have disclosed details of a phishing-as-a-service (PhaaS) platform built to strip Apple's Activation Lock from stolen devices, using rented AI voice agents that call theft vi",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The First New Magic Puzzle of 2026 Is Now Available at Retailers",
    body: "The First New Magic Puzzle of 2026 Is Now Available at Retailers",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Sea of Remnants Director Reveals 10 Minutes of Exclusive Gameplay, Details the Game\u2019s Hidden Secrets",
    body: "Watch 10 exclusive minutes of Sea of Remnants gameplay as the game's creative director details the RPG's roguelike structure, dice mechanics, and hidden secrets.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Showa American Story: The First Hands-On Preview",
    body: "Showa American Story succeeds in crafting an unforgettable, eccentric B-movie world. However, its deliberate jank and niche style mean its general polish still lags behind other modern AAA action game",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Konami Partners With Celebrity Kitty to Release Metal Gear Cat Toys at CatCon 2026",
    body: "Konami is partnering up with a celebrity kitty named \u2018one-eared Uno\u2019 to debut a special Metal Gear cat toy collection available at CatCon 2026.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Sea of Remnants Director Reveals 10 Minutes of Exclusive Gameplay, Details the Game\u2019s Hidden Secrets",
    body: "Watch 10 exclusive minutes of Sea of Remnants gameplay as the game's creative director details the RPG's roguelike structure, dice mechanics, and hidden secrets.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Witcher 3 Remastered Launches September as a Free Upgrade for Existing Owners",
    body: "CD Projekt Red has announced The Witcher 3 Remastered, coming as a free upgrade to all owners next month.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Sea of Remnants Director Reveals 10 Minutes of Exclusive Gameplay, Details the Game\u2019s Hidden Secrets",
    body: "Watch 10 exclusive minutes of Sea of Remnants gameplay as the game's creative director details the RPG's roguelike structure, dice mechanics, and hidden secrets.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Final Fantasy 7 Revelation Gets New Trailer at Gamescom 2026 Showing off Submarine Combat, Weapons, and More",
    body: "Fans were treated to a new Final Fantasy 7 Revelation trailer at Gamescom\u2019s Opening Night Live showcase, where we saw more of The Weapons, submarine combat, and more.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Witcher 3 Songs of the Past Expansion: Everything Revealed at gamescom ONL 2026",
    body: "The Witcher 3: Wild Hunt Songs of the Past expansion got a proper reveal trailer at gamescom Opening Night Live 2026, and developer CD Projekt Red showed up to talk about its new chain weapon, the rea",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Sea of Remnants Director Reveals 10 Minutes of Exclusive Gameplay, Details the Game\u2019s Hidden Secrets",
    body: "Watch 10 exclusive minutes of Sea of Remnants gameplay as the game's creative director details the RPG's roguelike structure, dice mechanics, and hidden secrets.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "KFC Reveals the Oreo Chicken Burger, and We're Both Revolted and Intrigued",
    body: "Has capitalism gone too far? KFC China has just revealed the Oreo Original Recipe Chicken Burger, and we can't help but be intrigued.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "PlayStation Plus Monthly Games for September 2026 Leak, Headlined by Sniper Elite: Resistance",
    body: "September's PlayStation Plus monthly games lineup has leaked online ahead of Sony's official announcement.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "gamescom Opening Night Live 2026: Everything Announced",
    body: "Opening Night Live 2026 is upon us, and with it comes the promise of big new gameplay reveals, plenty of new trailers, and a long list of announcements. Check out IGN's live report, direct from gamesc",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Call of Duty: Modern Warfare 4 Beta Pushes Unplanned Update to Address Fan Feedback",
    body: "Infinity Ward has pushed an unplanned update for the Call of Duty: Modern Warfare 4 beta in order to quickly address fan feedback.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "U.S. Sanctions Iran-Linked Hackers Behind Critical Infrastructure Breaches",
    body: "The U.S. Department of the Treasury has announced fresh sanctions on Iranian cyber actors as part of what it called an \"unprecedented, whole-of-government, economic campaign\" against the nation and it",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Frontier AI: Vulnerability Management's Systemic Revolution",
    body: "Vulnerability management has been a staple of security programs since the dawn of the cybersecurity discipline. The symbiotic relationship between vulnerability and patch management teams has also exi",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "NBA 2K27 Is Teasing a GTA 6-Themed Event in Collaboration with Rockstar Games",
    body: "NBA 2K27 is teasing a crossover with Rockstar Games, seemingly to promote Grand Theft Auto 6.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel Tokon Devs Confess Regaining Trust After Fumbled PC Launch Will Be 'Extremely Challenging'",
    body: "Arc System Works has apologized for Marvel Tokon: Fighting Souls' PC launch and admitted it will be \"extremely difficult\" to regain player trust.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "24 npm Packages Abuse unpkg Mirrors to Host Fake Cloudflare CAPTCHA Pages",
    body: "Cybersecurity researchers have disclosed details of a new campaign that uses a cluster of 24 npm packages as free phishing infrastructure for redirecting to ClickFix-style fake CAPTCHA pages.\n\n\"While ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "E4del and PINHOLE RATs Turn FTP Banners Into Dead Drops for Malware Commands",
    body: "Cybersecurity researchers are calling attention to a new campaign that employs FTP banners as dead drop resolvers (DDRs) to deliver two previously unreported remote access trojans (RATs) tracked as E4",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Chronicles of Riddick: Escape from Butcher Bay Remains One of the Most Underrated Games Ever",
    body: "The Chronicles of Riddick: Escape from Butcher Bay didn\u2019t just break the licensed-game curse, it was a bona fide Game of the Year contender on Xbox that year (it was won by a little game called Halo 2",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Leak Subpoena: Discord Says It Will 'Evaluate the Validity and Scope Before Responding'",
    body: "Discord has countered online reports about Take-Two\u2019s hunt for the identity of the GTA 6 leaker, saying it has yet to be formally served a subpoena, and when it does receive it, it will take a long, h",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "A Malicious Webpage Could Poison Your Local AI Model Behind NVIDIA NemoClaw",
    body: "Oasis Security has disclosed a weakness in NVIDIA NemoClaw that could let an attacker-controlled webpage take unauthenticated control of the local Ollama instance serving an AI agent and plant hidden ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Mirage2FA Surge Hits 4,500 US and EU Companies, Abusing Microsoft 365 Login Flows",
    body: "Thousands of companies have been affected by the Mirage2FA campaign from 2024 to 2026. The commercial phishing-as-a-service toolkit targets Microsoft 365 accounts by abusing legitimate login flows and",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 6: An Extended Look Global Release Times Confirmed",
    body: "Here's when you'll be able to watch Grand Theft Auto 6: An Extended Look as soon as it debuts on Netflix, and when it will arrive on YouTube.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "[UPDATE] GTA 6 Leaker Releases Nightclub and Beach Gameplay Videos, Defends Crypto Scheme",
    body: "The GTA 6 leaks have continued, this time with two new gameplay videos and a message from the leaker defending their crypto scheme.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "WhatsApp Adds Multiple Passkeys for Phishing-Resistant Sign-Ins Across iOS and Android",
    body: "Meta on Tuesday announced a set of WhatsApp account security features, including support for multiple passkeys to a single account to help users with both iOS and Android devices sign into their accou",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Marimo Notebook Flaw Could Run MCP Commands Before Cells Execute in Edit Mode",
    body: "Marimo has addressed a high-severity security flaw in its notebook software that allowed an attacker to execute an attacker-supplied Model Context Protocol (MCP) command in a specially crafted noteboo",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon Veteran James Turner Rejoins Franchise Following Work on The Plucky Squire",
    body: "Pok\u00e9mon development veteran James Turner is returning to the world of pocket monsters, after previously leaving to make The Plucky Squire.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Clutch Picks Up a Publisher as Maverick Games Partners with Focus Entertainment",
    body: "Focus Entertainment has announced it has forged a \u201cmajor publishing partnership\u201d with independent racing studio Maverick Games for its upcoming project, Clutch, after Amazon backed out earlier this ye",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Target miniOrange SAML Flaws That Can Grant WordPress Admin Access",
    body: "Bad actors are attempting to exploit two severe unauthenticated authentication bypasses in the Xecurify miniOrange SAML 2.0 Single Sign On plugin that make it possible for an attacker to sign in as an",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon Collector Poses as Buyer to Recover $4,000 Worth of Stolen Cards in 'Vigilante' Sting Operation",
    body: "Canadian collector Emilio Kihien took matters into his own hands after police said they \u201ccouldn\u2019t do much\u201d to help him recover $4,000 worth of stolen Pokemon cards.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Preorder Metal Gear Solid Master Collection Vol. 2 on PC and Save 23% (Out Thursday)",
    body: "Metal Gear Solid Master Collection Vol. 2 is out this week, but if you preorder the Steam PC version, you can save 23% off list price.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon Collector Poses as Buyer to Recover $4,000 Worth of Stolen Cards in 'Vigilante' Sting Operation",
    body: "Canadian collector Emilio Kihien took matters into his own hands after police said they \u201ccouldn\u2019t do much\u201d to help him recover $4,000 worth of stolen Pokemon cards.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Magic: The Gathering Unveils Masters of the Universe Secret Lair Drop Featuring He-Man and Skeletor",
    body: "Wizards of the Coast has revealed all five Masters of the Universe Secret Lair drops for Magic: The Gathering. Check out the full card list, pricing, and release date here.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Actively Exploited Oracle WebLogic Flaw Lets Unauthenticated Attackers Access Critical Data",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Monday added a maximum-severity security flaw impacting Oracle HTTP Server and Oracle WebLogic Server to its Known Exploited Vulnera",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon Collector Poses as Buyer to Recover $4,000 Worth of Stolen Cards in 'Vigilante' Sting Operation",
    body: "Canadian collector Emilio Kihien took matters into his own hands after police said they \u201ccouldn\u2019t do much\u201d to help him recover $4,000 worth of stolen Pokemon cards.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Long Game: The 4 Best Crops to Invest in Early in Stardew Valley",
    body: "The Long Game: The 4 Best Crops to Invest in Early in Stardew Valley",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Witcher 3 Songs of the Past Expansion Confirmed to Include More Gwent, and Everyone Is Already Celebrating",
    body: "CD Projekt Red has confirmed The Witcher 3: Wild Hunt's upcoming Songs of the Past expansion will come with more Gwent, and card game lovers are already celebrating.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Persona Comes to Beard Papa's With Special 30th Anniversary Collaboration",
    body: "Beard Papa\u2019s is teaming up with Persona to celebrate the RPG series\u2019 30th anniversary with some special cream puffs.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "This Legend of Zelda Brain Teaser Recreates One of the Best Side Quests From Tears of the Kingdom",
    body: "This Legend of Zelda Brain Teaser Recreates One of the Best Side Quests From Tears of the Kingdom",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Call of Duty: Modern Warfare 4 Adds New Dynamic Cosmetic Options for Certain Characters Like Ghost",
    body: "Call of Duty: Modern Warfare 4 is adding more options for how your operators appear in-game.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Weedhack Malware Spreads via Fake Minecraft Clients and SEO Poisoning",
    body: "Cybersecurity researchers have found that several websites are still actively distributing a malware family known as Weedhack to gamers by masquerading as Minecraft clients.\n\nMcAfee Labs said it detec",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Call of Duty: Modern Warfare 4 Devs Vow to Update Captain Price After Botched Haircut Goes Viral",
    body: "Publisher Activision and developer Infinity Ward have promised to update Captain Price's hair in Call of Duty: Modern Warfare 4 after images of his botched haircut went viral.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Canceled Iron Man Game Footage From Just Cause and Mad Max Developer Leaks Online",
    body: "Alleged footage from Avalanche Studios' canceled Iron Man game has surfaced online.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Black Myth: Zhong Kui Doesn\u2019t Look as Epic as Wukong \u2013 and That\u2019s Great",
    body: "Black Myth: Zhong Kui looks more grounded than the epic myth that Black Myth: Wukong told, and I think it'll be more ambitious with its story because of that.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Elder Scrolls IV: Oblivion \u2013 I Spent 44 Hours in 4 Days Playing it in Bethesda's Basement",
    body: "The Elder Scrolls IV: Oblivion was arguably the defining moment of the first months of the HD Era and a true killer app for the Xbox 360 \u2013 you had to buy the console so you wouldn\u2019t miss out on this g",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "As Hideo Kojima Turns 63, The Metal Gear Solid Creator Says He Has More Ideas Than Ever But Less Time Left to Make Them",
    body: "Metal Gear Solid and Death Stranding creator Hideo Kojima has reflected on turning 63 and what he wants to do next, in the years he has left remaining.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Black Myth: Zhong Kui Doesn\u2019t Look as Epic as Wukong \u2013 and That\u2019s Great",
    body: "Black Myth: Zhong Kui looks more grounded than the epic myth that Black Myth: Wukong told, and I think it'll be more ambitious with its story because of that.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Leaker Drops New Nudity-Filled Gameplay, Polls People on Whether to Release Story Spoilers",
    body: "The past week's extraordinary set of GTA 6 leaks appear to have continued today with a significant new release of footage that depicts mass nudity. Meanwhile, the leaker has suggested story spoilers c",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Nautus Exclusive Hands-On Preview: It Feels Like Mash-Up of Steamworld Dig and Subnautica",
    body: "To be a cozy game is to embrace all things chill and atmospheric, finding comfort in routine and bonding with a growing community of characters, taking it one day at a time. With the upcoming Nautus f",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "The Outsized Shadow: Why 5% of AI Users Are Your Biggest Security Risk",
    body: "Big security risks come in small packages. While enterprise security teams focus on policing the proliferation of employees using ChatGPT and Claude for quick drafting tasks, a more urgent threat is p",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Why Everybody Loves Zork, The Duskbloods' Weirdest Character and Miyazaki's Favorite",
    body: "Zork is one of six characters in The Duskbloods' network test and he's gone viral as many players are, quote, \"Zorkin' It.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Magic: The Gathering Marvel Super Heroes Bundle Gets a Surprise 15% Discount on Amazon",
    body: "Save 15% on this Magic: The Gathering bundle at Amazon right now and get a promo card and packs for less.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Operation QUICSILVER Targets Myanmar Government and IT with QUICAgent Backdoor",
    body: "Cybersecurity researchers have flagged a cyber espionage campaign targeting Myanmar that uses graduation ceremony invitation lures to deliver a Go backdoor called QUICAgent.\n\nThe campaign, codenamed O",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Elder Scrolls IV: Oblivion \u2013 I Spent 44 Hours in 4 Days Playing it in Bethesda's Basement",
    body: "The Elder Scrolls IV: Oblivion was arguably the defining moment of the first months of the HD Era and a true killer app for the Xbox 360 \u2013 you had to buy the console so you wouldn\u2019t miss out on this g",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Former Rockstar Dev Calls GTA 6 Leaks 'A Nothing Burger,' Insists Hot Coffee Was Much, Much Worse",
    body: "As Take-Two works to identify the person or group behind the GTA 6 'CyberLeek' account, one former Rockstar developer has insisted the recent spate of gameplay leaks will have little impact on the suc",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI-Powered PLC Attacks, GitLab Attacks, Stripe Key Leaks and More",
    body: "A package gets installed. A login prompt opens. A box sits exposed to the internet. Nothing looks unusual yet.\n\nThat\u2019s roughly the mood this week. Trusted tools turn hostile, old weak spots get fresh ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical Keycloak Password Reset Flaw Could Let Unauthenticated Attackers Take Over Any Account",
    body: "Red Hat and the Keycloak project have released patches to address a critical security flaw in the open-source identity and access management server that could allow an unauthenticated remote attacker ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Elder Scrolls IV: Oblivion \u2013 I Spent 44 Hours in 4 Days Playing it in Bethesda's Basement",
    body: "The Elder Scrolls IV: Oblivion was arguably the defining moment of the first months of the HD Era and a true killer app for the Xbox 360 \u2013 you had to buy the console so you wouldn\u2019t miss out on this g",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "7 Magic: The Gathering Crossovers We Want for Universes Beyond in 2027 and Beyond",
    body: "Following Hasbro's tease of more \"fantasy-adjacent\" Magic: The Gathering Universes Beyond sets for 2027, here are our predictions for what could join the lineup next year.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "WordlistLoader Delivers Amatera via ClickFix, SynkLoader Phishes Windows Passwords",
    body: "Cybersecurity researchers have flagged two new malware families called  WordlistLoader and SynkLoader that's used to deliver next-stage payloads and likely sell access to ransomware groups.\n\nAccording",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Shipping More AI Code Than You Can Secure? Watch How to Control Remediation Debt",
    body: "If your developers are using AI coding tools, you are probably already seeing the upside: faster development, more code, and less time spent on routine work.\n\nThe harder part is what comes after. AI c",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "[UPDATE] GTA 6 Leaker Releases Even More Gameplay Videos as People Spend Hundreds of Dollars to Vote on Next Leak, Fueling Crypto Scheme",
    body: "The GTA 6 leaker has continued to release new gameplay clips, and is even running a poll to decide which video to leak next despite Rockstar parent company Take-Two's ongoing hunt for people responsib",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI Pauses Frontier RL Training as It Tightens Defenses Against Unsafe AI Behavior",
    body: "OpenAI on Tuesday revealed that it paused reinforcement learning (RL) training for its latest artificial intelligence (AI) models for two weeks while it shored up additional defenses and increased the",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "UAT-10147 Uses AI to Scale Server Attacks, Deploys SPECTRE With EDR Bypass and Linux Rootkit",
    body: "Cybersecurity researchers have disclosed details of a Chinese-speaking cybercrime group dubbed UAT-10147 that's targeting Windows and Linux web servers globally across the education, media, technology",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cloudflare Workers Spectre Attack Leaks JWT From Co-Located Worker at 12 Bits/Second",
    body: "Cybersecurity researchers have disclosed details of a&nbsp;remote Spectre attack&nbsp;against Cloudflare Workers that leaked a JSON Web Token (JWT) from a co-located Worker in the production environme",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Elementor Pro Flaw Could Let Unauthenticated Attackers Upload PHP and Execute Code",
    body: "Cybersecurity researchers have disclosed details of a critical flaw in the Elementor Pro WordPress plugin that, if successfully exploited, could lead to remote code execution.\n\nThe vulnerability, trac",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "40 Malicious Firefox Extensions Pose as Web3 Products to Steal Wallet Secrets",
    body: "A set of 40 Mozilla Firefox extensions has been found to engage in cryptocurrency wallet theft by masquerading as OKX, Rabby Wallet, TronLink, and other Web3 products.\n\nAccording to the Socket Threat ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ToxicPanda 2.0 and GoldDigger Expand Android Banking Attacks with On-Device Fraud",
    body: "Cybersecurity researchers have shed light on an updated version of ToxicPanda (aka TgToxic) that comes with \"significant enhancements,\" including a set of 167 remote commands and expands its targeting",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "NASA AIT-GUI Flaws Could Let Unauthenticated Attackers Issue Spacecraft Commands",
    body: "Security researchers at Cycode have disclosed a chain of flaws in AIT-GUI, the browser-based operator console for NASA/JPL's open-source AMMOS Instrument Toolkit, that allow an unauthenticated attacke",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Manic Android Malware Exfiltrates Data From Offline Phones via Nearby Infected Devices",
    body: "A new Android threat codenamed Manic has been observed actively targeting Ukrainian banks, government and identity services, and messaging applications, as well as Russian and European financial insti",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CDN Tsunami Attack Abuses HTTP/3 Translation for Up to 350x DoS Amplification",
    body: "Cybersecurity researchers have disclosed two denial-of-service (DoS) attacks that exploit how major content delivery networks (CDNs) convert client-facing HTTP/3 traffic into HTTP/1.1 requests to the ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Zombie Card Attack Can Revive Expired Visa Cards for Contactless Payments",
    body: "Researchers at the University of Massachusetts Amherst have demonstrated an attack that revives expired Visa contactless credit cards for real in-store purchases by rewriting the expiration date a poi",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Why \"Shady AI\" is Security's Next Big Governance Problem",
    body: "In March 2026, an internal AI agent at Meta triggered a \u201cSev 1\u201d incident after sensitive company and user data was exposed to employees who weren\u2019t authorized to access it.&nbsp;\n\nThe incident began w",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical NetScaler Flaw Can Bypass Authentication on Certain Gateway and AAA Servers",
    body: "Citrix has released updates to address two security flaws impacting NetScaler ADC and NetScaler Gateway deployments, including a critical-severity authentication bypass vulnerability.\n\nAccording to th",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Exploit Zimbra SNMP Flaw for Unauthenticated Remote Code Execution",
    body: "A now-patched security flaw impacting Zimbra Collaboration (ZCS) has come under active exploitation in the wild, according to the Polish Computer Emergency Response Team (CERT Polska).\n\nThe vulnerabil",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 Controller Is Still Available for Preorder (But It May Sell Out)",
    body: "The Marvel's Wolverine-themed PS5 controller has been a huge bestseller among the IGN audience, but it may be starting to sell out ahead of release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "[UPDATE] GTA 6 Leaker Shows No Sign of Slowing Down as Ninth Gameplay Video Hits the Internet",
    body: "The GTA 6 leaks have stretched into a sixth consecutive day, as the person or group responsible shows no sign of slowing down even in the face of court action from Rockstar parent company Take-Two.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New Cryptographic Context Injection Attack Could Let Web Pages Steal Grok Chat Data",
    body: "Adversa AI has disclosed an attack technique that it says can cause xAI's Grok chatbot to send a user's name, approximate location, subscription tier, and the prompts from the ongoing conversation to ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Isolated-vm Flaw Lets Sandboxed JavaScript Escape to Host for Potential RCE",
    body: "Cybersecurity researchers have disclosed a critical security flaw in isolated-vm, a popular open-source sandbox with more than 2,900 stars and 190 forks on GitHub, that could allow attackers to escape",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Hoping for a Huge October Surprise, But Not Holding My Breath' \u2014 Arc Raiders Players Torn After Embark Delays Future Expeditions Until Early 2027",
    body: "Embark Studios has announced that all future Arc Raiders Expeditions have been delayed until early 2027 as it aims to \"return with major improvements\" following community feedback.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ThreatsDay: Gogs 10.0 RCE, n8n Workflow-to-RCE, $10M Reward, GLM-5.3 AI Exploit, and More",
    body: "A lot of this week\u2019s trouble starts with something trusted doing exactly what it was allowed to do.\n\nSigned drivers get turned against defenses. Legitimate apps help malware blend in. A weak header ch",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI-Generated Exploit Scripts Target Siemens S7 PLCs in U.S. Critical Infrastructure",
    body: "The U.S. government on Wednesday warned of an \"active threat\" targeting critical infrastructure organizations in the country using artificial intelligence (AI)-generated exploit scripts.\n\nThe activity",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Hoping for a Huge October Surprise, But Not Holding My Breath' \u2014 Arc Raiders Players Torn After Embark Delays Future Expeditions Until Early 2027",
    body: "Embark Studios has announced that all future Arc Raiders Expeditions have been delayed until early 2027 as it aims to \"return with major improvements\" following community feedback.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Rust Supply Chain Attack Puts Build-Time Malware in Crates with 245 Million Downloads",
    body: "The Rust Project has deleted malicious versions of three widely used Rust crates from crates.io after a compromised maintainer account published releases that added a typosquatted dependency whose bui",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Suspected Russian Hackers Abuse Google OAuth and WhatsApp Linking to Hijack Accounts",
    body: "Three distinct suspected Russian cyber espionage threat clusters have been observed leveraging legitimate authentication flows to single out individuals working in academia, aerospace and defense, gov",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Hoping for a Huge October Surprise, But Not Holding My Breath' \u2014 Arc Raiders Players Torn After Embark Delays Future Expeditions Until Early 2027",
    body: "Embark Studios has announced that all future Arc Raiders Expeditions have been delayed until early 2027 as it aims to \"return with major improvements\" following community feedback.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "GitLab CVE-2026-19478 Comes Under Active Exploitation Within Days of Disclosure",
    body: "A newly disclosed security flaw in GitLab has come under active exploitation within days of public disclosure, according to watchTowr.\n\nThe vulnerability in question is CVE-2026-19478 (CVSS score: 9.4",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Patches Severe Entra ID Flaw (CVSS 10.0) Allowing Remote Code Execution",
    body: "Update: The story was updated after publication to note that the vulnerability has not been exploited.\n\nAlthough the security bulletin originally marked the \"Exploited\" field under the Exploitability ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon ETBs are Surprisingly Easy to Get Hold of Right Now on Amazon",
    body: "Amazon has quietly restocked high-demand Pok\u00e9mon TCG Elite Trainer Boxes below secondary market prices, including hard-to-find Pok\u00e9mon Center Exclusives and new releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Sinking City 2 Review",
    body: "The Sinking City 2 feels inescapably like off-brand Resident Evil, but it's a praiseworthy imitation of its main inspirations wrapped in the Cthulhu mythos.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Wazuh and AI For Enhanced SOC Workflows",
    body: "Artificial Intelligence (AI) has become one of this decade's defining technologies. From healthcare and finance to manufacturing and education, organizations increasingly rely on AI to automate repeti",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cisco Patches Nine Crosswork and Secure Workload Flaws, Five Scoring CVSS 10.0",
    body: "Cisco has published another round of security updates for Crosswork platforms and Secure Workload Software as part of a continued comprehensive internal security review.\n\nFour of the security vulnerab",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metal Gear Solid 4: The Flawed Masterpiece Kojima Didn't Want to Make",
    body: "With Metal Gear Solid 4 finally arriving on modern consoles thanks to Master Collection Vol. 2, we take a look back at the game's legacy. Was it really just a big cutscene, or is it Kojima's masterpie",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Ultra Graphics Settings Are a Scam: Why High Is Good Enough, if Not Better, for Most Players",
    body: "Most games don\u2019t actually need to be played at Ultra settings to look good. They don\u2019t even need it to look great. To prove it, I turned down the settings in a bunch of great-looking games to see how ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Defender's Own Driver Can Be Weaponized to Delete Security Software at Boot",
    body: "Check Point Research has disclosed a technique that uses Microsoft Defender's own legitimately signed boot-time remediation driver to perform arbitrary kernel-level file and registry operations on Win",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Android Car Malware Spreads Through Built-In Updaters for Ad Fraud, Proxy Botnet",
    body: "Cybersecurity researchers have flagged a new malware family that's specifically designed to infect Android-based vehicle head unit firmware developed by DoFun.\n\nKaspersky, which discovered the threat ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Leaker Releases More Gameplay Videos Despite Rockstar Owner Take-Two's Microsoft and Discord Subpoenas",
    body: "The alleged GTA 6 leaker has released two further gameplay videos despite Rockstar owner Take-Two's subpoenas requesting identifying information from Microsoft and Discord.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Best Deals Today: Nintendo Switch 2, LEGO Tropical Aquarium, Final Fantasy VII Rebirth, and More",
    body: "The Best Deals Today: Nintendo Switch 2, LEGO Tropical Aquarium, Final Fantasy VII Rebirth, and More",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "TikTok Agrees to $400 Million Settlement in U.S. Child Privacy Lawsuit",
    body: "The U.S. Department of Justice (DoJ) announced on Friday that ByteDance-owned TikTok will pay $400 million to settle a 2024 lawsuit accusing the company of violating child privacy laws in the country.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "14 Trojanized npm Packages Drop RedC2 4.0 Linux Backdoor With AI-Assisted C2",
    body: "Cybersecurity researchers have discovered a set of trojanized npm packages that masquerade as working calendar and streak utilities but are engineered to stealthily deliver an artificial intelligence ",
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
    title: "007 First Light's Legacy Edition Hits Record Low Price via Limited-Time Coupon at Amazon",
    body: "Save up to $143 on the 007 First Light Legacy Edition for PS5 and Xbox Series X. Clip Amazon's limited-time coupon to score this collector's set at its lowest price ever.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI Recommendation Poisoning: How \"Ask AI\" Buttons Silently Alter LLM Memory",
    body: "A new class of prompt injection is spreading across commercial websites. It requires no malware, no stolen credentials, and no zero-day exploit. It abuses a standard feature built into almost every ma",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Ransom Cartel Creator Gets 16 Years in Prison for Operating Ransomware-as-a-Service",
    body: "A federal judge in Alexandria, Virginia, sentenced Maksim Silnikau to 16 years in prison on August 5 for creating and running Ransom Cartel, the ransomware-as-a-service operation he stood up in 2021.\n",
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
    title: "10 Most Valuable One Piece TCG Cards You Can Still Find in Packs Right Now",
    body: "From $1,500 \"Heroine Edition\" cards to pricey Manga Rares, here are the 10 most valuable One Piece TCG pulls you can still land from sealed booster packs in 2026.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI Recommendation Poisoning: How \"Ask AI\" Buttons Silently Alter LLM Memory",
    body: "A new class of prompt injection is spreading across commercial websites. It requires no malware, no stolen credentials, and no zero-day exploit. It abuses a standard feature built into almost every ma",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Chinese-Made Zbtlink Routers Ship With Backdoor That Opens Unauthenticated Root Shells",
    body: "Cybersecurity researchers have disclosed details of a \"factory-shipped backdoor\" implanted in at least 20 Chinese router models from Zbtlink.\n\nAccording to a new report from VulnCheck, the implant app",
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
    title: "The Secret of Weepstone Preview",
    body: "With its gorgeous black and white, hand drawn art and heavily influenced 1980s tabletop RPG stylings, The Secret of Weepstone is the kind of game I would make... if I had any idea how to make games.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI Recommendation Poisoning: How \"Ask AI\" Buttons Silently Alter LLM Memory",
    body: "A new class of prompt injection is spreading across commercial websites. It requires no malware, no stolen credentials, and no zero-day exploit. It abuses a standard feature built into almost every ma",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AWS, Google, and Vercel Agent Flaws Let Attackers Trigger Tools Without Running the Model",
    body: "Security flaws in agent infrastructure from Amazon Web Services (AWS), Google, and Vercel let untrusted or forged instructions reach an agent's tools with no check that a model turn had authorized the",
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
    title: "'This Is Unbelievably Scummy' - GTA 6 Fans Are Annoyed By Netflix's Paywalled Extended Look at the Game",
    body: "Grand Theft Auto 6 fans aren't thrilled with Rockstar's decision to release the next look at the game through Netflix.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI Recommendation Poisoning: How \"Ask AI\" Buttons Silently Alter LLM Memory",
    body: "A new class of prompt injection is spreading across commercial websites. It requires no malware, no stolen credentials, and no zero-day exploit. It abuses a standard feature built into almost every ma",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Compile khunt Inside Oracle to Turn SQL Injection Into Windows SYSTEM Access",
    body: "Attackers broke into an organization's Oracle database through a SQL injection flaw in a public-facing web application, then installed a post-exploitation toolkit without writing an executable to disk",
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
    title: "Three First Print Copies of Pokemon Red, Blue, and Yellow Sell for $2 Million in Second-Largest Video Game Transaction Ever",
    body: "Three first print Pokemon games are selling for an eye-watering $2 million to the owner of the Dubai Collection, one of the most prominent and highly-graded collections of video games and trading card",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Apple iCloud Private Relay Can Expose Real IPs Through WebKit Proxy Bypasses",
    body: "Cybersecurity researchers have disclosed a security issue with Apple's iCloud Private Relay tool that can expose a user's real IP address.\n\nIntroduced with iOS 15, iCloud Private Relay employs a dual-",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI Recommendation Poisoning: How \"Ask AI\" Buttons Silently Alter LLM Memory",
    body: "A new class of prompt injection is spreading across commercial websites. It requires no malware, no stolen credentials, and no zero-day exploit. It abuses a standard feature built into almost every ma",
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
    title: "Hideki Kamiya Reveals Spider-Man 2 Scene That Inspired Key Game Sequence in Okami",
    body: "Hideki Kamiya revealed that Okami's main planner took inspiration from a scene in Sam Raimi\u2019s Spider-Man 2 movie to shape one particular moment in the highly-acclaimed 2006 game.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Over 4,400 Rockwell PLCs Exposed Online, 22 Found in Water Attack Cities",
    body: "Forescout found 22 internet-facing Rockwell Automation programmable logic controllers (PLCs) in cities hit by recent cyberattacks on US water utilities. Nineteen used the same mobile carrier network.\n",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CryptoJS Weak RNG Behind $5.7 Million in Drains Affects Five Crypto Wallet Apps",
    body: "Coinspect has identified CryptoJS.lib.WordArray.random() as the weak random number generator behind the Ill Bloom wallet drains.\n\nIntroduced in the JavaScript cryptography library 12 years ago, the fu",
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
