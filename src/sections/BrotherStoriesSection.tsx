import React, { useState } from 'react';
import { BROTHER_STORIES } from '../data/content';
import { Quote, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface BrotherStoriesSectionProps {
  onJoinClick: () => void;
}

export const BrotherStoriesSection: React.FC<BrotherStoriesSectionProps> = ({ onJoinClick }) => {
  const [activeStoryId, setActiveStoryId] = useState<string>(BROTHER_STORIES[0].id);

  const activeStory = BROTHER_STORIES.find((s) => s.id === activeStoryId) || BROTHER_STORIES[0];

  return (
    <section id="brother-stories" className="section brother-stories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Living Proof</span>
          <h2 className="section-title">Voices of the Brotherhood</h2>
          <p className="section-description">
            No polished corporate actors. No hired testimonials. Just young men who refused to stay isolated and did the unglamorous daily work of growing in Christ.
          </p>
        </div>

        {/* Stories Selector Tabs */}
        <div className="stories-tab-nav" role="tablist" aria-label="Brother Stories">
          {BROTHER_STORIES.map((story) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={activeStoryId === story.id}
              className={`story-tab-btn ${activeStoryId === story.id ? 'active' : ''}`}
              onClick={() => setActiveStoryId(story.id)}
            >
              <span className="story-tab-name">{story.name}</span>
              <span className="story-tab-meta">
                {story.age} yrs &bull; {story.location.split(',')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Feature Story Spotlight Card */}
        <div className="surface-card story-spotlight-card">
          <div className="story-card-topbar">
            <div className="story-author-info">
              <div className="story-avatar-badge">
                <span>{activeStory.name.slice(0, 2)}</span>
              </div>
              <div>
                <h3 className="story-author-name">
                  {activeStory.name} <span className="story-age">({activeStory.age} years old)</span>
                </h3>
                <div className="story-author-meta">
                  <span className="meta-pill">
                    <MapPin size={12} /> {activeStory.location}
                  </span>
                  <span className="meta-pill">
                    <Clock size={12} /> {activeStory.timeInBrotherhood}
                  </span>
                </div>
              </div>
            </div>

            <div className="story-focus-tag">
              <ShieldCheck size={14} className="text-bronze" />
              <span>{activeStory.pillarFocus}</span>
            </div>
          </div>

          {/* Main Pull Quote */}
          <div className="story-quote-box">
            <Quote size={28} className="quote-icon text-bronze" />
            <blockquote className="story-quote-text">
              "{activeStory.quote}"
            </blockquote>
          </div>

          {/* Before & After Journey Grid */}
          <div className="story-journey-grid">
            <div className="journey-col journey-before">
              <h4 className="journey-title">
                <span className="journey-dot before-dot" /> The Raw Struggle
              </h4>
              <p className="journey-body">{activeStory.rawChallenge}</p>
            </div>

            <div className="journey-col journey-after">
              <h4 className="journey-title">
                <span className="journey-dot after-dot" /> The Brotherhood Turning Point
              </h4>
              <p className="journey-body">{activeStory.brotherhoodTurningPoint}</p>
            </div>
          </div>

          {/* Story Card Footer CTA */}
          <div className="story-footer-bar">
            <p className="story-footer-note">
              Every brother was once standing where you are right now. Growth begins with the courage to reach out.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-compact"
              onClick={onJoinClick}
            >
              <span>Walk With These Men</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
