import React from 'react';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    label: 'Languages & Databases',
    color: 'var(--accent)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL (MySQL / PostgreSQL)', level: 82 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 72 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 90 },
    ],
  },
  {
    label: 'ML / DL / NLP',
    color: 'var(--accent2)',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 75 },
      { name: 'Natural Language Processing', level: 78 },
      { name: 'Transformers / LLMs', level: 65 },
    ],
  },
  {
    label: 'Frameworks & Tools',
    color: 'var(--accent4)',
    skills: [
      { name: 'NumPy / Pandas', level: 88 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Streamlit', level: 82 },
      { name: 'Git / GitHub', level: 80 },
    ],
  },
  {
    label: 'Data & Visualization',
    color: 'var(--accent3)',
    skills: [
      { name: 'Power BI', level: 78 },
      { name: 'Tableau', level: 72 },
      { name: 'Matplotlib / Seaborn', level: 85 },
      { name: 'MS Excel / EDA', level: 80 },
    ],
  },
];

const techBadges = [
  'Python', 'C', 'JavaScript', 'HTML', 'CSS',
  'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SciPy',
  'TensorFlow', 'Streamlit', 'Jupyter', 'Git', 'GitHub',
  'MySQL', 'PostgreSQL', 'Power BI', 'Tableau', 'MS Excel',
  'NLP', 'Transformers', 'Computer Vision',
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div style={{ marginBottom:14 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
        <span style={{ fontSize:14, color:'var(--text2)' }}>{name}</span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:12, color }}>{animate?`${level}%`:'0%'}</span>
      </div>
      <div style={{ height:5, background:'rgba(255,255,255,0.06)', borderRadius:3, overflow:'hidden' }}>
        <div style={{
          height:'100%', width:animate?`${level}%`:'0%', borderRadius:3,
          background:`linear-gradient(90deg,${color},${color}88)`,
          transition:'width 1.2s cubic-bezier(0.16,1,0.3,1)',
          boxShadow:`0 0 12px ${color}66`,
          position:'relative', overflow:'hidden',
        }}>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.15) 50%,transparent 100%)', animation:'shimmer 2s linear infinite', backgroundSize:'200% auto' }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useInView();
  return (
    <section id="skills" ref={ref} style={{ padding:'120px 0' }}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title" style={{ marginBottom:8 }}>Technical <span className="glow-text">Arsenal</span></h2>
        <p className="section-sub">Tools and technologies I use to build data-driven solutions.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, marginBottom:48 }}>
          {skillGroups.map((group,gi)=>(
            <div key={group.label} className="card" style={{ opacity:visible?1:0, transform:visible?'none':'translateY(30px)', transition:`all 0.7s ${gi*0.1}s cubic-bezier(0.16,1,0.3,1)` }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
                <div style={{ width:3, height:20, borderRadius:2, background:group.color }} />
                <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:15 }}>{group.label}</span>
              </div>
              {group.skills.map(s=><SkillBar key={s.name} {...s} color={group.color} animate={visible} />)}
            </div>
          ))}
        </div>

        <div className="card" style={{ opacity:visible?1:0, transition:'all 0.8s 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text3)', letterSpacing:'0.15em', marginBottom:18, textTransform:'uppercase' }}>Full Tech Stack</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {techBadges.map((t,i)=>(
              <span key={t} className={`tag ${i%5===1?'tag-cyan':i%5===2?'tag-green':i%5===3?'tag-red':''}`}
                style={{ transition:'transform 0.2s', cursor:'default' }}
                onMouseEnter={e=>e.target.style.transform='scale(1.08)'}
                onMouseLeave={e=>e.target.style.transform='none'}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
