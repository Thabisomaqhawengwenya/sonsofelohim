import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'pillars', label: '5 Pillars' },
    { id: 'vision', label: 'The Vision' },
    { id: 'brotherhood', label: 'Brotherhood' },
    { id: 'about', label: 'About Us' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'events', label: 'Gatherings' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand */}
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          aria-label="Sons of Elohim - Return to homepage"
        >
          <div className="brand-crest">
            <Shield size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">{SITE_METADATA.name}</span>
            <span className="brand-sub">Est. in Brotherhood</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-primary btn-desktop"
            onClick={() => handleLinkClick('join')}
          >
            Join Brotherhood
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => handleLinkClick('join')}
            >
              Join the Brotherhood
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={() => handleLinkClick('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
