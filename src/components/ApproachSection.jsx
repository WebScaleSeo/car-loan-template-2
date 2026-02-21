import React from 'react';
import './ApproachSection.css';

export default function ApproachSection({ data }) {
  if (!data) return null;
  return (
    <section data-component="approachSection" className="approach-section">
      {/* Aurora animated background */}
      <div className="approach-aurora" aria-hidden="true"></div>
      {/* Grain/noise texture overlay */}
      <div className="approach-grain" aria-hidden="true"></div>
      {/* Floating glow orbs */}
      <div className="approach-orb approach-orb--1" aria-hidden="true"></div>
      <div className="approach-orb approach-orb--2" aria-hidden="true"></div>
      {/* Diagonal top edge */}
      <div className="approach-diagonal-top" aria-hidden="true"></div>

      <div className="approach-container">
        <div className="approach-header">
          {data.sectionTitle && (
            <div className="approach-eyebrow">
              <span className="approach-eyebrow-pill font-body">Our Philosophy</span>
            </div>
          )}
          {data.sectionTitle && (
            <h2 className="approach-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="approach-title-underline" aria-hidden="true"></div>
        </div>

        {data.paragraphs && Array.isArray(data.paragraphs) && (
          <div className="approach-content">
            {data.paragraphs.map((item, i) => (
              <div key={i} className={`approach-paragraph approach-paragraph--${i}`}>
                <div className="approach-paragraph-num font-heading" aria-hidden="true">
                  0{i + 1}
                </div>
                <div className="approach-paragraph-body">
                  {item.title && <h4 className="approach-paragraph-heading font-heading">{item.title}</h4>}
                  {item.name && <h4 className="approach-paragraph-heading font-heading">{item.name}</h4>}
                  {item.text && <p className="approach-paragraph-text font-body">{item.text}</p>}
                  {item.description && <p className="approach-paragraph-text font-body">{item.description}</p>}
                </div>
                <div className="approach-paragraph-glow" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Diagonal bottom edge */}
      <div className="approach-diagonal-bottom" aria-hidden="true"></div>
    </section>
  );
}
