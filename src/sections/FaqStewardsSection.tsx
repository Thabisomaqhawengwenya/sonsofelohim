import React, { useState } from 'react';
import { STEWARD_LETTER, HUMAN_FAQS } from '../data/content';
import { ChevronDown, ChevronUp, Shield } from 'lucide-react';

export const FaqStewardsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'joining', label: 'Joining & Prerequisites' },
    { id: 'finances', label: 'Finances & Costs' },
    { id: 'brotherhood', label: 'Commitment & Routine' },
    { id: 'spirituality', label: 'Grace & Struggles' },
  ];

  const filteredFaqs =
    activeFaqCategory === 'all'
      ? HUMAN_FAQS
      : HUMAN_FAQS.filter((f) => f.category === activeFaqCategory);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="faq-stewards" className="section faq-stewards-section">
      <div className="container">
        {/* ==============================================================
            PART 1: A LETTER FROM THE STEWARDS (HONEST HUMAN MANIFESTO)
           ============================================================== */}
        <div className="stewards-letter-card surface-card">
          <div className="stewards-letter-header">
            <div className="letter-badge-group">
              <span className="badge-tag">From the Table</span>
              <span className="letter-scripture-ref">{STEWARD_LETTER.scripture}</span>
            </div>
            <h2 className="stewards-letter-title">{STEWARD_LETTER.title}</h2>
          </div>

          <div className="stewards-letter-body">
            {STEWARD_LETTER.paragraphs.map((p, idx) => (
              <p key={idx} className="letter-paragraph">
                {p}
              </p>
            ))}
          </div>

          <div className="stewards-letter-signoff">
            <span className="signoff-lead">In Covenant Brotherhood,</span>
            <div className="signatories-list">
              {STEWARD_LETTER.signatories.map((sig, idx) => (
                <div key={idx} className="signatory-pill">
                  <Shield size={13} className="text-bronze" />
                  <span>{sig}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==============================================================
            PART 2: REAL QUESTIONS BROTHERS ASK BEFORE JOINING
           ============================================================== */}
        <div className="human-faq-wrapper">
          <div className="section-header">
            <span className="badge-tag">No Fluff</span>
            <h3 className="section-title">Questions Brothers Ask</h3>
            <p className="section-description">
              Straight answers to the real doubts, logistics, and hesitations young men have before taking their seat.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="faq-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeFaqCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFaqCategory(cat.id);
                  setOpenFaqIndex(0);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="faq-accordion-list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item surface-card ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
