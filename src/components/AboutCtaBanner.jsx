import React from 'react';
import './AboutCtaBanner.css';

export default function AboutCtaBanner({ data }) {
  if (!data) return null;
  return (
    <section data-component="aboutCtaBanner" className="acb-section">

      {/* Decorative wireframe geometry */}
      <div className="acb-wf-ring acb-ring-1" aria-hidden="true">
        <div className="acb-ring-inner"></div>
      </div>
      <div className="acb-wf-ring acb-ring-2" aria-hidden="true">
        <div className="acb-ring-inner"></div>
      </div>
      <div className="acb-wf-diamond" aria-hidden="true"></div>
      <div className="acb-dot-grid" aria-hidden="true"></div>

      <div className="acb-container">

        {/* Left: text content */}
        <div className="acb-content">

          {/* Bouncing attention indicators */}
          <div className="acb-attention-row" aria-hidden="true">
            <span className="acb-pulse-dot acb-pd-1"></span>
            <span className="acb-pulse-dot acb-pd-2"></span>
            <span className="acb-pulse-dot acb-pd-3"></span>
            <span className="acb-eyebrow-line"></span>
          </div>

          {data.headline && (
            <h2 className="acb-headline font-heading">{data.headline}</h2>
          )}

          {data.description && (
            <p className="acb-description font-body">{data.description}</p>
          )}

          {/* Bouncing arrow chain */}
          <div className="acb-arrow-chain" aria-hidden="true">
            <span className="acb-arr acb-arr-1">›</span>
            <span className="acb-arr acb-arr-2">›</span>
            <span className="acb-arr acb-arr-3">›</span>
          </div>
        </div>

        {/* Right: grid-breaking CTA card */}
        <div className="acb-cta-card-wrap">
          <div className="acb-cta-card">
            {/* Gradient border glow overlay */}
            <div className="acb-glow-border" aria-hidden="true"></div>

            <div className="acb-card-inner">
              <div className="acb-card-icon" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <path d="M12 18h12M22 14l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <p className="acb-card-tagline font-body">Start your journey</p>

              {data.ctaButtonLabel && (
                <a
                  href={data.ctaButtonUrl || '/contact'}
                  className="acb-cta-btn font-heading"
                >
                  <span className="acb-btn-label">{data.ctaButtonLabel}</span>
                  <span className="acb-btn-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              )}

              {/* Bouncing chevrons below the button */}
              <div className="acb-chevrons" aria-hidden="true">
                <span className="acb-chev acb-chev-1">↓</span>
                <span className="acb-chev acb-chev-2">↓</span>
                <span className="acb-chev acb-chev-3">↓</span>
              </div>
            </div>

            {/* Corner wireframe accent */}
            <div className="acb-corner-wf" aria-hidden="true"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
