import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ light }) {
  return (
    <Link to="/" className="logo-link" aria-label="Samatwa Wellness Home">
      <svg
        className="logo-svg"
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="46" stroke={light ? '#8dd38d' : '#035563'} strokeWidth="3" fill="none" />
        {/* Lotus petals */}
        <path
          d="M50 18 C50 18, 30 40, 50 62 C70 40, 50 18, 50 18Z"
          fill={light ? '#8dd38d' : '#035563'}
          opacity="0.9"
        />
        <path
          d="M50 30 C50 30, 22 48, 38 68 C42 58, 50 30, 50 30Z"
          fill={light ? '#f2c532' : '#f2c532'}
          opacity="0.7"
        />
        <path
          d="M50 30 C50 30, 78 48, 62 68 C58 58, 50 30, 50 30Z"
          fill={light ? '#f2c532' : '#f2c532'}
          opacity="0.7"
        />
        {/* Small circle at center bottom */}
        <circle cx="50" cy="70" r="4" fill={light ? '#8dd38d' : '#035563'} />
        {/* Base arc */}
        <path
          d="M32 76 Q50 88, 68 76"
          stroke={light ? '#8dd38d' : '#035563'}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className={`logo-text ${light ? 'logo-light' : ''}`}>
        Samatwa <span className="logo-accent">Wellness</span>
      </span>
    </Link>
  )
}

export default Logo
