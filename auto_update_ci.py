#!/usr/bin/env python3
"""
GitHub Actions-এর জন্য: RSS ফিড থেকে আসল খবর টেনে news-data.js আপডেট করে।
এখানে git commit/push করে না — সেটা workflow yml ফাইলে হয়।
"""
import urllib.request
import xml.etree.ElementTree as ET
import re
import json
import os

NEWS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "news-data.js")

FEEDS = [
    {"url": "https://feeds.feedburner.com/ign/games-all", "section": "gaming", "category": "GAMING", "color": "var(--brand)"},
    {"url": "https://feeds.feedburner.com/TheHackersNews", "section": "tech", "category": "HACKING", "color": "var(--violet)"},
]
ITEMS_PER_FEED = 2

def fetch_feed(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as r:
        data = r.read()
    root = ET.fromstring(data)
    items = []
    for item in root.iter("item"):
        title = item.findtext("title", "").strip()
        desc = re.sub("<[^<]+?>", "", item.findtext("description", "")).strip()
        if title:
            items.append({"title": title, "body": desc[:200]})
    return items

def load_existing_titles():
    with open(NEWS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    titles = re.findall(r'title:\s*"((?:[^"\\]|\\.)*)"', content)
    return content, set(t.lower() for t in titles)

def build_entry(section, category, color, title, body):
    obj = {
        "section": section, "tag": "TRENDING", "category": category,
        "color": color, "title": title, "body": body if body else title,
        "time": "just now", "link": "#",
    }
    lines = ["  {"]
    for k, v in obj.items():
        lines.append(f"    {k}: {json.dumps(v)},")
    lines[-1] = lines[-1].rstrip(",")
    lines.append("  },")
    return "\n".join(lines)

def main():
    content, existing_titles = load_existing_titles()
    new_entries = []

    for feed in FEEDS:
        try:
            items = fetch_feed(feed["url"])
        except Exception as e:
            print(f"[skip] {feed['url']}: {e}")
            continue
        added = 0
        for it in items:
            if added >= ITEMS_PER_FEED:
                break
            if it["title"].lower() in existing_titles:
                continue
            new_entries.append(build_entry(feed["section"], feed["category"], feed["color"], it["title"], it["body"]))
            existing_titles.add(it["title"].lower())
            added += 1

    if not new_entries:
        print("নতুন কোনো খবর নেই।")
        return

    insertion = "\n" + "\n".join(new_entries)
    new_content = content.replace("const NEWS_ALL = [", "const NEWS_ALL = [" + insertion, 1)
    with open(NEWS_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"{len(new_entries)}টা নতুন খবর যোগ হয়েছে।")

if __name__ == "__main__":
    main()
