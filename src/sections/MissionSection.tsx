import React from 'react';
import { Users, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface MissionSectionProps {
  onLearnMore?: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="mission" className="section mission-section">
      <div className="container">
        <div className="mission-grid">
          {/* Left: Editorial Narrative */}
          <div className="mission-narrative">
            <span className="badge-tag">Our Mandate</span>
            <h2 className="section-title">
              Growth Was Never Meant <br />
              <span className="text-bronze">to Be a Solo Journey.</span>
            </h2>

            <p className="mission-lead">
              Modern culture preaches isolated self-reliance, leaving young men drifting without direction, accountability, or true brothers to lean on. Sons of Elohim dismantles this loneliness.
            </p>

            <p className="mission-body">
              We bring young people together to share proven knowledge, develop indispensable life skills, mentor one another, and build an unshakeable foundation for a purposeful life. In this brotherhood, no one stands alone, and no one pretends to have everything figured out.
            </p>

            {/* Scripture Callout */}
            <div className="scripture-card">
              <p className="scripture-text">"{SITE_METADATA.proverbsText}"</p>
              <cite className="scripture-citation">{SITE_METADATA.proverbsReference}</cite>
            </div>

            <div className="mission-creed-bar">
              <strong>Core Declaration:</strong> {SITE_METADATA.coreMessage}
            </div>

            {onLearnMore && (
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onLearnMore}
                >
                  Explore Our Core Values
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>

          {/* Right: Asymmetric Principles Column */}
          <div className="mission-pillars-column">
            <div className="mission-card surface-card">
              <div className="mission-icon-box">
                <Users size={22} />
              </div>
              <div>
                <h3 className="mission-card-title">Shared Wisdom Over Competition</h3>
                <p className="mission-card-text">
                  We refuse to compete against one another. When one brother conquers debt, masters a trade, or deepens his prayer life, he turns around to lift the next brother.
                </p>
              </div>
            </div>

            <div className="mission-card surface-card">
              <div className="mission-icon-box">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 className="mission-card-title">Everyone Contributes</h3>
                <p className="mission-card-text">
                  Whether you are 16 or 25, you possess unique gifts, experiences, and perspective. We believe every single brother has something vital to learn and something meaningful to contribute.
                </p>
              </div>
            </div>

            <div className="mission-card surface-card">
              <div className="mission-icon-box">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="mission-card-title">Uncompromising Purpose</h3>
                <p className="mission-card-text">
                  We are not a casual social club or a transient motivational feed. We are a brotherhood anchored in Scripture, dedicated to producing grounded, capable, and God-fearing men.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
