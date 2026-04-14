import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('yuvrajshekhawat405@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: 'Email',
      value: 'yuvrajshekhawat405@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajshekhawat405@gmail.com',
      color: 'var(--accent)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'yuvraj-singh-shekhawat-155719316',
      href: 'https://www.linkedin.com/in/yuvraj-singh-shekhawat-155719316',
      color: 'var(--accent2)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'yuvrajsinghshek',
      href: 'https://github.com/yuvrajsinghshek',
      color: 'var(--accent4)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91-8955158901',
      href: 'tel:+918955158901',
      color: 'var(--accent3)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 11.8 19.79 19.79 0 01.08 3.17 2 2 0 012.07 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 0 80px' }}>
      <div className="container">

        {/* Big CTA */}
        <div style={{
          textAlign: 'center', marginBottom: 80,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(40px, 7vw, 80px)',
            lineHeight: 1.05, letterSpacing: '-0.04em',
            marginBottom: 24,
          }}>
            Let's <span className="glow-text">work</span><br />together
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 480, margin: '0 auto 40px' }}>
            I'm actively looking for Data Science / ML roles. Let's connect and build something impactful.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajshekhawat405@gmail.com"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 40px', borderRadius: 14,
              background: 'linear-gradient(135deg, var(--accent), #5b3fd4)',
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
              boxShadow: '0 8px 40px rgba(124,92,252,0.45)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 60px rgba(124,92,252,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(124,92,252,0.45)'; e.currentTarget.style.transform = 'none'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Send me an email
          </a>
        </div>

        {/* Contact links */}
        <div className="mobile-grid-1" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16,
          marginBottom: 60,
        }}>
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                display: 'block',
                opacity: visible ? 1 : 0,
                transition: `all 0.6s ${i * 0.1}s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `${l.color}15`,
                  border: `1px solid ${l.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: l.color,
                }}>{l.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{l.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)', wordBreak: 'break-all' }}>{l.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text3)', width: window.innerWidth < 480 ? '100%' : 'auto', textAlign: window.innerWidth < 480 ? 'center' : 'left' }}>
            © 2025 Yuvraj Singh Shekhawat
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text3)', width: window.innerWidth < 480 ? '100%' : 'auto', textAlign: window.innerWidth < 480 ? 'center' : 'left' }}>
            Built with <span style={{ color: 'var(--accent)' }}>React</span> · Jaipur, India
          </div>
        </div>
      </div>
    </section>
  );
}
