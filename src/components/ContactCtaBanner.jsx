import React from 'react';
import './ContactCtaBanner.css';

export default function ContactCtaBanner({ data }) {
  if (!data) return null;

  return (
    <section
      data-component="contactCtaBanner"
      className="cta-banner"
    >
      {/* Simulated paint worklet texture overlay */}
      <div className="cta-texture" aria-hidden="true" />

      {/* Clip-path decorative shapes */}
      <div className="cta-shape cta-shape--hex" aria-hidden="true" />
      <div className="cta-shape cta-shape--slab" aria-hidden="true" />
      <div className="cta-shape cta-shape--orb" aria-hidden="true" />
      <div className="cta-shape cta-shape--slash" aria-hidden="true" />

      {/* ── L-SHAPED LAYOUT ── */}
      {/* Top arm of L: full-width headline band */}
      <div className="cta-top-arm">
        <div className="cta-eyebrow-row">
          <span className="cta-eyebrow-dot" />
          <span className="cta-eyebrow-text">DriveRate Auto Loans</span>
        </div>
        <h2 className="cta-headline font-heading">{data.headline}</h2>
      </div>

      {/* Bottom of L: left content column + right decorative column */}
      <div className="cta-bottom-row">
        {/* Vertical arm of L: description + CTA (left ~60%) */}
        <div className="cta-content-col">
          <p className="cta-description font-body">{data.description}</p>
          <div className="cta-actions">
            <a href={data.ctaButtonUrl || '/'} className="cta-btn">
              <span className="cta-btn-label">{data.ctaButtonLabel}</span>
              <span className="cta-btn-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right column: decorative rings (spacer that completes the L shape) */}
        <div className="cta-deco-col" aria-hidden="true">
          <div className="cta-ring cta-ring--outer" />
          <div className="cta-ring cta-ring--inner" />
          <div className="cta-monogram">
            <span>DR</span>
          </div>
        </div>
      </div>

      {/* Bottom clip-path divider */}
      <div className="cta-bottom-clip" aria-hidden="true" />
    </section>
  );
}
