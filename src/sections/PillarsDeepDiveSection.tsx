import React, { useState } from 'react';
import { FIVE_PILLARS } from '../data/content';
import type { PillarId } from '../types';
import {
  Coins,
  Dumbbell,
  BookOpen,
  Brain,
  Users,
  CheckCircle2,
  AlertTriangle,
  Users2,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface PillarsDeepDiveProps {
  initialPillarId?: PillarId;
  onJoinClick?: () => void;
}

export const PillarsDeepDiveSection: React.FC<PillarsDeepDiveProps> = ({
  initialPillarId = 'financial',
  onJoinClick,
}) => {
  const [activePillarId, setActivePillarId] = useState<PillarId>(initialPillarId);

  const activePillar =
    FIVE_PILLARS.find((p) => p.id === activePillarId) || FIVE_PILLARS[0];

  const getPillarIcon = (id: PillarId) => {
    switch (id) {
      case 'financial':
        return <Coins size={22} />;
      case 'physical':
        return <Dumbbell size={22} />;
      case 'spiritual':
        return <BookOpen size={22} />;
      case 'mental':
        return <Brain size={22} />;
      case 'social':
        return <Users size={22} />;
    }
  };

  return (
    <section id="pillars-deep" className="section pillars-deep-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Comprehensive Curriculum</span>
          <h2 className="section-title">The Five Pillars In Depth</h2>
          <p className="section-description">
            Explore the actionable theology, practical routines, and peer accountability mechanisms behind each area of growth.
          </p>
        </div>

        {/* Pillar Tab Selector */}
        <div className="pillar-tabs-container" role="tablist" aria-label="Select Growth Pillar">
          {FIVE_PILLARS.map((p) => {
            const isActive = p.id === activePillarId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActivePillarId(p.id)}
              >
                <span className="tab-icon">{getPillarIcon(p.id)}</span>
                <span className="tab-text">{p.name.replace(' Growth', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep Dive Showcase */}
        <div className="pillar-detail-card surface-card">
          {/* Header Banner */}
          <div className="pillar-detail-header">
            <div className="pillar-header-badge">
              <div className="pillar-header-icon">{getPillarIcon(activePillar.id)}</div>
              <div>
                <span className="badge-tag">{activePillar.tagline}</span>
                <h3 className="pillar-detail-title">{activePillar.name}</h3>
              </div>
            </div>

            {/* Scripture Pill */}
            <div className="pillar-verse-pill">
              <span className="verse-ref">{activePillar.scriptureReference}</span>
              <p className="verse-text">"{activePillar.scriptureText}"</p>
            </div>
          </div>

          {/* Meaning & Significance Dual Grid */}
          <div className="pillar-meaning-grid">
            <div className="meaning-box">
              <h4 className="meaning-title">What It Means</h4>
              <p className="meaning-text">{activePillar.whatItMeans}</p>
            </div>
            <div className="meaning-box">
              <h4 className="meaning-title">Why It Matters</h4>
              <p className="meaning-text">{activePillar.whyItMatters}</p>
            </div>
          </div>

          {/* Challenges vs Practical Habits Grid */}
          <div className="pillar-action-grid">
            {/* Common Challenges */}
            <div className="action-col challenges-col">
              <div className="col-heading">
                <AlertTriangle size={18} className="text-bronze" />
                <h4>Common Youth Hurdles</h4>
              </div>
              <ul className="action-list">
                {activePillar.commonChallenges.map((challenge, idx) => (
                  <li key={idx} className="action-item">
                    <span className="bullet-dot warning-dot" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Habits */}
            <div className="action-col habits-col">
              <div className="col-heading">
                <CheckCircle2 size={18} className="text-bronze" />
                <h4>Practical Daily Habits</h4>
              </div>
              <ul className="action-list">
                {activePillar.practicalHabits.map((habit, idx) => (
                  <li key={idx} className="action-item">
                    <span className="bullet-dot habit-dot" />
                    <span>{habit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Mechanisms & Discussion Topics */}
          <div className="pillar-support-grid">
            <div className="support-box">
              <div className="col-heading">
                <Users2 size={18} className="text-bronze" />
                <h4>How Brothers Support One Another</h4>
              </div>
              <ul className="support-list">
                {activePillar.peerSupportMechanisms.map((mech, idx) => (
                  <li key={idx} className="support-item">
                    {mech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="support-box">
              <div className="col-heading">
                <MessageSquare size={18} className="text-bronze" />
                <h4>Discussion Topics & Workshops</h4>
              </div>
              <ul className="support-list">
                {activePillar.discussionTopics.map((topic, idx) => (
                  <li key={idx} className="support-item">
                    "{topic}"
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Balanced Growth Note */}
          <div className="pillar-footer-grace">
            <Sparkles size={18} className="text-bronze" style={{ flexShrink: 0 }} />
            <div style={{ flexGrow: 1 }}>
              <p>
                <strong>Grace and Sustainable Progress:</strong> No brother is expected to excel in all five pillars simultaneously. Growth is organic and progressive. We celebrate faithful daily steps over sporadic perfection.
              </p>
            </div>
            {onJoinClick && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onJoinClick}
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem', whiteSpace: 'nowrap' }}
              >
                Join Brotherhood
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
