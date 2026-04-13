import React, { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are Yuvraj's personal AI portfolio assistant. You represent Yuvraj Singh Shekhawat and help visitors learn about him in a friendly, professional, and engaging way.

Here is everything about Yuvraj:

PERSONAL INFO:
- Full Name: Yuvraj Singh Shekhawat
- Location: Jaipur, Rajasthan, India
- Email: yuvrajshekhawat405@gmail.com
- LinkedIn: https://www.linkedin.com/in/yuvraj-singh-shekhawat-155719316
- GitHub: https://github.com/yuvrajsinghshek
- Phone: +91-8955158901

CURRENT ROLE:
- Data Science Trainee at WE RNS IT Solutions Pvt. Ltd. (Tips-G, RNS Group) — June 2024 to Present (Jaipur)

EDUCATION:
- MCA (Master of Computer Applications) in Data Science — Lovely Professional University, July 2024–Present
- Bachelor of Arts — University of Rajasthan, 2021–2024
- Senior Secondary (XII) — RBSE, 2020–2021, Percentage: 87%
- Background in PCM (Physics, Chemistry, Maths)

SKILLS:
- Programming: Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SciPy), SQL (MySQL, PostgreSQL), C, JavaScript, HTML, CSS
- ML/DL/NLP/GenAI: Machine Learning, Deep Learning, Natural Language Processing, Transformers, LLM Fundamentals, Computer Vision (basics)
- Frameworks & Tools: TensorFlow, Streamlit, Git, GitHub, Jupyter Notebook
- Data & Visualization: MS Excel, Power BI, Tableau, EDA, Statistical Analysis
- Soft Skills: Problem Solving, Analytical Thinking, Effective Communication, Team Management, Cross-functional Collaboration, Rapid Learning, Curriculum Design

PROJECTS:
1. NLP-Based Travel Guide Chatbot (In Progress) — Conversational AI chatbot using tokenisation, embeddings, intent recognition for real-world travel queries.
2. Movie Revenue Prediction & Recommendation System (Completed) — EDA + ML regression to predict revenue + Streamlit recommendation app using collaborative filtering. GitHub: https://github.com/yuvrajsinghshek/movie-recommendation-system-streamlit
3. Laptop Price Prediction & Recommendation (Completed) — End-to-end ML pipeline + Streamlit app for real-time price estimation. GitHub: https://github.com/yuvrajsinghshek/laptop_price_prediction
4. Hotel Booking Cancellation Analysis (Completed) — Data cleaning, EDA, statistical analysis to identify cancellation factors. GitHub: https://github.com/yuvrajsinghshek/Hotel-Booking-Analysis

CERTIFICATIONS:
1. Supervised Machine Learning: Regression and Classification — DeepLearning.AI & Stanford (Coursera), Aug 2025. Verify: https://coursera.org/verify/78DU92BUXHF2
2. Advanced Learning Algorithms — DeepLearning.AI & Stanford (Coursera), Dec 2025. Verify: https://coursera.org/verify/BCRTR3DEB7HZ
3. Unsupervised Learning, Recommenders & Reinforcement Learning — DeepLearning.AI & Stanford (Coursera), Feb 2026. Verify: https://coursera.org/verify/AWW31QH4ZMII
4. Python (Basic) — HackerRank, Jul 2025
5. SQL Basic — HackerRank, Jul 2025
6. SQL Intermediate — HackerRank, Jul 2025
7. SQL Advanced — HackerRank, Jul 2025
8. Complete ML & Data Science Skill Up — GeeksforGeeks
9. Data Analytics Virtual Experience — TATA (Forage)
10. Financial Literacy Course for Bharat — NISM (SEBI), Jul 2025

GOALS:
- Become a skilled Data Scientist & Analyst
- Solve real business problems using data-driven insights
- Work on GenAI, NLP, and Computer Vision projects
- Open to full-time roles and internships

PERSONALITY:
- Passionate about turning data into stories
- Creative and analytical thinker
- Strong communicator with good English (written & verbal)
- Eager to learn and collaborate

INSTRUCTIONS:
- Be friendly, warm, and conversational
- Answer questions about Yuvraj's skills, projects, education, experience, certifications
- If asked about projects, mention the GitHub links
- If asked about certificates, mention the verify links
- Keep responses concise but informative (2-4 sentences max unless more detail is needed)
- If someone asks something not related to Yuvraj's portfolio, politely redirect them
- If someone wants to hire or contact Yuvraj, give his email and LinkedIn
- Speak in a mix of professional and friendly tone
- Use emojis occasionally to keep it engaging`;

const DEFAULT_SUGGESTIONS = [
  "Skills & Tech Stack",
  "Projects",
  "Experience",
  "Contact",
  "Education"
];

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--accent)',
          animation: `pulse 1.2s ${i * 0.2}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi, I am Yuvraj's portfolio assistant. Ask me about his skills, projects, or anything else.",
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const API_KEY = "AIzaSyCEXWtedgp7N_TwXNEiuWhWs4vFG6YqZvU";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) { setHasNew(false); inputRef.current?.focus(); }
  }, [open]);

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    const newMessages = [...messages, { role: 'user', content: msg }];
    setMessages(newMessages);
    setLoading(true);

    try {
          let formattedContents = [];
          for (const m of newMessages.slice(1)) {
            const role = m.role === 'assistant' ? 'model' : 'user';
            // Gemini strictly requires alternating roles and no consecutive duplicates
            if (formattedContents.length > 0 && formattedContents[formattedContents.length - 1].role === role) {
              formattedContents[formattedContents.length - 1].parts[0].text += '\n\n' + m.content;
            } else {
              formattedContents.push({ role, parts: [{ text: m.content }] });
            }
          }
          // Ensure it starts with user
          if (formattedContents.length > 0 && formattedContents[0].role === 'model') {
             formattedContents.shift();
          }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: formattedContents
        }),
      });
      const data = await response.json();
      if (!response.ok) { console.error("Gemini API Error:", data); }
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      if (!open) setHasNew(true);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! Something went wrong communicating with the API. Please try again in a moment 🙏" }]);
      if (!open) setHasNew(true);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  let activeSuggestions = DEFAULT_SUGGESTIONS;
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content.toLowerCase() || '';
  if (lastUserMsg.includes('project')) {
    activeSuggestions = ["NLP Travel Guide", "Movie Predictor", "Laptop Price Predictor", "Hotel Booking Analysis", "Back to Menu"];
  } else if (lastUserMsg.includes('skill') || lastUserMsg.includes('tech')) {
    activeSuggestions = ["Programming", "ML/DL/NLP", "Frameworks & Tools", "Back to Menu"];
  } else if (lastUserMsg.includes('experience')) {
    activeSuggestions = ["Role at WE RNS", "Responsibilities", "Back to Menu"];
  } else if (lastUserMsg.includes('contact') || lastUserMsg.includes('hire')) {
    activeSuggestions = ["Email", "LinkedIn", "GitHub", "Back to Menu"];
  } else if (lastUserMsg.includes('education')) {
    activeSuggestions = ["MCA Details", "Previous Degrees", "Certifications", "Back to Menu"];
  }

  const handleSuggestionClick = (s) => {
    if (s === "Back to Menu") {
      setMessages(prev => [...prev, { role: 'assistant', content: "What else would you like to know?" }]);
      return;
    }
    send(s);
  };

  return (
    <>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 28, left: 28, zIndex: 200,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent), #5b3fd4)',
          boxShadow: open ? '0 8px 40px rgba(124,92,252,0.7)' : '0 8px 32px rgba(124,92,252,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s',
          transform: open ? 'rotate(0deg) scale(1.05)' : 'scale(1)',
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h2a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1V9a2 2 0 0 1 2-2h2V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z"/>
            <path d="M9 13v-2"/>
            <path d="M15 13v-2"/>
            <path d="M9 17h6"/>
          </svg>
        )}
        {hasNew && !open && (
          <div style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12, borderRadius: '50%', background: 'var(--accent4)', border: '2px solid var(--bg)', animation: 'pulse 2s infinite' }} />
        )}
      </div>

      <div style={{
        position: 'fixed', bottom: 94, left: 28, zIndex: 199,
        width: 330, height: 'min(480px, 65vh)',
        background: 'var(--bg2)',
        border: '1px solid var(--border2)',
        borderRadius: 24,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,92,252,0.1)',
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        pointerEvents: open ? 'all' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
      }}>

        <div style={{
          padding: '14px 18px',
          background: 'linear-gradient(135deg, rgba(124,92,252,0.15), rgba(0,229,255,0.05))',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: 12,
          flexShrink: 0,
        }}>
          <div style={{ position: 'relative' }}>
            <img src="/mine.jpeg" alt="Yuvraj" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '2px solid var(--accent)' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>Yuvraj's Assistant</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text3)' }}><span style={{ color: 'var(--accent4)' }}>●</span> Online – Ask me anything.</div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 8, alignItems: 'flex-end' }}>
              {m.role === 'assistant' && (
                <img src="/mine.jpeg" alt="bot" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              )}
              <div style={{
                maxWidth: '85%',
                padding: '10px 14px',
                borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: m.role === 'user' ? 'linear-gradient(135deg, var(--accent), #5b3fd4)' : 'var(--surface)',
                border: m.role === 'assistant' ? '1px solid var(--border)' : 'none',
                fontSize: 13, lineHeight: 1.5,
                color: 'var(--text)',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
              }}>
                {m.content.replace(/\*/g, '')}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <img src="/mine.jpeg" alt="bot" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              <div style={{ padding: '10px 16px', borderRadius: '18px 18px 18px 4px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div style={{ padding: '0 12px 8px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {activeSuggestions.map(s => (
            <button key={s} onClick={() => handleSuggestionClick(s)}
              style={{
                background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.25)',
                borderRadius: 100, padding: '5px 12px',
                fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(124,92,252,0.2)'}
              onMouseLeave={e => e.target.style.background = 'rgba(124,92,252,0.1)'}
            >{s}</button>
          ))}
        </div>

        <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8, flexShrink: 0 }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about skills, projects..."
            style={{
              flex: 1, background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '10px 14px',
              color: 'var(--text)', fontSize: 13,
              outline: 'none', fontFamily: 'var(--font-body)',
              transition: 'border-color 0.2s',
              minWidth: 0,
            }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              width: 38, height: 38, borderRadius: 12, flexShrink: 0,
              background: input.trim() && !loading ? 'linear-gradient(135deg,var(--accent),#5b3fd4)' : 'var(--surface)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              boxShadow: input.trim() && !loading ? '0 4px 16px rgba(124,92,252,0.4)' : 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
