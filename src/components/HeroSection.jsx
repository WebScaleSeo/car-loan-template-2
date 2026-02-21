import React from 'react';
import './HeroSection.css';

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section data-component="heroSection" className="hero-section">
      {/* Mesh gradient background layers */}
      <div className="hero-bg-layer hero-bg-primary" />
      <div className="hero-bg-layer hero-bg-accent-zone" />

      {/* Geometric wireframe accents */}
      <div className="wireframe wireframe-ring-1" />
      <div className="wireframe wireframe-ring-2" />
      <div className="wireframe wireframe-ring-3" />
      <div className="wireframe wireframe-cross-1" />
      <div className="wireframe wireframe-cross-2" />
      <div className="wireframe wireframe-dot-grid" />

      {/* Main content grid */}
      <div className="hero-inner">
        {/* Left column — staggered earlier vertically */}
        <div className="hero-content-col">
          <div className="hero-tag hero-anim-1">
            <span className="tag-dot" />
            Auto Financing Made Simple
          </div>

          <h1 className="hero-headline hero-anim-2 font-heading">
            {data.headline}
          </h1>

          <p className="hero-subheadline hero-anim-3 font-body">
            {data.subheadline}
          </p>

          <div className="hero-ctas hero-anim-4">
            <a href={data.ctaButtonUrl} className="cta-primary font-heading">
              {data.ctaButtonLabel}
              <span className="cta-arrow">→</span>
            </a>
            <a href={data.secondaryCtaUrl} className="cta-secondary font-body">
              {data.secondaryCtaLabel}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust hero-anim-5">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>No hard credit pull</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>2-minute application</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Rates from 2.9% APR</span>
            </div>
          </div>
        </div>

        {/* Right column — staggered lower (product preview / card flip) */}
        <div className="hero-preview-col">
          {/* Card flip reveal */}
          <div className="flip-card hero-anim-6">
            <div className="flip-card-inner">
              {/* Front: Skeleton shimmer */}
              <div className="flip-card-front">
                <div className="skeleton-header">
                  <div className="skeleton-line sk-short shimmer-anim" />
                  <div className="skeleton-avatar shimmer-anim" />
                </div>
                <div className="skeleton-line sk-full shimmer-anim" />
                <div className="skeleton-line sk-wide shimmer-anim" />
                <div className="skeleton-rate shimmer-anim" />
                <div className="skeleton-line sk-medium shimmer-anim" />
                <div className="skeleton-row">
                  <div className="skeleton-pill shimmer-anim" />
                  <div className="skeleton-pill shimmer-anim" />
                </div>
              </div>

              {/* Back: Rate preview card */}
              <div className="flip-card-back">
                <div className="rate-card-badge">Pre-Qualified</div>
                <div className="rate-card-header">Your Estimated Rate</div>
                <div className="rate-card-rate font-heading">
                  5.9<span className="rate-unit">%</span>
                </div>
                <div className="rate-card-apr">Annual Percentage Rate</div>

                <div className="rate-divider" />

                <div className="rate-details">
                  <div className="rate-detail-row">
                    <span className="detail-label">Loan Term</span>
                    <span className="detail-value">Up to 84 months</span>
                  </div>
                  <div className="rate-detail-row">
                    <span className="detail-label">Approval</span>
                    <span className="detail-value">Instant decision</span>
                  </div>
                  <div className="rate-detail-row">
                    <span className="detail-label">Lenders</span>
                    <span className="detail-value">50+ partners</span>
                  </div>
                </div>

                <div className="rate-card-cta">
                  Get Your Real Rate →
                </div>
              </div>
            </div>
          </div>

          {/* Floating backdrop blur badges */}
          <div className="float-badge badge-top hero-anim-7">
            <span className="badge-stars">★★★★★</span>
            <span className="badge-text">4.9 / 5 Rating</span>
          </div>

          <div className="float-badge badge-bottom hero-anim-8">
            <span className="badge-icon">🔒</span>
            <span className="badge-text">256-bit Encrypted</span>
          </div>

          <div className="float-badge badge-side hero-anim-9">
            <span className="badge-num">50K+</span>
            <span className="badge-text">Loans Funded</span>
          </div>
        </div>
      </div>

      {/* Diagonal bottom divider */}
      <div className="hero-diagonal-bottom" />
    </section>
  );
}
