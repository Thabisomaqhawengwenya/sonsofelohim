import React, { useState } from 'react';
import { LIVING_CREATURES } from '../data/content';
import type { LivingCreatureId } from '../types';
import { UserCheck, Flame, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface EzekielEmblemProps {
  interactive?: boolean;
  selectedId?: LivingCreatureId;
  onSelect?: (id: LivingCreatureId) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const EzekielEmblem: React.FC<EzekielEmblemProps> = ({
  interactive = true,
  selectedId = 'human',
  onSelect,
  size = 'lg',
}) => {
  const [internalSelected, setInternalSelected] = useState<LivingCreatureId>(selectedId);
  const activeId = onSelect ? selectedId : internalSelected;

  const handleSelect = (id: LivingCreatureId) => {
    if (onSelect) {
      onSelect(id);
    } else {
      setInternalSelected(id);
    }
  };

  const activeCreature = LIVING_CREATURES.find((c) => c.id === activeId) || LIVING_CREATURES[0];

  const getCreatureIcon = (id: LivingCreatureId) => {
    switch (id) {
      case 'human':
        return <UserCheck size={20} />;
      case 'lion':
        return <Flame size={20} />;
      case 'ox':
        return <ShieldCheck size={20} />;
      case 'eagle':
        return <Compass size={20} />;
    }
  };

  if (!interactive) {
    return (
      <div className={`emblem-container emblem-${size}`} aria-hidden="true">
        <svg viewBox="0 0 120 120" className="emblem-svg">
          <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" fill="none" />
          {/* Inner Diamond */}
          <polygon points="60,16 104,60 60,104 16,60" stroke="#C5A059" strokeWidth="1.5" fill="rgba(197, 160, 89, 0.05)" />
          {/* Quadrant Cross Divider */}
          <line x1="60" y1="20" x2="60" y2="100" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="20" y1="60" x2="100" y2="60" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.6" />
          {/* Central Point */}
          <circle cx="60" cy="60" r="7" fill="#C5A059" fillOpacity="0.25" stroke="#D8B26E" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="2.5" fill="#D8B26E" />
        </svg>
      </div>
    );
  }

  return (
    <div className="ezekiel-showcase">
      {/* Visual Seal with Interactive Quadrants */}
      <div className="crest-wrapper">
        <div className="crest-seal">
          <svg viewBox="0 0 200 200" className="crest-svg" aria-label="Ezekiel 1:10 Four Faces Seal">
            <defs>
              <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C178" />
                <stop offset="100%" stopColor="#9C7733" />
              </linearGradient>
            </defs>

            {/* Outer rings with celestial orbit aesthetic */}
            <circle cx="100" cy="100" r="92" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.25" fill="none" />
            <circle cx="100" cy="100" r="82" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.35" fill="none" />
            
            {/* Outer Diamond */}
            <polygon points="100,24 176,100 100,176 24,100" stroke="url(#crestGold)" strokeWidth="2" fill="#0E1219" />

            {/* Quadrant Partition */}
            <line x1="100" y1="26" x2="100" y2="174" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="26" y1="100" x2="174" y2="100" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.4" />

            {/* Center Boss */}
            <circle cx="100" cy="100" r="18" fill="#151A24" stroke="#C5A059" strokeWidth="2" />
            <circle cx="100" cy="100" r="8" fill="#D8B26E" />
          </svg>

          {/* Quadrant Interactive Buttons Overlaid */}
          <div className="crest-quadrants">
            {LIVING_CREATURES.map((creature) => {
              const isActive = creature.id === activeId;
              return (
                <button
                  key={creature.id}
                  type="button"
                  onClick={() => handleSelect(creature.id)}
                  className={`quadrant-btn quadrant-${creature.id} ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                  aria-label={`Select ${creature.name}: ${creature.symbol}`}
                >
                  <span className="quadrant-icon">{getCreatureIcon(creature.id)}</span>
                  <span className="quadrant-label">{creature.name.replace('The ', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="crest-caption">
          <Sparkles size={14} className="text-bronze" />
          <span>Select any quadrant to inspect its biblical application</span>
        </div>
      </div>

      {/* Selected Face Detail Card */}
      <div className="creature-card surface-card">
        <div className="creature-card-header">
          <div className="creature-badge">
            <span className="creature-glyph">{getCreatureIcon(activeCreature.id)}</span>
            <div>
              <span className="badge-tag">Face of {activeCreature.name}</span>
              <h3 className="creature-title">{activeCreature.symbol}</h3>
            </div>
          </div>
        </div>

        <div className="creature-qualities">
          {activeCreature.qualities.map((quality, idx) => (
            <span key={idx} className="quality-pill">
              {quality}
            </span>
          ))}
        </div>

        <div className="creature-body">
          <div className="creature-field">
            <h4 className="field-label">Symbolic Brotherhood Application</h4>
            <p className="field-text">{activeCreature.application}</p>
          </div>

          <div className="creature-field">
            <h4 className="field-label">Biblical Anchor</h4>
            <p className="field-verse">{activeCreature.biblicalPrinciple}</p>
          </div>
        </div>

        <div className="creature-footer-note">
          <small>
            Reflective application inspired by Ezekiel 1:10. The five pillars of growth remain the practical development framework.
          </small>
        </div>
      </div>
    </div>
  );
};
