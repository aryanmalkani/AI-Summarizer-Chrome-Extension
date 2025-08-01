# 🔍 AI Summarizer Chrome Extension

This Chrome Extension allows users to **summarize selected text or full web pages** into a clean, medium-style format using Groq's LLMs (like `llama3-8b-8192`).

> ⚠️ This extension is **not yet published** on the Chrome Web Store. Follow the manual installation instructions below to use it locally.

---

## ✨ Features

- Summarizes **selected text** via right-click context menu.
- Summarizes **entire page** via popup UI.
- Uses Groq’s blazing-fast inference endpoint.
- Lightweight, no background analytics or tracking.

---

## 🚀 Installation (Manual - Unpacked Extension)

1. **Clone or download** this repository.
2. **Get your Groq API key**:
   - Sign up at [https://console.groq.com](https://console.groq.com)
   - Copy your API key (starts with `gsk_...`)
3. Open **Chrome**, go to `chrome://extensions/`.
4. Enable **Developer Mode** (top right).
5. Click **"Load unpacked"**.
6. Select the folder containing this extension (the one with `manifest.json`).
7. Done!

---

## 🛠️ How to Use

### ▶️ Option 1: Right-click Context Menu
1. Select any text on a webpage.
2. Right-click and choose **"🔍 Summarize This Text"**.
3. A popup will display the summarized content.

### ▶️ Option 2: From the Extension Popup
1. Click the extension icon from Chrome’s toolbar.
2. Click the **"Summarize Page"** button.
3. The summary will appear in the popup.

---

## 🔑 Add Your Groq API Key

In both `background.js` and `popup.js`, find this line:

```js
"Authorization": "Bearer YOUR_GROQ_API_KEY_HERE"  // Replace with your Groq API key
