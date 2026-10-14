import React from 'react';
import { Coins, Dumbbell, BookOpen, Brain, Users, ArrowUpRight } from 'lucide-react';
import { FIVE_PILLARS } from '../data/content';
import type { PillarId } from '../types';

interface PillarsSectionProps {
  onPillarSelect: (id: PillarId) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onPillarSelect }) => {
  const getPillarIcon = (id: PillarId) => {
    switch (id) {
      case 'financial':
        return <Coins size={26} />;
      case 'physical':
        return <Dumbbell size={26} />;
      case 'spiritual':
        return <BookOpen size={26} />;
      case 'mental':
        return <Brain size={26} />;
      case 'social':
        return <Users size={26} />;
    }
  };

  return (
    <section id="pillars" className="section pillars-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">The Growth Framework</span>
          <h2 className="section-title">The Five Fundamental Pillars</h2>
          <p className="section-description">
            Intentional, balanced, and sustainable growth across the essential dimensions of a young man’s life.
          </p>
        </div>

        {/* 5-Card Grid: 3 in top tier, 2 in bottom tier (Strict matching, no fillers) */}
        <div className="pillars-grid">
          {FIVE_PILLARS.map((pillar, index) => {
            const isLarge = index >= 3; // 4th and 5th items span wider
            return (
              <div
                key={pillar.id}
                className={`pillar-preview-card surface-card ${isLarge ? 'card-wide' : ''}`}
                onClick={() => onPillarSelect(pillar.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onPillarSelect(pillar.id);
                  }
                }}
                aria-label={`Inspect ${pillar.name} deep-dive`}
              >
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">{getPillarIcon(pillar.id)}</div>
                  <span className="pillar-number">0{index + 1}</span>
                </div>

                <div className="pillar-card-content">
                  <h3 className="pillar-name">{pillar.name}</h3>
                  <span className="pillar-tagline text-bronze">{pillar.tagline}</span>
                  <p className="pillar-summary">{pillar.summary}</p>
                </div>

                <div className="pillar-card-footer">
                  <span className="pillar-scripture-tag">
                    {pillar.scriptureReference}
                  </span>
                  <span className="pillar-explore-link">
                    Explore Details <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
