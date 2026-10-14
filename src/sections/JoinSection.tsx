import React, { useState } from 'react';
import type { MembershipFormData, PillarId } from '../types';
import { SAFEGUARDING_POLICY } from '../data/content';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export const JoinSection: React.FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>({
    fullName: '',
    email: '',
    ageRange: '',
    location: '',
    growthPillars: [],
    hopesAndContributions: '',
    optionalMessage: '',
    consent: false,
    guardianConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pillarOptions: { id: PillarId; label: string }[] = [
    { id: 'spiritual', label: 'Spiritual Growth' },
    { id: 'financial', label: 'Financial Growth' },
    { id: 'physical', label: 'Physical Growth' },
    { id: 'mental', label: 'Mental Growth' },
    { id: 'social', label: 'Social & Brotherhood' },
  ];

  const handlePillarToggle = (id: PillarId) => {
    setFormData((prev) => {
      const exists = prev.growthPillars.includes(id);
      return {
        ...prev,
        growthPillars: exists
          ? prev.growthPillars.filter((p) => p !== id)
          : [...prev.growthPillars, id],
      };
    });
    if (errors.growthPillars) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.growthPillars;
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.ageRange) {
      errs.ageRange = 'Please select your age bracket.';
    }

    if (!formData.location.trim()) {
      errs.location = 'Location / city is required for local chapter pairing.';
    }

    if (formData.growthPillars.length === 0) {
      errs.growthPillars = 'Select at least one pillar you wish to focus on.';
    }

    if (!formData.hopesAndContributions.trim()) {
      errs.hopesAndContributions = 'Please share briefly what you hope to learn or contribute.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge how your information is handled.';
    }

    if (formData.ageRange === '15-17' && !formData.guardianConsent) {
      errs.guardianConsent = 'Parental or legal guardian consent is required for members under 18.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real brief validation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      ageRange: '',
      location: '',
      growthPillars: [],
      hopesAndContributions: '',
      optionalMessage: '',
      consent: false,
      guardianConsent: false,
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="join" className="section join-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">Membership Journey</span>
          <h2 className="section-title">Join the Brotherhood</h2>
          <p className="section-description">
            Take the step from passive observation to intentional brotherhood. Tell us where you are, and where you want to grow.
          </p>
        </div>

        <div className="join-layout-grid">
          {/* Left Column: Form / Success State */}
          <div className="join-form-wrapper surface-card">
            {isSubmitted ? (
              <div className="submission-success-view">
                <div className="success-icon-badge">
                  <CheckCircle2 size={44} className="text-bronze" />
                </div>
                <h3 className="success-title">Application Received, Brother</h3>
                <p className="success-lead">
                  Thank you for taking this step, <strong>{formData.fullName}</strong>. Your commitment to intentional growth is respected.
                </p>

                <div className="success-next-steps">
                  <h4 className="next-steps-title">What Happens Next:</h4>
                  <ol className="next-steps-list">
                    <li>
                      <strong>Review:</strong> A local chapter leader will review your primary growth pillars ({formData.growthPillars.join(', ')}).
                    </li>
                    <li>
                      <strong>Initial Touchpoint:</strong> You will receive an orientation email at <code>{formData.email}</code> within 48 hours.
                    </li>
                    <li>
                      <strong>Accountability Pairing:</strong> You will be invited to our next introductory assembly or virtual cohort session.
                    </li>
                  </ol>
                </div>

                <div className="integration-transparency-note">
                  <small>
                    <strong>Deployment Note:</strong> Client-side validation confirmed. In production, this form connects to your backend API or email webhook (e.g. Resend, Postmark, Supabase).
                  </small>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={resetForm}
                  style={{ marginTop: '1.5rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="membership-form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-input"
                    placeholder="e.g. David Nkosi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <span className="form-error"><AlertCircle size={14} /> {errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="e.g. david@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                {/* Age Range & Location Dual Row */}
                <div className="form-row-dual">
                  <div className="form-group">
                    <label htmlFor="ageRange" className="form-label">
                      Age Bracket <span className="text-bronze">*</span>
                    </label>
                    <select
                      id="ageRange"
                      className="form-select"
                      value={formData.ageRange}
                      onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                    >
                      <option value="">Select age group...</option>
                      <option value="15-17">15–17 years (Requires parental consent)</option>
                      <option value="18-21">18–21 years (Young Adult)</option>
                      <option value="22-25">22–25 years (Career / Post-Grad)</option>
                      <option value="26+">26+ years (Mentor / Elder Cohort)</option>
                    </select>
                    {errors.ageRange && <span className="form-error"><AlertCircle size={14} /> {errors.ageRange}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="location" className="form-label">
                      City / Region <span className="text-bronze">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Johannesburg, ZA"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    {errors.location && <span className="form-error"><AlertCircle size={14} /> {errors.location}</span>}
                  </div>
                </div>

                {/* Growth Pillars Multi-Select */}
                <div className="form-group">
                  <label className="form-label">
                    Which aspects of life do you want to grow in? <span className="text-bronze">*</span>
                  </label>
                  <div className="pillar-checkboxes-grid">
                    {pillarOptions.map((opt) => {
                      const isChecked = formData.growthPillars.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          className={`pillar-pill-btn ${isChecked ? 'selected' : ''}`}
                          onClick={() => handlePillarToggle(opt.id)}
                          aria-pressed={isChecked}
                        >
                          <span className="pill-check">{isChecked ? '✓' : '+'}</span>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.growthPillars && (
                    <span className="form-error"><AlertCircle size={14} /> {errors.growthPillars}</span>
                  )}
                </div>

                {/* What they hope to learn or contribute */}
                <div className="form-group">
                  <label htmlFor="hopes" className="form-label">
                    What do you hope to learn or contribute to the brotherhood? <span className="text-bronze">*</span>
                  </label>
                  <textarea
                    id="hopes"
                    className="form-textarea"
                    placeholder="Share your current challenges, aspirations, or skills you want to offer other brothers..."
                    value={formData.hopesAndContributions}
                    onChange={(e) => setFormData({ ...formData, hopesAndContributions: e.target.value })}
                  />
                  {errors.hopesAndContributions && (
                    <span className="form-error"><AlertCircle size={14} /> {errors.hopesAndContributions}</span>
                  )}
                </div>

                {/* Optional Message */}
                <div className="form-group">
                  <label htmlFor="optionalMessage" className="form-label">
                    Additional Message or Prayer Requests <small>(Optional)</small>
                  </label>
                  <textarea
                    id="optionalMessage"
                    className="form-textarea"
                    style={{ minHeight: '80px' }}
                    placeholder="Anything else you'd like our chapter leaders to know..."
                    value={formData.optionalMessage}
                    onChange={(e) => setFormData({ ...formData, optionalMessage: e.target.value })}
                  />
                </div>

                {/* Guardian Consent (Conditional for Minors) */}
                {formData.ageRange === '15-17' && (
                  <div className="guardian-consent-box">
                    <ShieldAlert size={20} className="text-bronze" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '0.92rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                        Youth Safeguarding Requirement
                      </h4>
                      <label className="form-checkbox-label">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={formData.guardianConsent}
                          onChange={(e) => setFormData({ ...formData, guardianConsent: e.target.checked })}
                        />
                        <span>
                          I confirm that I have informed my parent or legal guardian, and have their consent to join Sons of Elohim youth activities under adult oversight.
                        </span>
                      </label>
                      {errors.guardianConsent && (
                        <span className="form-error" style={{ marginTop: '0.35rem' }}>
                          <AlertCircle size={14} /> {errors.guardianConsent}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* General Information Consent */}
                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label className="form-checkbox-label">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span>
                      I consent to Sons of Elohim using this information solely to contact me regarding brotherhood gatherings and mentor matching. We never sell or distribute your data.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="form-error" style={{ marginTop: '0.35rem' }}>
                      <AlertCircle size={14} /> {errors.consent}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  {isSubmitting ? 'Validating Application...' : 'Submit Membership Interest'}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Expectations & Safeguarding */}
          <div className="join-context-column">
            <div className="surface-card context-card">
              <div className="context-card-badge">
                <ShieldCheck size={20} className="text-bronze" />
                <h3 className="context-title">What to Expect as a Brother</h3>
              </div>
              <ul className="context-list">
                <li>
                  <strong>No Lone Wolves:</strong> You will be connected with a cohort of brothers walking in the same direction.
                </li>
                <li>
                  <strong>Honest Accountability:</strong> We speak the truth in love. No one is left to wander into destructive habits.
                </li>
                <li>
                  <strong>Commitment to Growth:</strong> You agree to pursue steady progress in your spiritual walk, bodily health, mind, and stewardship.
                </li>
                <li>
                  <strong>Giving Back:</strong> As you grow, you will be expected to extend a hand to newer brothers.
                </li>
              </ul>
            </div>

            {/* Youth Safeguarding Policy Box */}
            <div className="surface-card safeguarding-card">
              <div className="context-card-badge">
                <Sparkles size={20} className="text-bronze" />
                <h3 className="context-title">{SAFEGUARDING_POLICY.title}</h3>
              </div>
              <p className="safeguarding-text">
                {SAFEGUARDING_POLICY.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
