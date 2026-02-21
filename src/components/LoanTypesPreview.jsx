import React from 'react';
import './LoanTypesPreview.css';

const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M3 14L5.5 8H18.5L21 14M3 14V17.5H5.5M3 14H21M21 14V17.5H18.5M5.5 17.5A2 2 0 109.5 17.5A2 2 0 005.5 17.5ZM14.5 17.5A2 2 0 1018.5 17.5A2 2 0 0014.5 17.5Z"/>
    <path d="M7 8.5L8.5 5H15.5L17 8.5" strokeWidth="1.4"/>
  </svg>
);

const IconKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <circle cx="8.5" cy="11.5" r="4.5"/>
    <path d="M13 11.5H21M17.5 9V14"/>
    <path d="M21 9V14" strokeWidth="1.4"/>
  </svg>
);

const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M21 3V9H15"/>
    <path d="M3 21V15H9"/>
    <path d="M20.49 9A9 9 0 005.64 5.64L3 9M21 15L18.36 18.36A9 9 0 013.51 15"/>
  </svg>
);

const iconMap = { car: IconCar, key: IconKey, refresh: IconRefresh };

export default function LoanTypesPreview({ data }) {
  if (!data) return null;

  return (
    <section data-component="loanTypesPreview" className="ltp-section">
      {/* Background texture & orbs */}
      <div className="ltp-dot-grid" aria-hidden="true" />
      <div className="ltp-orb ltp-orb--a" aria-hidden="true" />
      <div className="ltp-orb ltp-orb--b" aria-hidden="true" />

      <div className="container mx-auto px-6 ltp-inner">
        {/* Editorial header column */}
        <div className="ltp-header-col">
          <span className="ltp-eyebrow font-body">Auto Financing</span>

          <div className="ltp-title-clip">
            <h2 className="ltp-title font-heading">{data.sectionTitle}</h2>
          </div>

          <p className="ltp-subtitle font-body">{data.sectionSubtitle}</p>

          <div className="ltp-accent-bar" aria-hidden="true">
            <span className="ltp-accent-bar__fill" />
          </div>
        </div>

        {/* Cards column — fanned/stacked editorial */}
        <div className="ltp-cards-col">
          {data.loanTypes && data.loanTypes.map((loan, i) => {
            const IconComp = iconMap[loan.iconName] || IconCar;
            return (
              <div
                key={i}
                className={`ltp-card ltp-card--${i}`}
                style={{ animationDelay: `${0.3 + i * 0.18}s` }}
              >
                {/* Stack depth layers */}
                <div className="ltp-card-stack ltp-card-stack--2" aria-hidden="true" />
                <div className="ltp-card-stack ltp-card-stack--1" aria-hidden="true" />

                {/* Card body */}
                <div className="ltp-card-inner">
                  <div className="ltp-card-top">
                    <div className="ltp-card-icon-wrap">
                      <IconComp />
                    </div>
                    <span className="ltp-card-num font-heading">0{i + 1}</span>
                  </div>
                  <h3 className="ltp-card-title font-heading">{loan.title}</h3>
                  <p className="ltp-card-desc font-body">{loan.description}</p>
                  <div className="ltp-card-footer">
                    <span className="ltp-card-cta font-body">Learn More
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
