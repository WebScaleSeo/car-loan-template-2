import React from 'react';
import './ContactHero.css';

export default function ContactHero({ data }) {
  if (!data) return null;

  const trustBadges = [
    { value: '500K+', label: 'Happy Customers' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '98%', label: 'Approval Rate' },
    { value: '24/7', label: 'Expert Support' },
  ];

  return (
    <section data-component="contactHero" className="ch-section">
      {/* CSS pattern layer */}
      <div className="ch-pattern" aria-hidden="true"></div>

      {/* Radial glow core */}
      <div className="ch-glow-core" aria-hidden="true"></div>

      {/* Rotating gradient rings — radial/circular spatial arrangement */}
      <div className="ch-ring ch-ring-1" aria-hidden="true"></div>
      <div className="ch-ring ch-ring-2" aria-hidden="true"></div>
      <div className="ch-ring ch-ring-3" aria-hidden="true"></div>

      {/* Parallax drift orbs */}
      <div className="ch-orb ch-orb-a" aria-hidden="true"></div>
      <div className="ch-orb ch-orb-b" aria-hidden="true"></div>
      <div className="ch-orb ch-orb-c" aria-hidden="true"></div>

      {/* Animated rotating gradient border strip */}
      <div className="ch-border-strip" aria-hidden="true"></div>

      <div className="ch-content-wrap">
        <div className="ch-inner">
          {/* Eyebrow label */}
          <div className="ch-eyebrow">
            <span className="ch-eyebrow-dot"></span>
            Contact &amp; Support
            <span className="ch-eyebrow-dot"></span>
          </div>

          {/* Headline */}
          {data.headline && (
            <h1 className="ch-headline font-heading">{data.headline}</h1>
          )}

          {/* Subtitle */}
          {data.subtitle && (
            <p className="ch-subtitle font-body">{data.subtitle}</p>
          )}

          {/* Animated CTA */}
          <div className="ch-cta-row">
            <a href="/contact" className="ch-cta-btn">
              <span className="ch-cta-label">Explore My Options</span>
              <span className="ch-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.5 9h11M9 3.5l5.5 5.5L9 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a href="tel:1-800-555-0100" className="ch-secondary-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2h4l1.5 3.5-2 1.5a9 9 0 004.5 4.5l1.5-2L15 11v4a1 1 0 01-1 1C6.3 16 0 9.7 0 3a1 1 0 011-1z" fill="currentColor"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* Trust / stat badges — glassmorphism cards */}
          <div className="ch-badges-row">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="ch-badge"
                style={{ animationDelay: `${0.7 + i * 0.12}s` }}
              >
                <span className="ch-badge-value">{badge.value}</span>
                <span className="ch-badge-label">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
