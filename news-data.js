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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Double Fine Owns IP and Publishing Rights for All of Its Games Following Xbox Split, Psychonauts Studio Confirms",
    body: "Psychonauts and Brutal Legend developer Double Fine Productions has confirmed it has regained the IP and publishing rights for all of its games released under Microsoft following its split from Xbox.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 U.S. Army Deal Has Already Convinced at Least 20 Soldiers to Reenlist",
    body: "At least 20 soldiers have chosen to reenlist after a United States Army base in Fort Stewart, Georgia, began offering time off for the launch of Grand Theft Auto 6.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Blood of Dawnwalker Won\u2019t Run at 60fps on Console, and Fans Aren\u2019t Happy",
    body: "The Blood of Dawnwalker console footage has shown off the game's graphical modes available at launch, but none will hit 60fps.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "YouTuber Named in Take-Two GTA 6 Leaker Subpoena Insists He Did Nothing Wrong",
    body: "The YouTuber named in Take-Two's GTA 6 leaker subpoena has denied any wrongdoing.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Intergalactic: The Heretic Prophet Cast Expands With Uncharted, The Last of Us Veteran",
    body: "Veteran voice actor Robin Atkin Downes has confirmed his involvement in Naughty Dog's upcoming Intergalactic: The Heretic Prophet, following work on Uncharted and The Last of Us.",
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
    title: "Want a Gears of War Lancer Replica? You Can Preorder One Now",
    body: "Preorders are live for a full-scale 1:1 Gears of War Prototype Lancer replica, but it'll set you back $300.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Pok\u00e9mon TCG Prismatic Evolutions Mini Tins Are Back in Stock at Amazon",
    body: "Amazon has restocked Pok\u00e9mon TCG Prismatic Evolutions Mini Tins, but TCGplayer offers cheaper prices and lets you pick your favorite Eeveelution.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "13 Movie, Game, and TV Trailers You Might Have Missed This Week",
    body: "13 Movie, Game, and TV Trailers You Might Have Missed This Week",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Blood of Dawnwalker Won\u2019t Run at 60fps on Console, and Fans Aren\u2019t Happy",
    body: "The Blood of Dawnwalker console footage has shown off the game's graphical modes available at launch, but none will hit 60fps.",
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
    title: "FromSoftware 'Sincerely Apologizes' for The Duskbloods Network Test 'Server Issues,' Ends First Slot Early",
    body: "FromSoftware has announced The Duskbloods network test has reached an early end after the first day of testing resulted in \"game server issues\" that barred players from logging in.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel's Wolverine: 6 Comics to Read to Prepare for the Game",
    body: "If you're impatiently waiting for the release of Marvel's Wolverine on the PS5, these six essential X-Men comics will help you prepare.",
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
    title: "Rock Band Was a Multiplayer Experience Truly Unlike Anything That Came Before or Since",
    body: "Rock Band remains, to this day, the most unique and physically satisfying gaming experience I\u2019ve ever had. And at Official Xbox Magazine, we played it so much that we ended up pissing off our sister m",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Duskbloods, Tides of Annihilation, Aliens: Fireteam Elite 2 \u2013 Catch Up on IGN's Game Previews This Week ICYMI",
    body: "Your one-stop shop for any game preview coverage you might've missed at IGN this week from The Duskbloods, Tides of Annihilation, Aliens: Fireteam Elite 2, Star Wars: Smuggler's Gambit, and Silver Pin",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Woot Is Practically Giving Away Sonic Games to New Customers Today",
    body: "Amazon-owned retailer Woot is practically giving away top Sonic titles today\u2014including Sonic x Shadow Generations for just $1\u2014to new customers.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Entra ID Flaw (CVSS 10.0) Exploited in Wild, Allows Remote Code Execution",
    body: "Microsoft on Thursday warned of a maximum-severity security flaw in Entra ID that it said has been exploited in the wild, but noted that no customer action is required.\n\nThe vulnerability, tracked as ",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Worms: The Board Game Is on Sale for Its Lowest Price Ever at Amazon",
    body: "Worms: The Board Game Is on Sale for Its Lowest Price Ever at Amazon",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
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
    title: "Halo: Reach Designer Reveals that Modern Warfare Series Were a 'Huge' Inspiration for Bungie",
    body: "Halo: Reach designer Niles Sankey has revealed that the game was massively influenced by the first two Modern Warfare games.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Malware Disguised as Leaked GTA 6 Copies Are Popping Up on Piracy Sites",
    body: "No, despite claims online, there is not a downloadable and playable build of GTA 6 floating around on piracy sites.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Big Call of Duty: Modern Warfare 4 Interview \u2014 Infinity Ward on the Beta, Matchmaking, and Much More",
    body: "IGN interviews Infinity Ward on all things Call of Duty: Modern Warfare 4 ahead of the beta.",
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
    title: "Riot to End Active Development for 2XKO in December 2026, Online Play to Remain Unaffected",
    body: "In one of the more heartbreaking developments in the games industry this year, Riot\u2019s League of Legends fighting game, 2XKO, will officially end active development in December.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
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
    title: "'I Bet Many of You Would Not Like It'  \u2014 Halo Co-Creator Says He Would Make Series 'Darker' if He Made a New Game",
    body: "The co-creator of Halo claims fans wouldn't like his vision for new games in the series if he were still working on the franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Modern Warfare 4 Developers Address Need for Balance in Call of Duty",
    body: "The team behind Call of Duty: Modern Warfare 4 believes that players have only gotten better at the game since the franchise became a pop culture juggernaut.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ThreatsDay: Gogs 10.0 RCE, n8n Workflow-to-RCE, $10M Reward, GLM-5.3 AI Exploit and More",
    body: "A lot of this week\u2019s trouble starts with something trusted doing exactly what it was allowed to do.\n\nSigned drivers get turned against defenses. Legitimate apps help malware blend in. A weak header ch",
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
    title: "FromSoftware Isn't Done With Single-Player Games, Miyazaki Reassures",
    body: "While Elden Ring: Nightreign and The Duskbloods are back-to-back multiplayer games, FromSoftware's Miyazaki says they're still focused on single-player content.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Best Buy Is Offering a Free $10 Gift Card With These Game Preorders",
    body: "Best Buy is the only retailer offering a free $10 gift card as a preorder bonus on some of the biggest games coming this Fall.",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Duskbloods Preview: FromSoftware's Multiplayer Switch 2 Exclusive Is Special, Here's How It Plays",
    body: "With tabletop rules and Souls-style gameplay, The Duskbloods, a Nintendo Switch 2 exclusive, is ambitious even for FromSoftware.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Hidetaka Miyazaki Interview: FromSoftware's Boss On The Duskbloods' TTRPG Influences, the Nintendo Partnership, and the Future of Games",
    body: "We talked to FromSoftware president and The Duskbloods director Hidetaka Miyazaki after a hands-on preview and shared many of the ideas behind his games and where the team goes from here.",
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
    title: "Marvel\u2019s Wolverine Limited-Edition PS5 and DualSense Controller Up for Preorder in the UK",
    body: "Marvel's Wolverine for PS5 is getting limited-edition PS5 consoles, covers, and controllers. All of which are now up for preorder in the UK.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "I Played Halo 2 Before the Rest of the World and Almost Reported the Abrupt Ending as a Bug",
    body: "Halo 2's ending is so abrupt that, back in 2004, I thought it was a game-breaking bug and almost reported it to Bungie.",
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
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Where to Buy Pok\u00e9mon Cards in 2026",
    body: "Trying to buy Pok\u00e9mon cards in 2026 without significant markup? Here is where to find Booster Bundles, ETBs, and restocks at MSRP or \"market price\" from Amazon, Target, and Walmart.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Best Buy\u2019s 60th Anniversary Sale Has Some Great TCG Deals",
    body: "Save on Pok\u00e9mon, MTG, and Disney Lorcana in Best Buy\u2019s 60th Anniversary Sale, plus compare prices against top deals on Amazon and TCGplayer.",
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
    title: "Former Tekken 8 Director Kohei Ikeda Joins VS Studio, Re-Teams With Tekken Veteran Katsuhiro Harada",
    body: "The news likely won\u2019t come as a surprise to hardcore fighting game fans.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Director of Marvel\u2019s Wolverine Responds After Extended Gameplay Footage Sparks Backlash",
    body: "The director of Marvel\u2019s Wolverine, Mike Daly, opened up about the recent backlash toward the game after its extended gameplay showcase drew criticism online.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Yujiro Hanma in Tekken 8: How Do You Balance a Character Famous for Never Losing a Fight?",
    body: "IGN interviews Tekken series chief producer, Naoya Yasuda, to find out more on Yujiro's upcoming addition to the Tekken 8 roster.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Resident Evil Requiem on PS5 Drops to a New Low Price at Amazon and Best Buy of $54",
    body: "Resident Evil Requiem on PS5 has dropped to a new low price at Amazon and Best Buy of $53.99, beating out its Prime Day price.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Stunning Black Myth: Zhong Kui Gameplay Trailer Gives Us a Closer Look at the New Protagonist, Combat, and a Truly Impressive Parry",
    body: "Game Science has released a 15-minute gameplay trailer for its Black Myth: Wukong follow-up, Black Myth: Zhong Kui. It gives us a close look at the new protagonist, combat, and the world.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Director of Marvel\u2019s Wolverine Responds After Extended Gameplay Footage Sparks Backlash",
    body: "The director of Marvel\u2019s Wolverine, Mike Daly, opened up about the recent backlash toward the game after its extended gameplay showcase drew criticism online.",
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
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Director of Marvel\u2019s Wolverine Responds After Extended Gameplay Footage Sparks Backlash",
    body: "The director of Marvel\u2019s Wolverine, Mike Daly, opened up about the recent backlash toward the game after its extended gameplay showcase drew criticism online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Silver Pines Preview: It Plays and Looks Like If Alan Wake Were Made in the \u201890s",
    body: "Silver Pines' pixelated art is surprisingly fluid and expressive, the voice acting is off-putting and eerie, and every part of the small town you find yourself in is just so ominous and filled with li",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Director of Marvel\u2019s Wolverine Responds After Extended Gameplay Footage Sparks Backlash",
    body: "The director of Marvel\u2019s Wolverine, Mike Daly, opened up about the recent backlash toward the game after its extended gameplay showcase drew criticism online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Last of Us Online Was Not a 'Side Project,' Majority of Intergalactic's Team Came Over After Multiplayer Game Was Scrapped",
    body: "Naughty Dog's The Last of Us Online was more than just a \"side project\" and is a big reason why the studio hasn't had a brand new game since 2020.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Director of Marvel\u2019s Wolverine Responds After Extended Gameplay Footage Sparks Backlash",
    body: "The director of Marvel\u2019s Wolverine, Mike Daly, opened up about the recent backlash toward the game after its extended gameplay showcase drew criticism online.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Modern Warfare 4 Beta Reveals Multiplayer Matchmaking Plans, Will Continue to Use Divisive New Matchmaking System",
    body: "Call of Duty: Modern Warfare 4's beta will utilize a divisive new matchmaking system in addition to the open matchmaking introduced last year.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Silver Pines Preview: It Plays and Looks Like If Alan Wake Were Made in the \u201890s",
    body: "Silver Pines' pixelated art is surprisingly fluid and expressive, the voice acting is off-putting and eerie, and every part of the small town you find yourself in is just so ominous and filled with li",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Every Pok\u00e9mon Game on the Nintendo Switch and Switch 2 in 2026",
    body: "Gotta play 'em all.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Silver Pines Preview: It Plays and Looks Like If Alan Wake Were Made in the \u201890s",
    body: "Silver Pines' pixelated art is surprisingly fluid and expressive, the voice acting is off-putting and eerie, and every part of the small town you find yourself in is just so ominous and filled with li",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Every Pok\u00e9mon Game on the Nintendo Switch and Switch 2 in 2026",
    body: "Gotta play 'em all.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Silver Pines Preview: It Plays and Looks Like If Alan Wake Were Made in the \u201890s",
    body: "Silver Pines' pixelated art is surprisingly fluid and expressive, the voice acting is off-putting and eerie, and every part of the small town you find yourself in is just so ominous and filled with li",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Every Pok\u00e9mon Game on the Nintendo Switch and Switch 2 in 2026",
    body: "Gotta play 'em all.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Silver Pines Preview: It Plays and Looks Like If Alan Wake Were Made in the \u201890s",
    body: "Silver Pines' pixelated art is surprisingly fluid and expressive, the voice acting is off-putting and eerie, and every part of the small town you find yourself in is just so ominous and filled with li",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Witcher 3 NPCs Kept Dropping Their Babies Due to an Unintended Side Effect of a Cut Mechanic",
    body: "The Witcher 3 developers were so focused on making a realistic environment for players that they accidentally created a morbidly hilarious side effect for the game\u2019s female NPCs.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "\u2018You Don\u2019t Get XP, But Zones Do\u2019 \u2014 How Control Resonant Is Rewriting the Action RPG Rule Book",
    body: "In Control Resonant, taking down Manhattan\u2019s monsters comes with consequences. We take a deep dive into Remedy's new approach to boss design and how killing them changes the world around you.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "New LEGO Batman DLC Trailer to Debut on IGN\u2019s gamescom Livestream",
    body: "Get a sneak peek at LEGO Batman: Legacy of the Dark Knight\u2019s Mayhem Collection DLC with an exclusive trailer and developer interview during IGN\u2019s gamescom livestream.",
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
    title: "\u2018You Don\u2019t Get XP, But Zones Do\u2019 \u2014 How Control Resonant Is Rewriting the Action RPG Rule Book",
    body: "In Control Resonant, taking down Manhattan\u2019s monsters comes with consequences. We take a deep dive into Remedy's new approach to boss design and how killing them changes the world around you.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "RuneScape: Dragonwilds Confirmed for Day One Xbox Game Pass Launch",
    body: "RuneScape: Dragonwilds will be available as a day one Xbox Game Pass title next month, developer Jagex has announced.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "\u2018You Don\u2019t Get XP, But Zones Do\u2019 \u2014 How Control Resonant Is Rewriting the Action RPG Rule Book",
    body: "In Control Resonant, taking down Manhattan\u2019s monsters comes with consequences. We take a deep dive into Remedy's new approach to boss design and how killing them changes the world around you.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Subnautica 2 Early Access 1.2 Update Out Now Alongside Patch Notes, Dev Donates $100,000 to Ocean Cleanup",
    body: "Subnautica 2 Early Access 1.2 is out now, adding the Buddy System to the underwater survival and crafting game. check out the patch notes in full.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5, DualSense Controller, and Console Covers Are Up for Preorder",
    body: "Marvel's Wolverine for PS5 is getting the royal treatment, with limited-edition PS5 consoles, covers, and controllers up for preorder now.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Tides of Annihilation is a Stylish King Arthur-Inspired Slash \u2018Em Up that Balances Spectacle with Substance | IGN Preview",
    body: "Hands-on with the Arthurian-inspired action adventure that unleashes a legion of evil into the streets of London.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5, DualSense Controller, and Console Covers Are Up for Preorder",
    body: "Marvel's Wolverine for PS5 is getting the royal treatment, with limited-edition PS5 consoles, covers, and controllers up for preorder now.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Tides of Annihilation is a Stylish King Arthur-Inspired Slash \u2018Em Up that Balances Spectacle with Substance | IGN Preview",
    body: "Hands-on with the Arthurian-inspired action adventure that unleashes a legion of evil into the streets of London.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Phishing 3.0: The Fight Moves to Agent Versus Agent",
    body: "Most email defenses still do the job they did a decade ago. Scan the message, look for something malicious, block it. That worked when the danger sat in the payload, a bad link or an attachment. It st",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel\u2019s Wolverine Limited-Edition PS5, DualSense Controller, and Console Covers Are Up for Preorder",
    body: "Marvel's Wolverine for PS5 is getting the royal treatment, with limited-edition PS5 consoles, covers, and controllers up for preorder now.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "PlayStation Reportedly Reboots Horizon Multiplayer Spinoff Following Negative Feedback",
    body: "Sony has reportedly rebooted PlayStation live-service game Horizon Hunters Gathering after negative feedback from playtests.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "SilkParasite Espionage Campaign Targets Central Asian Governments with Five New RATs",
    body: "A previously unreported cyber espionage operation dubbed SilkParasite has been observed targeting government bodies in Central Asia.\n\nThe intrusion set makes use of seven remote access tool (RAT) fami",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Hackers Compromised 14,500+ Dahua Devices Using Credential Attacks, Auth Bypasses, and P2P",
    body: "Cybersecurity researchers at Hunt.io have disclosed details of a campaign that they say compromised more than 14,530 Dahua devices between June 17 and July 22, 2026, using credential attacks, two auth",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "StopAndProtect Uses Nearly 2,000 Hacked WordPress Sites to Spread Malware and Steal Data",
    body: "Cybersecurity researchers have flagged a global cybercrime operation that abuses thousands of hacked WordPress websites as infrastructure to disseminate malware, commandeer infected hosts, store stole",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical macOS, SharePoint, vCenter, and Microsoft IKE Flaws Under Active Exploitation",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Tuesday added four critical vulnerabilities to its Known Exploited Vulnerabilities (KEV) catalog, stating they are being exploited i",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Links 30+ Rotating Domains to MacSync Stealer Infrastructure",
    body: "Microsoft Defender Experts have linked more than 30 web domains to MacSync Stealer, a macOS-focused information stealer, after correlating recurring endpoint and network behaviors across changing infr",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Clop-Linked Windchill Web Shell Decrypts Credentials and Maps Engineering Data",
    body: "A JavaServer Pages (JSP) web shell deployed following the exploitation of a critical security flaw in PTC Windchill and FlexPLM servers is specifically designed for the enterprise Product Lifecycle Ma",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Stardew Valley Switch 2 Physical Edition Is the Kind of Cash Grab I Can Get Behind",
    body: "Eight months after the Switch 2 edition of Stardew Valley was released digitally, a physical edition of the upgrade has popped up at Fangamer.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Brandon Sanderson's Cosmere RPG Starter Set Is Now Being Sold at Target Retail Stores",
    body: "Brandon Sanderson's Cosmere RPG Starter Set Is Now Being Sold at Target Retail Stores",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Call of Duty Socials Accidentally Post Placeholder Marketing Image for Modern Warfare 4, Fans Suspect AI Usage",
    body: "The Call of Duty socials team accidentally posted an internal marketing image for Modern Warfare 4, and fans suspect it may be AI-generated.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Gameplay and Map Appear to Leak Online, Group Reportedly Responsible Threatens Rockstar Over All-Digital Future",
    body: "Grand Theft Auto 6 appears to have suffered yet another significant leak after what looks like legitimate gameplay videos and an image of the full map appeared online. Rockstar has yet to comment.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Uncharted: Drake's Fortune Developer Reveals the Game Had Dynamic Difficulty to Stop Players From Finishing It Too Quickly",
    body: "A former Naughty Dog developer has revealed that Uncharted: Drake's Fortune had dynamic scaling difficulty in order to make the game longer.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Ransom Busters Claims It Hacked Ransomware Servers, Asks Victims for Up to $60,000",
    body: "A ransomware affiliate calling itself Ransom Busters has been spotted proactively sending emails to victim organizations and claims to delete stolen data from ransomware groups' servers in exchange fo",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Copilot Personal Flaws Could Let One Click Exfiltrate Data From Connected Apps",
    body: "Varonis Threat Labs has disclosed three vulnerabilities in Microsoft Copilot Personal that it said could allow a single click on a crafted link to silently pull data from connected apps and other info",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Exploit MLflow SSRF Flaw to Steal Cloud Credentials and Secrets",
    body: "Two critical vulnerabilities impacting MLflow, an open-source artificial intelligence (AI) platform, and FUXA, an open-source, web-based SCADA / HMI software built for operational technology (OT) and ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Fallout 4 Patch Updates the Creation Kit, Fixes Various Bugs Including Steam Deck Crash",
    body: "Bethesda has released a new patch for Fallout 4 that updates the Creation Kit and makes a number of crash and bug fixes. Check out the patch notes.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant Developer Announces Last-Minute Delay For Physical Edition",
    body: "Control Resonant has been hit by a last-minute delay that will impact the launch of its physical editions.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Tomb Raider: Legacy of Atlantis Is 'Reimagining' The Series' Original Game With a Focus Meter, Skill Tree, and Herb Brewing",
    body: "Tomb Raider: Legacy of Atlantis will include an RPG-like skill tree, herb brewing and a new chargable focus meter in its reimagining of the series' first game.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Do Not Boycott GTA 6, Fired Rockstar Workers Tell Fans: 'There\u2019s a Better Way to Support Us and Hold Rockstar to Account'",
    body: "The first Rockstar workers who are embroiled in a legal battle with the company have told fans they shouldn\u2019t boycott GTA 6 to protest on their behalf.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Xbox Game Pass August 2026 Wave 2 Lineup Announced",
    body: "Microsoft has announced the Xbox Game Pass August 2026 Wave 2 lineup, and it includes a number of day-one releases.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel's Wolverine's Glowing Red Tracking Trail Has an In-Universe Explanation",
    body: "If you\u2019ve been keeping an eye on the reaction to the latest gameplay reveal for Marvel\u2019s Wolverine, you might have noticed plenty of debate about a red line. Well, there's an in-universe explanation f",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'No Disc No Buy' Comments Dominate Sony's Phantom Blade Zero State of Play Livestream, as Planned PlayStation Boycott Nears",
    body: "Sony held its planned Phantom Blade Zero State of Play livestream with \u2014 somewhat surprisingly \u2014 the comments turned on, and they went exactly how everyone thought they would.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Tomb Raider: Legacy of Atlantis is 'Reimagining' The Series' Original Game With a Focus Meter, Skill Tree and Herb Brewing",
    body: "Tomb Raider: Legacy of Atlantis will include an RPG-like skill tree, herb brewing and a new chargable focus meter in its reimagining of the series' first game.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "AI \"Mind Viruses\" Can Spread Between Agents Through Persistent Prompt Files",
    body: "Security researchers at Anthropic and Switzerland's EPFL have demonstrated that self-propagating payloads can spread from one artificial intelligence (AI) agent to the next through the editable system",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "TWINLOOT Abuses SharePoint and Teams to Steal Credentials and Move Across Networks",
    body: "Cybersecurity researchers have disclosed details of a previously undocumented Python implant framework dubbed TWINLOOT.\n\n\"TWINLOOT is a modular, PyArmor-hardened Python implant designed to operate its",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "16 Typosquatted RubyGems Packages Steal Browser Credentials and Crypto Wallets",
    body: "Cybersecurity researchers have flagged a new typosquatting campaign targeting RubyGems users with a Windows-based information stealer.\n\nOpenSourceMalware, which discovered the activity on August 15, 2",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "One Attacker Has Scraped Both Salesforce and ServiceNow Portals Since 2025",
    body: "A single piece of infrastructure has been pulling records out of Salesforce and ServiceNow customer portals across multiple industries for more than a year, according to research published this week b",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Deus Ex, System Shock, and Thief Developer Legend Warren Spector Announces Retirement",
    body: "Video game developer legend Warren Spector has announced his retirement from video game development.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "GeoServer Zero-Day Targeted in Active Exploitation Attempts, Can Lead to RCE",
    body: "A newly disclosed zero-day flaw in GeoServer is seeing active exploitation efforts, per watchTowr.\n\nThe vulnerability, which has yet to be assigned a CVE identifier, is an SQL injection vulnerability ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "SafePal Hardware Wallet Maker Says Flaw Exposed Data of Nearly 40,000 Customers",
    body: "SafePal has disclosed that an authorization flaw in an order-tracking plug-in exposed the names, email addresses, shipping addresses, phone numbers, and purchase details of approximately 39,798 custom",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CISA Flags Actively Exploited Ray Flaw That Can Trigger Browser-Based RCE",
    body: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Monday added a critical flaw impacting Ray to its Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitat",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "China-Linked Jewelbug Uses XG-Web for Government Espionage and Crypto Fraud",
    body: "The China-linked threat actor known as Jewelbug has been observed carrying out cyber espionage operations targeting governments and militaries, while simultaneously engaging in cryptocurrency fraud.\n\n",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Trump Memo Paves Way for U.S. Firms to Hack and Disrupt Foreign Crime Groups",
    body: "A new White House memo signed by U.S. President Donald Trump has instructed the National Coordination Center (NCC) to establish a program that would allow private sector companies to take advantage of",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Kingdom Hearts Becomes Second Top-Selling Steam Game in the U.S. After Extended D23 Trailer Sparks Fan Excitement",
    body: "Kingdom Hearts is having a big moment on Steam, becoming the platform\u2019s second best-selling game in the United States following the Kingdom Hearts IV gameplay trailer that was shown at D23 over the we",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Apple Warns Users in 110 Countries They May Be Targets of Mercenary Spyware",
    body: "Apple on Thursday sent a fresh batch of notifications to customers whom it suspects may have been targeted by mercenary spyware attacks.\n\nIn a statement shared with TechCrunch, the iPhone maker said i",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "US Army Battalion Reportedly Giving Soldiers Time Off to Play GTA 6 in Exchange for Reenlisting",
    body: "A battalion in the United States Army is reportedly offering soldiers four days off to let them play Grand Theft Auto 6 when it releases this November if they reenlist.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Every Disney Game on the Nintendo Switch and Switch 2 in 2026",
    body: "If you're looking to get your Disney (or Pixar) fix on the Switch, we've got you covered.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "CTM360 Uncovers Over 3,000 Recruitment Phishing URLs Using Browser-in-the-Browser (BitB) Credential Traps",
    body: "Cybersecurity researchers have uncovered a large-scale, global recruitment-themed phishing campaign that uses fake interview scheduling pages and Browser-in-the-Browser (BitB) windows to steal Google ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Tides of Annihilation Producer Responds After Gwendolyn's New Face Sparks Debate Among Fans",
    body: "Some fans are expressing some confusion after seeing the latest gameplay footage from Eclipse Glow Games\u2019 Tides of Annihilation, which features some distinct graphical changes that were made to its ma",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Star Citizen Developer Stream Goes Horribly Off the Rails, Creating Further Distrust Among Players",
    body: "A recent Star Citizen development stream went horribly wrong and resulted in some fans losing confidence in the long-awaited sci-fi game.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Chrome DevTools Technique Enables Authenticated Session Hijacking in Live Windows Browsers",
    body: "Cybersecurity researchers have detailed a post-exploitation technique that enables the&nbsp;Chrome DevTools Protocol (CDP)&nbsp;inside a running Google Chrome or Microsoft Edge process on Windows, all",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Kingdom Hearts Becomes Second Top-Selling Steam Game in the US After Extended D23 Trailer Sparks Fan Excitement",
    body: "Kingdom Hearts is having a big moment on Steam, becoming the platform\u2019s second best-selling game in the United States following the Kingdom Hearts IV gameplay trailer that was shown at D23 over the we",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Streamer Finally Gets Perfect Game in MVP Baseball 2005 After Nearly 2,000 Consecutive Attempts",
    body: "Tik-Tok streamer Jay Lucarelli tried for nearly 2000 attempts over the course of a week to throw a perfect game with now-retired Astros pitcher Roy Oswalt in MVP Baseball 2005, the classic pro basebal",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Critical GitLab GraphQL Flaw Could Let Unauthenticated Attackers Delete Public Projects",
    body: "GitLab has released security updates to address a critical vulnerability impacting its Community Edition (CE) and Enterprise Edition (EE) software that, under certain conditions, could allow an unauth",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The 10 Most Expensive Pok\u00e9mon Cards of 2026 (So Far)",
    body: "These are the most expensive Pok\u00e9mon TCG cards of 2026 so far, including high-value Ascended Heroes pulls like SIR Pikachu ex and SIR Mega Gengar ex, along with a couple of surprises as well.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It's Incredibly Well-Made, But\u2026' \u2014 Former PlayStation Boss Warned Clair Obscur: Expedition 33 Devs It Would Be 'Overlooked' if They Called It a Turn-Based RPG",
    body: "Former PlayStation lead Shuhei Yoshida warned the developers behind Clair Obscur: Expedition 33 about calling it a \"turn-based RPG\" because \"that alone might cause players to overlook it.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cavern C2 Uses DNS and Google Apps Script to Blend Into Legitimate Traffic",
    body: "Cybersecurity researchers have traced the continued evolution of the Cavern (aka Cav3rn) command-and-control (C2) framework used by Iranian nation-state hackers in attacks targeting entities in Israel",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Aliens: Fireteam Elite 2 \u2013 The Final Preview",
    body: "Aliens: Fireteam Elite 2 seems like one of those lazy Sunday games, where you kill part of an afternoon playing a couple hours with friends. It gets Aliens and understands that forty miles of bad road",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Original Mass Effect Is the Trilogy\u2019s Best Story, Hands Down",
    body: "The entire Mass Effect trilogy is fantastic, but the first game's story is head-and-shoulders above the tales told in the later games.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Snowflake GitHub Actions Flaw Lets Crafted Issues Trigger Command Injection",
    body: "Cybersecurity researchers at Wiz&nbsp;have disclosed a new GitHub Actions workflow injection vulnerability in Snowflake's public&nbsp;snowflakedb/snowflake-connector-net repository that it said could ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Forminator WordPress Flaw Can Enable Unauthenticated RCE via Malicious PHP Uploads",
    body: "A critical security flaw has been disclosed in Forminator Forms, a WordPress plugin with more than 600,000 active installations, that could be exploited to achieve arbitrary code execution on suscepti",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Aliens: Fireteam Elite 2 \u2013 The Final Preview",
    body: "Aliens: Fireteam Elite 2 seems like one of those lazy Sunday games, where you kill part of an afternoon playing a couple hours with friends. It gets Aliens and understands that forty miles of bad road",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "There's Now a Fortnite Star Wars Skin You Need to Visit Disneyland to Unlock",
    body: "Fortnite now has an exclusive Star Wars skin available only to those who visit two Disneyland parks.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Mustang Panda Adds Signed Windows Rootkit to CoolClient Backdoor for Stealth",
    body: "The threat actor known as HoneyMyte (aka&nbsp;Mustang Panda) has been observed deploying an updated version of the CoolClient backdoor with a signed Windows kernel-mode rootkit that can hide and prote",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metroid Prime 4 and Pok\u00e9mon Legends: Z-A Drop to Just $32 for Switch 2",
    body: "Get Metroid Prime 4: Beyond and Pok\u00e9mon Legends: Z-A for just $31.99 each during Woot's 24-hour flash sale.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "10 Years Later, This is Still the Hardest Platinum Trophy I\u2019ve Ever Earned",
    body: "10 years later, this is still the hardest platinum trophy I\u2019ve ever earned.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "IAM Compliance Requirements and Best Practices",
    body: "IAM compliance is the practice of demonstrating that identity and access controls are not only documented but actually enforced across users, applications, infrastructure, and non-human identities. Th",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metroid Prime 4 and Pok\u00e9mon Legends: Z-A Drop to Just $32 for Switch 2",
    body: "Get Metroid Prime 4: Beyond and Pok\u00e9mon Legends: Z-A for just $31.99 each during Woot's 24-hour flash sale.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "10 Years Later, This is Still the Hardest Platinum Trophy I\u2019ve Ever Earned",
    body: "10 years later, this is still the hardest platinum trophy I\u2019ve ever earned.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Hackers Spend Nearly $7 Million on Expired Domains to Redirect Traffic to Scams and Malware",
    body: "Threat actors are acquiring expired domains to inherit website traffic and reputation to redirect victims to scams and malware on a large scale.\n\nDNS threat intelligence firm Infoblox has given the na",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metroid Prime 4 and Pok\u00e9mon Legends: Z-A Drop to Just $32 for Switch 2",
    body: "Get Metroid Prime 4: Beyond and Pok\u00e9mon Legends: Z-A for just $31.99 each during Woot's 24-hour flash sale.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Star Wars: Magellan Was a AAA Action RPG Where You Could Play as a Jedi or Mandalorian",
    body: "Footage has emerged of Star Wars: Magellan, a scrapped action RPG that let you play as either a Jedi or Mandalorian.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Unisoc VoLTE Video Call Exploit Chain Can Give Attackers Full Android Kernel Access",
    body: "Security researchers at SSD Secure Disclosure have published a two-stage exploit chain that achieves full Android kernel access on devices running Unisoc modem firmware through a VoLTE video call, wit",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Mortal Shell 2 Review",
    body: "This sequel's expansion into a large scale action-RPG is mostly a successful one.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Metroid Prime 4 and Pok\u00e9mon Legends: Z-A Drop to Just $32 for Switch 2",
    body: "Get Metroid Prime 4: Beyond and Pok\u00e9mon Legends: Z-A for just $31.99 each during Woot's 24-hour flash sale.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "\u26a1 Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More",
    body: "The expensive attacks are not always the clever ones.\n\nThis week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problem",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "How MCP Servers Can Expose Enterprise Secrets",
    body: "MCP servers can expose enterprise secrets through plaintext configuration files, over-permissioned access and prompt injection, often before security teams even know the server is running. As more org",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "SAP Commerce Cloud CVE-2026-58231 Targeted in Exploitation Attempts Days After Patch",
    body: "A maximum-severity security vulnerability impacting SAP Commerce Cloud is witnessing active exploitation efforts.\n\nThe vulnerability, tracked as CVE-2026-58231, is rated 10.0 on the CVSS scoring syste",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Apple macOS Screen Sharing Flaw Exploited on Internet-Exposed Macs to Install Monero Miner",
    body: "A recently patched security flaw in Apple macOS has come under active exploitation in the wild to deploy a cryptocurrency miner, the Netherlands National Cyber Security Centre (NCSC) has warned.\n\nThe ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Halloween: The Game Will Actually Be Available in New Zealand After All",
    body: "Developer IllFonic alters course, and the game will now be made available digitally for NZ.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Evooo1Bot Linux Botnet Exploits Known Flaws to Turn Edge Devices Into SOCKS5 Proxies",
    body: "Cybersecurity researchers have flagged a previously undocumented Linux botnet family dubbed Evooo1Bot that derives its core functionality from the Mirai botnet source code and is equipped to turn inte",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Suspected China-Nexus Actor Exploits VMware vCenter Flaw, Deploys Babuk-Derived Ransomware",
    body: "Cybersecurity researchers have attributed the exploitation of a newly patched security flaw in Broadcom VMware vCenter to a suspected China-nexus advanced persistent threat (APT).\n\nThe attacks involve",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "The Best Deals Today: Final Fantasy VII Rebirth for Switch 2, Nioh 3, Project Hail Mary, and More",
    body: "The Best Deals Today: Final Fantasy VII Rebirth for Switch 2, Nioh 3, Project Hail Mary, and More",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "Simu Liu Says Sleeping Dogs Movie Has 'a REAL Path Forward' Amid Dealmaking With Square Enix",
    body: "Marvel star Simu Liu has offered a positive update on his long-in-development Sleeping Dogs movie adaptation, saying the film has \"a REAL path forward\" as discussions with game publisher Square Enix c",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "D23 Deep Dive Into Kingdom Hearts Panel: Everything Announced",
    body: "D23, Disney's biggest fan convention, continues with a special panel all about Kingdom Hearts. IGN is on the ground bringing you the biggest news, reveals, and updates from the presentation as it kick",
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
    title: "'I Want to Set the Record Straight: That Is Not Happening' \u2014 Kingdom Hearts 4 Devs Say KH4 '100%' Will Not Be Delayed Past Late 2027 Launch | D23 2026",
    body: "Kingdom Hearts 4 co-director Tai Yasue and series creator Tetsuya Nomura have assured fans that it is a \"100% thing\" the game will not be delayed past its late 2027 launch window.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Kingdom Hearts 4 Gets Extended Gameplay Trailer Featuring Playable Mickey, Donald, and Goofy | D23 2026",
    body: "Disney and Square Enix showed up for the Deep Dive into Kingdom Hearts panel at D23 2026 to show off an extended gameplay trailer for Kingdom Hearts 4 that features a first look at a playable King Mic",
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
    title: "D23 Deep Dive Into Kingdom Hearts Panel: Everything Announced \u2014 Updating Live",
    body: "D23, Disney's biggest fan convention, continues with a special panel all about Kingdom Hearts. IGN is on the ground bringing you the biggest news, reveals, and updates from the presentation as it kick",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "The Best Deals Today: Project Hail Mary 4K Blu-ray, Resident Evil Requiem, AirPods Pro 3, and More",
    body: "The Best Deals Today: Project Hail Mary 4K Blu-ray, Resident Evil Requiem, AirPods Pro 3, and More",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "100% Marvel's Spider-Man Games with One Month of Free IGN Guides Checklists",
    body: "100% Marvel's Spider-Man Games with One Month of Free IGN Guides Checklists",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "I Hope GTA 6 Borrows a Lot From GTA 4",
    body: "I've been playing Grand Theft Auto 4 for the first time since 2008, and there's a lot in it that I hope Rockstar borrows for GTA 6.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "Disney Animation Studios Boss Jared Bush Isn't Ruling Out a Possible Kingdom Hearts Movie",
    body: "Jared Bush, chief creative officer of Walt Disney Animation Studios, spoke about the possibility of a Kingdom Hearts feature film, and he didn\u2019t rule out the idea.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Kingdom Hearts 4 Gets New Trailer, Late 2027 Release Window, and a Disney+ Anime Series",
    body: "Big Kingdom Hearts news here at D23, with a new trailer for Kingdom Hearts 4, a late 2027 release window, and \u2014 surprise! \u2014 a Disney+ series.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
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
    title: "The Simpsons: Hit & Run 'Coming Back in Some Form,' Creator Matt Groening Says",
    body: "The Simpsons: Hit & Run 'is coming back in some form,' according to series creator Matt Groening.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Kingdom Hearts Is a Billion-Dollar Franchise, Disney Declares Ahead of Hotly Anticipated D23 Panel",
    body: "Kingdom Hearts is one of nine billion-dollar franchises Disney has under its video game banner.",
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
    title: "Upcoming Nintendo Switch 2 Games: Release Dates for 2026 and Beyond",
    body: "Building up the Switch 2 library.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "The Watcher, an Orwellian Surveillance Sim, Announced for PC",
    body: "In a totalitarian state, you play an observer who watches your neighbors in a strange city called Z. This is the premise behind The Watcher (aptly named!), which is in development for PC.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "Madden NFL 27 Review",
    body: "The gridiron calls once again.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Wingspan Pocket Card Game Review",
    body: "It's striking how Wingspan Pocket successfully recreates the feel and basic strategies of the original board game, in a fraction of the complexity and play time.",
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
    title: "LEGO Timmy and Tommy's Fun Day Out Is Easily the Best Animal Crossing Set So Far",
    body: "I\u2019ve actually been waiting for a LEGO set that really captures the spirit of Animal Crossing, and I think that\u2019s exactly what Timmy and Tommy do.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Toy Story 3 Will Be Delisted on Xbox Just Weeks Before Launch of New Remaster",
    body: "The original Toy Story 3 video game will soon be delisted from the digital Xbox store ahead of\u00a0the launch of its new remaster in October.",
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
    title: "Xbox Confirms Call of Duty: Modern Warfare 4 Beta Will Feature Single-Player Campaign Mission for the First Time",
    body: "Xbox is trying something new with the Call of Duty: Modern Warfare 4 beta, as the company has announced this month's pre-release tests will include a single-player campaign mission for the first time.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Inside Is the Closest Thing to a \u2018Perfect\u2019 Game I\u2019ve Ever Played",
    body: "Inside is the closest thing to a \"perfect\" video game I've ever played.",
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
    title: "25 Years of Mafia Video Games: An Oral History",
    body: "IGN interviews the developers of the Mafia video games on the legacy of the last 25 years.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Control Resonant: Exclusive Boss Fight Gameplay - IGN First",
    body: "We've got more brand new Control Resonant gameplay to show you, as we take a look at one of the game's biggest boss fights.",
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
    title: "Grand Theft Auto 2 \u2013 The Legacy Review",
    body: "Grand Theft Auto 2 boasts a number of noticeable technical improvements over the original and feels far better to play, but I'm glad its odd and unrecognisable setting was a one-time experiment.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "ICMYI: This Week in IGN Game Previews: Wolverine, Star Wars: Zero Company, and More!",
    body: "Your one-stop shop for any game preview coverage you might've missed at IGN this week from Marvel's Wolverine, Fire Emblem: Fortune's Weave, Star Wars: Zero Company, and Job Simulator: Human Relations",
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
    title: "Magic: The Gathering's The Hobbit Booster Boxes Secure a New Price Cut on Launch Day",
    body: "Amazon discounted MTG The Hobbit Play Booster Boxes for launch day. Here is where to find the deal and the most valuable cards in the set.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'It Doesn't Make Sense' \u2014 Uncharted Designer Doesn't Want a Remake of Drake's Fortune",
    body: "Benson Russell, designer for two of the original Uncharted games, explained why he\u2019s hesitant to welcome a potential remake of Drake\u2019s Fortune.",
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
    title: "'It Doesn't Make Sense' \u2014 Uncharted Designer Doesn't Want a Remake of Drake's Fortune",
    body: "Benson Russell, designer for two of the original Uncharted games, explained why he\u2019s hesitant to welcome a potential remake of Drake\u2019s Fortune.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Magic's New Foundations Commander Decks Are Worth Buying \u2014 Here's Why I'm So Excited",
    body: "Here is why MTG Foundations' $30 Commander precons are a must-buy for beginners and veterans alike.",
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
    title: "Xbox's Separation from Compulsion Games Seems Complete as Studio Is Listed as the Publisher of South of Midnight on Steam",
    body: "Xbox's separation from Compulsion Games \u2013 one of four studios it spun out independently during the recent Xbox \"reset\" amidst thousands of layoffs \u2013 appears to be complete, as the developer itself is ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Night School Staff Speak Out After Netflix Shuts Down Developer Following 'Top Tier' Launch of Unhinged",
    body: "Netflix is shuttering its Los Angeles-based game studio Night School, best known for side-scrolling psychological thrillers Oxenfree and Oxenfree 2: Lost Signals.",
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
    title: "Magic's New Foundations Commander Decks Are Worth Buying \u2014 Here's Why I'm So Excited",
    body: "Here is why MTG Foundations' $30 Commander precons are a must-buy for beginners and veterans alike.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Diplomacy: The Golden Blade Card Game Review",
    body: "Diplomacy: The Golden Blade is a card game that slims down and shortens the gameplay of the original Diplomacy board game, but it's not necessarily the better for it.",
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
    title: "Magic's New Foundations Commander Decks Are Worth Buying \u2014 Here's Why I'm So Excited",
    body: "Here is why MTG Foundations' $30 Commander precons are a must-buy for beginners and veterans alike.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The New Marvel Legends Action Figures Come With an Alt Art MTG Card",
    body: "The New Marvel Legends Action Figures Come With an Alt Art MTG Card",
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
    title: "Sabretooth Will Actually Steal Wolverine's Kills When They Team Up in Gameplay",
    body: "Sabretooth sounds like a real jerk in Marvel's Wolverine.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Insomniac Confirms Marvel's Wolverine Performance Mode Details",
    body: "Insomniac has revealed an impressive performance mode for Marvel\u2019s Wolverine on the base PlayStation 5.",
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
    title: "Phantom Blade Zero: How Donnie Yen is Pushing Action Games to New Heights",
    body: "Get an exclusive look behind the scenes into the motion capture process of a martial arts master.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Fire Emblem: Fortune\u2019s Weave \u2013 The Final Preview",
    body: "There are plenty of ways that Fire Emblem: Fortune's Weave is building out the features that defined Three Houses. I remain very interested to see how your decisions in the past will have an effect on",
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
    title: "Space Marine 2 Maker Saber Interactive Confirms It Will an Add AI Label to Rideshare Stimulator on Steam Following Controversy",
    body: "The boss of Rideshare Stimulator publisher Saber Interactive has confirmed that an AI label will be added to the game's Steam page, following public criticism.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "It Looks Like Bethesda Hid the True Name of The Elder Scrolls 6 in Starfield Years Ago",
    body: "As fans continue to suggest potential subtitles for The Elder Scrolls 6 based on the number of asterisks in Xbox boss Asha Sharma\u2019s tweet, a theory that Bethesda hid the actual name in Starfield years",
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
    title: "Dataminers Uncover Five Possible DLC Characters for Marvel Tokon: Fighting Souls",
    body: "Now that Marvel Tokon: Fighting Souls is officially out in the wild, dataminers have wasted no time digging through the game\u2019s files, and they\u2019ve found some interesting heroes mentioned within them.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Hogwarts Legacy 2 Is Officially in the Works, Confirms Warner Bros.",
    body: "A sequel to Hogwarts Legacy is actively in development, according to Warner Bros.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Exploit SharePoint Authentication Bypass After Public PoC Release",
    body: "Threat actors have begun to exploit a newly disclosed Microsoft SharePoint vulnerability following the release of a proof-of-concept (PoC) code.\n\nThe vulnerability in question is CVE-2026-55040 (CVSS ",
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
    title: "McDonald's Announces Eight Hello Kitty x Godzilla Toys Coming to Happy Meals This August",
    body: "Hello Kitty and Godzilla are coming to McDonald\u2019s Happy Meals this August in one of the most highly-anticipated collaborations to ever hit the fast food franchise.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Old School Runescape Officially Recognizes Player Who Reached Level 99 Fishing Catching Only Shrimp and Anchovies",
    body: "The official Old School Runescape X account has responded after a player managed to get their Fishing skill up to level 99 catching only shrimp and anchovies.",
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
    title: "CD Projekt Confirms Layoffs on The Witcher Multiplayer Spin-Off, Issues Statement",
    body: "CD Projekt has confirmed layoffs on The Witcher multiplayer spin-off, codenamed Project Sirius.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "PlayStation Plus Game Catalog for August 2026 Confirmed",
    body: "Sony has confirmed the PlayStation Plus Game Catalog for August 2026, which is headlined by Helldivers 2, Kingdom Come Deliverance 2, and Vampire Survivors.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Gunra Ransomware Exploits Fortinet FortiOS, FortiProxy Flaws to Breach Networks",
    body: "Cybersecurity and intelligence agencies from South Korea and the U.S. warned of Gunra ransomware attacks targeting critical infrastructure sectors and organizations across the world.\n\nTargets of these",
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
    title: "Gears of War: E-Day-Themed Xbox Controller Is Up for Preorder",
    body: "Microsoft is releasing a new limited-edition controller decked out with Gears of War: E-Day imagery to coincide with the game's release.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Warhammer 40,000: Dawn of War 4 Delayed Out of the September Crush, Dev Updates Roadmap of DLC",
    body: "Warhammer 40,000: Dawn of War 4 has been hit by a delay of two-and-a-half months, forcing an update to the DLC roadmap.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "ShieldBreak Zero-Day PoC Claims Microsoft Defender Patch Bypass With SYSTEM Access",
    body: "The security researcher going by the name Chaotic Eclipse (aka INFINITE NIGHTMARE, MSNightmare, and Nightmare-Eclipse) has released a proof-of-concept (PoC) for a new Microsoft zero-day called ShieldB",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Cisco ASA and FTD Flaw Exploited in the Wild Can Trigger Remote DoS",
    body: "Cisco has warned that a new vulnerability impacting Secure Firewall Adaptive Security Appliance (ASA) Software and Secure Firewall Threat Defense (FTD) Software has been exploited in the wild.\n\nThe hi",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The One Piece: Escape from Egghead Board Game Is Runny and Undercooked",
    body: "The push-your-luck dice rolling can be fun with the right group, but One Piece: Escape from Egghead stumbles due to ambiguous rules, questionable designs, and mechanics that break at different player ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Halo 2's Midnight Release Turns Into a Hostage Situation in a New Short Film",
    body: "A new short film known as Midnight Drop will turn Halo 2's highly anticipated midnight release into the worst night for a group of gamers.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Lazarus Exploits Windows Zero-Day to Gain SYSTEM Access and Deploy Backdoor",
    body: "The North Korean threat actor known as Lazarus Group has been attributed to the zero-day exploitation of a newly patched security flaw impacting Microsoft Windows to deliver a never-before-seen backdo",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Enterprise Defenses Recovered at the Edge and Collapsed Inside",
    body: "Enterprise defenses are tuned to catch the attacks that make noise. This year's data shows attackers winning by making none.\n\nAccording to Picus Labs' new Blue Report 2026, which measured more than 33",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "There Are Many Solid The Elder Scrolls 6 Subtitle Theories Based on Xbox Boss Asha Sharma\u2019s Asterisk-Filled Tease \u2014 but Let\u2019s Rule Out Skyrim 2 Right Now",
    body: "Yesterday, Xbox boss Asha Sharma teased The Elder Scrolls 6 with a tweet confirming she\u2019d witnessed a live playthrough of Bethesda\u2019s hotly anticipated open-world fantasy role-playing game. She did so ",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 5\u2019s Trevor Flipped the Bird at Rockstar's Haters",
    body: "The Genius of Grand Theft Auto 5\u2019s Trevor Philips: how Rockstar turned franchise backlash into an iconic character.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "737 Chrome VPN Extensions Caught Routing Traffic Through Proxies. Check If You Have One",
    body: "A massive set of 737 free VPN and proxy extensions have been found to mainly target Russian-speaking users seeking access to blocked services with an aim to intercept browser traffic and route them th",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI, Anthropic, Google API Flaw Let Weaker AI Models Decode Stronger Models' Reasoning",
    body: "A newly disclosed flaw in the way OpenAI, Anthropic, and Google carried hidden AI reasoning between API calls let researchers recover internal reasoning and secrets from session logs, including API ke",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Disney Confirms D23 Kingdom Hearts Panel Details, and Given Who's on It, We're Expecting Kingdom Hearts 4 News",
    body: "Kingdom Hearts 4 news looks set for later this week after Disney confirmed the details of its Kingdom Hearts panel at fan convention D23.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Huge Helldivers 2 Patch Adds New Illuminate Enemies, a New Biome 'Full of Fresh Horrors,' a Level Cap Increase and Much More",
    body: "Helldivers 2 developer Arrowhead has released a major update for the game, adding new Illuminate enemies, a new biome, and raising the level cap. Check out the 7.0.0 patch notes.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Adobe Patches Three CVSS 10.0 ColdFusion and Campaign Classic Flaws",
    body: "Adobe has shipped updates to address multiple critical security vulnerabilities impacting ColdFusion, Commerce, and Campaign Classic that, if successfully exploited, could result in arbitrary code exe",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Attackers Exploit VMware vCenter Vulnerability to Gain Persistent Remote Access",
    body: "Threat actors have begun to actively exploit a recently patched critical security flaw in Broadcom VMware vCenter, according to new findings from QUIRSO.\n\nThe vulnerability in question is CVE-2026-593",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "More Lord of the Rings Remasters Are in the Works Following War in the North Re-Release, Confirms Aspyr",
    body: "Aspyr has plans to re-release more Lord of the Rings games following its shadow drop of The Lord of the Rings: War in the North on modern platforms.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Marvel Tokon: Fighting Souls Review",
    body: "A gorgeous and innovative fighting game that can appeal to all skill levels.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Malicious LiteLLM Releases Tied to Trivy Hack May Have Exposed 2,100+ Organizations",
    body: "Two malicious LiteLLM releases sat on PyPI for about 40 minutes in March carrying credential-stealing code capable of harvesting cloud keys, SSH keys, Kubernetes tokens, database passwords, and other ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "SAP Commerce Cloud Flaw Could Let Unauthenticated Attackers Execute Arbitrary Code",
    body: "SAP has released patches to address a maximum-severity security flaw impacting Commerce Cloud (Data Hub Adapter) that could result in arbitrary code execution.\n\nThe vulnerability, assigned the CVE ide",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Xbox CEO Gets Elder Scrolls 6 Demo, Teases the Subtitle",
    body: "Xbox CEO Asha Sharma got to see a \"live playthrough\" of The Elder Scrolls 6, and she posted her reactions on social media afterwards. She also teased \u2013 in the vaguest of ways \u2013 the subtitle for the up",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Bethesda Finally Confirms The Elder Scrolls IV: Oblivion Remastered Patch Is Coming",
    body: "Bethesda has confirnmed a patch for The Elder Scrolls IV: Oblivion Remastered is on the way, with the Nintendo Switch 2 version now out the door.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Zoom Annotation Flaws Could Let a Meeting Participant Hijack Another Attendee's Client",
    body: "Anyone sharing their screen on a Zoom call could have taken over the computers of everyone watching, and anyone watching could have taken over the presenter's.\n\nThe flaw sat in the annotation tool, th",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Researchers Built a Fake Crypto Startup and Hired Three Suspected North Korean IT Workers",
    body: "Security researchers invented a cryptocurrency startup, advertised developer jobs, and hired three people they believe were North Korean operatives. Every virtual machine the company issued was record",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Crimson Desert Dev Conducting 'Extensive Research' on Multiplayer Modes, Plots Potential Sequels",
    body: "Pearl Abyss has detailed its plans for smash hit action role-playing game Crimson Desert, confirming it is exploring multiplayer modes. Meanwhile, we have a target launch window for the Nintendo Switc",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Intel Gamer Days Sale Stacks Walmart's Best Gaming PC Deals With Two Free Upcoming PC Games",
    body: "These aren't some no-name games, they'll otherwise cost $59.99 apiece at launch.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Microsoft Patches 398 Flaws Including a Windows Driver Zero-Day Under Active Attack",
    body: "Microsoft released its monthly security updates on Tuesday, and one of the flaws it closed is already being used in attacks.\n\nThe bug sits in a core Windows kernel driver that handles network socket o",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Kimwolf v7 Android Botnet Makes HTTP/2 DDoS Traffic Look Like Legitimate Browsing",
    body: "Cybersecurity researchers have discovered a new version of the Kimwolf/AISURU Android and Internet of Things (IoT) botnet that comes with significant improvements to improve its operational resilience",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Lord of the Rings: War in the North Legacy Edition Gets Shadow Drop on Modern Consoles and PC",
    body: "A brand new re-release of The Lord of the Rings: War in the North has been launched out of the blue on modern consoles and PC.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "The Legend of Zelda 40th Anniversary Nintendo Switch 2 Console Images Reportedly Leak",
    body: "Leaked images of a The Legend of Zelda 40th Anniversary Nintendo Switch 2 console and Pro Controller appear to be circulating online.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Sandworm-Linked UAC-0145 Uses Fake Job Interviews to Push VPN That Can Run Commands",
    body: "The Computer Emergency Response Team of Ukraine (CERT-UA) has disclosed details of a new social engineering campaign orchestrated by Russian nation-state threat actors targeting IT workers in the coun",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Mozilla Revokes Firefox and Thunderbird Linux Signing Key After Key Lands in Private Repo",
    body: "Mozilla has scrapped the cryptographic key behind Firefox and Thunderbird downloads for Linux after an unencrypted copy of it was committed by mistake to one of the company's own private code reposito",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Assassin's Creed Black Flag Resynced Players Only Have a 47% Win Rate Against Legendary Ships",
    body: "Struggling against the Legendary Ships in Assassin's Creed Black Flag Resynced? Don't worry, you're not alone.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Beloved Terraria Mod Shut Down Following Sexual Misconduct Allegations, Creators Reportedly Turn Down Streamer xQc's Offer to Save It",
    body: "Development on a beloved Terraria mod is shutting down following sexual misconduct allegations revolving around its lead developer. Meanwhile, the creators of the mod have reportedly turned down an of",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Researchers Disclose AI-Assisted SharePoint Exploit Chain Reaching Unauthenticated RCE",
    body: "Security researchers found a way to enter Microsoft SharePoint servers as any user, including an administrator, with no valid account. A significant part of the work that found it was done through an ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "DeadLock Ransomware Uses Polygon Smart Contracts to Make Extortion Infra Harder to Disrupt",
    body: "The ransomware group known as DeadLock has been observed using decentralized infrastructure to facilitate victim communications and data leak operations in a bid to improve operational resilience.\n\n\"I",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Selling Impossible Pok\u00e9mon: Ban Reports Point to Long-Rumored Black Market for 'Injecting' Rare Pok\u00e9mon Go Quests, Sparking Speculation of Insider Involvement",
    body: "Pok\u00e9mon Go players are reportedly being banned for obtaining rare creatures from questlines \"in an unauthorized manner\", seemingly confirming past whispers of a black market that allows fans to fraudu",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "'A Must-Have Day 1 Purchase': Remedy Bets Big on Control Resonant, as Alan Wake 2 Passes 3 Million Sold",
    body: "Alan Wake and Control developer Remedy is betting big on Control Resonant, as Alan Wake 2 finally passes 3 million copies sold.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "OpenAI Launches GPT-5.6-Cyber with Reduced Safeguards for Exploit Development",
    body: "OpenAI on Monday unveiled a new cybersecurity-focused model called GPT\u20115.6\u2011Cyber that it said is focused on vulnerability research, penetration testing, and incident response.\n\n\"Built on GPT\u20115.6 Sol, ",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "A Malicious SIM Card Can Run Attacker Code Inside the Modems Behind Cellular IoT Devices",
    body: "A malicious SIM card can order the device it sits in to run commands of the attacker's choosing. On the cellular modules built into electric-vehicle chargers, industrial routers, and car telematics un",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Saber CEO Admits 'Dig' at Gearbox Boss Randy Pitchford in New Game Trailer, Saying It's Payback for 'Shots at Embracer in Borderlands 4'",
    body: "Beef between two high-profile video game industry CEOs has bubbled over into the public domain, via a trailer for new taxi simulation game Rideshare Stimulator.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "New, Temporary Time Attack Circuit Coming to Forza Horizon 6 for Four Weeks",
    body: "The Horizon Mascot Party brings new cars, a new track, and new custom props.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Researchers Turn USB Auto-Install Into a Full SYSTEM Takeover on Windows 11",
    body: "Windows Plug and Play can be abused to fetch signed vendor software for an emulated USB device and execute privileged installation components that researchers chained to SYSTEM access on a fully updat",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Malicious MCP Servers Can Split Instructions to Make AI Coding Agents Exfiltrate Secrets",
    body: "A malicious tool server connected to an AI coding assistant can quietly walk off with SSH keys, environment secrets, source code, and customer data without ever sending one obviously harmful instructi",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Halloween: The Game Refused Classification in Australia, So It Won\u2019t Be Sold in New Zealand Despite the Fact That\u2019s a Different Country",
    body: "The determination involves Australia\u2019s rules against having incentives for illicit drug use, but it\u2019s entirely unclear why it impacts NZ, or why Illfonic won\u2019t tweak its terminology to skirt the rules",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Professional Smash Bros. Melee Payer Hungrybox Popped Off So Hard After Winning a Game That He Literally Fainted",
    body: "Professional Super Smash Bros. Melee player Juan \u2018Hungrybox\u2019 Debiedma went viral over the weekend after fainting while celebrating a victory over fellow player Hugh \u2018SluG\u2019 Hegarty.",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "Hackers Breach Polish Power Plant Controls via Private Cellular Network and Shut Turbine",
    body: "Attackers shut down a steam turbine and the process-water treatment system at a Polish combined heat and power plant by coming in over the private cellular network the local grid operator uses to reac",
    time: "just now",
    link: "#"
  },
  {
    section: "tech",
    tag: "TRENDING",
    category: "HACKING",
    color: "var(--violet)",
    title: "BdThemes Supply Chain Attack Poisons JSON to Create Rogue WordPress Admins",
    body: "Cybersecurity researchers have warned of a supply chain compromise impacting WordPress plugin vendor BdThemes, prompting the content management systems (CMS) platform's plugins team to temporarily dis",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "GTA 6 Boss Says More People Are Pre-Ordering the $100 Version of the Game",
    body: "Grand Theft Auto 6 fans are pre-ordering the $100 Ultimate Edition more than the standard edition of the game.",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Battlefield 6 Player With Over 400 Hours Gets Full Refund from Steam After Key Modes Were Removed",
    body: "A Battlefield 6 player with hundreds of hours of playtime has scored a full refund of the game after Battlefield Studios removed key modes from the game's quick-play matchmaking.",
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
    title: "Atlus Producer Says 'I Think We Have to Do' Persona 1 and 2 Remakes",
    body: "Kazuhisa Wada, producer for Atlus' P-Studio, says he \"can't say for sure\" if Persona 1 and 2 remakes are coming, but said they are still games he thinks \"we have to do.\"",
    time: "just now",
    link: "#"
  },
  {
    section: "gaming",
    tag: "TRENDING",
    category: "GAMING",
    color: "var(--brand)",
    title: "Fields of Mistria Review So Far",
    body: "This fantasy farming sim takes place in a pastel pixel art world full of mythical creatures and magic.",
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
