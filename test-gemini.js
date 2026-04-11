const API_KEY = "AIzaSyAQ1CTSdl3A7DNRZkQobRmO7fYQAhCdEYM";

const fetchGemini = async () => {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: "You are Yuvraj's portfolio assistant." }]
          },
          contents: [
            { role: 'user', parts: [{ text: 'NLP Travel Guide' }] }
          ]
        })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}
fetchGemini();
