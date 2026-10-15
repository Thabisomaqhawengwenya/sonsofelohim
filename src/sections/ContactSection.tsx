import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/content';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Get in Touch</span>
          <h2 className="section-title">Contact & Regional Chapters</h2>
          <p className="section-description">
            Have questions about local gatherings, starting a chapter in your city, or partnering with our brotherhood?
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="contact-info-col">
            <div className="surface-card contact-card">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="contact-label">Official Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-val-link">
                    {CONTACT_INFO.email}
                  </a>
                  <span className="contact-sub-text">Inquiries & Chapter Applications</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="contact-label">Regional Presence</h4>
                  <p className="contact-val-text">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="contact-label">Gathering Schedule</h4>
                  <p className="contact-val-text">{CONTACT_INFO.gatheringHours}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="surface-card socials-card">
              <h4 className="socials-card-title">Brotherhood Communities</h4>
              <p className="socials-card-lead">
                Join our public broadcasts and discussion circles:
              </p>
              <div className="socials-list">
                {CONTACT_INFO.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <span className="social-name">{s.name}</span>
                    <span className="social-handle">{s.handle}</span>
                    <ExternalLink size={14} className="social-ext-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-human-assurance">
              <div className="assurance-header">
                <CheckCircle2 size={16} className="text-bronze" />
                <span className="assurance-title">Direct Human Contact</span>
              </div>
              <p className="assurance-text">
                Every inquiry is reviewed personally by a brother on our chapter coordinator team within 24 to 48 hours. No AI chatbots, no automated marketing funnels, just real fellowship.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="surface-card contact-form-card">
            <h3 className="contact-form-title">Send a Direct Message</h3>
            <p className="contact-form-lead">
              Chapter coordinators review messages within 48 business hours.
            </p>

            {isSent ? (
              <div className="contact-success-state">
                <CheckCircle2 size={38} className="text-bronze" />
                <h4>Message Received</h4>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. A chapter brother will respond to <code>{formData.email}</code> shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Samuel Khumalo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="form-error"><AlertCircle size={14} /> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="e.g. samuel@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Starting a Local Chapter / Mentorship Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && <span className="form-error"><AlertCircle size={14} /> {errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-msg" className="form-label">
                    Message <span className="text-bronze">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    className="form-textarea"
                    placeholder="How can our brotherhood assist or collaborate with you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="form-error"><AlertCircle size={14} /> {errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  {isSending ? 'Sending Message...' : 'Send Message'}
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
