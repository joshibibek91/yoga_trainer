import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Get in <span className="highlight">Touch</span></h1>
        <p>Have questions? We'd love to hear from you. Send us a message!</p>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Course inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your goals..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={200}>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <strong>Visit Us</strong>
                  <p>Bouddha, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div>
                  <strong>Email Us</strong>
                  <p>hello@samatwawellness.com</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <strong>Call Us</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">🕐</div>
                <div>
                  <strong>Hours</strong>
                  <p>Mon – Fri: 7 AM – 8 PM<br />Sat – Sun: 8 AM – 6 PM</p>
                </div>
              </div>

              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn">YouTube</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default Contact
