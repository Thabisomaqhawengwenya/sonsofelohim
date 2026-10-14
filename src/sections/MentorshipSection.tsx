import React, { useState } from 'react';
import { MENTORSHIP_PROGRAM } from '../data/content';
import {
  Users,
  Briefcase,
  BookOpen,
  CalendarCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface MentorshipSectionProps {
  onApplyMentor: () => void;
  onRequestGuidance: () => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({
  onApplyMentor,
  onRequestGuidance,
}) => {
  const [activeTab, setActiveTab] = useState<'receive' | 'give'>('receive');

  const mentorshipTracks = [
    {
      title: 'Peer Accountability Pairings',
      icon: <Users size={22} />,
      desc: 'Weekly 1-on-1 check-ins with an assigned brother to review physical habits, Bible reading plans, and moral purity goals.',
    },
    {
      title: 'Career & Trade Guidance',
      icon: <Briefcase size={22} />,
      desc: 'Practical resume critiques, mock job interviews, apprenticeship navigation, and portfolio reviews with brothers active in the field.',
    },
    {
      title: 'Spiritual Encouragement',
      icon: <BookOpen size={22} />,
      desc: 'Safe, confidential brotherhood circles to wrestle with theological questions, scriptural interpretation, and personal walk with Christ.',
    },
    {
      title: 'Goal-Setting & Reviews',
      icon: <CalendarCheck size={22} />,
      desc: 'Quarterly life audits where brothers establish measurable 90-day targets across financial, physical, and mental disciplines.',
    },
  ];

  return (
    <section id="mentorship" className="section mentorship-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Mutual Guidance</span>
          <h2 className="section-title">Peer Mentorship & Guidance</h2>
          <p className="section-description">
            {MENTORSHIP_PROGRAM.subtext}
          </p>
        </div>

        {/* 4-Track Feature Grid */}
        <div className="mentorship-tracks-grid">
          {mentorshipTracks.map((track, idx) => (
            <div key={idx} className="surface-card track-card">
              <div className="track-icon-box">{track.icon}</div>
              <h3 className="track-title">{track.title}</h3>
              <p className="track-desc">{track.desc}</p>
            </div>
          ))}
        </div>

        {/* Dual CTA Block: Receive Guidance vs Offer Guidance */}
        <div className="mentorship-dual-cta surface-card">
          <div className="cta-toggle-tabs">
            <button
              type="button"
              className={`cta-tab ${activeTab === 'receive' ? 'active' : ''}`}
              onClick={() => setActiveTab('receive')}
            >
              Seeking a Mentor & Guidance
            </button>
            <button
              type="button"
              className={`cta-tab ${activeTab === 'give' ? 'active' : ''}`}
              onClick={() => setActiveTab('give')}
            >
              Ready to Mentor & Guide
            </button>
          </div>

          <div className="cta-tab-content">
            {activeTab === 'receive' ? (
              <div className="tab-pane">
                <h4 className="pane-title">Walk Beside an Experienced Brother</h4>
                <p className="pane-text">
                  You don't have to stumble through your teenage and early twenties years blindly.
                  Connect with a brother who has navigated the challenges you're currently facing and is committed to your growth.
                </p>
                <div className="pane-highlights">
                  <span><CheckCircle size={15} className="text-bronze" /> Zero judgment or condescension</span>
                  <span><CheckCircle size={15} className="text-bronze" /> Weekly structured touchpoints</span>
                  <span><CheckCircle size={15} className="text-bronze" /> Tailored to your priority growth pillar</span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onRequestGuidance}
                >
                  Request Mentorship Pairing
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div className="tab-pane">
                <h4 className="pane-title">Invest in the Next Generation</h4>
                <p className="pane-text">
                  If God has given you maturity in your career, finances, physical discipline, or faith walk, you have a solemn duty
                  to pour that wisdom into younger brothers who need guidance.
                </p>
                <div className="pane-highlights">
                  <span><CheckCircle size={15} className="text-bronze" /> Flexible time commitment (1-2 hrs/week)</span>
                  <span><CheckCircle size={15} className="text-bronze" /> Structured brotherhood mentoring guidelines</span>
                  <span><CheckCircle size={15} className="text-bronze" /> Mutual edification and lasting bonds</span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onApplyMentor}
                >
                  Apply to Mentor a Brother
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Honest Disclaimer Required by Brief */}
        <div className="mentorship-disclaimer-box">
          <ShieldAlert size={18} className="text-bronze" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p>
            <strong>Clarity of Scope:</strong> {MENTORSHIP_PROGRAM.disclaimer} For crisis situations, legal issues, or clinical psychological therapy, we encourage consulting accredited medical and legal authorities.
          </p>
        </div>
      </div>
    </section>
  );
};
