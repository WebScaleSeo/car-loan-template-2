import React from 'react';
import './CtaBanner.css';

export default function CtaBanner({ data }) {
  if (!data) return null;

  return (
    <section data-component="ctaBanner" className="cta-banner-section">
      {/* Parallax drift background layers */}
      <div className="cta-bg-image" />
      <div className="cta-bg-scrim" />
      <div className="cta-bg-gradient" />

      {/* Floating decorative orbs — parallax drift */}
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />
      <div className="cta-orb cta-orb-3" aria-hidden="true" />

      {/* Animated border accent line */}
      <div className="cta-animated-border-top" aria-hidden="true" />

      {/* Main content — asymmetric split */}
      <div className="cta-inner">
        {/* LEFT: headline + description (larger portion) */}
        <div className="cta-left">
          <div className="cta-tag">Apply Today</div>
          {data.headline && (
            <h2 className="cta-headline font-heading">{data.headline}</h2>
          )}
          {data.description && (
            <p className="cta-description font-body">{data.description}</p>
          )}
          {/* Decorative divider */}
          <div className="cta-divider" aria-hidden="true" />
        </div>

        {/* RIGHT: CTA card with animated border */}
        <div className="cta-right">
          <div className="cta-card">
            <div className="cta-card-inner">
              <div className="cta-card-badge">No Credit Impact</div>
              <p className="cta-card-subtext font-body">
                Join thousands of drivers who found better rates in minutes.
              </p>
              {data.ctaButtonLabel && (
                <a
                  href={data.ctaButtonUrl || '/contact'}
                  className="cta-button font-heading"
                >
                  <span className="cta-button-text">{data.ctaButtonLabel}</span>
                  <span className="cta-button-arrow" aria-hidden="true">→</span>
                  <span className="cta-button-glow" aria-hidden="true" />
                </a>
              )}
              <p className="cta-fine-print font-body">Free · Fast · Secure</p>
            </div>
            {/* Animated border ring */}
            <div className="cta-card-border-ring" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Bottom animated border accent */}
      <div className="cta-animated-border-bottom" aria-hidden="true" />
    </section>
  );
}
