import React, { useState } from 'react';
import { SITE_METADATA } from '../data/content';
import { EzekielEmblem } from '../components/EzekielEmblem';
import type { LivingCreatureId } from '../types';
import { Sparkles, Shield, Info } from 'lucide-react';

export const VisionEzekielSection: React.FC = () => {
  const [selectedCreature, setSelectedCreature] = useState<LivingCreatureId>('human');

  return (
    <section id="vision" className="section vision-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Biblical Foundation</span>
          <h2 className="section-title">Inspired by the Vision</h2>
          <p className="section-description">
            Drawing inspiration from Ezekiel's prophetic vision to cultivate men of character, courage, humble endurance, and kingdom vision.
          </p>
        </div>

        {/* Ezekiel 1:10 Key Scripture Display */}
        <div className="scripture-hero-card surface-card">
          <div className="scripture-hero-badge">
            <Sparkles size={16} className="text-bronze" />
            <span>Key Scripture Foundation</span>
          </div>
          <blockquote className="scripture-hero-quote">
            "{SITE_METADATA.scriptureText}"
          </blockquote>
          <cite className="scripture-hero-cite">{SITE_METADATA.scriptureReference} (Berean Standard Bible)</cite>
        </div>

        {/* Narrative Context */}
        <div className="vision-narrative-intro">
          <div className="vision-narrative-box">
            <Shield size={24} className="text-bronze" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Four Faces as Symbolic Aspirations
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                In Ezekiel's vision of the divine throne room, each living creature possessed four distinct countenances.
                While biblical scholars recognize deep prophetic and apocalyptic significance in this passage, Sons of Elohim draws
                thoughtful symbolic inspiration from these four archetypes to challenge young men to develop balanced moral virtues.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Four Faces Seal Explorer */}
        <EzekielEmblem
          interactive={true}
          selectedId={selectedCreature}
          onSelect={(id) => setSelectedCreature(id)}
        />

        {/* Theological Boundary & Framework Clarification Callout */}
        <div className="vision-boundary-callout">
          <Info size={18} className="text-bronze" style={{ flexShrink: 0 }} />
          <p>
            <strong>Note on Hermeneutics:</strong> We present these reflections as symbolic applications inspired by the text, not as dogmatic or definitive theological explanations of the prophetic vision. The <strong>Five Pillars of Growth</strong> remain our practical brotherhood development framework.
          </p>
        </div>
      </div>
    </section>
  );
};
