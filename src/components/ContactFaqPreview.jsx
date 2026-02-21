import React, { useState } from 'react';
import './ContactFaqPreview.css';

export default function ContactFaqPreview({ data }) {
  if (!data) return null;

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section data-component="contactFaqPreview" className="cfq-section">
      {/* Decorative pattern layer */}
      <div className="cfq-pattern" aria-hidden="true" />

      {/* Floating decorative orbs */}
      <div className="cfq-orb cfq-orb--1" aria-hidden="true" />
      <div className="cfq-orb cfq-orb--2" aria-hidden="true" />

      <div className="cfq-inner container mx-auto px-6">

        {/* Section header with stroke typography */}
        <div className="cfq-header">
          <span className="cfq-eyebrow">FAQ</span>
          <h2 className="cfq-title">
            <span className="cfq-title-stroke">{data.sectionTitle}</span>
          </h2>
          <div className="cfq-title-accent" aria-hidden="true" />
        </div>

        {/* FAQ accordion with vertical offset blocks */}
        <div className="cfq-list">
          {data.questions && data.questions.map((item, i) => {
            const isOpen = openIndex === i;
            const isOffset = i % 2 === 1;
            return (
              <div
                key={i}
                className={`cfq-item ${isOffset ? 'cfq-item--offset' : ''} ${isOpen ? 'cfq-item--open' : ''}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Bouncing attention indicator */}
                {!isOpen && (
                  <span className="cfq-bounce-dot" aria-hidden="true" />
                )}

                <button
                  className="cfq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="cfq-question-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="cfq-question-text">{item.question}</span>
                  <span className={`cfq-chevron ${isOpen ? 'cfq-chevron--open' : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                <div
                  className="cfq-answer-wrap"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <div className="cfq-answer-inner">
                    <p className="cfq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link */}
        {data.linkLabel && data.linkUrl && (
          <div className="cfq-cta-wrap">
            <a href={data.linkUrl} className="cfq-cta-link">
              <span className="cfq-cta-label">{data.linkLabel}</span>
              <span className="cfq-cta-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
