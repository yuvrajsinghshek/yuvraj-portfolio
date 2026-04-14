import React, { useState, useEffect } from 'react';

const links = ['about', 'skills', 'projects', 'certificates', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 20px',
      height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: (scrolled || menuOpen) ? 'rgba(5,5,8,0.95)' : 'transparent',
      backdropFilter: (scrolled || menuOpen) ? 'blur(20px)' : 'none',
      borderBottom: (scrolled || menuOpen) ? '1px solid rgba(124,92,252,0.12)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <div
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 110 }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: '#fff'
        }}>Y</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' }}>
          Yuvraj<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
      </div>

      {/* Hamburger Toggle */}
      <div 
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'rgba(124,92,252,0.1)',
          display: 'flex', flexDirection: 'column', gap: 5,
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 110,
          border: '1px solid rgba(124,92,252,0.2)'
        }}
        className="show-on-mobile"
      >
        <div style={{ width: 20, height: 2, background: 'var(--accent)', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ width: 20, height: 2, background: 'var(--accent)', transition: '0.3s', opacity: menuOpen ? 0 : 1 }} />
        <div style={{ width: 20, height: 2, background: 'var(--accent)', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </div>

      {/* Links Container */}
      <div style={{ 
        display: 'flex', gap: 4, alignItems: 'center',
        position: 'relative',
        ...(menuOpen ? {
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'var(--bg)', flexDirection: 'column', justifyContent: 'center',
          padding: '80px 20px', gap: 20, transition: '0.4s', zIndex: 105
        } : {})
      }}
      className={menuOpen ? '' : 'hide-on-mobile'}
      >
        {links.map(l => (
          <button
            key={l}
            onClick={() => scroll(l)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: menuOpen ? 24 : 14,
              color: active === l ? 'var(--accent)' : 'var(--text2)',
              padding: '8px 16px', borderRadius: 8,
              transition: 'all 0.2s',
              textTransform: 'capitalize',
              width: menuOpen ? '100%' : 'auto',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.background = 'rgba(124,92,252,0.08)'; }}
            onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.background = 'none'; }}
          >{l}</button>
        ))}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajshekhawat405@gmail.com"
          target="_blank" rel="noreferrer"
          style={{
            marginLeft: menuOpen ? 0 : 8, padding: '10px 24px', borderRadius: 12,
            background: 'linear-gradient(135deg, var(--accent), #5b3fd4)',
            color: '#fff', fontSize: menuOpen ? 18 : 14, fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.01em',
            boxShadow: '0 8px 24px rgba(124,92,252,0.3)',
            transition: 'all 0.3s',
            textAlign: 'center',
            width: menuOpen ? '200px' : 'auto',
          }}
        >Hire Me</a>
      </div>
    </nav>
  );
}
