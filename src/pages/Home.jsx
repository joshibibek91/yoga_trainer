import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

function Home() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!playing || !videoRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPlaying(false)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [playing])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-left animate-slide-up">
            <span className="hero-tag">Breathwork &middot; Pranayama &middot; Qigong</span>
            <h1>Energy in<br /><span className="highlight">Every Breath</span></h1>
            <p>
              Learn Breathwork, Pranayama, Meditation &amp; Qigong with
              Samatwa Wellness — Anytime, Anywhere.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/contact" className="btn btn-outline-light">Free Webinar</Link>
            </div>
          </div>
          <div className="hero-right animate-fade-in">
            <div className="video-card" ref={videoRef}>
              {playing ? (
                <iframe
                  src="https://www.youtube.com/embed/wSn70lkbjL0?autoplay=1&rel=0&enablejsapi=1"
                  title="Yoga & Wellness Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=1000&q=80"
                    alt="Yoga session preview"
                  />
                  <div className="video-overlay" onClick={() => setPlaying(true)}>
                    <button className="play-btn" aria-label="Play video">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <span className="video-label">Watch Introduction</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Top banner */}
      <div className="announcement-bar">
        Join Now at Your Own Pace — Limited Slots Available!
        <Link to="/courses" className="btn btn-sm btn-primary" style={{ marginLeft: 16 }}>View Courses</Link>
      </div>

      {/* Solution */}
      <section className="section">
        <div className="container split-section">
          <ScrollReveal direction="left">
            <div>
              <h2>Reconnect Through <span className="highlight">Yoga</span></h2>
              <ul className="feature-list">
                <li>
                  <div className="feature-icon">🧘</div>
                  <div>
                    <strong>Stress Relief</strong>
                    <span>Lift emotional pressure and restore calm through guided practice.</span>
                  </div>
                </li>
                <li>
                  <div className="feature-icon">🌬️</div>
                  <div>
                    <strong>Anxiety Management</strong>
                    <span>Rewire reactive thinking through mindful breathwork techniques.</span>
                  </div>
                </li>
                <li>
                  <div className="feature-icon">⚡</div>
                  <div>
                    <strong>Burnout Recovery</strong>
                    <span>Recover energy and regain mental clarity step by step.</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <img
              className="rounded-image"
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
              alt="Breathwork practice"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="stats-row">
              <div className="stat-card">
                <strong>50k+</strong>
                <span>Happy Trainees</span>
              </div>
              <div className="stat-card">
                <strong>25k+</strong>
                <span>Course Customers</span>
              </div>
              <div className="stat-card">
                <strong>200+</strong>
                <span>Expert Sessions</span>
              </div>
              <div className="stat-card">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teacher */}
      <section className="section">
        <div className="container split-section">
          <ScrollReveal direction="left">
            <img
              className="rounded-image tall"
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=80"
              alt="Trainer"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div>
              <h2>Meet the Healer Behind the Breath</h2>
              <h3 className="subtitle">A Mission to Spread Knowledge, Well‑Being and Wisdom</h3>
              <p>
                Weaving ancient yogic science with modern life, this path supports mental
                and physical well-being for all ages. At Samatwa Wellness, we believe every
                breath is a step toward balance.
              </p>
              <Link to="/certifications" className="btn btn-primary">Our Certifications</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <ScrollReveal>
          <div className="container cta-box">
            <h2>Take the First Step Towards a Healthier, Happier You</h2>
            <p>No risk. 100% money‑back guarantee.</p>
            <div className="cta-actions">
              <Link to="/courses" className="btn btn-primary btn-lg">Enroll Now – Limited Offer</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default Home
