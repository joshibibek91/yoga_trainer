import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const courses = [
  {
    title: 'Essentials Course',
    subtitle: 'The Starter Manual, Breathwork, Mindful Training',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    price: 30,
    level: 'Beginner',
    duration: '6 weeks',
  },
  {
    title: 'Breath is Life',
    subtitle: "The 11 Pathway's Breathwork Course",
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
    price: 49,
    level: 'Intermediate',
    duration: '8 weeks',
  },
  {
    title: 'Ocean of Energy',
    subtitle: 'Advanced Breathwork & Qigong Course',
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80',
    price: 69,
    level: 'Advanced',
    duration: '12 weeks',
  },
  {
    title: 'Inner Stillness',
    subtitle: 'Meditation & Mindfulness Deep Dive',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    price: 39,
    level: 'All Levels',
    duration: '4 weeks',
  },
  {
    title: 'Morning Rituals',
    subtitle: 'Start Your Day with Energy & Purpose',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    price: 25,
    level: 'Beginner',
    duration: '3 weeks',
  },
  {
    title: 'Healer Certification',
    subtitle: 'Become a Certified Breathwork Trainer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    price: 199,
    level: 'Professional',
    duration: '16 weeks',
  },
]

function Courses() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Our <span className="highlight">Courses</span></h1>
        <p>Transform your practice with expertly crafted programs for every level.</p>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, idx) => (
              <ScrollReveal key={course.title} delay={idx * 100}>
                <article className="course-card">
                  <div className="course-card-img">
                    <img src={course.image} alt={course.title} />
                    <span className="course-badge">{course.level}</span>
                  </div>
                  <div className="course-card-body">
                    <h3>{course.title}</h3>
                    <p>{course.subtitle}</p>
                    <div className="course-meta">
                      <span>⏱ {course.duration}</span>
                    </div>
                    <div className="course-card-footer">
                      <span className="course-price">${course.price}.00</span>
                      <button className="btn btn-primary btn-sm" onClick={() => alert(`Enrolling in ${course.title}!`)}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <ScrollReveal>
          <div className="container cta-box">
            <h2>Not Sure Where to Start?</h2>
            <p>Join our free webinar and discover the perfect course for your journey.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Join Free Webinar</Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default Courses
