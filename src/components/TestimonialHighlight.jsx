import React from 'react';
import './TestimonialHighlight.css';

export default function TestimonialHighlight({ data }) {
  if (!data) return null;
  return (
    <section data-component="testimonialHighlight" className="th-section">

      {/* Gradient background layer */}
      <div className="th-bg-gradient" aria-hidden="true"></div>

      {/* Bold color block — left accent panel */}
      <div className="th-color-block" aria-hidden="true">
        <div className="th-cb-quote-mark">&ldquo;</div>
        <div className="th-cb-stars">★★★★★</div>
        <div className="th-cb-label">Featured Review</div>
      </div>

      {/* Decorative orbital rings — right side, purely decorative */}
      <div className="th-orbital-stage" aria-hidden="true">
        <div className="th-orbit th-orbit-1"></div>
        <div className="th-orbit th-orbit-2"></div>
        <div className="th-orbit th-orbit-3"></div>
        <div className="th-orb th-orb-a"></div>
        <div className="th-orb th-orb-b"></div>
        <div className="th-orb th-orb-c"></div>
      </div>

      {/* Radial glow blobs */}
      <div className="th-glow th-glow-1" aria-hidden="true"></div>
      <div className="th-glow th-glow-2" aria-hidden="true"></div>

      {/* Main content wrapper */}
      <div className="th-content">

        {/* Glassmorphism testimonial card */}
        <div className="th-card">
          <div className="th-card-inner">

            {/* Oversized decorative quote */}
            <span className="th-open-quote" aria-hidden="true">&ldquo;</span>

            <blockquote className="th-quote">
              {data.quote}
            </blockquote>

            <div className="th-divider" aria-hidden="true"></div>

            <div className="th-author-row">
              <div className="th-avatar">
                <span className="th-avatar-initial">{data.authorName?.charAt(0) ?? 'M'}</span>
                <div className="th-avatar-ring" aria-hidden="true"></div>
              </div>

              <div className="th-author-meta">
                <p className="th-author-name">{data.authorName}</p>
                <p className="th-author-context">{data.authorContext}</p>
              </div>

              <div className="th-verified">
                <svg className="th-verified-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-label="Verified customer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.723 3.065 3.745 3.745 0 01-3.065.723 3.745 3.745 0 01-3.068 1.593 3.745 3.745 0 01-3.068-1.593 3.746 3.746 0 01-3.065-.723 3.745 3.745 0 01-.723-3.065A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.723-3.065 3.745 3.745 0 013.065-.723A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.065.723 3.745 3.745 0 01.723 3.065A3.745 3.745 0 0121 12z" />
                </svg>
                <span>Verified</span>
              </div>
            </div>
          </div>

          {/* Card accent bar */}
          <div className="th-card-bar" aria-hidden="true"></div>
        </div>

        {/* Right decorative stat pill */}
        <div className="th-stat-pill">
          <span className="th-stat-number">4.9</span>
          <span className="th-stat-stars">★★★★★</span>
          <span className="th-stat-label">Average rating</span>
        </div>

      </div>
    </section>
  );
}
