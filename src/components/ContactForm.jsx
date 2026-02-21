import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ data }) {
  if (!data) return null;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section data-component="contactForm" className="cf-section">
      {/* Aurora gradient layers */}
      <div className="cf-aurora cf-aurora-1" />
      <div className="cf-aurora cf-aurora-2" />
      <div className="cf-aurora cf-aurora-3" />

      {/* Floating decorative orbs */}
      <div className="cf-orb cf-orb-1" />
      <div className="cf-orb cf-orb-2" />
      <div className="cf-orb cf-orb-3" />

      {/* Dot grid texture */}
      <div className="cf-dot-grid" />

      {/* Decorative ring (grid-breaking overlap element) */}
      <div className="cf-ring cf-ring-tl" />
      <div className="cf-ring cf-ring-br" />

      <div className="cf-inner">
        {/* Left: identity column */}
        <div className="cf-left">
          <p className="cf-eyebrow">Get In Touch</p>

          <h2 className="cf-heading">
            <span className="cf-heading-outline">
              {data.formTitle}
            </span>
          </h2>

          <p className="cf-desc">{data.formDescription}</p>

          <ul className="cf-perks">
            <li className="cf-perk">
              <span className="cf-perk-icon">⚡</span>
              <span>Fast specialist response</span>
            </li>
            <li className="cf-perk">
              <span className="cf-perk-icon">🔒</span>
              <span>100% secure &amp; private</span>
            </li>
            <li className="cf-perk">
              <span className="cf-perk-icon">✓</span>
              <span>No obligation required</span>
            </li>
          </ul>

          <div className="cf-accent-bar" />
        </div>

        {/* Right: glassmorphism form card */}
        <div className="cf-form-wrap">
          <div className="cf-form-card">
            {/* Top shimmer border */}
            <div className="cf-card-border-top" />

            {submitted ? (
              <div className="cf-success">
                <div className="cf-success-check">✓</div>
                <h3 className="cf-success-title">Message Sent!</h3>
                <p className="cf-success-msg">
                  A DriveRate specialist will follow up with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cf-form" noValidate>
                {data.fields &&
                  data.fields.map((field, i) => (
                    <div
                      key={field.fieldName}
                      className="cf-field"
                      style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                    >
                      <label className="cf-label" htmlFor={field.fieldName}>
                        {field.label}
                      </label>

                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.fieldName}
                          name={field.fieldName}
                          placeholder={field.placeholder}
                          className="cf-input cf-textarea"
                          rows={4}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={field.fieldName}
                          name={field.fieldName}
                          className="cf-input cf-select"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.fieldName}
                          name={field.fieldName}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="cf-input"
                          {...(field.type === 'tel'
                            ? {
                                maxLength: 14,
                                pattern: '[\\d\\s\\-\\(\\)\\+]{10,14}',
                              }
                            : {})}
                        />
                      )}
                    </div>
                  ))}

                <button type="submit" className="cf-submit">
                  <span className="cf-submit-label">
                    {data.submitButtonLabel || 'Submit Inquiry'}
                  </span>
                  <span className="cf-submit-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
