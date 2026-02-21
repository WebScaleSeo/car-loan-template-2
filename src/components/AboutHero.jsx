import React, { useEffect, useState, useRef } from 'react';
import './AboutHero.css';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

function useTextScramble(finalText, delay = 200) {
  const [displayText, setDisplayText] = useState('');
  const frameRef = useRef(null);

  useEffect(() => {
    if (!finalText) return;
    let frame = 0;
    const totalFrames = 18;
    const startDelay = setTimeout(() => {
      const animate = () => {
        frame++;
        const progress = frame / totalFrames;
        const revealCount = Math.floor(progress * finalText.length);
        let output = '';
        for (let i = 0; i < finalText.length; i++) {
          if (finalText[i] === ' ') { output += ' '; continue; }
          if (i < revealCount) {
            output += finalText[i];
          } else if (i < revealCount + 4) {
            output += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          } else {
            output += finalText[i];
          }
        }
        setDisplayText(output);
        if (frame < totalFrames) {
          frameRef.current = setTimeout(animate, 50);
        } else {
          setDisplayText(finalText);
        }
      };
      animate();
    }, delay);
    return () => {
      clearTimeout(startDelay);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [finalText, delay]);

  return displayText;
}

const pressLogos = [
  { name: 'Forbes', abbr: 'FORBES' },
  { name: 'Bloomberg', abbr: 'BLOOMBERG' },
  { name: 'TechCrunch', abbr: 'TechCrunch' },
  { name: 'Business Insider', abbr: 'Business Insider' },
  { name: 'WSJ', abbr: 'WSJ' },
];

export default function AboutHero({ data }) {
  if (!data) return null;

  const scrambledHeadline = useTextScramble(data.headline, 300);

  return (
    <section data-component="aboutHero" className="aboutHero-section">
      {/* Background depth layers */}
      <div className="ah-bg-gradient" />
      <div className="ah-dot-grid" />
      <div className="ah-spotlight-1" />
      <div className="ah-spotlight-2" />
      <div className="ah-spotlight-3" />
      <div className="ah-split-tone" />

      <div className="ah-container">
        {/* Eyebrow label */}
        <div className="ah-eyebrow-wrap ah-anim-1">
          <span className="ah-eyebrow-pill">
            <span className="ah-eyebrow-dot" />
            Our Story
          </span>
        </div>

        {/* Card Composition */}
        <div className="ah-composition">
          {/* Main glassmorphism card — headline + intro */}
          <div className="ah-main-card ah-anim-2">
            <div className="ah-card-shimmer" />
            <h1 className="ah-headline font-heading">
              {scrambledHeadline || data.headline}
            </h1>
            <p className="ah-intro-text font-body">{data.introText}</p>
            <div className="ah-cta-row ah-anim-3">
              <a href="/contact" className="ah-cta-btn font-heading">
                <span className="ah-cta-glow" />
                Get Your Rate
                <svg className="ah-cta-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/about" className="ah-ghost-btn font-body">Learn More</a>
            </div>
          </div>

          {/* Floating stat card — top right */}
          <div className="ah-float-card ah-float-card--stat ah-anim-4">
            <div className="ah-float-inner">
              <span className="ah-stat-number font-heading">50K+</span>
              <span className="ah-stat-label font-body">Happy Drivers</span>
              <div className="ah-stat-bar">
                <div className="ah-stat-bar-fill" />
              </div>
            </div>
          </div>

          {/* Floating rate card — bottom overlap */}
          <div className="ah-float-card ah-float-card--rate ah-anim-5">
            <div className="ah-float-inner">
              <div className="ah-rate-badge">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L8 1z" fill="currentColor"/></svg>
                Top Rated
              </div>
              <span className="ah-rate-value font-heading">2.9%</span>
              <span className="ah-rate-label font-body">APR from</span>
            </div>
          </div>

          {/* Decorative geometric accent */}
          <div className="ah-geo-accent ah-anim-2">
            <div className="ah-geo-ring ah-geo-ring--1" />
            <div className="ah-geo-ring ah-geo-ring--2" />
          </div>
        </div>

        {/* Press logos row */}
        <div className="ah-press-row ah-anim-6">
          <span className="ah-press-label font-body">As seen in</span>
          <div className="ah-press-divider" />
          <div className="ah-press-logos">
            {pressLogos.map((logo) => (
              <div key={logo.name} className="ah-press-logo font-heading">
                {logo.abbr}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
