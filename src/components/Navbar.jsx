import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <Logo light />
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/certifications">Certifications</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <NavLink to="/contact" className="btn btn-primary btn-sm nav-cta">
          Get Started
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
