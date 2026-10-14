import React from 'react';
import { APPROACH_STAGES } from '../data/content';
import { Users2, ArrowRight, CheckCircle, ShieldAlert, HeartHandshake } from 'lucide-react';

interface BrotherhoodApproachProps {
  onJoinClick: () => void;
}

export const BrotherhoodApproachSection: React.FC<BrotherhoodApproachProps> = ({ onJoinClick }) => {
  return (
    <section id="brotherhood" className="section brotherhood-section">
      <div className="container">
        {/* Brotherhood Core Header */}
        <div className="section-header">
          <span className="badge-tag">Brotherhood in Action</span>
          <h2 className="section-title">Iron Sharpens Iron</h2>
          <p className="section-description">
            We are not competitors in an arena; we are brothers in the trenches. Here, accountability is an act of love, not judgment.
          </p>
        </div>

        {/* Dynamic 3-Column Brotherhood Manifesto Grid */}
        <div className="brotherhood-manifesto-grid">
          <div className="surface-card manifesto-card">
            <div className="manifesto-icon-box">
              <Users2 size={24} />
            </div>
            <h3 className="manifesto-card-title">Authentic Vulnerability</h3>
            <p className="manifesto-card-text">
              Leave the performance at the door. Here, young men drop the false facade and discuss real struggles with finances, purity, emotional stress, and vocational uncertainty without fear of condemnation.
            </p>
          </div>

          <div className="surface-card manifesto-card">
            <div className="manifesto-icon-box">
              <ShieldAlert size={24} />
            </div>
            <h3 className="manifesto-card-title">Loving Accountability</h3>
            <p className="manifesto-card-text">
              A real brother cares too much to watch you ruin your potential. We hold each other to our word on daily devotions, workout consistency, financial budgeting, and character commitments.
            </p>
          </div>

          <div className="surface-card manifesto-card">
            <div className="manifesto-icon-box">
              <HeartHandshake size={24} />
            </div>
            <h3 className="manifesto-card-title">Shared Milestones</h3>
            <p className="manifesto-card-text">
              When one brother graduates, secures a career breakthrough, or completes a 90-day discipline goal, the entire brotherhood celebrates as one family. Individual victory strengthens the whole shield wall.
            </p>
          </div>
        </div>

        {/* Our Approach: The 4 Stages */}
        <div className="approach-wrapper">
          <div className="approach-header">
            <h3 className="approach-section-heading">Our Four-Stage Growth Cycle</h3>
            <p className="approach-sub">
              Sustainable transformation follows a deliberate rhythm. We do not jump from inspiration to mastery overnight.
            </p>
          </div>

          <div className="approach-stages-grid">
            {APPROACH_STAGES.map((stage) => (
              <div key={stage.number} className="stage-card surface-card">
                <div className="stage-num-badge">{stage.number}</div>
                <h4 className="stage-title">{stage.title}</h4>
                <span className="stage-tagline text-bronze">{stage.tagline}</span>
                <p className="stage-desc">{stage.description}</p>
                <div className="stage-habit">
                  <CheckCircle size={14} className="text-bronze" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{stage.actionableHabit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impactful In-Section Decision CTA */}
        <div className="brotherhood-cta-banner surface-card">
          <div className="cta-banner-content">
            <span className="badge-tag">The Turning Point</span>
            <h3 className="cta-banner-heading">Your Growth Starts With a Decision.</h3>
            <p className="cta-banner-text">
              You do not have to have everything figured out. You only need the willingness to learn, the humility to grow, and the courage to take the next step.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onJoinClick}
            >
              Become Part of the Brotherhood
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
