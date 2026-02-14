import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <h3>Join 100,000+ on the Wellness Journey</h3>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            {subscribed ? 'Subscribed!' : 'Get Free Soundtrack'}
          </button>
        </form>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Weaving ancient yogic science with modern life for mental and physical well-being.</p>
        </div>
        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>
        <div className="footer-links-group">
          <h4>Explore</h4>
          <Link to="/certifications">Certifications</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links-group">
          <h4>Connect</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Samatwa Wellness. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
