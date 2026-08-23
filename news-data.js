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
