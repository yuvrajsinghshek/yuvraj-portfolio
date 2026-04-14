import React, { useState, useEffect } from 'react';

const roles = ['Data Scientist', 'Data Analyst', 'ML Engineer'];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    let t;
    if (!deleting && display === word) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && display === '') { setDeleting(false); setIdx(i => i + 1); }
    else t = setTimeout(() => setDisplay(p => deleting ? p.slice(0, -1) : word.slice(0, p.length + 1)), deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [display, deleting, idx, words, speed, pause]);
  return display;
}

export default function Hero() {
  const role = useTypewriter(roles);
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100 }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: `repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(124,92,252,0.06) 59px,rgba(124,92,252,0.06) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(124,92,252,0.06) 59px,rgba(124,92,252,0.06) 60px)` }} />
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{ position: 'absolute', width: 60, height: 60, background: `rgba(124,92,252,${0.03 + (i % 3) * 0.02})`, left: `${(i * 137) % 80 + 5}%`, top: `${(i * 89) % 70 + 10}%`, animation: `pulse ${3 + i}s ${i * 0.5}s ease-in-out infinite`, zIndex: 0 }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'center' }}>
          <div style={{ textAlign: 'inherit' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)', marginBottom: 36, animation: 'fadeUp 0.6s ease forwards' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent4)', display: 'block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent4)', letterSpacing: '0.1em' }}>OPEN TO OPPORTUNITIES</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,7vw,88px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 16, animation: 'fadeUp 0.8s 0.1s ease both' }}>
              Yuvraj<br /><span className="glow-text">Singh</span>
            </h1>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px,2.5vw,22px)', color: 'var(--text2)', marginBottom: 24, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'inherit', animation: 'fadeUp 0.8s 0.2s ease both' }}>
              <span style={{ color: 'var(--accent)' }}>{'>'}</span>
              <span style={{ marginLeft: 10 }}>{role}</span>
              <span style={{ display: 'inline-block', width: 2, height: '1.1em', background: 'var(--accent2)', marginLeft: 2, animation: 'blink 1s step-start infinite' }} />
            </div>

            <p style={{ fontSize: 17, color: 'var(--text2)', maxWidth: 520, lineHeight: 1.7, marginBottom: 44, animation: 'fadeUp 0.8s 0.3s ease both' }}>
              Aspiring Data Scientist with hands-on experience in ML, Deep Learning, and NLP. Building real-world AI applications from end-to-end pipelines to Streamlit deployments. Based in <span style={{ color: 'var(--text)' }}>Jaipur, Rajasthan</span>.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'inherit', animation: 'fadeUp 0.8s 0.4s ease both' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/yuvrajsinghshek', color: 'linear-gradient(135deg,var(--accent),#5b3fd4)', textColor: '#fff', shadow: '0 8px 32px rgba(124,92,252,0.4)', hoverShadow: '0 8px 48px rgba(124,92,252,0.6)' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvraj-singh-shekhawat-155719316', color: 'transparent', textColor: 'var(--accent2)', border: '1px solid rgba(0,229,255,0.3)' },
                { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajshekhawat405@gmail.com', color: 'transparent', textColor: 'var(--text2)', border: '1px solid var(--border)' },
              ].map(b => (
                <a key={b.label} href={b.href} target={b.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  style={{ padding: '13px 28px', borderRadius: 12, background: b.color, color: b.textColor, textDecoration: 'none', fontWeight: 500, fontSize: 15, boxShadow: b.shadow || 'none', border: b.border || 'none', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: 8 }}
                >{b.label}</a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)', flexWrap: 'wrap', justifyContent: 'inherit', animation: 'fadeUp 0.8s 0.5s ease both' }}>
              {[{ num: '4+', label: 'Projects Built' }, { num: '9+', label: 'Certifications' }, { num: '1+', label: 'Year Experience' }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: 'var(--text3)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Card */}
          <div style={{ position: 'relative', animation: 'fadeUp 0.8s 0.3s ease both', justifySelf: 'center' }}>
            <div style={{ width: 'min(280px, 85vw)', height: 'height: min(360px, 450px)', minHeight: 360, border: '1px solid var(--border2)', borderRadius: 24, background: 'var(--surface)', position: 'relative', overflow: 'hidden', boxShadow: 'var(--glow)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 4, background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.4),transparent)', zIndex: 2, animation: 'scanline 4s linear infinite' }} />

              <div style={{ width: 140, height: 140, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 0 40px rgba(0,229,255,0.3)', padding: 3 }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'var(--bg)' }}>
                  <img src="/mine.jpeg" alt="Yuvraj Singh" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                </div>
              </div>

              <div style={{ padding: '0 16px', textAlign: 'center', width: '100%' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>Yuvraj Singh Shekhawat</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginTop: 8 }}>Data Scientist</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {['Python', 'SQL', 'ML', 'DL', 'NLP'].map(t => <span key={t} className="tag" style={{ fontSize: 10, padding: '4px 10px' }}>{t}</span>)}
                </div>
              </div>
            </div>
            {[['-12px', '-12px'], ['-12px', '100%'], ['100%', '-12px'], ['100%', '100%']].map(([t, l], i) => (
              <div key={i} className="hide-on-mobile" style={{ position: 'absolute', top: t, left: l, width: 24, height: 24, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--accent)', boxShadow: '0 0 12px var(--accent)' }} />
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: -80, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeIn 1s 1s ease both' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.2em' }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom,var(--accent),transparent)', animation: 'pulse 2s infinite' }} />
        </div>
      </div>
    </section>
  );
}
