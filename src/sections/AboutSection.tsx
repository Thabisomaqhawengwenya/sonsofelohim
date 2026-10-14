import React from 'react';
import { SITE_METADATA, CORE_VALUES } from '../data/content';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Who We Are</span>
          <h2 className="section-title">Rooted in God. Forged in Purpose.</h2>
          <p className="section-description">
            Sons of Elohim is not merely a social club or an abstract motivational feed. We are a brotherhood built to address the real crises facing young men today.
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="mission-vision-grid">
          <div className="surface-card vision-card">
            <div className="mv-card-header">
              <div className="mv-icon-box">
                <Target size={24} />
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
            </div>
            <p className="mv-statement">
              "{SITE_METADATA.missionStatement}"
            </p>
            <span className="mv-footnote">The practical blueprint for our daily assemblies and mutual accountability.</span>
          </div>

          <div className="surface-card vision-card">
            <div className="mv-card-header">
              <div className="mv-icon-box">
                <Eye size={24} />
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
            </div>
            <p className="mv-statement">
              "{SITE_METADATA.visionStatement}"
            </p>
            <span className="mv-footnote">The generational horizon that inspires our long-term investments in youth.</span>
          </div>
        </div>

        {/* The Crisis We Address Narrative */}
        <div className="challenges-addressed-block surface-card">
          <div className="challenges-header">
            <h3 className="challenges-title">Why the Brotherhood Exists</h3>
            <p className="challenges-lead">
              Young people today—particularly young men ages 15 to 25—navigate a uniquely hostile landscape of isolation, superficial connections, economic confusion, and moral ambiguity.
            </p>
          </div>

          <div className="challenges-pillars-grid">
            <div className="challenge-item">
              <h4 className="challenge-title">The Epidemic of Isolation</h4>
              <p className="challenge-desc">
                Millions of young men have hundreds of digital followers but zero brothers they can call in a crisis. We replace digital noise with real, face-to-face brotherhood.
              </p>
            </div>

            <div className="challenge-item">
              <h4 className="challenge-title">Absence of Grounded Mentorship</h4>
              <p className="challenge-desc">
                Many lack healthy male role models who model both biblical humility and masculine strength. We build peer bridges between older and younger brothers.
              </p>
            </div>

            <div className="challenge-item">
              <h4 className="challenge-title">Imbalanced Development</h4>
              <p className="challenge-desc">
                Too many hyper-focus on gym aesthetics while neglecting financial literacy, or study theology while ignoring bodily discipline. We demand balanced, holistic growth across all five pillars.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section (8 Core Values) */}
        <div className="values-wrapper">
          <div className="values-header">
            <span className="badge-tag">Moral Bedrock</span>
            <h3 className="values-heading">Our Core Values</h3>
            <p className="values-sub">
              These eight non-negotiable principles govern how every brother conducts himself in private and in public.
            </p>
          </div>

          <div className="values-grid">
            {CORE_VALUES.map((val) => (
              <div key={val.name} className="value-card surface-card">
                <div className="value-top">
                  <ShieldCheck size={20} className="text-bronze" />
                  {val.scripture && <span className="value-scripture">{val.scripture}</span>}
                </div>
                <h4 className="value-name">{val.name}</h4>
                <span className="value-tagline text-bronze">{val.tagline}</span>
                <p className="value-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
