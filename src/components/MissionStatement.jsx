import React from 'react';
import './MissionStatement.css';

export default function MissionStatement({ data }) {
  if (!data) return null;
  return (
    <section data-component="missionStatement" className="mission-section">
      {/* Layered background gradients */}
      <div className="mission-bg-aurora"></div>
      <div className="mission-bg-radial"></div>

      {/* Ribbon / banner accents */}
      <div className="mission-ribbon mission-ribbon-top"></div>
      <div className="mission-ribbon mission-ribbon-mid"></div>

      {/* Floating decorative orbs */}
      <div className="mission-orb mission-orb-1"></div>
      <div className="mission-orb mission-orb-2"></div>
      <div className="mission-orb mission-orb-3"></div>

      {/* Depth grid lines on left */}
      <div className="mission-depth-grid" aria-hidden="true">
        <div className="depth-line"></div>
        <div className="depth-line"></div>
        <div className="depth-line"></div>
        <div className="depth-line"></div>
      </div>

      {/* Main layout — off-center, content weighted right */}
      <div className="mission-layout">
        {/* Left: decorative panel */}
        <div className="mission-deco-panel" aria-hidden="true">
          <div className="mission-circle-ring mission-ring-lg"></div>
          <div className="mission-circle-ring mission-ring-sm"></div>
          <div className="mission-scan-bar"></div>
        </div>

        {/* Right: content */}
        <div className="mission-content">
          {data.label && (
            <div className="mission-label-wrap">
              <span className="mission-label-dot"></span>
              <span className="mission-label">{data.label}</span>
            </div>
          )}

          {data.statement && (
            <blockquote className="mission-statement">
              <span className="mission-quote-mark" aria-hidden="true">"</span>
              {data.statement}
            </blockquote>
          )}

          <div className="mission-bottom-rule">
            <span className="rule-bar"></span>
            <span className="rule-diamond"></span>
            <span className="rule-bar"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
