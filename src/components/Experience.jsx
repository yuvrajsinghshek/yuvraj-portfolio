import React from 'react';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, visible] = useInView();

  return (
    <section id="experience" ref={ref} style={{ padding:'120px 0' }}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">My Professional <span className="glow-text">Journey</span></h2>
        
        <div style={{ opacity:visible?1:0, transform:visible?'none':'translateY(40px)', transition:'all 0.8s cubic-bezier(0.16,1,0.3,1)', marginTop: 40 }}>
          <div className="card" style={{ position: 'relative', padding: '32px 40px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>Data Scientist</h3>
                <div style={{ fontSize: 16, color: 'var(--text)', fontWeight: 500 }}>WE RNS IT Solutions Pvt. Ltd.</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent2)', padding: '4px 12px', background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: 100, display: 'inline-block', marginBottom: 4 }}>06/2025 – Present</div>
                <div style={{ fontSize: 13, color: 'var(--text3)' }}>Jaipur, Rajasthan</div>
              </div>
            </div>

            <ul style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 15, paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li>
                <strong style={{color: 'var(--text)'}}>LanguageSikhoAI:</strong> Engineered a multi-persona AI agent system featuring specialised LangChain-based RAG pipelines for personalised learning, achieving a 100% pass rate in retrieval testing using Groq and Supabase.
              </li>
              <li>
                Developed and calibrated custom AI agents for distinct user personas (teacher, friend, assessment), implementing complex prompt orchestration, knowledge base integration, and REST API endpoints via FastAPI.
              </li>
              <li>
                <strong style={{color: 'var(--text)'}}>NyayaAI:</strong> Architected a RAG-based knowledge management system for cybercrime documentation, engineering a FastAPI backend with REST API endpoints for real-time query handling and vector DB retrieval integration.
              </li>
              <li>
                Maintained rigorous experimentation logs and conducted root cause analysis (RCA) on AI model outputs to ensure content safety and high-quality response accuracy.
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
