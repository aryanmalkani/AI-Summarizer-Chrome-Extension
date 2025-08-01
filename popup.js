document.getElementById("summarizePage").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText,
  }, async (results) => {
    const text = results[0].result;
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
    document.getElementById("summary").textContent = data.choices?.[0]?.message?.content || "Failed to generate summary.";
  });
});