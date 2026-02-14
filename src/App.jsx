const testimonials = [1, 2, 3, 4]
const courseCards = [
  {
    title: 'Essentials Course',
    subtitle: 'The Starter Manual, Breathwork, Mindful Training',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Breath is Life',
    subtitle: "The 11 Pathway's Breathwork Course",
    image:
      'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ocean of Energy',
    subtitle: 'Breathwork Course',
    image:
      'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80',
  },
]

function App() {
  return (
    <div className="page">
      <header className="top-banner">Join Now at Your Own Pace — Limited Slots Available!</header>
      <section className="hero-wrapper">
        <nav className="nav">
          <div className="logo">yogalap</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Testimonials</a>
            <a href="#">Certifications</a>
            <a href="#">Book</a>
            <a href="#">Contact</a>
          </div>
          <button className="btn yellow small">Get Started</button>
        </nav>

        <div className="hero-content">
          <div className="hero-left">
            <h1>Energy in Every Breath</h1>
            <p>Learn Breathwork, Pranayama, Meditation &amp; Qigong — Anytime, Anywhere.</p>
            <h3>Get Free Breathing Soundtrack</h3>
            <button className="btn yellow">Join Our Free Webinar</button>
          </div>
          <div className="hero-right">
            <div className="video-card">
              <img
                src="https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=1000&q=80"
                alt="Yoga trainer"
              />
              <span className="play-btn">▶</span>
            </div>
            <div className="hero-form">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <button className="send">➤</button>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="split-section">
          <div>
            <h2>Solution – Reconnect Through Yoga</h2>
            <ul className="feature-list">
              <li><strong>Stress</strong><span>Lift emotional pressure and restore calm.</span></li>
              <li><strong>Anxiety</strong><span>Rewire reactive thinking through mindful breath.</span></li>
              <li><strong>Burnout</strong><span>Recover energy and regain clarity of mind.</span></li>
            </ul>
          </div>
          <img
            className="rounded-image"
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
            alt="Breathwork"
          />
        </section>

        <section className="testimonials">
          <div className="intro-row">
            <h2>Voices from the Breathwork Journey</h2>
            <p>Discover how this breathwork experience has helped thousands around the world.</p>
          </div>
          <div className="card-grid">
            {testimonials.map((item) => (
              <article className="quote-card" key={item}>
                <p>
                  “The Yogalap course reignited the spark and confidence I was missing.
                  Breath by breath, I’m now grounded and energized.”
                </p>
                <div className="author">Mark Rubin · Executive Director</div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-box">
          <h2>Best of the Best – Your Yoga Journey Starts Here</h2>
          <div className="course-row">
            {courseCards.map((course) => (
              <article className="course-card" key={course.title}>
                <img src={course.image} alt={course.title} />
                <h4>{course.title}</h4>
                <p>{course.subtitle}</p>
                <div className="price-row">
                  <span>USD • $30.00</span>
                  <button className="btn yellow small">Buy now</button>
                </div>
              </article>
            ))}
          </div>
          <button className="btn dark">Start Your Journey</button>
        </section>

        <section className="split-section reverse">
          <div>
            <h2>Discover the Book That Deepens Your Practice</h2>
            <p>
              Explore our guide packed with powerful breathwork, mindful movement,
              and inner-healing techniques.
            </p>
            <button className="btn yellow">Buy on Amazon</button>
          </div>
          <img
            className="rounded-image"
            src="https://images.unsplash.com/photo-1455885666463-9a4f9b36e60b?auto=format&fit=crop&w=900&q=80"
            alt="Book"
          />
        </section>

        <section className="teacher-box">
          <div>
            <h2>Meet the Healer Behind the Breath</h2>
            <img
              className="teacher-img"
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=80"
              alt="Trainer"
            />
          </div>
          <div>
            <h3>A Mission to spread Knowledge, Well‑Being and Wisdom</h3>
            <p>
              Weaving ancient yogic science with modern life, this path supports mental
              and physical well-being for all ages.
            </p>
            <div className="stat-grid">
              <div><strong>50k+</strong><span>Happy Trainees</span></div>
              <div><strong>25k+</strong><span>Course Customers</span></div>
              <div><strong>3.5m+</strong><span>Train Area</span></div>
            </div>
          </div>
        </section>

        <section className="stories">
          <h2>Real Stories. True Impact.</h2>
          <div className="story-row">
            {['1544367567-0f2fcb009e0b', '1531746020798-e6953c6e8e04', '1487412720507-e7ab37603c6f', '1519085360753-af0119f7cbe7'].map((id) => (
              <div className="story" key={id}>
                <img src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`} alt="Story" />
                <span>▶</span>
              </div>
            ))}
          </div>
        </section>

        <section className="compare-box">
          <h2>Personalized, Proven, Powerful – The Yogalap Way</h2>
          <table>
            <thead>
              <tr><th>Feature</th><th>Win Hof Method</th><th>Generic Wellness Apps</th><th>Yogalap</th></tr>
            </thead>
            <tbody>
              <tr><td>Breathwork & Meditation</td><td>🟢</td><td>🔴</td><td>🟢</td></tr>
              <tr><td>Eastern + Modern Integration</td><td>🔴</td><td>🔴</td><td>🟢</td></tr>
              <tr><td>Deep Emotional Work</td><td>🔴</td><td>🔴</td><td>🟢</td></tr>
            </tbody>
          </table>
        </section>

        <section className="split-section">
          <div>
            <h2>Scientifically proven techniques to awaken your full potential</h2>
            <p>
              Yogalap offers tools to train mind and body to live a healthy, happy and
              purposeful life through Breathwork, Meditation and Qigong.
            </p>
            <button className="btn yellow">Learn More or Join the Movement</button>
          </div>
          <img
            className="rounded-image"
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
            alt="Community"
          />
        </section>
      </main>

      <footer>
        <div className="newsletter">
          <h3>Join 100,000+ on the Breathwork Journey</h3>
          <input placeholder="Enter email address" />
          <button className="btn yellow">Get Free Soundtrack</button>
        </div>
        <div className="bottom-cta">
          <h2>Take the First Step Towards a Healthier, Happier You</h2>
          <button className="btn yellow">Enroll Now – Limited Time Offer</button>
          <p>No risk. 100% money‑back guarantee.</p>
          <small>© 2025 Yogalap · All Rights Reserved</small>
        </div>
      </footer>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
