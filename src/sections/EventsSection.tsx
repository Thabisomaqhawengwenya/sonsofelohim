import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/content';
import {
  Clock,
  MapPin,
  Bell,
  CheckCircle,
  Filter,
  Sparkles,
} from 'lucide-react';

interface EventsSectionProps {
  onJoinNotify?: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onJoinNotify }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Gatherings' },
    { id: 'spiritual', label: 'Spiritual & Word' },
    { id: 'financial', label: 'Financial Literacy' },
    { id: 'mental', label: 'Mental Workshops' },
    { id: 'outreach', label: 'Community Service' },
  ];

  const filteredEvents =
    selectedFilter === 'all'
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((e) => e.category === selectedFilter);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;
    setNotifySuccess(true);
    setTimeout(() => {
      setNotifyEmail('');
    }, 4000);
  };

  return (
    <section id="events" className="section events-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Assemblies & Fellowships</span>
          <h2 className="section-title">Activities & Gatherings</h2>
          <p className="section-description">
            From sunrise physical challenges and Scripture study to vocational masterclasses and community service.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="events-filter-bar">
          <div className="filter-label">
            <Filter size={16} className="text-bronze" />
            <span>Format:</span>
          </div>
          <div className="filter-buttons">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`filter-btn ${selectedFilter === opt.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="surface-card event-card">
              <div className="event-card-header">
                <span className="badge-tag">{evt.format}</span>
                <span className="event-status-pill">
                  <Clock size={12} /> {evt.frequency}
                </span>
              </div>

              <h3 className="event-title">{evt.title}</h3>
              <p className="event-desc">{evt.description}</p>

              <div className="event-audience">
                <MapPin size={14} className="text-bronze" />
                <span>Audience: {evt.targetAudience}</span>
              </div>

              <div className="event-card-footer">
                <div className="event-honest-badge">
                  <span className="pulse-dot" />
                  <span>Active Chapter Assembly</span>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onJoinNotify}
                  style={{ fontSize: '0.85rem' }}
                >
                  Register Interest &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Empty State & Announcement Bar Required by Brief */}
        <div className="events-notice-card surface-card">
          <div className="notice-inner">
            <div className="notice-badge">
              <Sparkles size={20} className="text-bronze" />
            </div>
            <div className="notice-text">
              <h4 className="notice-heading">Honest Gathering Schedule Notice</h4>
              <p className="notice-body">
                Specific calendar dates, times, and regional venue locations are announced directly through our chapter communications network.
                <strong> New gatherings will be announced soon.</strong> We do not publish speculative dates or artificial attendance figures.
              </p>
            </div>
          </div>

          {/* Gathering Alert Box */}
          <div className="notice-subscribe">
            <h5 className="sub-title">Be Notified When Your Local Chapter Gathers</h5>
            {notifySuccess ? (
              <div className="notice-success">
                <CheckCircle size={18} className="text-bronze" />
                <span>Thank you brother. You will receive gathering notices for upcoming assemblies.</span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="notice-form">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address..."
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  <Bell size={15} />
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
