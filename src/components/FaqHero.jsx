import React from 'react';
import './FaqHero.css';

export default function FaqHero({ data }) {
  if (!data) return null;

  const words = data.headline ? data.headline.split(' ') : [];

  return (
    <section data-component="faqHero" className="faqHero-section">
      {/* Background stack */}
      <div className="faqHero-bg-image" />
      <div className="faqHero-bg-scrim" />
      <div className="faqHero-bg-pattern" />

      {/* Morphing blob shapes */}
      <div className="faqHero-blob faqHero-blob--1" />
      <div className="faqHero-blob faqHero-blob--2" />
      <div className="faqHero-blob faqHero-blob--3" />

      {/* Pulsing glow accent */}
      <div className="faqHero-glow-orb" />

      <div className="faqHero-inner">
        {/* LEFT — typography-first content (≈65%) */}
        <div className="faqHero-content">
          <div className="faqHero-eyebrow">
            <span className="faqHero-eyebrow-dot" />
            <span className="faqHero-eyebrow-text font-body">Help &amp; Support</span>
          </div>

          {data.headline && (
            <h1 className="faqHero-headline font-heading" aria-label={data.headline}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className="faqHero-word"
                  style={{ animationDelay: `${0.1 + i * 0.09}s` }}
                >
                  {word}
                  {i < words.length - 1 ? '\u00a0' : ''}
                </span>
              ))}
            </h1>
          )}

          {data.subtitle && (
            <p className="faqHero-subtitle font-body">{data.subtitle}</p>
          )}

          <div className="faqHero-cta-row">
            <a href="/contact" className="faqHero-cta-primary font-heading">
              <span>Get Personalized Help</span>
              <span className="faqHero-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#faq-list" className="faqHero-cta-ghost font-body">
              Browse All Questions
            </a>
          </div>

          <div className="faqHero-stat-strip">
            <div className="faqHero-stat">
              <strong className="faqHero-stat-num font-heading">50+</strong>
              <span className="faqHero-stat-label font-body">Topics Covered</span>
            </div>
            <div className="faqHero-stat-divider" />
            <div className="faqHero-stat">
              <strong className="faqHero-stat-num font-heading">24/7</strong>
              <span className="faqHero-stat-label font-body">Live Support</span>
            </div>
            <div className="faqHero-stat-divider" />
            <div className="faqHero-stat">
              <strong className="faqHero-stat-num font-heading">98%</strong>
              <span className="faqHero-stat-label font-body">Satisfaction Rate</span>
            </div>
          </div>
        </div>

        {/* RIGHT — frosted glass testimonial card (≈35%) */}
        <div className="faqHero-aside">
          <div className="faqHero-testimonial-card">
            <div className="faqHero-testimonial-glow-ring" />
            <div className="faqHero-quote-mark font-heading" aria-hidden="true">&ldquo;</div>
            <blockquote className="faqHero-quote font-body">
              Working with this team made financing my car surprisingly simple. Every question I had was answered clearly and quickly.
            </blockquote>
            <div className="faqHero-author-row">
              <div className="faqHero-avatar">
                <span className="font-heading">MR</span>
              </div>
              <div className="faqHero-author-info">
                <strong className="faqHero-author-name font-heading">Marcus R.</strong>
                <span className="faqHero-author-role font-body">Verified Customer</span>
              </div>
            </div>
            <div className="faqHero-stars" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="faqHero-star">★</span>
              ))}
            </div>
          </div>

          {/* Decorative accent line */}
          <div className="faqHero-accent-line" />
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="faqHero-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--bg-page)" />
        </svg>
      </div>
    </section>
  );
}
