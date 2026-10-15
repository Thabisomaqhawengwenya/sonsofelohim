import React, { useState } from 'react';
import { DIVINE_NAMES } from '../data/namesOfGod';
import type { DivineName } from '../data/namesOfGod';
import { BookOpen, Printer, Check } from 'lucide-react';

export const NamesOfGodSection: React.FC = () => {
  const [selectedNameId, setSelectedNameId] = useState<string>('elohim');
  const [posterTheme, setPosterTheme] = useState<'poster-paper' | 'poster-dark'>('poster-paper');

  const selectedName: DivineName =
    DIVINE_NAMES.find((n) => n.id === selectedNameId) || DIVINE_NAMES[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="names-of-god" className="section names-of-god-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Sacred Typography</span>
          <h2 className="section-title">The Names of God</h2>
          <p className="section-description">
            A typographic tribute celebrating the covenant attributes, sovereign majesty, and redemptive character of God—with <strong>Elohim</strong> reigning at the summit.
          </p>

          {/* Controls Bar: Theme Switcher + Print */}
          <div className="poster-action-controls">
            <div className="toggle-pill-group">
              <button
                type="button"
                className={`theme-pill-btn ${posterTheme === 'poster-paper' ? 'active' : ''}`}
                onClick={() => setPosterTheme('poster-paper')}
              >
                Authentic Poster Print (White)
              </button>
              <button
                type="button"
                className={`theme-pill-btn ${posterTheme === 'poster-dark' ? 'active' : ''}`}
                onClick={() => setPosterTheme('poster-dark')}
              >
                Brotherhood Obsidian (Dark)
              </button>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-print-poster"
              onClick={handlePrint}
              title="Print or Save Poster"
            >
              <Printer size={15} />
              Print Poster
            </button>
          </div>
        </div>

        {/* ==========================================================================
            THE EXACT POSTER ARTBOARD (1:1 STRUCTURAL REPLICA OF THE IMAGE)
           ========================================================================== */}
        <div className={`exact-poster-canvas ${posterTheme}`}>
          <div className="poster-inner-sheet">
            {/* Top Giant Header: ELOHIM (Replaces Jesus from the reference image) */}
            <div
              className={`exact-poster-header ${selectedNameId === 'elohim' ? 'selected' : ''}`}
              onClick={() => setSelectedNameId('elohim')}
              role="button"
              tabIndex={0}
              aria-label="ELOHIM - The Mighty Creator"
            >
              <h1 className="header-elohim-text">ELOHIM</h1>
            </div>

            {/* Poster Grid - Exact Rows and Positions from the Picture */}
            <div className="exact-poster-body">
              {/* Row 1: ABBA | KING OF KINGS | JIREH */}
              <div className="poster-row row-1">
                <div
                  className={`poster-item item-sans align-left ${selectedNameId === 'abba' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('abba')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">ABBA</span>
                </div>

                <div
                  className={`poster-item item-serif align-center ${selectedNameId === 'king-of-kings' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('king-of-kings')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">KING OF KINGS</span>
                </div>

                <div
                  className={`poster-item item-sans align-right ${selectedNameId === 'jireh' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('jireh')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">JIREH</span>
                  <span className="text-sub">(LORD WILL PROVIDE)</span>
                </div>
              </div>

              {/* Row 2: Christ | Name Above All names | Messiah */}
              <div className="poster-row row-2">
                <div
                  className={`poster-item item-script align-left ${selectedNameId === 'christ' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('christ')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Christ</span>
                </div>

                <div
                  className={`poster-item item-script align-center ${selectedNameId === 'name-above-all-names' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('name-above-all-names')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Name Above All names</span>
                </div>

                <div
                  className={`poster-item item-script align-right ${selectedNameId === 'messiah' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('messiah')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Messiah</span>
                </div>
              </div>

              {/* Row 3: RAPHA | EL SHADDAI & Savior | ADONAI */}
              <div className="poster-row row-3">
                <div
                  className={`poster-item item-sans align-left ${selectedNameId === 'rapha' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('rapha')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">RAPHA</span>
                </div>

                <div className="poster-center-cluster">
                  <div
                    className={`poster-item item-serif align-center ${selectedNameId === 'el-shaddai' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('el-shaddai')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">EL SHADDAI</span>
                  </div>
                  <div
                    className={`poster-item item-script align-center item-savior ${selectedNameId === 'savior' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('savior')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">Savior</span>
                  </div>
                </div>

                <div
                  className={`poster-item item-sans align-right ${selectedNameId === 'adonai' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('adonai')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">ADONAI</span>
                </div>
              </div>

              {/* Row 4: Lamb Of God | YAHWEH (I THE LORD) | Redeemer */}
              <div className="poster-row row-4">
                <div
                  className={`poster-item item-script align-left ${selectedNameId === 'lamb-of-god' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('lamb-of-god')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Lamb Of God</span>
                </div>

                <div
                  className={`poster-item item-sans align-center ${selectedNameId === 'yahweh' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('yahweh')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">YAHWEH</span>
                  <span className="text-sub">(I THE LORD)</span>
                </div>

                <div
                  className={`poster-item item-script align-right ${selectedNameId === 'redeemer' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('redeemer')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Redeemer</span>
                </div>
              </div>

              {/* Row 5: ROHI (THE LORD) | Alpha and Omega | SHALOM (THE PRINCE OF PEACE) */}
              <div className="poster-row row-5">
                <div
                  className={`poster-item item-sans align-left ${selectedNameId === 'rohi' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('rohi')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">ROHI</span>
                  <span className="text-sub">(THE LORD)</span>
                </div>

                <div
                  className={`poster-item item-script align-center ${selectedNameId === 'alpha-omega' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('alpha-omega')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Alpha and Omega</span>
                </div>

                <div
                  className={`poster-item item-serif align-right ${selectedNameId === 'shalom' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('shalom')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">SHALOM</span>
                  <span className="text-sub">(THE PRINCE OF PEACE)</span>
                </div>
              </div>

              {/* Row 6: Emmanuel | JESUS (Swapped from Elohim) | Light Of the World */}
              <div className="poster-row row-6">
                <div
                  className={`poster-item item-script align-left ${selectedNameId === 'emmanuel' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('emmanuel')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Emmanuel</span>
                </div>

                <div
                  className={`poster-item item-sans align-center item-center-jesus ${selectedNameId === 'elohim' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('elohim')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">JESUS</span>
                  <span className="text-sub">(THE MIGHTY SAVIOR)</span>
                </div>

                <div
                  className={`poster-item item-script align-right ${selectedNameId === 'light-of-the-world' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('light-of-the-world')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Light Of the World</span>
                </div>
              </div>

              {/* Row 7: NISSI + Prince of Peace | Stacked The Way/The Truth/The Life | TSIDKENU + Lord Of Lords */}
              <div className="poster-row row-7">
                <div className="poster-col-left">
                  <div
                    className={`poster-item item-sans align-left ${selectedNameId === 'nissi' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('nissi')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">NISSI</span>
                  </div>
                  <div
                    className={`poster-item item-script align-left item-pop ${selectedNameId === 'prince-of-peace' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('prince-of-peace')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">Prince of Peace</span>
                  </div>
                </div>

                {/* Center: Stacked 3-line Script */}
                <div
                  className={`poster-item item-script-stacked align-center ${selectedNameId === 'the-way-truth-life' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('the-way-truth-life')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="script-line">The Way</span>
                  <span className="script-line">The Truth</span>
                  <span className="script-line">The Life</span>
                </div>

                <div className="poster-col-right">
                  <div
                    className={`poster-item item-serif align-right ${selectedNameId === 'tsidkenu' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('tsidkenu')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">TSIDKENU</span>
                    <span className="text-sub">(THE LORD OUR RIGHTEOUSNESS)</span>
                  </div>
                  <div
                    className={`poster-item item-script align-right item-pop ${selectedNameId === 'lord-of-lords' ? 'selected' : ''}`}
                    onClick={() => setSelectedNameId('lord-of-lords')}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-val">Lord Of Lords</span>
                  </div>
                </div>
              </div>

              {/* Row 8: SHAMMAH (THE LORD IS THERE) */}
              <div className="poster-row row-8">
                <div
                  className={`poster-item item-sans align-left ${selectedNameId === 'shammah' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('shammah')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">SHAMMAH</span>
                  <span className="text-sub">(THE LORD IS THERE)</span>
                </div>
              </div>

              {/* Grand Baseline: SHAMMAH (THE LORD IS MY BANNER) */}
              <div className="poster-baseline">
                <div
                  className={`poster-item item-serif-grand align-center ${selectedNameId === 'shammah' ? 'selected' : ''}`}
                  onClick={() => setSelectedNameId('shammah')}
                  role="button"
                  tabIndex={0}
                >
                  <h2 className="grand-baseline-text">SHAMMAH</h2>
                  <span className="grand-baseline-sub">(THE LORD IS MY BANNER)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scripture & Meaning Inspector */}
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

        {/* Brotherhood Theological Note */}
        <div className="names-footnote">
          <Check size={16} className="text-bronze" style={{ flexShrink: 0 }} />
          <p>
            <strong>The Sons of Elohim Calling:</strong> In Hebrew Scripture, <em>Elohim</em> is the powerful Name of God as the Supreme Creator (Genesis 1:1). As young men walking in brotherhood, we look to Elohim who brings divine order out of chaos, calling us to bring discipline, character, and strength to our generation.
          </p>
        </div>
      </div>
    </section>
  );
};
