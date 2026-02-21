import React from 'react';
import './BenefitsOverview.css';

const icons = {
  percent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export default function BenefitsOverview({ data }) {
  if (!data) return null;

  return (
    <section data-component="benefitsOverview" className="benefits-section">
      {/* Decorative background orbs */}
      <div className="benefits-orb benefits-orb--1" aria-hidden="true" />
      <div className="benefits-orb benefits-orb--2" aria-hidden="true" />
      <div className="benefits-orb benefits-orb--3" aria-hidden="true" />

      {/* Dot-grid texture overlay */}
      <div className="benefits-grid-texture" aria-hidden="true" />

      <div className="benefits-inner">
        {data.sectionTitle && (
          <div className="benefits-header">
            <span className="benefits-eyebrow">Our Promise</span>
            <h2 className="benefits-title font-heading">{data.sectionTitle}</h2>
            <div className="benefits-title-bar" />
          </div>
        )}

        {data.benefits && Array.isArray(data.benefits) && (
          <div className="benefits-cards">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className={`benefits-card benefits-card--${i}`}
                style={{ '--card-index': i }}
              >
                {/* Glow border effect */}
                <div className="benefits-card__glow" aria-hidden="true" />

                {/* Icon */}
                {benefit.iconName && (
                  <div className="benefits-card__icon-wrap">
                    <div className="benefits-card__icon">
                      {icons[benefit.iconName] || null}
                    </div>
                    <div className="benefits-card__icon-ring" aria-hidden="true" />
                  </div>
                )}

                <div className="benefits-card__body">
                  {benefit.title && (
                    <h3 className="benefits-card__title font-heading">{benefit.title}</h3>
                  )}
                  {benefit.description && (
                    <p className="benefits-card__desc font-body">{benefit.description}</p>
                  )}
                </div>

                {/* Decorative card number */}
                <span className="benefits-card__num" aria-hidden="true">0{i + 1}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
