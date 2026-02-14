import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

const testimonials = [
  {
    text: "The Samatwa Wellness course reignited the spark and confidence I was missing. Breath by breath, I'm now grounded and energized.",
    name: 'Mark Rubin',
    role: 'Executive Director',
  },
  {
    text: "After years of struggling with anxiety, this program gave me tools I actually use daily. The breathwork practice changed my life.",
    name: 'Sarah Chen',
    role: 'Marketing Manager',
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. More focus, better sleep, and a calm I haven't felt in years.",
    name: 'David Okoye',
    role: 'Software Engineer',
  },
  {
    text: "The personalized approach sets Samatwa apart. Every session felt tailor-made for my needs. Truly transformative.",
    name: 'Priya Sharma',
    role: 'Yoga Instructor',
  },
  {
    text: "My blood pressure dropped, my sleep improved, and I feel 10 years younger. This is real, science-backed wellness.",
    name: 'James Mitchell',
    role: 'Retired Teacher',
  },
  {
    text: "As an athlete, breathwork wasn't on my radar. Now it's my secret weapon for performance and recovery.",
    name: 'Elena Volkov',
    role: 'Professional Runner',
  },
]

const stories = [
  '1544367567-0f2fcb009e0b',
  '1531746020798-e6953c6e8e04',
  '1487412720507-e7ab37603c6f',
  '1519085360753-af0119f7cbe7',
]

function Testimonials() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Voices from the <span className="highlight">Journey</span></h1>
        <p>Discover how breathwork has transformed lives around the world.</p>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t.name} delay={idx * 80}>
                <article className="testimonial-card">
                  <div className="quote-mark">&ldquo;</div>
                  <p>{t.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Stories */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Real Stories. True Impact.</h2>
          </ScrollReveal>
          <div className="stories-grid">
            {stories.map((id, idx) => (
              <ScrollReveal key={id} delay={idx * 120}>
                <div className="story-card">
                  <img
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`}
                    alt="Story"
                  />
                  <button className="play-btn-small" aria-label="Play story">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
