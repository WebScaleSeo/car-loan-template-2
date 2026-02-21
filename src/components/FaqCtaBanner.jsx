import React from 'react';
import './FaqCtaBanner.css';

export default function FaqCtaBanner({ data }) {
  if (!data) return null;

  return (
    <section data-component="faqCtaBanner" className="faq-cta-banner">
      {/* Gradient mesh blobs */}
      <div className="faq-cta-orb faq-cta-orb--1" aria-hidden="true" />
      <div className="faq-cta-orb faq-cta-orb--2" aria-hidden="true" />
      <div className="faq-cta-orb faq-cta-orb--3" aria-hidden="true" />

      {/* Retro corner marks */}
      <div className="faq-cta-corner faq-cta-corner--tl" aria-hidden="true" />
      <div className="faq-cta-corner faq-cta-corner--br" aria-hidden="true" />

      {/* Oversized focal "?" — the spatial hero element */}
      <div className="faq-cta-giant-mark" aria-hidden="true">?</div>

      {/* Main content */}
      <div className="container mx-auto px-6">
        <div className="faq-cta-panel">
          {/* Retro-modern accent bar */}
          <div className="faq-cta-accent-bar">
            <span className="faq-cta-accent-bar__line" />
            <span className="faq-cta-accent-bar__dot" />
            <span className="faq-cta-accent-bar__label">Support</span>
          </div>

          {/* Headline with typewriter reveal */}
          {data.headline && (
            <h2 className="faq-cta-headline">
              <span className="faq-cta-typewriter-wrap">
                <span className="faq-cta-typewriter faq-cta-headline__gradient">
                  {data.headline}
                </span>
              </span>
            </h2>
          )}

          {/* Description */}
          {data.description && (
            <p className="faq-cta-description">{data.description}</p>
          )}

          {/* CTA Button */}
          {data.ctaButtonLabel && (
            <a
              href={data.ctaButtonUrl || '/contact'}
              className="faq-cta-btn"
            >
              {data.ctaButtonLabel}
              <span className="faq-cta-btn__arrow" aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
