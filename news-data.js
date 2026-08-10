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
    title: "Madden NFL 27 Arcade Edition Is Officially Live on Apple Arcade",
    body: "Madden NFL 27 Arcade Edition has officially launched on Apple Arcade. Get ready to enjoy football with no ads, no in-app purchases, no currencies, and no paywalls.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The LEGO Animal Crossing Museum Set Is Perfect for Cozy Collectors, Now 41% Off",
    body: "LEGO\u2019s Animal Crossing set that lets you build your own version of Blathers's Museum is a whopping 41% off on Amazon right now.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Shipping 10\u201350\u00d7 More Code? Watch This Webinar on Securing AI-Speed Development",
    body: "AI is helping development teams produce far more code, far faster. But security teams still have to review vulnerabilities, manage dependencies, prioritize fixes, and control risk at human speed.\n\nWhe",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI Goes Rogue, Metabase 0-Day, MCP Supply-Chain Attacks, and Router Backdoors",
    body: "A lot of security problems still begin with someone doing a completely normal thing. Cloning a repo. Answering a call. Leaving a box exposed. Trusting the default.\n\nThat pretty much covers the mood th",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto Players Fundraise $50k for Sick Fan Trying to Make It to GTA 6",
    body: "Grand Theft Auto players have rallied behind a sick fan in need of a lung transplant by raising more than $50,000 so he can live long enough to play GTA 6.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Amazon Discounts MTG Commander Decks From Marvel and Strixhaven",
    body: "From assembling the Avengers to blighting your foes, here are the best Magic precon deals right now at Amazon.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Shipping 10\u201350\u00d7 More Code? Watch This Webinar on Securing AI-Speed Development",
    body: "AI is helping development teams produce far more code, far faster. But security teams still have to review vulnerabilities, manage dependencies, prioritize fixes, and control risk at human speed.\n\nWhe",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "China-Linked Hackers Deploy New StormEncryptor Ransomware, Likely via N-central Flaw",
    body: "Microsoft has disclosed that Storm-1175, a financially motivated threat actor linked to China, has deployed a previously undocumented ransomware strain called StormEncryptor.\n\nThe use of StormEncrypto",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Aliens: Fireteam Elite on Nintendo Switch Shut Down With No Refunds, as Owners Become The Latest Victims of Gaming's Increasingly Digital Future",
    body: "Aliens: Fireteam Elite has had its cloud servers shut down, leaving Nintendo Switch owners unable to play the game without any form of refund.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel's Spider-Man 2 Gets Huge Boost 3 Years After Launch Thanks to Box Office Phenomenon Spider-Man: Brand New Day",
    body: "The box office phenomenon that is Spider-Man: Brand New Day has sparked a surge of interest in Sony video game Marvel\u2019s Spider-Man 2, with players flocking to reinstall the game or buy it anew.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: AI Goes Rogue, Metabase 0-Day, MCP Supply-Chain Attacks, and Router Backdoors",
    body: "A lot of security problems still begin with someone doing a completely normal thing. Cloning a repo. Answering a call. Leaving a box exposed. Trusting the default.\n\nThat pretty much covers the mood th",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Shipping 10\u201350\u00d7 More Code? Watch This Webinar on Securing AI-Speed Development",
    body: "AI is helping development teams produce far more code, far faster. But security teams still have to review vulnerabilities, manage dependencies, prioritize fixes, and control risk at human speed.\n\nWhe",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Bethesda Veteran Reveals How He Would Have Designed Starfield Differently",
    body: "A former Bethesda developer who worked on Skyrim, Fallout 3, Fallout 4, and Fallout 76 has outlined how he would have designed Starfield had he been in charge of the game \u2014 and it sounds very differen",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "After a Decade of No Man's Sky, Players Have Explored Less Than 1% of the Planets",
    body: "No Man\u2019s Sky developer Hello Games is celebrating its 10-year anniversary with an eye-catching stat and a tease for the upcoming update.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Kimsuky Builds Offline AI Stack to Boost Phishing and Automate Malware Development",
    body: "North Korea's state hackers are no longer content to type prompts into public chatbots. One of the country's main espionage groups has begun running artificial intelligence (AI) offline on its own ser",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New Passkey Attacks Can Recover Synced Private Keys or Bypass Phishing-Resistant MFA",
    body: "Three separate research efforts last week demonstrated ways to defeat passkey protections without breaking the cryptography they rest on.\n\nPasskeys are designed to replace reusable passwords and resis",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Solidity Pro VS Code Extensions Steal Crypto Wallets, API Keys, and Credentials",
    body: "Cybersecurity researchers have flagged a malicious Microsoft Visual Studio Code (VS Code) extension named Solidity Pro (\"solidity-pro\") that has been observed delivering a browser wallet and credentia",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI's Next AI Model Astra Shows Cyber Performance Strong Enough to Trigger Pause",
    body: "OpenAI has announced that it's pausing some \"internal activities\" involving its upcoming artificial intelligence (AI) model Astra after an internal evaluation found it had made significant advancement",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Best Deals Today: Civilization VII, AirPods Pro 3, Spider-Man: Brand New Day Steelbook, and More",
    body: "The Best Deals Today: Civilization VII, AirPods Pro 3, Spider-Man: Brand New Day Steelbook, and More",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
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
    title: "Marvel Tokon PC Launch Is So Bad That Famed FGC Content Creator Maximilian Dood Uninstalled the Game on Stream",
    body: "Marvel Tokon: Fighting Souls' launch weekend has been filled with so many PC issues that even famed FGC content creator Maximilian Christiansen (a.k.a. Maximilian Dood) couldn't help but uninstall the",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Blizzard Reportedly Leads Xbox as 'Top-Performing' Studio Thanks to Overwatch and Diablo",
    body: "Blizzard Entertainment is reportedly Microsoft's golden child after Overwatch and Diablo 4: Lord of Hatred helped it become the \"top-performing\" Xbox studio.",
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
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "Google Deletes 3 ADK AI Workflows After Malicious GitHub Issue Could Trigger Privileged Agent",
    body: "Google deleted three AI agent workflows from its Agent Development Kit (ADK) Python repository. Pillar Security showed that a public GitHub issue could manipulate a triage agent into triggering a priv",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "When Vibe Hacking Turns AI into the Junior Hacker Every Adversary Always Wanted",
    body: "The cybersecurity industry has spent decades assuming that offensive capability scales with technical expertise.\n\nThat assumption is starting to break.\n\nSecurity teams have long estimated risk by rank",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "Fake Adobe and Zoom Updates Install ScreenConnect for Persistent Remote Access",
    body: "Cybersecurity researchers have disclosed details of an active, multi-wave campaign that employs social engineering lures themed around Adobe and Zoom software updates, business document reviews, and s",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'If You're Not a Netflix Subscriber, You Definitely Should Be' \u2014 Take-Two Boss Teases Grand Theft Auto VI: An Extended Look",
    body: "Take-Two Boss Strauss Zelnick discusses Grand Theft Auto VI: An Extended Look Netflix reveal.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "Keyv-Linked npm Worm Poisons Hundreds of Packages, Plants Claude Code and VS Code Hooks",
    body: "A credential-stealing npm worm that first appeared in keyv@6.0.0 spread beyond the Keyv and Cacheable namespaces into hundreds of packages across multiple organizations on August 4, 2026.\n\nSafeDep ver",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "Greatness PhaaS Adds Device Code Phishing to Bypass MFA and Steal Tokens",
    body: "The commercial phishing-as-a-service (PhaaS) toolkit known as Greatness has become the latest crimeware solution to add support for device code phishing, a rapidly growing cyber threat that abuses the",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "QuickFox Supply Chain Attack Delivers FDMTP Backdoor via Trojanized Windows Installer",
    body: "Cybersecurity researchers have disclosed what has been described as a \"long-standing supply chain attack\" on QuickFox, a virtual private network (VPN) and network acceleration tool designed for overse",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "CISA Flags Langflow RCE, Tomcat, and N-central Flaws as Actively Exploited",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA), on August 5, 2026, added three flaws to its Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitation in t",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "Claude Mythos 5 Tried to Backdoor a Real Open-Source Project in Testing, Then Vouched for Itself",
    body: "An agent running Anthropic's Claude Mythos 5 spent 34 hours trying to get a malware dropper merged into a real open-source project during a cyber evaluation by the UK's AI Security Institute.\n\nWhen a ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "Open VSX Removes 77 Malicious Evil Twin Extensions Exfiltrating Developer Data",
    body: "A cluster of 77 extensions on the Open VSX marketplace has been found to impersonate legitimate developer tools while transmitting information about the systems and development environments on which t",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Freddy Fazbear's Pizza Opening Permanent Location Featuring Animatronic Stage Shows in 2027",
    body: "Freddy Fazbear's Pizza is coming to life thanks to a new collaboration between Five Nights at Freddy's and entertainment and retail center American Dream.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
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
    title: "Leaked n8n API Tokens Exposed Live Instances to Credential Theft",
    body: "GitGuardian researchers found 321 n8n instances accepting API tokens exposed in public GitHub commits and demonstrated four ways attackers could use them to access sensitive data and downstream creden",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'They Fundamentally Don't Understand Art' \u2014 Doom Dev Blasts Xbox After Microsoft 'Gutted' id Software With Layoffs",
    body: "After layoffs ripped through Doom developer id Software in July, id Software lead services programmer Chris Hays has taken aim at Xbox: \"They fundamentally don't understand art.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "Critical Gitea Flaw Let Unauthenticated Attackers Read Server Files via Org-Mode Markup",
    body: "An unauthenticated attacker can read any file the service account can access on Gitea, the self-hosted Git platform, in versions 1.22.1 through 1.27.0. No login, no repository write access. A public r",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
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
    title: "Kali365 Weaponizes Microsoft Authentication Against US Companies: New Enterprise Risk",
    body: "Kali365 is turning a legitimate Microsoft login into a gateway to corporate data.\n\nThe phishing kit targets US organizations with attacker-controlled device codes that victims approve on Microsoft's r",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Best Deals Today: AirPods Pro 3, LEGO Back to the Future, Saros, and More",
    body: "The Best Deals Today: AirPods Pro 3, LEGO Back to the Future, Saros, and More",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Upcoming PS5 Games: The Future of PlayStation Exclusives",
    body: "Checking in with the PS5 generation.",
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
    title: "New OVSwrap Linux Kernel Flaw Lets Local Users Gain Root via Open vSwitch",
    body: "A memory corruption flaw in the Linux kernel's Open vSwitch datapath gives ordinary local users a path to root on a broad set of default-configured distributions, and a public exploit ships with pre-b",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
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
    title: "Trojanized npm Packages Employ NullReceiver Tactic to Decode C2 IP from Blockchain",
    body: "Cybersecurity researchers have flagged an evolution of the EtherHiding blockchain-based command-and-control (C2) technique that conceals the C2 server IP address inside a made-up destination address o",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
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
    title: "Veeam, Terraform MCP, Django Patch Critical Flaws, Led by CVSS 10.0 Cross-Tenant Bug",
    body: "HashiCorp, Veeam, and the Django Software Foundation have patched 11 vulnerabilities across Terraform MCP Server, Veeam Service Provider Console, and Django.\n\nThe three most serious:\n\n\n  An unauthenti",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
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
    title: "Paperclip AI Flaws Let Attackers Run Host Commands via Malicious Agent Imports",
    body: "Two security flaws in Paperclip could let attackers execute commands on a network server or a developer's computer. Paperclip is an open-source control plane for teams of artificial intelligence (AI) ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
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
    title: "Poison Claude Sells Discounted Claude Access While Its Operator Sees Every Customer Prompt",
    body: "Cybersecurity researchers have discovered more than half-a-dozen services advertisements for illegal access to artificial intelligence (AI) models on underground cybercrime forums and messaging platfo",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Progress Kemp LoadMaster Flaw Hits CISA KEV After 792 Reported Exploit Attempts",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Friday added a critical-severity security flaw impacting Progress\u202fKemp LoadMaster to its Known Exploited Vulnerabilities (KEV) catal",
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
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Atlassian Rovo Can Be Tricked Into Sending Jira and Confluence Data to Attackers",
    body: "Attacker-controlled instructions can make Atlassian's Rovo assistant collect Jira or Confluence data that a signed-in user can access, then send it to an outside server. Two security firms found that ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New CSS Attacks Can Break Webmail Defenses to Steal Passwords and Tokens",
    body: "New research shows content inside an email can escape its message boundary and interfere with the webmail interface.\n\nAcross attack chains spanning Outlook, Gmail, Fastmail, Proton Mail, Yahoo Mail, a",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'Pricing Has Not Kept Pace With Inflation' \u2014 Take-Two Boss Insists Rockstar Got GTA 6 Standard and Ultimate Edition Price Points Right",
    body: "The standard edition of GTA 6 costs $80, which represents a $10 increase on the established price of a triple-A console game. That hike raised more than a few eyebrows when Rockstar launched GTA 6 pre",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Metabase Zero-Day Exploited in Wild Allows Admin Access Without Authentication",
    body: "Metabase has warned that a maximum-severity security flaw impacting its business intelligence and data visualization software package has been exploited in the wild as a zero-day.\n\nThe vulnerability (",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "N-able Issues N-central Hotfix 2 as Attackers Reach Managed Systems and Persist",
    body: "N-able has released a fresh round of hotfixes for N\u2011central as part of its investigation into ongoing exploitation of a recently disclosed security flaw in the Remote Monitoring and Management (RMM) p",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Obsession Star Inde Navarrette Wants to Voice a Resident Evil Character",
    body: "Obsession Star Inde Navarrette Wants to Voice a Resident Evil Character",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
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
    title: "OpenAI Disrupts Poipet Scam Network Using ChatGPT Across Multiple Fraud Schemes",
    body: "OpenAI said it disrupted a Cambodia-based scam operation that used its generative artificial intelligence (AI) chatbot ChatGPT to facilitate a wide range of investment, romance, gambling, and law enfo",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel Tokon Stumbles to Mixed Steam Reviews as 'Miserable' PC Port Complaints Prompt Response From Arc System Works",
    body: "Marvel Tokon: Fighting Souls stumbled on Steam with \"Mixed\" user reviews as players complain of PlayStation account requirements, anti-cheat roadblocks, and other technical issues.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Palworld 1.0 Showed Me Why Everyone Loves Survival Games",
    body: "Palworld 1.0 does a great job of easing you into its many complex systems.",
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
    title: "Over 250 ClickFix Domains Use Browser Fingerprinting to Hide macOS Malware Lures",
    body: "A macOS ClickFix operation spanning more than 250 front-end domains now fingerprints visitors before deciding whether to show them a malware lure, a change Microsoft Threat Intelligence tracked on inf",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Newly Discovered Demon's Souls Prototype Footage Shows Scrapped First-Person Option",
    body: "Demon's Souls almost had an option to play the game in first-person, as shown in newly discovered footage from a 2007 presentation brought to light by famed Elden Ring dataminer Lance McDonald.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Madden NFL 27 Review So Far",
    body: "The gridiron calls once again.",
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
    title: "Snowflake Hacker Pleads Guilty Over Breaches Affecting at Least 100 Million People",
    body: "Connor Riley Moucka pleaded guilty in Seattle federal court on Wednesday to computer fraud, wire fraud, aggravated identity theft and a related conspiracy over the 2024 breaches of Snowflake customer ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Big Walk Review",
    body: "A clever co-op puzzle adventure that uses communication like no other.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Doom 2016 Composer Mick Gordon Is Performing the Game's Soundtrack at a Music Festival for the Very First Time",
    body: "Mick Gordon, the composer of Doom 2016\u2019s award-winning soundtrack, is taking the game\u2019s music on tour for the first time ever \u2014 and he\u2019s bringing the Doom Machine with him.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "UNC6671 Vishing Attacks Target Personal Phones to Steal SaaS Data",
    body: "A recent wave of cyber attacks targeting financial services, private equity, and professional services is attributed to a data extortion group known as UNC6671.\n\n\"UNC6671 continues to rely on voice ph",
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
    title: "Take-Two Boss Predicts Actual Good Video Game Streaming Within 3 Years, Says for Streaming to Matter It Would Have to Run GTA 6 as Well as Consoles",
    body: "The boss of Take-Two has suggested the video game industry will be in \u201ccommercial streaming mode\u201d within three years \u2014 but for video game streaming to matter, it will have to run GTA 6 just as well as",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Nearly 800 Malicious npm Packages Deliver Cross-Platform RAT and Infostealer",
    body: "A cluster of nearly 800 malicious packages has been published to the npm registry as part of a new campaign designed to deliver cross-platform malware targeting Windows, Mac, and Linux systems.\n\n\"Thes",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ClickFix Attacks Deliver macOS Stealer That Can Drain Crypto Wallets",
    body: "ClickFix-style attacks are being used to deliver a Go-based malware capable of stealing cryptocurrency assets, as well as browser-stored passwords, Apple iCloud Keychain data, and cached credentials.\n",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Metro Fault Mission Gameplay \u2014 IGN First",
    body: "Control Resonant is our IGN First for August, and we have a whole new mission of gameplay to kick things off.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Take-Two CEO Strauss Zelnick Won't Rule Out GTA 6 on Disc at Some Point, Insists Decision Had Nothing to Do With Concern Over Leaks",
    body: "One of the big questions following the shock decision not to release GTA 6 on-disc at launch is whether Rockstar will ever release a disc version of the game. In a new interview with IGN, Strauss Zeln",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "18-Year-Old Linux SCTP Flaw Could Let Local Users Gain Root and Escape Containers",
    body: "A use-after-free bug in Linux's SCTP networking code can be turned into full root on a host, and Tencent researchers say they used it to escape a container and reach the machine underneath.\n\nThe flaw ",
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
    title: "Amazon Knocks $10 off Physical Nintendo Switch Sports Resort Preorders",
    body: "Amazon has knocked $10 off Nintendo Switch Sports Resort preorders for Switch 2 again, matching digital pricing ahead of its October launch this year.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Brainrot Royale Brings Some Of The Internet\u2019s Wildest Characters To PUBG MOBILE\u2019s World of Wonder",
    body: "Brainrot Royale Brings Some Of The Internet\u2019s Wildest Characters To PUBG MOBILE\u2019s World of Wonder",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New WordPress Pre-Auth XSS Could Lead to PHP Code Execution - Patch ASAP",
    body: "WordPress has fixed a pre-authentication reflected cross-site scripting (XSS) flaw in its login screen that affects every version of the content management system. pwn.ai demonstrated how the flaw can",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Growing Up The Hard Way",
    body: "Open Source had a great childhood.\n\nFor two decades it got to be a kid. It ran around barefoot, gave everything away, trusted strangers, and never once thought about who was watching. It ran the kind ",
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
    title: "Onimusha: Way of the Sword \u2013 The Final Preview",
    body: "Its bosses are every bit as demanding as those found in a Soulslike, but the journey between them isn't built around constant punishment. Onimusha: Way of the Sword is a game that manages to challenge",
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
    title: "CISA Flags TeamCity CVE-2026-63077 RCE Flaw Under Active Exploitation in the Wild",
    body: "A newly patched security flaw impacting on-premise versions of JetBrains TeamCity has come under active exploitation in the wild, according to the U.S. Cybersecurity and Infrastructure Security Agency",
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
    title: "Onimusha: Way of the Sword \u2013 The Final Preview",
    body: "Its bosses are every bit as demanding as those found in a Soulslike, but the journey between them isn't built around constant punishment. Onimusha: Way of the Sword is a game that manages to challenge",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft 365 AitM Phishing Hijacks Accounts to Collect Payroll and Finance Emails",
    body: "Cybersecurity researchers have called attention to an active \"widespread email-driven phishing campaign\" that employs adversary-in-the-middle (AitM) techniques to take control of Microsoft 365 account",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI-Assisted HTTP Terminator Finds Novel HTTP Desync Techniques and Apache Zero-Day",
    body: "PortSwigger says HTTP Terminator, an artificial intelligence (AI)-assisted research system built by James Kettle, generated and proved new HTTP desynchronization techniques after exploring 30,000 cand",
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
    title: "Onimusha: Way of the Sword \u2013 The Final Preview",
    body: "Its bosses are every bit as demanding as those found in a Soulslike, but the journey between them isn't built around constant punishment. Onimusha: Way of the Sword is a game that manages to challenge",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cisco Patches 12 SD-WAN and IOS XE Flaws, Including Three 9.9 CVSS Score Bugs",
    body: "Cisco has rolled out updates to address multiple critical security vulnerabilities impacting Catalyst SD-WAN and IOS XE Software as part of a comprehensive internal security review.\n\nThe security issu",
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
    title: "Onimusha: Way of the Sword \u2013 The Final Preview",
    body: "Its bosses are every bit as demanding as those found in a Soulslike, but the journey between them isn't built around constant punishment. Onimusha: Way of the Sword is a game that manages to challenge",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Claude Code and Gemini CLI Flaws Let a GitHub Issue Reach CI Workflow Secrets",
    body: "A GitHub issue opened by an account with no repository privileges was enough to execute code on the CI runners behind Anthropic's and Google's own coding-agent repositories. On OpenAI's, it was enough",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "TeamPCP Linked To Redis Attacks Dating Back To 2020 And Later Supply Chain Campaign",
    body: "A new analysis has uncovered that the threat actor tracked as TeamPCP has been active on the cybercrime scene as far back as 2020, indicating the group has been compromising internet-facing infrastruc",
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
    title: "Onimusha: Way of the Sword \u2013 The Final Preview",
    body: "Its bosses are every bit as demanding as those found in a Soulslike, but the journey between them isn't built around constant punishment. Onimusha: Way of the Sword is a game that manages to challenge",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "New NatJack Attacks Hijack TCP Sessions and Spoof DNS by Manipulating NAT Tables",
    body: "Security researcher Malcolm Stagg has disclosed a new attack class called&nbsp;NatJack&nbsp;that manipulates network address translation (NAT) connection state to hijack active TCP sessions, spoof DNS",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Malware Can Abuse Windows Hello for Business Keys for Persistent Entra ID Access",
    body: "Security researcher Malcolm Stagg has disclosed a new attack class called&nbsp;NatJack&nbsp;that manipulates network address translation (NAT) connection state to hijack active TCP sessions, spoof DNS",
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
