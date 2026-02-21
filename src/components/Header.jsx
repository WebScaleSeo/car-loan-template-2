import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ navigation, branding }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navigation?.items || [];
  const regularLinks = navItems.filter(item => item.type !== 'cta');
  const ctaLinks = navItems.filter(item => item.type === 'cta');

  return (
    <header
      data-component="header"
      className={`header-root${scrolled ? ' header-scrolled' : ''}`}
    >
      {/* Left Panel — Dark branded */}
      <div className="header-left">
        <div className="header-left-glow" />
        <div className="header-left-dots" />

        <a href="/" className="header-brand">
          <div className="header-logo-mark">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
              <path d="M8 20 Q16 8 24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="16" cy="13" r="3" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
          <div className="header-brand-text">
            <span className="header-brand-name">
              {branding?.name || 'Ocean Trust'}
            </span>
            {branding?.tagline && (
              <span className="header-brand-tagline">{branding.tagline}</span>
            )}
          </div>
        </a>
      </div>

      {/* Right Panel — Light navigation */}
      <div className="header-right">
        <div className="header-right-accent" />

        <nav className="header-nav" aria-label="Main navigation">
          {regularLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="header-nav-link"
              style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            >
              {item.label}
              <span className="header-nav-underline" />
            </a>
          ))}

          {ctaLinks.map((item, i) => (
            <a
              key={`cta-${i}`}
              href={item.url || '/contact'}
              className="header-cta-btn"
              style={{ animationDelay: `${0.1 + (regularLinks.length + i) * 0.07}s` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
