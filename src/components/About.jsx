import React from 'react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();
  return (
    <section id="about" ref={ref} style={{ padding:'120px 0' }}>
      <div className="container">
        <div className="mobile-grid-1" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>

          <div style={{ opacity:visible?1:0, transform:visible?'none':(window.innerWidth < 768 ? 'translateY(40px)' : 'translateX(-40px)'), transition:'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">Turning <span className="glow-text">Data</span> into<br />Decisions</h2>
            <p style={{ color:'var(--text2)', lineHeight:1.8, marginBottom:20 }}>
              I'm <strong style={{ color:'var(--text)' }}>Yuvraj Singh Shekhawat</strong>, a Data Science trainee at WE RNS IT Solutions Pvt. Ltd. and currently pursuing my MCA from Lovely Professional University.
            </p>
            <p style={{ color:'var(--text2)', lineHeight:1.8, marginBottom:20 }}>
              With a background in PCM and BA, I bring both <span style={{ color:'var(--accent)' }}>analytical precision</span> and creative thinking to solving data problems. I specialize in building end-to-end ML pipelines, NLP systems, and interactive dashboards.
            </p>
            <p style={{ color:'var(--text2)', lineHeight:1.8, marginBottom:40 }}>
              My goal is to become a skilled Data Scientist & Analyst — solving real business problems using data-driven insights and modern AI techniques.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {['Python','Machine Learning','Deep Learning','NLP','SQL','Power BI','Tableau','Streamlit'].map((s,i)=>(
                <span key={s} className={`tag ${i%4===1?'tag-cyan':i%4===2?'tag-green':i%4===3?'tag-red':''}`}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ opacity:visible?1:0, transform:visible?'none':(window.innerWidth < 768 ? 'translateY(40px)' : 'translateX(40px)'), transition:'all 0.8s 0.2s cubic-bezier(0.16,1,0.3,1)' }}>


            <div className="mobile-grid-1" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              {[
                { icon:'🎓', label:'Education', value:'MCA — LPU', sub:'Data Science', color:'var(--accent)' },
                { icon:'💼', label:'Experience', value:'1+ Year', sub:'WE RNS IT Solutions', color:'var(--accent2)' },
                { icon:'📍', label:'Location', value:'Jaipur', sub:'Rajasthan, India', color:'var(--accent4)' },
                { icon:'🚀', label:'Status', value:'Open to Work', sub:'Full-time / Internship', color:'var(--accent3)' },
              ].map(card=>(
                <div key={card.label} className="card" style={{ textAlign:'center' }}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{card.icon}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text3)', letterSpacing:'0.1em', marginBottom:4, textTransform:'uppercase' }}>{card.label}</div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, color:card.color, marginBottom:2 }}>{card.value}</div>
                  <div style={{ fontSize:12, color:'var(--text3)' }}>{card.sub}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop:12 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text3)', letterSpacing:'0.1em', marginBottom:14, textTransform:'uppercase' }}>Education Timeline</div>
              {[
                { year:'2024–Present', title:'MCA in Data Science', org:'Lovely Professional University' },
                { year:'2021–2024', title:'Bachelor of Arts', org:'University of Rajasthan' },
                { year:'2020–2021', title:'Senior Secondary (XII)', org:'RBSE — 87.00%' },
              ].map((e,i)=>(
                <div key={i} style={{ display:'flex', gap:14, marginBottom:i<2?14:0 }}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <div style={{ width:10, height:10, borderRadius:'50%', background:'var(--accent)', flexShrink:0, boxShadow:'0 0 8px var(--accent)' }} />
                    {i<2 && <div style={{ width:1, flex:1, background:'var(--border)', marginTop:4 }} />}
                  </div>
                  <div style={{ paddingBottom:i<2?8:0 }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--accent)', marginBottom:2 }}>{e.year}</div>
                    <div style={{ fontWeight:500, fontSize:14, marginBottom:2 }}>{e.title}</div>
                    <div style={{ fontSize:13, color:'var(--text3)' }}>{e.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
