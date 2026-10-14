import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { MissionSection } from './sections/MissionSection';
import { PillarsSection } from './sections/PillarsSection';
import { VisionEzekielSection } from './sections/VisionEzekielSection';
import { BrotherhoodApproachSection } from './sections/BrotherhoodApproachSection';
import { AboutSection } from './sections/AboutSection';
import { PillarsDeepDiveSection } from './sections/PillarsDeepDiveSection';
import { MentorshipSection } from './sections/MentorshipSection';
import { EventsSection } from './sections/EventsSection';
import { JoinSection } from './sections/JoinSection';
import { ContactSection } from './sections/ContactSection';
import { NamesOfGodSection } from './sections/NamesOfGodSection';
import type { PillarId } from './types';
import './styles/main.css';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedDeepPillar, setSelectedDeepPillar] = useState<PillarId>('financial');

  // Handle smooth navigation to specific section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to deep-dive and activate selected pillar
  const handlePillarSelect = (pillarId: PillarId) => {
    setSelectedDeepPillar(pillarId);
    handleNavigate('pillars-deep');
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'mission',
      'pillars',
      'vision',
      'brotherhood',
      'about',
      'pillars-deep',
      'mentorship',
      'events',
      'join',
      'contact',
      'names-of-god',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Persistent Single-Line Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections Flow */}
      <main id="main-content">
        {/* A. Hero Section with Ezekiel 1:10 Crest */}
        <HeroSection
          onJoinClick={() => handleNavigate('join')}
          onMissionClick={() => handleNavigate('mission')}
        />

        {/* B. Our Mission Section */}
        <MissionSection onLearnMore={() => handleNavigate('about')} />

        {/* C. The Five Pillars of Growth (Overview Grid) */}
        <PillarsSection onPillarSelect={handlePillarSelect} />

        {/* D. Inspired by the Vision (Ezekiel 1:10 Four Faces) */}
        <VisionEzekielSection />

        {/* E. The Brotherhood & Four-Stage Approach */}
        <BrotherhoodApproachSection onJoinClick={() => handleNavigate('join')} />

        {/* F. About Us: Identity, Crisis Addressed, Values */}
        <AboutSection />

        {/* G. The Five Pillars: Comprehensive Deep-Dive */}
        <PillarsDeepDiveSection
          initialPillarId={selectedDeepPillar}
          onJoinClick={() => handleNavigate('join')}
        />

        {/* H. Peer Mentorship & Guidance */}
        <MentorshipSection
          onApplyMentor={() => handleNavigate('join')}
          onRequestGuidance={() => handleNavigate('join')}
        />

        {/* I. Activities, Gatherings & Events */}
        <EventsSection onJoinNotify={() => handleNavigate('join')} />

        {/* J. Join the Brotherhood Membership Form */}
        <JoinSection />

        {/* K. Contact Us & Regional Chapters */}
        <ContactSection />

        {/* L. The Names of God (Elohim Centerpiece & Playful Typography) */}
        <NamesOfGodSection />
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
