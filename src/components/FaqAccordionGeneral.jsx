import React, { useState } from 'react';
import './FaqAccordionGeneral.css';

export default function FaqAccordionGeneral({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section data-component="faqAccordionGeneral" className="fag-section">
      {/* Decorative background layers */}
      <div className="fag-bg-orb fag-bg-orb--1" aria-hidden="true" />
      <div className="fag-bg-orb fag-bg-orb--2" aria-hidden="true" />
      <div className="fag-bg-orb fag-bg-orb--3" aria-hidden="true" />
      <div className="fag-noise-overlay" aria-hidden="true" />

      <div className="fag-inner">
        {/* Editorial header */}
        <div className="fag-header">
          <div className="fag-eyebrow">
            <span className="fag-eyebrow-line" />
            <span className="fag-eyebrow-text">FAQ</span>
            <span className="fag-eyebrow-line" />
          </div>
          {data.sectionTitle && (
            <h2 className="fag-title font-heading">{data.sectionTitle}</h2>
          )}
          <p className="fag-subtitle font-body">
            Everything you need to know about car financing
          </p>
        </div>

        {/* Accordion list */}
        {data.questions && Array.isArray(data.questions) && (
          <div className="fag-accordion">
            {data.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`fag-item${isOpen ? ' fag-item--open' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <button
                    className="fag-question font-heading"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="fag-question-num">0{i + 1}</span>
                    <span className="fag-question-text">
                      {item.question || item.title || item.name || ''}
                    </span>
                    <span className="fag-chevron" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="fag-answer-wrap"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <div className="fag-answer font-body">
                      <p>{item.answer || item.description || item.text || ''}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Decorative floating side accent */}
        <div className="fag-side-accent" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
