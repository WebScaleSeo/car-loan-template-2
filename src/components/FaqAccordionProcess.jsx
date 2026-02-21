import React, { useState } from 'react';
import './FaqAccordionProcess.css';

export default function FaqAccordionProcess({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section data-component="faqAccordionProcess" className="fap-section">
      {/* Decorative background blobs */}
      <div className="fap-blob fap-blob--1" aria-hidden="true" />
      <div className="fap-blob fap-blob--2" aria-hidden="true" />
      <div className="fap-blob fap-blob--3" aria-hidden="true" />

      {/* Diagonal stripe overlay */}
      <div className="fap-diagonal-stripe" aria-hidden="true" />

      <div className="fap-inner">
        {/* Header */}
        <div className="fap-header">
          <div className="fap-tag font-body">How It Works</div>
          {data.sectionTitle && (
            <h2 className="fap-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="fap-title-underline" aria-hidden="true" />
        </div>

        {/* Accordion */}
        {data.questions && Array.isArray(data.questions) && (
          <div className="fap-accordion">
            {data.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`fap-item${isOpen ? ' fap-item--open' : ''}`}
                  style={{ '--item-index': i }}
                >
                  <button
                    className="fap-question font-heading"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="fap-q-number font-heading">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="fap-q-text">{item.question}</span>
                    <span className="fap-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fap-chevron"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="fap-answer-wrap"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <p className="fap-answer font-body">{item.answer}</p>
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
