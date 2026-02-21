import React, { useState } from 'react';
import './FaqAccordionRates.css';

export default function FaqAccordionRates({ data }) {
  if (!data) return null;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section data-component="faqAccordionRates" className="far-section">
      {/* Dot-grid pattern layer */}
      <div className="far-pattern-overlay" aria-hidden="true"></div>

      {/* Diagonal accent stripe */}
      <div className="far-diagonal-stripe" aria-hidden="true"></div>

      {/* Ripple decorative elements */}
      <div className="far-ripple-field" aria-hidden="true">
        <div className="far-ripple far-ripple-1"></div>
        <div className="far-ripple far-ripple-2"></div>
        <div className="far-ripple far-ripple-3"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">

        {/* Section header */}
        <div className="far-header">
          <div className="far-eyebrow font-body">Frequently Asked</div>
          {data.sectionTitle && (
            <h2 className="far-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="far-title-bar">
            <span className="far-title-bar-fill"></span>
          </div>
        </div>

        {/* Accordion stack */}
        {data.questions && Array.isArray(data.questions) && (
          <div className="far-stack">
            {data.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`far-card ${isOpen ? 'far-card--open' : ''}`}
                  style={{ '--i': i }}
                >
                  {/* Gradient glow border (pseudo-rendered via wrapper) */}
                  <div className="far-glow-wrap" aria-hidden="true"></div>

                  {/* Question button */}
                  <button
                    className="far-question font-heading"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="far-q-num font-heading" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="far-q-text">{item.question}</span>
                    <span className={`far-toggle ${isOpen ? 'far-toggle--open' : ''}`} aria-hidden="true">
                      <span className="far-toggle-h"></span>
                      <span className="far-toggle-v"></span>
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    className="far-answer"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <p className="far-answer-text font-body">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
