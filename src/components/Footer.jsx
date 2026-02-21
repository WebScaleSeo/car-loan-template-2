import React from 'react';
import './Footer.css';

export default function Footer({ footer }) {
  const currentYear = new Date().getFullYear();

  const links = footer?.links || [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'FAQ', url: '/faq' },
    { label: 'Contact', url: '/contact' },
  ];

  const branding = footer?.branding || {
    name: 'DriveRate Auto Loans',
    description:
      'Helping drivers secure smarter auto financing with transparent rates and a stress-free application process.',
  };

  return (
    <footer data-component="footer" className="footer-root">
      {/* Animated wave top border */}
      <div className="footer-wave-container" aria-hidden="true">
        <svg
          className="footer-wave footer-wave--back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
        <svg
          className="footer-wave footer-wave--front"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,50 C180,10 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1350,60 1440,45 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Noise/grain texture overlay */}
      <div className="footer-grain" aria-hidden="true" />

      {/* Decorative glow orbs - grid-breaking overlap */}
      <div className="footer-orb footer-orb--primary" aria-hidden="true" />
      <div className="footer-orb footer-orb--secondary" aria-hidden="true" />
      <div className="footer-orb footer-orb--accent" aria-hidden="true" />

      {/* Ripple rings - decorative */}
      <div className="footer-ripple footer-ripple--1" aria-hidden="true" />
      <div className="footer-ripple footer-ripple--2" aria-hidden="true" />

      {/* Main content */}
      <div className="footer-inner">
        {/* Brand block - grid-breaking with elevated card */}
        <div className="footer-brand-block">
          <div className="footer-brand-logo-wrap">
            <span className="footer-brand-icon">DR</span>
          </div>
          <h2 className="footer-brand-name font-heading">{branding.name}</h2>
          <p className="footer-brand-desc font-body">{branding.description}</p>
          <div className="footer-brand-badge">
            <span className="footer-brand-badge-dot" />
            Trusted Auto Financing
          </div>
        </div>

        {/* Navigation links */}
        <div className="footer-nav-block">
          <h3 className="footer-nav-title font-heading">Quick Links</h3>
          <div className="footer-nav-line" aria-hidden="true" />
          <ul className="footer-nav-list">
            {links.map((link, i) => (
              <li key={i} className="footer-nav-item" style={{ animationDelay: `${i * 0.08}s` }}>
                <a href={link.url} className="footer-nav-link font-body">
                  <span className="footer-nav-arrow" aria-hidden="true">›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / CTA block */}
        <div className="footer-cta-block">
          <h3 className="footer-cta-title font-heading">Start Your Journey</h3>
          <div className="footer-nav-line" aria-hidden="true" />
          <p className="footer-cta-text font-body">
            Ready to find your perfect rate? Apply online in minutes.
          </p>
          <a href="/contact" className="footer-cta-btn font-heading">
            Get My Rate
            <span className="footer-cta-btn-glow" aria-hidden="true" />
          </a>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">✉</span>
              <span className="font-body">support@driverate.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">☎</span>
              <span className="font-body">1-800-DRIVERATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright font-body">
            © {currentYear} {branding.name}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link font-body">Privacy Policy</a>
            <span className="footer-bottom-sep" aria-hidden="true">·</span>
            <a href="/terms" className="footer-bottom-link font-body">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
