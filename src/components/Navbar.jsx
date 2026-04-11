import React, { useState, useEffect } from 'react';

const links = ['about', 'skills', 'projects', 'certificates', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,92,252,0.12)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#fff'
        }}>Y</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>
          Yuvraj<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {links.map(l => (
          <button
            key={l}
            onClick={() => scroll(l)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 14,
              color: active === l ? 'var(--accent)' : 'var(--text2)',
              padding: '6px 14px', borderRadius: 8,
              transition: 'color 0.2s, background 0.2s',
              textTransform: 'capitalize',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.background = 'rgba(124,92,252,0.08)'; }}
            onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.background = 'none'; }}
          >{l}</button>
        ))}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajshekhawat405@gmail.com"
          target="_blank" rel="noreferrer"
          style={{
            marginLeft: 8, padding: '8px 20px', borderRadius: 10,
            background: 'linear-gradient(135deg, var(--accent), #5b3fd4)',
            color: '#fff', fontSize: 14, fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.01em',
            boxShadow: '0 4px 24px rgba(124,92,252,0.35)',
            transition: 'box-shadow 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.target.style.boxShadow = '0 4px 40px rgba(124,92,252,0.55)'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.boxShadow = '0 4px 24px rgba(124,92,252,0.35)'; e.target.style.transform = 'none'; }}
        >Hire Me</a>
      </div>
    </nav>
  );
}
