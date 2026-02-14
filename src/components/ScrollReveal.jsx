import React, { useEffect, useRef, useState } from 'react'

function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const dirClass = `reveal-${direction}`

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${dirClass} ${visible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
