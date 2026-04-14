import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    id: 1, num: '01',
    title: 'NLP-Based Travel Guide Chatbot',
    status: 'In Progress', statusColor: 'var(--accent4)',
    desc: 'Building a conversational AI chatbot using NLP techniques including tokenisation, embeddings, and intent recognition to answer real-world travel queries. Demonstrates applied GenAI and NLP skills.',
    tech: ['Python', 'NLP', 'Transformers', 'Intent Recognition', 'Embeddings'],
    color: 'var(--accent)',
    gradient: 'linear-gradient(135deg,rgba(124,92,252,0.12),rgba(0,229,255,0.04))',
    icon: '🤖',
    github: null,
  },
  {
    id: 2, num: '02',
    title: 'Movie Revenue Prediction & Recommendation System',
    status: 'Completed', statusColor: 'var(--accent2)',
    desc: 'EDA on movie datasets with ML regression models to predict revenue. Streamlit-based recommendation system using collaborative filtering — full end-to-end ML pipeline from data cleaning to deployment.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'EDA', 'Collaborative Filtering', 'Pandas'],
    color: 'var(--accent2)',
    gradient: 'linear-gradient(135deg,rgba(0,229,255,0.10),rgba(0,255,136,0.04))',
    icon: '🎬',
    github: 'https://github.com/yuvrajsinghshek/movie-recommendation-system-streamlit',
  },
  {
    id: 3, num: '03',
    title: 'Laptop Price Prediction & Recommendation',
    status: 'Completed', statusColor: 'var(--accent2)',
    desc: 'End-to-end ML pipeline for price prediction deployed as a Streamlit app for real-time estimation and recommendations. Demonstrates hands-on Python, ML modelling, and deployment skills.',
    tech: ['Python', 'ML', 'Streamlit', 'Regression', 'Feature Engineering', 'Deployment'],
    color: 'var(--accent4)',
    gradient: 'linear-gradient(135deg,rgba(0,255,136,0.10),rgba(124,92,252,0.04))',
    icon: '💻',
    github: 'https://github.com/yuvrajsinghshek/laptop_price_prediction',
  },
  {
    id: 4, num: '04',
    title: 'Hotel Booking Cancellation Analysis',
    status: 'Completed', statusColor: 'var(--accent2)',
    desc: 'Data cleaning, EDA, and statistical insight analysis to identify key factors driving cancellations. Produced structured case study material suitable for data analytics curriculum.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Statistical Analysis'],
    color: 'var(--accent3)',
    gradient: 'linear-gradient(135deg,rgba(255,107,107,0.10),rgba(124,92,252,0.04))',
    icon: '🏨',
    github: 'https://github.com/yuvrajsinghshek/Hotel-Booking-Analysis',
  },
];

export default function Projects() {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" ref={ref} style={{ padding:'120px 0' }}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I've <span className="glow-text">Built</span></h2>
        <p className="section-sub">End-to-end ML pipelines, deployed apps, and data systems.</p>

        <div className="mobile-grid-1" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(440px, 100%),1fr))', gap:20 }}>
          {projects.map((p,i)=>(
            <div key={p.id}
              onMouseEnter={()=>setHovered(p.id)}
              onMouseLeave={()=>setHovered(null)}
              style={{
                background: hovered===p.id ? p.gradient : 'var(--surface)',
                border:`1px solid ${hovered===p.id ? p.color+'40' : 'var(--border)'}`,
                borderRadius:20, padding:32,
                cursor: p.github ? 'pointer' : 'default',
                transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                transform: hovered===p.id ? 'translateY(-6px)' : 'none',
                boxShadow: hovered===p.id ? `0 20px 60px ${p.color}20` : 'none',
                opacity: visible ? 1 : 0,
                transitionDelay:`${i*0.1}s`,
                position:'relative', overflow:'hidden',
              }}
              onClick={()=>p.github && window.open(p.github,'_blank')}
            >
              <div style={{ position:'absolute', top:24, right:28, fontFamily:'var(--font-display)', fontSize:48, fontWeight:800, color:'rgba(255,255,255,0.03)', lineHeight:1, userSelect:'none' }}>{p.num}</div>

              <div style={{ display:'flex', alignItems:'flex-start', gap:16, marginBottom:16 }}>
                <div style={{ width:48, height:48, borderRadius:12, flexShrink:0, background:`${p.color}18`, border:`1px solid ${p.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>{p.icon}</div>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:11, padding:'3px 10px', borderRadius:100, background:`${p.statusColor}18`, color:p.statusColor, border:`1px solid ${p.statusColor}30` }}>{p.status}</span>
                    {p.github && (
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, padding:'3px 10px', borderRadius:100, background:'rgba(255,255,255,0.05)', color:'var(--text3)', border:'1px solid var(--border)', display:'flex', alignItems:'center', gap:4 }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        View on GitHub ↗
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17, lineHeight:1.3 }}>{p.title}</h3>
                </div>
              </div>

              <p style={{ color:'var(--text2)', fontSize:14, lineHeight:1.7, marginBottom:18 }}>{p.desc}</p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {p.tech.map(t=>(
                  <span key={t} style={{ fontFamily:'var(--font-mono)', fontSize:11, padding:'3px 10px', borderRadius:100, background:`${p.color}10`, color:p.color, border:`1px solid ${p.color}20` }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
