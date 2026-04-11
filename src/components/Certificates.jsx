import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const certs = [
  {
    title: 'Supervised Machine Learning',
    org: 'DeepLearning.AI & Stanford University',
    type: 'Coursera', date: 'Aug 6, 2025',
    color: 'var(--accent)', icon: '🧠',
    verify: 'https://coursera.org/verify/78DU92BUXHF2',
  },
  {
    title: 'Advanced Learning Algorithms',
    org: 'DeepLearning.AI & Stanford University',
    type: 'Coursera', date: 'Dec 30, 2025',
    color: 'var(--accent2)', icon: '⚡',
    verify: 'https://coursera.org/verify/BCRTR3DEB7HZ',
  },
  {
    title: 'Unsupervised Learning, Recommenders & RL',
    org: 'DeepLearning.AI & Stanford University',
    type: 'Coursera', date: 'Feb 21, 2026',
    color: 'var(--accent4)', icon: '🔮',
    verify: 'https://coursera.org/verify/AWW31QH4ZMII',
  },
  {
    title: 'Python (Basic)',
    org: 'HackerRank',
    type: 'HackerRank', date: 'Jul 13, 2025',
    color: 'var(--accent)', icon: '🐍',
    verify: 'https://www.hackerrank.com/certificates/EA83B0114E21',
  },
  {
    title: 'SQL Basic',
    org: 'HackerRank',
    type: 'HackerRank', date: 'Jul 13, 2025',
    color: '#f0a500', icon: '🗄️',
    verify: 'https://www.hackerrank.com/certificates/A4DE0D7D80F8',
  },
  {
    title: 'SQL Intermediate',
    org: 'HackerRank',
    type: 'HackerRank', date: 'Jul 21, 2025',
    color: '#f0a500', icon: '🗄️',
    verify: 'https://www.hackerrank.com/certificates/50870D2EB091',
  },
  {
    title: 'SQL Advanced',
    org: 'HackerRank',
    type: 'HackerRank', date: 'Jul 31, 2025',
    color: '#f0a500', icon: '🗄️',
    verify: 'https://www.hackerrank.com/certificates/2097C1AD00CB',
  },
  {
    title: 'Complete ML & Data Science – Skill Up',
    org: 'GeeksforGeeks',
    type: 'GeeksforGeeks', date: '2025',
    color: 'var(--accent4)', icon: '🌿',
    verify: null,
  },
  {
    title: 'Data Analytics Virtual Experience',
    org: 'TATA (Forage)',
    type: 'Virtual Experience', date: '2025',
    color: 'var(--accent3)', icon: '📊',
    verify: null,
  },
  {
    title: 'Financial Literacy Course for Bharat',
    org: 'NISM (SEBI)',
    type: 'SEBI / NISM', date: 'Jul 13, 2025',
    color: '#1a6fc4', icon: '📈',
    verify: null,
  },
];

export default function Certificates() {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="certificates" ref={ref} style={{ padding:'120px 0' }}>
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Verified <span className="glow-text">Credentials</span></h2>
        <p className="section-sub">Industry certifications from world-class institutions.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:16 }}>
          {certs.map((c,i)=>(
            <div key={i}
              onMouseEnter={()=>setHovered(i)}
              onMouseLeave={()=>setHovered(null)}
              onClick={()=>c.verify && window.open(c.verify,'_blank')}
              className="card"
              style={{
                opacity:visible?1:0,
                transform:visible?'none':'translateY(24px)',
                transition:`all 0.6s ${i*0.06}s cubic-bezier(0.16,1,0.3,1)`,
                cursor:c.verify?'pointer':'default',
                borderColor: hovered===i ? `${c.color}50` : 'var(--border)',
                boxShadow: hovered===i ? `0 8px 32px ${c.color}20` : 'none',
                transform: visible ? (hovered===i ? 'translateY(-4px)' : 'none') : 'translateY(24px)',
              }}
            >
              <div style={{ fontSize:26, marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:c.color, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:8, padding:'3px 10px', borderRadius:100, background:`${c.color}14`, border:`1px solid ${c.color}28`, display:'inline-block' }}>{c.type}</div>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:14, lineHeight:1.3, marginBottom:6, marginTop:8 }}>{c.title}</h3>
              <p style={{ fontSize:12, color:'var(--text3)', marginBottom:8 }}>{c.org}</p>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text3)' }}>{c.date}</p>
              {c.verify && (
                <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:4, fontFamily:'var(--font-mono)', fontSize:11, color:c.color }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  Verify Certificate ↗
                </div>
              )}

              {/* Bottom glow line on hover */}
              <div style={{
                position:'absolute', bottom:0, left:0, right:0, height:2,
                borderRadius:'0 0 16px 16px',
                background:`linear-gradient(90deg,transparent,${c.color}80,transparent)`,
                opacity: hovered===i ? 1 : 0,
                transition:'opacity 0.3s',
              }} />
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop:32, opacity:visible?1:0, transition:'all 0.8s 0.6s cubic-bezier(0.16,1,0.3,1)', background:'linear-gradient(135deg,rgba(124,92,252,0.08),rgba(0,229,255,0.04))', border:'1px solid rgba(124,92,252,0.25)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20 }}>
            <div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, marginBottom:4 }}>Core Competencies</div>
              <div style={{ color:'var(--text2)', fontSize:14 }}>Soft skills and professional strengths</div>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {['Problem Solving','Analytical Thinking','Team Management','Communication','Cross-functional Collaboration','Rapid Learning','Curriculum Design','Data Interpretation'].map((s,i)=>(
                <span key={s} className={`tag ${i%3===1?'tag-cyan':i%3===2?'tag-green':''}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
