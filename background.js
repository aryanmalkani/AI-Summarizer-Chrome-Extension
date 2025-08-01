chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarizeText",
    title: "🔍 Summarize This Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "summarizeText") {
    const selectedText = info.selectionText;
    const summary = await summarizeText(selectedText);

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (summary) => alert("Summary:\n" + summary),
      args: [summary]
    });
  }
});

async function summarizeText(text) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_GROQ_API_KEY_HERE",  // Replace with your Groq API key
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "user", content: `Summarize this in a medium format:\n\n${text}` }
      ],
      temperature: 0.3,
      max_tokens: 512
    })
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Failed to generate summary.";
}