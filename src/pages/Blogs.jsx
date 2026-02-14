import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Breathwork: Why It Actually Works',
    excerpt: 'Modern neuroscience is catching up to what yogis have known for centuries. Discover how controlled breathing rewires your nervous system and reduces cortisol levels.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    category: 'Breathwork',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 2,
    title: '5 Morning Pranayama Routines to Start Your Day Right',
    excerpt: 'Ditch the snooze button. These five pranayama sequences take less than 15 minutes and will leave you feeling more energized than any cup of coffee.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    category: 'Pranayama',
    date: 'Feb 5, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'How Meditation Rewires the Brain for Happiness',
    excerpt: 'MRI studies show that just 8 weeks of consistent meditation increases grey matter density in areas linked to self-awareness, compassion, and introspection.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    category: 'Meditation',
    date: 'Jan 28, 2026',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 4,
    title: 'Understanding the Chakra System: A Beginner\'s Guide',
    excerpt: 'The seven chakras are more than just mystical concepts. Learn how these energy centers map to real physiological systems and how to keep them balanced.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
    category: 'Wellness',
    date: 'Jan 20, 2026',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Yoga for Desk Workers: Fix Your Posture in 10 Minutes',
    excerpt: 'Sitting all day wreaks havoc on your spine. These simple yoga stretches can undo hours of desk damage and prevent chronic back pain.',
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80',
    category: 'Yoga',
    date: 'Jan 14, 2026',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'The Connection Between Gut Health and Breathwork',
    excerpt: 'Your gut and your breath are more connected than you think. Diaphragmatic breathing stimulates the vagus nerve, improving digestion and reducing inflammation.',
    image: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80',
    category: 'Health',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 7,
    title: 'Qigong vs Yoga: Which Is Right for You?',
    excerpt: 'Both practices offer profound benefits, but they approach wellness differently. We break down the key differences to help you choose — or combine both.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    category: 'Qigong',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
  },
  {
    id: 8,
    title: 'How to Build a Sustainable Wellness Routine',
    excerpt: 'Most wellness routines fail because they\'re too ambitious. Here\'s a realistic framework for building habits that stick — backed by behavioral science.',
    image: 'https://images.unsplash.com/photo-1455885666463-9a4f9b36e60b?auto=format&fit=crop&w=800&q=80',
    category: 'Lifestyle',
    date: 'Dec 22, 2025',
    readTime: '7 min read',
  },
  {
    id: 9,
    title: 'Cold Exposure and Breath: Lessons from Ancient Practices',
    excerpt: 'Cold therapy isn\'t new — yogis and monks have used cold exposure for centuries. Learn how to safely combine cold immersion with breathwork for resilience.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    category: 'Breathwork',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Breathwork', 'Pranayama', 'Meditation', 'Yoga', 'Wellness', 'Qigong', 'Health', 'Lifestyle']

function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = blogPosts.filter(p => p.featured)
  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Our <span className="highlight">Blog</span></h1>
        <p>Insights, tips, and stories from the world of breathwork, yoga, and wellness.</p>
      </section>

      {/* Featured Posts */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Featured Articles</h2>
          </ScrollReveal>
          <div className="blog-featured-grid">
            {featured.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 120}>
                <article className="blog-featured-card">
                  <div className="blog-featured-img">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-category-tag">{post.category}</span>
                  </div>
                  <div className="blog-featured-body">
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span className="meta-dot">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button className="btn btn-primary btn-sm" onClick={() => alert(`Reading: ${post.title}`)}>
                      Read Article →
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">All Articles</h2>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={100}>
            <div className="blog-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'filter-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Posts Grid */}
          <div className="blog-grid">
            {filtered.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 80}>
                <article className="blog-card">
                  <div className="blog-card-img">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-category-tag">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span className="meta-dot">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <button className="blog-read-more" onClick={() => alert(`Reading: ${post.title}`)}>
                      Read More →
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section cta-section">
        <ScrollReveal>
          <div className="container cta-box">
            <h2>Never Miss a Post</h2>
            <p>Subscribe to our newsletter for weekly wellness insights delivered to your inbox.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Subscribe Now</Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default Blogs
