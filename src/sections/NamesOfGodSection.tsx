import React, { useState } from 'react';
import { DIVINE_NAMES } from '../data/namesOfGod';
import type { DivineName } from '../data/namesOfGod';
import { Sparkles, BookOpen, Layers, Shield, Check } from 'lucide-react';

export const NamesOfGodSection: React.FC = () => {
  const [selectedName, setSelectedName] = useState<DivineName>(DIVINE_NAMES[0]); // defaults to ELOHIM
  const [artboardTheme, setArtboardTheme] = useState<'poster-light' | 'poster-dark'>('poster-dark');

  const elohimHero = DIVINE_NAMES.find((n) => n.id === 'elohim') || DIVINE_NAMES[0];
  const shammahFooter = DIVINE_NAMES.find((n) => n.id === 'shammah') || DIVINE_NAMES[DIVINE_NAMES.length - 1];

  // Group names into a playful multi-column poster layout mimicking the reference art
  const posterGridNames = DIVINE_NAMES.filter((n) => n.id !== 'elohim' && n.id !== 'shammah');

  const renderNameTile = (item: DivineName) => {
    const isSelected = selectedName.id === item.id;
    const rotation = item.rotationDeg ? `rotate(${item.rotationDeg}deg)` : 'none';

    return (
      <div
        key={item.id}
        className={`name-tile tile-${item.styleType} ${isSelected ? 'tile-active' : ''}`}
        style={{ transform: rotation }}
        onClick={() => setSelectedName(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedName(item);
          }
        }}
        aria-label={`${item.name} - ${item.meaning}`}
      >
        {item.styleType === 'stacked' ? (
          <div className="name-stacked-lines">
            <span>The Way</span>
            <span>The Truth</span>
            <span>The Life</span>
          </div>
        ) : (
          <span className="name-text">{item.name}</span>
        )}
        <span className="name-sub-meaning">({item.meaning.split('/')[0].trim()})</span>
      </div>
    );
  };

  return (
    <section id="names-of-god" className="section names-of-god-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">The Sovereign Identity</span>
          <h2 className="section-title">The Names of God</h2>
          <p className="section-description">
            The unshakeable character, redemptive covenant titles, and sovereign majesty of our Lord.
          </p>

          {/* Theme Toggle Pill */}
          <div className="poster-theme-toggle-bar">
            <span className="toggle-label">
              <Layers size={14} className="text-bronze" />
              <span>Canvas Display:</span>
            </span>
            <div className="toggle-pill-group">
              <button
                type="button"
                className={`theme-pill-btn ${artboardTheme === 'poster-dark' ? 'active' : ''}`}
                onClick={() => setArtboardTheme('poster-dark')}
              >
                Brotherhood Obsidian
              </button>
              <button
                type="button"
                className={`theme-pill-btn ${artboardTheme === 'poster-light' ? 'active' : ''}`}
                onClick={() => setArtboardTheme('poster-light')}
              >
                Classic Artboard
              </button>
            </div>
          </div>
        </div>

        {/* The Typographic Poster Artboard */}
        <div className={`poster-artboard ${artboardTheme}`}>
          <div className="poster-border-frame">
            {/* Corner Filigrees */}
            <div className="corner-filigree top-left" aria-hidden="true" />
            <div className="corner-filigree top-right" aria-hidden="true" />
            <div className="corner-filigree bottom-left" aria-hidden="true" />
            <div className="corner-filigree bottom-right" aria-hidden="true" />

            {/* HERO CENTERPIECE: ELOHIM (Replaces Jesus as requested) */}
            <div
              className={`poster-hero-name ${selectedName.id === 'elohim' ? 'active' : ''}`}
              onClick={() => setSelectedName(elohimHero)}
              role="button"
              tabIndex={0}
              aria-label="ELOHIM - The Mighty Creator"
            >
              <div className="hero-name-badge">
                <Sparkles size={14} />
                <span>Supreme Creator Archetype</span>
              </div>
              <h1 className="hero-elohim-letters">ELOHIM</h1>
              <span className="hero-elohim-meaning">(THE MIGHTY CREATOR &amp; SOVEREIGN GOD)</span>
              <span className="hero-hebrew-tag">{elohimHero.transliteration} &bull; Genesis 1:1</span>
            </div>

            {/* Sub-Divider Decorative Line */}
            <div className="poster-divider" aria-hidden="true">
              <span className="divider-line" />
              <Shield size={16} className="divider-crest" />
              <span className="divider-line" />
            </div>

            {/* Playful Typographic Cloud / Wall */}
            <div className="poster-names-cloud">
              {posterGridNames.map((nameItem) => renderNameTile(nameItem))}
            </div>

            {/* Grand Baseline: SHAMMAH (The Lord is My Banner / The Lord is There) */}
            <div className="poster-baseline-wrapper">
              <div
                className={`name-tile baseline-shammah ${selectedName.id === 'shammah' ? 'tile-active' : ''}`}
                onClick={() => setSelectedName(shammahFooter)}
                role="button"
                tabIndex={0}
              >
                <h3 className="baseline-letters">{shammahFooter.name}</h3>
                <span className="name-sub-meaning">({shammahFooter.meaning})</span>
                <span className="baseline-hebrew">{shammahFooter.transliteration} &bull; Ezekiel 48:35</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Deep Meaning Inspector Card */}
        <div className="name-inspector-card surface-card">
          <div className="inspector-left">
            <div className="inspector-icon">
              <BookOpen size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="badge-tag">{selectedName.scriptureRef}</span>
                {selectedName.transliteration && (
                  <span className="inspector-translit">{selectedName.transliteration}</span>
                )}
              </div>
              <h3 className="inspector-title">{selectedName.name}</h3>
              <p className="inspector-meaning">{selectedName.meaning}</p>
            </div>
          </div>

          <div className="inspector-right">
            <p className="inspector-verse">"{selectedName.scriptureText}"</p>
            <span className="inspector-cite">{selectedName.scriptureRef}</span>
          </div>
        </div>

        {/* Footnote on Brotherhood Connection */}
        <div className="names-footnote">
          <Check size={16} className="text-bronze" style={{ flexShrink: 0 }} />
          <p>
            <strong>The Sons of Elohim Calling:</strong> We draw our name from <em>Elohim</em>—recognizing that the God who ordered the universe out of chaos calls His sons to conquer chaos in their own lives, building discipline, strength, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};
