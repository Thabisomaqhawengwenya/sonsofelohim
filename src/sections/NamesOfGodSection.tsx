import React, { useState } from 'react';
import { DIVINE_NAMES } from '../data/namesOfGod';
import type { DivineName } from '../data/namesOfGod';
import { BookOpen, Printer, Info, X } from 'lucide-react';

export const NamesOfGodSection: React.FC = () => {
  const [selectedNameId, setSelectedNameId] = useState<string>('elohim');
  const [posterTheme, setPosterTheme] = useState<'poster-paper' | 'poster-dark'>('poster-paper');
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const selectedName: DivineName =
    DIVINE_NAMES.find((n) => n.id === selectedNameId) || DIVINE_NAMES[0];

  const handleSelectName = (id: string) => {
    setSelectedNameId(id);
    setShowDrawer(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="names-of-god" className="section names-of-god-section-100vh">
      {/* Slim Top Bar (Takes ~46px max) */}
      <div className="poster-100vh-topbar">
        <div className="topbar-title-group">
          <span className="badge-tag">Sacred Typography</span>
          <h2 className="topbar-title">The Names of God</h2>
        </div>

        <div className="topbar-controls">
          <div className="toggle-pill-group">
            <button
              type="button"
              className={`theme-pill-btn ${posterTheme === 'poster-paper' ? 'active' : ''}`}
              onClick={() => setPosterTheme('poster-paper')}
            >
              Paper Canvas
            </button>
            <button
              type="button"
              className={`theme-pill-btn ${posterTheme === 'poster-dark' ? 'active' : ''}`}
              onClick={() => setPosterTheme('poster-dark')}
            >
              Obsidian Dark
            </button>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-compact"
            onClick={() => setShowDrawer(!showDrawer)}
            title="Inspect Hebrew & Scripture Meaning"
          >
            <Info size={14} />
            <span>Scripture</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-compact"
            onClick={handlePrint}
            title="Print or Save Poster"
          >
            <Printer size={14} />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* ==========================================================================
          THE EXACT POSTER ARTBOARD (FITS 100VH VIEWPORT STRICTLY)
         ========================================================================== */}
      <div className={`exact-poster-canvas-100vh ${posterTheme}`}>
        <div className="poster-inner-sheet-100vh">
          {/* Top Giant Header: ELOHIM */}
          <div
            className={`exact-poster-header ${selectedNameId === 'elohim' ? 'selected' : ''}`}
            onClick={() => handleSelectName('elohim')}
            role="button"
            tabIndex={0}
            aria-label="ELOHIM - The Mighty Creator"
          >
            <h1 className="header-elohim-text">ELOHIM</h1>
          </div>

          {/* Poster Grid - Exact Rows from the Picture */}
          <div className="exact-poster-body-100vh">
            {/* Row 1: ABBA | KING OF KINGS | JIREH */}
            <div className="poster-row row-1">
              <div
                className={`poster-item item-sans align-left ${selectedNameId === 'abba' ? 'selected' : ''}`}
                onClick={() => handleSelectName('abba')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">ABBA</span>
              </div>

              <div
                className={`poster-item item-serif align-center ${selectedNameId === 'king-of-kings' ? 'selected' : ''}`}
                onClick={() => handleSelectName('king-of-kings')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">KING OF KINGS</span>
              </div>

              <div
                className={`poster-item item-sans align-right ${selectedNameId === 'jireh' ? 'selected' : ''}`}
                onClick={() => handleSelectName('jireh')}
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
                onClick={() => handleSelectName('christ')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">Christ</span>
              </div>

              <div
                className={`poster-item item-script align-center ${selectedNameId === 'name-above-all-names' ? 'selected' : ''}`}
                onClick={() => handleSelectName('name-above-all-names')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">Name Above All names</span>
              </div>

              <div
                className={`poster-item item-script align-right ${selectedNameId === 'messiah' ? 'selected' : ''}`}
                onClick={() => handleSelectName('messiah')}
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
                onClick={() => handleSelectName('rapha')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">RAPHA</span>
              </div>

              <div className="poster-center-cluster">
                <div
                  className={`poster-item item-serif align-center ${selectedNameId === 'el-shaddai' ? 'selected' : ''}`}
                  onClick={() => handleSelectName('el-shaddai')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">EL SHADDAI</span>
                </div>
                <div
                  className={`poster-item item-script align-center item-savior ${selectedNameId === 'savior' ? 'selected' : ''}`}
                  onClick={() => handleSelectName('savior')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Savior</span>
                </div>
              </div>

              <div
                className={`poster-item item-sans align-right ${selectedNameId === 'adonai' ? 'selected' : ''}`}
                onClick={() => handleSelectName('adonai')}
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
                onClick={() => handleSelectName('lamb-of-god')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">Lamb Of God</span>
              </div>

              <div
                className={`poster-item item-sans align-center ${selectedNameId === 'yahweh' ? 'selected' : ''}`}
                onClick={() => handleSelectName('yahweh')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">YAHWEH</span>
                <span className="text-sub">(I THE LORD)</span>
              </div>

              <div
                className={`poster-item item-script align-right ${selectedNameId === 'redeemer' ? 'selected' : ''}`}
                onClick={() => handleSelectName('redeemer')}
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
                onClick={() => handleSelectName('rohi')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">ROHI</span>
                <span className="text-sub">(THE LORD)</span>
              </div>

              <div
                className={`poster-item item-script align-center ${selectedNameId === 'alpha-omega' ? 'selected' : ''}`}
                onClick={() => handleSelectName('alpha-omega')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">Alpha and Omega</span>
              </div>

              <div
                className={`poster-item item-serif align-right ${selectedNameId === 'shalom' ? 'selected' : ''}`}
                onClick={() => handleSelectName('shalom')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">SHALOM</span>
                <span className="text-sub">(THE PRINCE OF PEACE)</span>
              </div>
            </div>

            {/* Row 6: Emmanuel | JESUS | Light Of the World */}
            <div className="poster-row row-6">
              <div
                className={`poster-item item-script align-left ${selectedNameId === 'emmanuel' ? 'selected' : ''}`}
                onClick={() => handleSelectName('emmanuel')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">Emmanuel</span>
              </div>

              <div
                className={`poster-item item-sans align-center item-center-jesus ${selectedNameId === 'elohim' ? 'selected' : ''}`}
                onClick={() => handleSelectName('elohim')}
                role="button"
                tabIndex={0}
              >
                <span className="text-val">JESUS</span>
                <span className="text-sub">(THE MIGHTY SAVIOR)</span>
              </div>

              <div
                className={`poster-item item-script align-right ${selectedNameId === 'light-of-the-world' ? 'selected' : ''}`}
                onClick={() => handleSelectName('light-of-the-world')}
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
                  onClick={() => handleSelectName('nissi')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">NISSI</span>
                </div>
                <div
                  className={`poster-item item-script align-left item-pop ${selectedNameId === 'prince-of-peace' ? 'selected' : ''}`}
                  onClick={() => handleSelectName('prince-of-peace')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">Prince of Peace</span>
                </div>
              </div>

              {/* Center: Stacked 3-line Script */}
              <div
                className={`poster-item item-script-stacked align-center ${selectedNameId === 'the-way-truth-life' ? 'selected' : ''}`}
                onClick={() => handleSelectName('the-way-truth-life')}
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
                  onClick={() => handleSelectName('tsidkenu')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-val">TSIDKENU</span>
                  <span className="text-sub">(THE LORD OUR RIGHTEOUSNESS)</span>
                </div>
                <div
                  className={`poster-item item-script align-right item-pop ${selectedNameId === 'lord-of-lords' ? 'selected' : ''}`}
                  onClick={() => handleSelectName('lord-of-lords')}
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
                onClick={() => handleSelectName('shammah')}
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
                onClick={() => handleSelectName('shammah')}
                role="button"
                tabIndex={0}
              >
                <h2 className="grand-baseline-text">SHAMMAH</h2>
                <span className="grand-baseline-sub">(THE LORD IS MY BANNER)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-Up / Floating Scripture Detail Drawer (Does not stretch section) */}
        {showDrawer && (
          <div className="poster-drawer-overlay" role="dialog" aria-modal="true">
            <div className="poster-drawer-content surface-card">
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setShowDrawer(false)}
                aria-label="Close Scripture Detail"
              >
                <X size={16} />
              </button>

              <div className="drawer-header-row">
                <div className="drawer-icon-box">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge-tag">{selectedName.scriptureRef}</span>
                    {selectedName.transliteration && (
                      <span className="drawer-translit">{selectedName.transliteration}</span>
                    )}
                  </div>
                  <h3 className="drawer-name-title">{selectedName.name}</h3>
                  <p className="drawer-meaning-text">{selectedName.meaning}</p>
                </div>
              </div>

              <div className="drawer-scripture-box">
                <p className="drawer-verse">"{selectedName.scriptureText}"</p>
                <span className="drawer-cite">{selectedName.scriptureRef}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
