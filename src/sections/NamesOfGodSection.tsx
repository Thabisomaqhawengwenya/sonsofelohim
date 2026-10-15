import React, { useState } from 'react';
import { DIVINE_NAMES } from '../data/namesOfGod';
import type { DivineName } from '../data/namesOfGod';
import { BookOpen, Printer, Info, X } from 'lucide-react';

export const NamesOfGodSection: React.FC = () => {
  const [selectedNameId, setSelectedNameId] = useState<string>('jesus');
  const [posterTheme, setPosterTheme] = useState<'poster-paper' | 'poster-dark'>('poster-paper');
  const [centerFocus, setCenterFocus] = useState<'jesus' | 'elohim'>('jesus');
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
      {/* Slim Top Control Bar (Takes ~48px) */}
      <div className="poster-100vh-topbar">
        <div className="topbar-title-group">
          <span className="badge-tag">Sacred Typography</span>
          <h2 className="topbar-title">The Names of God</h2>
        </div>

        <div className="topbar-controls">
          {/* Focal Word Toggle: Exact Picture (JESUS) vs ELOHIM Highlight */}
          <div className="toggle-pill-group" title="Toggle Focal Centerpiece">
            <button
              type="button"
              className={`theme-pill-btn ${centerFocus === 'jesus' ? 'active' : ''}`}
              onClick={() => setCenterFocus('jesus')}
            >
              Center: JESUS
            </button>
            <button
              type="button"
              className={`theme-pill-btn ${centerFocus === 'elohim' ? 'active' : ''}`}
              onClick={() => setCenterFocus('elohim')}
            >
              Center: ELOHIM
            </button>
          </div>

          {/* Theme Pill Group */}
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
          THE EXACT POSTER ARTBOARD: 16:9 LANDSCAPE FITTING 100VH STRICTLY
         ========================================================================== */}
      <div className={`exact-poster-canvas-100vh ${posterTheme}`}>
        {/* SVG Filter for Woodblock Distress Ink effect on JESUS */}
        <svg
          style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        >
          <filter id="ink-woodblock-distress" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65 0.35"
              numOctaves="3"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -1.2"
              in="noise"
              result="texturedMask"
            />
            <feComposite in="SourceGraphic" in2="texturedMask" operator="in" />
          </filter>
        </svg>

        <div className="poster-inner-sheet-landscape" id="printable-poster">
          {/* ==============================================================
              TOP ROW & UPPER CLUSTERS
             ============================================================== */}

          {/* 1. ABBA (Top Left) */}
          <div
            className={`poster-spot spot-sans-bold ${selectedNameId === 'abba' ? 'selected' : ''}`}
            style={{ left: '3.5%', top: '2.5%', transform: 'rotate(-4deg)' }}
            onClick={() => handleSelectName('abba')}
            role="button"
            tabIndex={0}
            aria-label="ABBA - Romans 8:15"
          >
            <span className="text-val">ABBA</span>
          </div>

          {/* 2. Christ (Below ABBA) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'christ' ? 'selected' : ''}`}
            style={{ left: '4%', top: '9.5%', transform: 'rotate(-2deg)' }}
            onClick={() => handleSelectName('christ')}
            role="button"
            tabIndex={0}
            aria-label="Christ - Matthew 16:16"
          >
            <span className="text-val">Christ</span>
          </div>

          {/* 3. KING OF KINGS (Top Center-Left) */}
          <div
            className={`poster-spot spot-serif-bold ${selectedNameId === 'king-of-kings' ? 'selected' : ''}`}
            style={{ left: '22.5%', top: '2%', transform: 'rotate(-4deg)' }}
            onClick={() => handleSelectName('king-of-kings')}
            role="button"
            tabIndex={0}
            aria-label="KING OF KINGS - Revelation 19:16"
          >
            <span className="text-val">KING OF KINGS</span>
          </div>

          {/* 4. Name Above All names (Below KING OF KINGS) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'name-above-all-names' ? 'selected' : ''}`}
            style={{ left: '23.5%', top: '8.8%', transform: 'rotate(-4deg)' }}
            onClick={() => handleSelectName('name-above-all-names')}
            role="button"
            tabIndex={0}
            aria-label="Name Above All names - Philippians 2:9"
          >
            <span className="text-val">Name Above All names</span>
          </div>

          {/* 5. EL SHADDAI (Below Name Above All names) */}
          <div
            className={`poster-spot spot-serif-bold ${selectedNameId === 'el-shaddai' ? 'selected' : ''}`}
            style={{ left: '21.5%', top: '19.5%' }}
            onClick={() => handleSelectName('el-shaddai')}
            role="button"
            tabIndex={0}
            aria-label="EL SHADDAI - Genesis 17:1"
          >
            <span className="text-val">EL SHADDAI</span>
          </div>

          {/* 6. JIREH (Top Center-Right) */}
          <div
            className={`poster-spot spot-sans-stacked ${selectedNameId === 'jireh' ? 'selected' : ''}`}
            style={{ left: '60%', top: '2.5%' }}
            onClick={() => handleSelectName('jireh')}
            role="button"
            tabIndex={0}
            aria-label="JIREH - Genesis 22:14"
          >
            <span className="text-val">JIREH</span>
            <span className="text-sub">(LORD LORD WILL PROVIDE)</span>
          </div>

          {/* 7. Savior (Upper Center-Right, Angled) */}
          <div
            className={`poster-spot spot-script spot-savior ${selectedNameId === 'savior' ? 'selected' : ''}`}
            style={{ left: '52.5%', top: '14%', transform: 'rotate(-12deg)' }}
            onClick={() => handleSelectName('savior')}
            role="button"
            tabIndex={0}
            aria-label="Savior - Luke 2:11"
          >
            <span className="text-val">Savior</span>
          </div>

          {/* 8. Messiah (Top Far Right) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'messiah' ? 'selected' : ''}`}
            style={{ left: '79%', top: '2%', transform: 'rotate(-8deg)' }}
            onClick={() => handleSelectName('messiah')}
            role="button"
            tabIndex={0}
            aria-label="Messiah - John 1:41"
          >
            <span className="text-val">Messiah</span>
          </div>

          {/* ==============================================================
              LEFT COLUMN CLUSTER
             ============================================================== */}

          {/* 9. RAPHA (Mid-Left) */}
          <div
            className={`poster-spot spot-serif-bold ${selectedNameId === 'rapha' ? 'selected' : ''}`}
            style={{ left: '1.5%', top: '20%' }}
            onClick={() => handleSelectName('rapha')}
            role="button"
            tabIndex={0}
            aria-label="RAPHA - Exodus 15:26"
          >
            <span className="text-val">RAPHA</span>
          </div>

          {/* 10. Lamb Of God (Below RAPHA) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'lamb-of-god' ? 'selected' : ''}`}
            style={{ left: '2.8%', top: '26%', transform: 'rotate(-3deg)' }}
            onClick={() => handleSelectName('lamb-of-god')}
            role="button"
            tabIndex={0}
            aria-label="Lamb Of God - John 1:29"
          >
            <span className="text-val">Lamb Of God</span>
          </div>

          {/* 11. ROHI (Mid-Left) */}
          <div
            className={`poster-spot spot-sans-stacked ${selectedNameId === 'rohi' ? 'selected' : ''}`}
            style={{ left: '3.8%', top: '35.5%' }}
            onClick={() => handleSelectName('rohi')}
            role="button"
            tabIndex={0}
            aria-label="ROHI - Psalm 23:1"
          >
            <span className="text-val">ROHI</span>
            <span className="text-sub">(THE LORD)</span>
          </div>

          {/* 12. Emmanuel (Below ROHI) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'emmanuel' ? 'selected' : ''}`}
            style={{ left: '2%', top: '43%', transform: 'rotate(-6deg)' }}
            onClick={() => handleSelectName('emmanuel')}
            role="button"
            tabIndex={0}
            aria-label="Emmanuel - Matthew 1:23"
          >
            <span className="text-val">Emmanuel</span>
          </div>

          {/* 13. NISSI (Mid-Left) */}
          <div
            className={`poster-spot spot-sans-bold ${selectedNameId === 'nissi' ? 'selected' : ''}`}
            style={{ left: '5.2%', top: '50%' }}
            onClick={() => handleSelectName('nissi')}
            role="button"
            tabIndex={0}
            aria-label="NISSI - Exodus 17:15"
          >
            <span className="text-val">NISSI</span>
          </div>

          {/* 14. Prince of Peace (Below NISSI) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'prince-of-peace' ? 'selected' : ''}`}
            style={{ left: '1.5%', top: '55.5%', transform: 'rotate(-5deg)' }}
            onClick={() => handleSelectName('prince-of-peace')}
            role="button"
            tabIndex={0}
            aria-label="Prince of Peace - Isaiah 9:6"
          >
            <span className="text-val">Prince of Peace</span>
          </div>

          {/* 15. SHAMMAH (Lower Mid-Left) */}
          <div
            className={`poster-spot spot-sans-stacked ${selectedNameId === 'shammah' ? 'selected' : ''}`}
            style={{ left: '4.5%', top: '63.5%' }}
            onClick={() => handleSelectName('shammah')}
            role="button"
            tabIndex={0}
            aria-label="SHAMMAH - Ezekiel 48:35"
          >
            <span className="text-val">SHAMMAH</span>
            <span className="text-sub">(THE LORD IS THERE)</span>
          </div>

          {/* ==============================================================
              CENTERPIECE & DIRECT SURROUNDINGS
             ============================================================== */}

          {/* 16. THE MASSIVE CENTERPIECE: JESUS (Or ELOHIM if toggled) */}
          <div
            className={`poster-spot spot-centerpiece ${
              selectedNameId === (centerFocus === 'jesus' ? 'jesus' : 'elohim') ? 'selected' : ''
            }`}
            style={{ left: '48.5%', top: '40%', transform: 'translate(-50%, -50%)' }}
            onClick={() => handleSelectName(centerFocus === 'jesus' ? 'jesus' : 'elohim')}
            role="button"
            tabIndex={0}
            aria-label={
              centerFocus === 'jesus'
                ? 'JESUS - The Name Above All Names'
                : 'ELOHIM - The Mighty Creator'
            }
          >
            <h1 className="text-centerpiece-letters">
              {centerFocus === 'jesus' ? 'JESUS' : 'ELOHIM'}
            </h1>
          </div>

          {/* 17. YAHWEH (Directly Under Center Left) */}
          <div
            className={`poster-spot spot-sans-stacked ${selectedNameId === 'yahweh' ? 'selected' : ''}`}
            style={{ left: '24%', top: '53%' }}
            onClick={() => handleSelectName('yahweh')}
            role="button"
            tabIndex={0}
            aria-label="YAHWEH - Exodus 3:14"
          >
            <span className="text-val">YAHWEH</span>
            <span className="text-sub">(THE LORD)</span>
          </div>

          {/* 18. Alpha and Omega (Steep Upward Diagonal Script Under YAHWEH) */}
          <div
            className={`poster-spot spot-script spot-alpha-omega ${selectedNameId === 'alpha-omega' ? 'selected' : ''}`}
            style={{ left: '27.5%', top: '63.5%', transform: 'rotate(-15deg)' }}
            onClick={() => handleSelectName('alpha-omega')}
            role="button"
            tabIndex={0}
            aria-label="Alpha and Omega - Revelation 22:13"
          >
            <span className="text-val">Alpha and Omega</span>
          </div>

          {/* 19. ELOHIM / SECONDARY FOCAL (Directly Under Center Right) */}
          <div
            className={`poster-spot spot-sans-stacked spot-subcenter-elohim ${
              selectedNameId === (centerFocus === 'jesus' ? 'elohim' : 'jesus') ? 'selected' : ''
            }`}
            style={{ left: '53%', top: '54%' }}
            onClick={() => handleSelectName(centerFocus === 'jesus' ? 'elohim' : 'jesus')}
            role="button"
            tabIndex={0}
            aria-label={
              centerFocus === 'jesus'
                ? 'ELOHIM - The Mighty Creator'
                : 'JESUS - The Mighty Savior'
            }
          >
            <span className="text-val">
              {centerFocus === 'jesus' ? 'ELOHIM' : 'JESUS'}
            </span>
            <span className="text-sub">
              {centerFocus === 'jesus' ? '(THE MIGHTY CREATOR)' : '(THE MIGHTY SAVIOR)'}
            </span>
          </div>

          {/* ==============================================================
              RIGHT COLUMN CLUSTER
             ============================================================== */}

          {/* 20. ADONAI (Angled Sans, Upper Right) */}
          <div
            className={`poster-spot spot-sans-bold ${selectedNameId === 'adonai' ? 'selected' : ''}`}
            style={{ left: '68%', top: '16.5%', transform: 'rotate(-7deg)' }}
            onClick={() => handleSelectName('adonai')}
            role="button"
            tabIndex={0}
            aria-label="ADONAI - Psalm 8:1"
          >
            <span className="text-val">ADONAI</span>
          </div>

          {/* 21. Redeemer (Below ADONAI) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'redeemer' ? 'selected' : ''}`}
            style={{ left: '68.8%', top: '23.8%', transform: 'rotate(-4deg)' }}
            onClick={() => handleSelectName('redeemer')}
            role="button"
            tabIndex={0}
            aria-label="Redeemer - Job 19:25"
          >
            <span className="text-val">Redeemer</span>
          </div>

          {/* 22. SHALOM (Mid-Right) */}
          <div
            className={`poster-spot spot-serif-stacked ${selectedNameId === 'shalom' ? 'selected' : ''}`}
            style={{ left: '81%', top: '27%' }}
            onClick={() => handleSelectName('shalom')}
            role="button"
            tabIndex={0}
            aria-label="SHALOM - Judges 6:24"
          >
            <span className="text-val">SHALOM</span>
            <span className="text-sub">(THE PRINCE OF PEACE)</span>
          </div>

          {/* 23. Light Of the World (Mid-Right) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'light-of-the-world' ? 'selected' : ''}`}
            style={{ left: '73.5%', top: '38.5%', transform: 'rotate(-4deg)' }}
            onClick={() => handleSelectName('light-of-the-world')}
            role="button"
            tabIndex={0}
            aria-label="Light Of the World - John 8:12"
          >
            <span className="text-val">Light Of the World</span>
          </div>

          {/* 24. TSIDKENU (Lower Right) */}
          <div
            className={`poster-spot spot-serif-stacked ${selectedNameId === 'tsidkenu' ? 'selected' : ''}`}
            style={{ left: '76%', top: '50.5%' }}
            onClick={() => handleSelectName('tsidkenu')}
            role="button"
            tabIndex={0}
            aria-label="TSIDKENU - Jeremiah 23:6"
          >
            <span className="text-val">TSIDKENU</span>
            <span className="text-sub">(THE LORD OUR RIGHTEOUSNESS)</span>
          </div>

          {/* 25. Lord Of Lords (Lower Right Script) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'lord-of-lords' ? 'selected' : ''}`}
            style={{ left: '77%', top: '61.5%', transform: 'rotate(-5deg)' }}
            onClick={() => handleSelectName('lord-of-lords')}
            role="button"
            tabIndex={0}
            aria-label="Lord Of Lords - 1 Timothy 6:15"
          >
            <span className="text-val">Lord Of Lords</span>
          </div>

          {/* ==============================================================
              BOTTOM ROW & LOWER CLUSTERS
             ============================================================== */}

          {/* 26. The Way / The Truth / The Life (Bottom Left Stacked Script) */}
          <div
            className={`poster-spot spot-stacked-script ${selectedNameId === 'the-way-truth-life' ? 'selected' : ''}`}
            style={{ left: '1%', top: '74.5%', transform: 'rotate(-8deg)' }}
            onClick={() => handleSelectName('the-way-truth-life')}
            role="button"
            tabIndex={0}
            aria-label="The Way, The Truth, The Life - John 14:6"
          >
            <span className="script-line">The Way</span>
            <span className="script-line">The Truth</span>
            <span className="script-line">The Life</span>
          </div>

          {/* 27. Messiah (Bottom Left-Center Script) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'messiah' ? 'selected' : ''}`}
            style={{ left: '16.5%', top: '81.5%', transform: 'rotate(-12deg)' }}
            onClick={() => handleSelectName('messiah')}
            role="button"
            tabIndex={0}
            aria-label="Messiah - John 1:41"
          >
            <span className="text-val">Messiah</span>
          </div>

          {/* 28. SHAMMAH (Bottom Center Grand Serif) */}
          <div
            className={`poster-spot spot-serif-stacked spot-shammah-bottom ${selectedNameId === 'shammah' ? 'selected' : ''}`}
            style={{ left: '32%', top: '75.5%' }}
            onClick={() => handleSelectName('shammah')}
            role="button"
            tabIndex={0}
            aria-label="SHAMMAH - Ezekiel 48:35"
          >
            <span className="text-val text-shammah-grand">SHAMMAH</span>
            <span className="text-sub">(THE LORD IS MY BANNER)</span>
          </div>

          {/* 29. JIREH (Bottom Center-Right) */}
          <div
            className={`poster-spot spot-sans-stacked ${selectedNameId === 'jireh' ? 'selected' : ''}`}
            style={{ left: '59%', top: '68%' }}
            onClick={() => handleSelectName('jireh')}
            role="button"
            tabIndex={0}
            aria-label="JIREH - Genesis 22:14"
          >
            <span className="text-val">JIREH</span>
            <span className="text-sub">(LORD LORD WILL PROVIDE)</span>
          </div>

          {/* 30. RAPHA (Bottom Center-Right Serif) */}
          <div
            className={`poster-spot spot-serif-bold ${selectedNameId === 'rapha' ? 'selected' : ''}`}
            style={{ left: '61.5%', top: '81.5%', transform: 'rotate(-3deg)' }}
            onClick={() => handleSelectName('rapha')}
            role="button"
            tabIndex={0}
            aria-label="RAPHA - Exodus 15:26"
          >
            <span className="text-val">RAPHA</span>
          </div>

          {/* 31. Lamb Of God (Below Bottom RAPHA) */}
          <div
            className={`poster-spot spot-script ${selectedNameId === 'lamb-of-god' ? 'selected' : ''}`}
            style={{ left: '61.5%', top: '87.5%', transform: 'rotate(-3deg)' }}
            onClick={() => handleSelectName('lamb-of-god')}
            role="button"
            tabIndex={0}
            aria-label="Lamb Of God - John 1:29"
          >
            <span className="text-val">Lamb Of God</span>
          </div>

          {/* 32. The Way / The Truth / The Life (Bottom Far Right Stacked Script) */}
          <div
            className={`poster-spot spot-stacked-script ${selectedNameId === 'the-way-truth-life' ? 'selected' : ''}`}
            style={{ left: '81.5%', top: '73.5%', transform: 'rotate(-8deg)' }}
            onClick={() => handleSelectName('the-way-truth-life')}
            role="button"
            tabIndex={0}
            aria-label="The Way, The Truth, The Life - John 14:6"
          >
            <span className="script-line">The Way</span>
            <span className="script-line">The Truth</span>
            <span className="script-line">The Life</span>
          </div>
        </div>

        {/* Slide-Up / Floating Scripture Detail Drawer (Zero Layout Shift) */}
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
