import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Window from '../components/Window';

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;
interface FormData {
  name: string;
  surname: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'portfolio-contact-form',
        }),
        mode: 'no-cors',
      });
      setStatus('success');
      setFormData({ name: '', surname: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const isValid =
    formData.name.trim() &&
    formData.surname.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  return (
    <div className="page-layout">
      <div className="page-section">
        <h1 className="section-title">Get in Touch</h1>
      </div>

      <Window className="card">
        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="info-card">
              <div className="info-card__title">
                <Mail size={14} />
                Contact Information
              </div>
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-value">Turkey</div>
              </div>
              <div className="info-item">
                <div className="info-label">Status</div>
                <div className="info-value info-value--highlight">Available for Opportunities</div>
              </div>
            </div>
              <div className="info-card">
                <div className="info-card__title">Open To</div>
                <div className="info-item">
                  <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                    I'm interested in internships, collaborations, and exciting project opportunities. Feel free to reach out!
                  </span>
                </div>
              </div>
            </div>
          <div className="form-col">
            {status === 'success' ? (
              <div className="form-status form-status--success">
                <div className="form-status__icon">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="form-status__heading">Message Sent!</h3>
                <p className="form-status__message">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  className="btn"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Your surname..."
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>Failed to send. Please try again.</span>
                  </div>
                )}

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn"
                    disabled={!isValid || status === 'sending'}
                  >
                    <Send size={14} />
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={() => setFormData({ name: '', surname: '', email: '', message: '' })}
                  >
                    Clear
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Window>
    </div>
  );
}
