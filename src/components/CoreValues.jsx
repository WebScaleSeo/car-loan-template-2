import React from 'react';
import './CoreValues.css';

const IconMap = {
  transparency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9l-3.5 3.5a1 1 0 0 1-1.4 0L8 11.5"/>
      <path d="M2 12l4-4 2.5 2.5L12 7l2 1 3-2 3 3-6 6-2-1-3 3-4-2z"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
      <path d="M9 21h6M10 17v4M14 17v4"/>
    </svg>
  ),
  integrity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

const getIcon = (name) => IconMap[name] || IconMap.target;

export default function CoreValues({ data }) {
  if (!data) return null;

  return (
    <section data-component="coreValues" className="cv-section">
      {/* Dot grid pattern overlay */}
      <div className="cv-dot-pattern" aria-hidden="true"></div>

      {/* Morphing decorative blobs */}
      <div className="cv-blob cv-blob-1" aria-hidden="true"></div>
      <div className="cv-blob cv-blob-2" aria-hidden="true"></div>

      <div className="cv-layout">

        {/* LEFT PANEL: outlined stroke title + decorative elements */}
        <div className="cv-left-panel">
          <div className="cv-left-inner">
            <div className="cv-eyebrow">
              <span className="cv-eyebrow-line"></span>
              <span className="cv-eyebrow-text">Our Foundation</span>
            </div>

            <h2 className="cv-stroke-title">
              {data.sectionTitle}
            </h2>

            <p className="cv-left-copy">
              Principles that guide every recommendation we make — because your trust is the only currency that matters.
            </p>

            {/* Retro decorative grid */}
            <div className="cv-retro-deco" aria-hidden="true">
              <div className="cv-deco-grid"></div>
              <div className="cv-deco-ring cv-deco-ring-1"></div>
              <div className="cv-deco-ring cv-deco-ring-2"></div>
              <div className="cv-deco-square"></div>
            </div>

            {/* Count badge */}
            <div className="cv-count-badge">
              <span className="cv-count-num">{data.values?.length || 0}</span>
              <span className="cv-count-label">Core<br/>Values</span>
            </div>
          </div>

          {/* Bleed strip — extends to left edge */}
          <div className="cv-bleed-strip" aria-hidden="true"></div>
        </div>

        {/* RIGHT PANEL: fanned / stacked cards */}
        <div className="cv-right-panel">
          <div className="cv-cards-grid">
            {data.values && data.values.map((value, i) => (
              <div
                key={i}
                className="cv-card"
                style={{ '--i': i, '--total': data.values.length }}
              >
                {/* Card stack shadow layers */}
                <div className="cv-card-stack-2" aria-hidden="true"></div>
                <div className="cv-card-stack-1" aria-hidden="true"></div>

                <div className="cv-card-inner">
                  {/* Numbered index — oversized retro style */}
                  <div className="cv-card-index">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon in accent container */}
                  <div className="cv-card-icon-wrap">
                    <div className="cv-card-icon">
                      {getIcon(value.iconName)}
                    </div>
                    <div className="cv-card-icon-ring" aria-hidden="true"></div>
                  </div>

                  {/* Content */}
                  <h3 className="cv-card-title">{value.title}</h3>
                  <p className="cv-card-desc">{value.description}</p>

                  {/* Bottom accent */}
                  <div className="cv-card-footer">
                    <div className="cv-card-accent-bar"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
