import React from 'react';
import './HowItWorks.css';

export default function HowItWorks({ data }) {
  if (!data) return null;

  return (
    <section data-component="howItWorks" className="hiw-section">
      {/* Background layers: dot grid + warm radial glow */}
      <div className="hiw-bg-dots" aria-hidden="true"></div>
      <div className="hiw-bg-warm" aria-hidden="true"></div>

      {/* Decorative circular rings (radial/circular spatial direction) */}
      <div className="hiw-ring hiw-ring--outer" aria-hidden="true"></div>
      <div className="hiw-ring hiw-ring--inner" aria-hidden="true"></div>

      {/* Floating blobs with blend mode overlays */}
      <div className="hiw-blob hiw-blob--1" aria-hidden="true"></div>
      <div className="hiw-blob hiw-blob--2" aria-hidden="true"></div>
      <div className="hiw-blob hiw-blob--3" aria-hidden="true"></div>

      <div className="hiw-inner container mx-auto px-6">
        {/* Section header */}
        <div className="hiw-header">
          {data.sectionTitle && (
            <div className="hiw-label-row">
              <div className="hiw-label-line" aria-hidden="true"></div>
              <span className="hiw-label font-body">{data.sectionTitle}</span>
              <div className="hiw-label-line" aria-hidden="true"></div>
            </div>
          )}
          {data.sectionSubtitle && (
            <h2 className="hiw-headline font-heading">{data.sectionSubtitle}</h2>
          )}
          <div className="hiw-headline-bar" aria-hidden="true"></div>
        </div>

        {/* Steps */}
        {data.steps && Array.isArray(data.steps) && (
          <div className="hiw-steps">
            {/* Decorative horizontal connector */}
            <div className="hiw-connector" aria-hidden="true"></div>

            {data.steps.map((step, i) => (
              <div
                key={i}
                className={`hiw-card hiw-card--${i + 1}`}
                style={{ '--idx': i }}
              >
                {/* Top accent bar */}
                <div className="hiw-card-topbar" aria-hidden="true"></div>

                {/* Step number */}
                <div className="hiw-num-wrap">
                  <span className="hiw-num font-heading">{step.stepNumber}</span>
                </div>

                <div className="hiw-card-divider" aria-hidden="true"></div>

                {/* Title */}
                {step.title && (
                  <h3 className="hiw-step-title font-heading">{step.title}</h3>
                )}

                {/* Description — always visible */}
                {step.description && (
                  <p className="hiw-step-desc font-body">{step.description}</p>
                )}

                {/* Decorative corner accent */}
                <div className="hiw-card-corner" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
