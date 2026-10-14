import React from 'react';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/content';
import { EzekielEmblem } from '../components/EzekielEmblem';

interface HeroSectionProps {
  onJoinClick: () => void;
  onMissionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinClick,
  onMissionClick,
}) => {
  return (
    <section id="hero" className="section section-hero">
      {/* Subtle Atmospheric Grid & Light Flare */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-flare" />
        <div className="hero-vignette" />
      </div>

      <div className="container hero-content-grid">
        {/* Left Column: Focused 4-Element Stack */}
        <div className="hero-text-stack">
          {/* Element 1: Brand Strip / Eyebrow */}
          <div className="hero-eyebrow-strip">
            <span className="eyebrow-badge">
              <Sparkles size={12} className="text-bronze" />
              <span>{SITE_METADATA.scriptureReference} Inspired Brotherhood</span>
            </span>
          </div>

          {/* Element 2: Headline (Strict Max 2 Lines on Desktop) */}
          <h1 className="hero-headline">
            Become the Man <br />
            <span className="text-bronze">You’re Called to Be.</span>
          </h1>

          {/* Element 3: Subtext */}
          <p className="hero-subtext">
            Sons of Elohim is a brotherhood committed to growing together in faith, character, discipline, and purpose.
            Through mentorship, accountability, and practical guidance, we help one another become better in every area of life.
          </p>

          {/* Element 4: Dual Tactile CTAs (No wrapping, max 2 words) */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onJoinClick}
            >
              Join Brotherhood
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onMissionClick}
            >
              Discover Mission
            </button>
          </div>

          {/* Core Philosophy Badge Under Hero Stack */}
          <div className="hero-tagline-bar">
            <Shield size={14} className="text-bronze" />
            <span className="hero-tagline-text">{SITE_METADATA.tagline}</span>
          </div>
        </div>

        {/* Right Column: Ezekiel 1:10 Emblem Motif */}
        <div className="hero-emblem-container" aria-hidden="true">
          <div className="hero-emblem-halo">
            <EzekielEmblem interactive={false} size="lg" />
            <div className="hero-emblem-orbit">
              <span className="orbit-tag tag-human">Human &bull; Wisdom</span>
              <span className="orbit-tag tag-lion">Lion &bull; Courage</span>
              <span className="orbit-tag tag-ox">Ox &bull; Service</span>
              <span className="orbit-tag tag-eagle">Eagle &bull; Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
