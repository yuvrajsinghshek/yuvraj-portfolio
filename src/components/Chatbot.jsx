import React, { useState, useRef, useEffect } from 'react';

const KNOWLEDGE_BASE = {
  greetings: {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'morning', 'evening', 'how are you', 'howdy', 'what\'s up', 'sup'],
    responses: [
      "Hello! I'm Yuvraj's AI assistant. How can I help you today? 😊",
      "Hi there! I represent Yuvraj Singh Shekhawat. Feel free to ask me about his projects, skills, or experience!",
      "Hey! I'm doing great, thanks for asking! I'm here to tell you everything about my boss, Yuvraj. What would you like to know?"
    ]
  },
  about: {
    keywords: ['who is yuvraj', 'about yuvraj', 'tell me about him', 'yuvraj singh shekhawat'],
    response: "Yuvraj Singh Shekhawat is an aspiring **Data Scientist** and **MCA (Data Science)** student at Lovely Professional University. He is passionate about turning data into stories and solving business problems with AI. Currently, he is a Data Science Trainee at WE RNS IT Solutions."
  },
  project_nlp: {
    keywords: ['travel', 'guid', 'nlp chatbot'],
    response: "Yuvraj's **NLP-Based Travel Guide Chatbot** uses tokenisation, embeddings, and intent recognition to assist users with travel queries. It's a great example of his work in Conversational AI."
  },
  project_movie: {
    keywords: ['movie', 'revenue', 'recommend'],
    response: "Yuvraj developed a **Movie Revenue Prediction & Recommendation System** using ML regression and collaborative filtering. He even built a Streamlit app for it! [View on GitHub](https://github.com/yuvrajsinghshek/movie-recommendation-system-streamlit)"
  },
  project_laptop: {
    keywords: ['laptop', 'price'],
    response: "In the **Laptop Price Prediction & Recommendation** project, Yuvraj built an end-to-end ML pipeline with a Streamlit interface to estimate prices based on hardware specifications. [View on GitHub](https://github.com/yuvrajsinghshek/laptop_price_prediction)"
  },
  project_hotel: {
    keywords: ['hotel', 'booking', 'cancellation'],
    response: "Yuvraj analyzed **Hotel Booking Cancellations** using EDA and statistical analysis to uncover the main reasons behind booking changes. [View on GitHub](https://github.com/yuvrajsinghshek/Hotel-Booking-Analysis)"
  },
  skill_python: {
    keywords: ['python', 'numpy', 'pandas', 'scikit', 'programming'],
    response: "Yuvraj is highly proficient in **Python** for data science, using tools like NumPy and Pandas. He also has a strong foundation in C and JavaScript."
  },
  skill_sql: {
    keywords: ['sql', 'mysql', 'postgre', 'database'],
    response: "Yuvraj has master-level **SQL** skills (MySQL, PostgreSQL) and is certified from HackerRank across all levels (Basic to Advanced)."
  },
  skill_ml: {
    keywords: ['ml', 'machine learning', 'deep learning', 'nlp', 'vision', 'transformer', 'llm', 'frameworks & tools'],
    response: "Yuvraj specializes in **AI & ML**, including Deep Learning, NLP (Transformers/LLMs), and frameworks like TensorFlow. He is also skilled in data visualization using Power BI and Tableau."
  },
  skills: {
    keywords: ['skill', 'tech', 'stack', 'language', 'data science'],
    response: "Yuvraj is a multi-talented Data Scientist with expertise in Python, SQL, Machine Learning, and NLP. He uses a variety of tools like TensorFlow, Power BI, and Tableau to solve problems."
  },
  projects: {
    keywords: ['project', 'github', 'work'],
    response: "Yuvraj has completed several projects including Movie Revenue Prediction, Laptop Price Predictor, and Hotel Booking Analysis. You can explore all of them on his [GitHub](https://github.com/yuvrajsinghshek)!"
  },
  experience: {
    keywords: ['experience', 'work', 'job', 'internship', 'rns', 'role', 'responsibilities'],
    response: "Currently, Yuvraj is a **Data Science Trainee** at **WE RNS IT Solutions Pvt. Ltd.** in Jaipur. He focuses on data-driven projects and has prior experience in collaborative environments."
  },
  education: {
    keywords: ['education', 'college', 'university', 'mca', 'degree', 'ba', 'school', 'previous degrees', 'mca details'],
    response: "Yuvraj is pursuing his **MCA in Data Science** at Lovely Professional University. He holds a **Bachelor of Arts** from the University of Rajasthan and a strong school background in Physics, Chemistry, and Maths."
  },
  certifications: {
    keywords: ['certificate', 'certify', 'coursera', 'hackerrank', 'deeplearning.ai'],
    response: "Yuvraj has earned certificates in Supervised ML, Advanced Learning Algorithms, and Unsupervised Learning from Stanford & DeepLearning.AI, plus SQL/Python certs from HackerRank."
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'linkedin', 'hire', 'call'],
    response: "Feel free to reach out to Yuvraj:\n\n• **Email**: yuvrajshekhawat405@gmail.com\n• **LinkedIn**: [Yuvraj's Profile](https://www.linkedin.com/in/yuvraj-singh-shekhawat-155719316)\n• **GitHub**: [github.com/yuvrajsinghshek](https://github.com/yuvrajsinghshek)\n• **Phone**: +91-8955158901"
  }
};

const getBotResponse = (input) => {
  const text = input.toLowerCase();
  
  // 1. Check for greetings first
  if (KNOWLEDGE_BASE.greetings.keywords.some(k => text.includes(k))) {
    return KNOWLEDGE_BASE.greetings.responses[Math.floor(Math.random() * KNOWLEDGE_BASE.greetings.responses.length)];
  }

  // 2. Check for "Who is Yuvraj" specifically
  if (KNOWLEDGE_BASE.about.keywords.some(k => text.includes(k))) {
    return KNOWLEDGE_BASE.about.response;
  }

  // 3. Check for specific projects and skills
  const specificCategories = [
    'project_nlp', 'project_movie', 'project_laptop', 'project_hotel',
    'skill_python', 'skill_sql', 'skill_ml'
  ];
  for (const cat of specificCategories) {
    if (KNOWLEDGE_BASE[cat].keywords.some(k => text.includes(k))) {
      return KNOWLEDGE_BASE[cat].response;
    }
  }

  // 4. Check for general categories
  const generalCategories = ['skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
  for (const cat of generalCategories) {
    if (KNOWLEDGE_BASE[cat].keywords.some(k => text.includes(k))) {
      return KNOWLEDGE_BASE[cat].response;
    }
  }

  // 5. Default Fallback
  return "I don’t have access to that specific question. However, I can provide information about my boss, Yuvraj Singh Shekhawat, such as his projects, current role, education, and achievements.";
};

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

    // Simulate a small delay for better UX
    setTimeout(() => {
      const reply = getBotResponse(msg);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setLoading(false);
      if (!open) setHasNew(true);
    }, 600);
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
      {/* Chat Icon/Toggle */}
      <div 
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(124, 92, 252, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: open ? 'rotate(90deg) scale(0.9)' : 'none',
          border: '2px solid rgba(255,255,255,0.1)'
        }}
      >
        {open ? (
          <span style={{ fontSize: '24px', color: '#fff' }}>×</span>
        ) : (
          <span style={{ fontSize: '28px' }}>🤖</span>
        )}
        {hasNew && !open && (
          <div style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12, borderRadius: '50%', background: 'var(--accent4)', border: '2px solid var(--bg)', animation: 'pulse 2s infinite' }} />
        )}
      </div>

      {/* Chat Window */}
      <div style={{
        position: 'fixed',
        bottom: window.innerWidth < 480 ? '90px' : '100px',
        right: window.innerWidth < 480 ? '4vw' : '24px',
        width: 'min(420px, 92vw)',
        height: 'min(600px, 75vh)',
        maxHeight: 'calc(100vh - 120px)',
        background: 'var(--bg2)',
        border: '1px solid var(--border2)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 999,
        boxShadow: '0 20px 80px rgba(0,0,0,0.5), var(--glow)',
        overflow: 'hidden',
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
