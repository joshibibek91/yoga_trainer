import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const certifications = [
  {
    title: 'Certified Breathwork Facilitator',
    hours: '200 Hours',
    description: 'Comprehensive breathwork training covering pranayama, conscious connected breathing, and facilitation skills.',
    icon: '🌬️',
  },
  {
    title: 'Yoga Alliance RYT 200',
    hours: '200 Hours',
    description: 'Internationally recognized yoga teacher training covering asanas, philosophy, anatomy, and teaching methodology.',
    icon: '🧘',
  },
  {
    title: 'Meditation Teacher Certification',
    hours: '100 Hours',
    description: 'Deep dive into meditation traditions, mindfulness techniques, and guiding others through transformative practices.',
    icon: '🕉️',
  },
  {
    title: 'Qigong Practitioner Level 1',
    hours: '150 Hours',
    description: 'Learn the fundamentals of Qigong energy work, movement sequences, and healing practices.',
    icon: '⚡',
  },
]

function Certifications() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Our <span className="highlight">Certifications</span></h1>
        <p>Industry-recognized credentials that set Samatwa Wellness apart.</p>
      </section>

      {/* Certifications Grid */}
      <section className="section">
        <div className="container">
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={cert.title} delay={idx * 120}>
                <article className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <h3>{cert.title}</h3>
                  <span className="cert-hours">{cert.hours}</span>
                  <p>{cert.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Why Choose Samatwa Wellness?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="compare-table-wrapper">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Wim Hof Method</th>
                    <th>Generic Apps</th>
                    <th className="highlight-col">Samatwa Wellness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Breathwork &amp; Meditation</td>
                    <td><span className="check">✓</span></td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="check">✓</span></td>
                  </tr>
                  <tr>
                    <td>Eastern + Modern Integration</td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="check">✓</span></td>
                  </tr>
                  <tr>
                    <td>Deep Emotional Work</td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="check">✓</span></td>
                  </tr>
                  <tr>
                    <td>Certified Instructors</td>
                    <td><span className="check">✓</span></td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="check">✓</span></td>
                  </tr>
                  <tr>
                    <td>Personalized Programs</td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="cross">✕</span></td>
                    <td><span className="check">✓</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <ScrollReveal>
          <div className="container cta-box">
            <h2>Ready to Get Certified?</h2>
            <p>Start your professional wellness journey with Samatwa Wellness.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Apply Now</Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default Certifications
