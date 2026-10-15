import React from 'react';
import { Shield, ArrowUp, ExternalLink } from 'lucide-react';
import { SITE_METADATA, FIVE_PILLARS, CONTACT_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="brand-crest">
                <Shield size={20} />
              </div>
              <span className="brand-title" style={{ fontSize: '1.25rem' }}>{SITE_METADATA.name}</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', maxWidth: '340px' }}>
              {SITE_METADATA.tagline}
            </p>
            <div className="badge-tag" style={{ marginBottom: '1rem' }}>
              {SITE_METADATA.scriptureReference} &bull; {SITE_METADATA.proverbsReference}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-faint)', lineHeight: 1.5 }}>
              A brotherhood of young men walking in intentional accountability, biblical discipline, and purposeful growth.
            </p>
          </div>

          {/* Pillars Navigation */}
          <div>
            <h4 className="footer-col-title">The Five Pillars</h4>
            <ul className="footer-nav-list">
              {FIVE_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <button
                    type="button"
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                    onClick={() => onNavigate('pillars')}
                  >
                    {pillar.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, color: 'var(--accent-bronze-bright)' }}
                  onClick={() => onNavigate('pillars-deep')}
                >
                  Pillars Deep Dive &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Brotherhood Links */}
          <div>
            <h4 className="footer-col-title">Brotherhood</h4>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('vision')}
                >
                  Inspired by the Vision
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('about')}
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('mentorship')}
                >
                  Peer Mentorship
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('brother-stories')}
                >
                  Voices of the Brotherhood
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('events')}
                >
                  Gatherings & Events
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('faq-stewards')}
                >
                  Questions Brothers Ask (FAQ)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('names-of-god')}
                >
                  The Names of God
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  onClick={() => onNavigate('join')}
                >
                  Join the Brotherhood
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Direct Inquiries:
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-bronze"
              style={{ display: 'block', fontSize: '0.92rem', marginBottom: '1.25rem', textDecoration: 'none' }}
            >
              {CONTACT_INFO.email}
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {CONTACT_INFO.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
                >
                  {s.name}
                  <ExternalLink size={12} opacity={0.6} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {SITE_METADATA.name}. Rooted in God. Growing in Purpose.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-faint)', fontSize: '0.8rem' }}>
              Peer fellowship and mentorship community
            </span>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={scrollToTop}
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}
              aria-label="Scroll back to top of page"
            >
              Back to Top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
