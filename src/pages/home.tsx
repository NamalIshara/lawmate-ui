import React, { useState, useEffect } from 'react';
import '../styles/home.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  desc: string;
}

interface Stat {
  number: string;
  label: string;
}

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'features', 'how-it-works', 'why-choose', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const features: Feature[] = [
    {
      icon: "👥",
      title: "Find Expert Lawyers",
      description: "Connect with verified legal professionals specialized in your case type"
    },
    {
      icon: "⏱️",
      title: "Quick Response",
      description: "Get responses within 24 hours and schedule consultations instantly"
    },
    {
      icon: "🛡️",
      title: "Secure & Confidential",
      description: "Your information is protected with bank-level encryption"
    },
    {
      icon: "📄",
      title: "Case Management",
      description: "Track your case progress and documents in one convenient place"
    }
  ];

  const steps: Step[] = [
    { number: "01", title: "Describe Your Case", desc: "Tell us about your legal needs in simple terms" },
    { number: "02", title: "Get Matched", desc: "We connect you with qualified lawyers in your area" },
    { number: "03", title: "Consult & Hire", desc: "Review profiles, compare rates, and choose your lawyer" }
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Verified Lawyers" },
    { number: "10,000+", label: "Cases Resolved" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="lawmate-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">⚖️</span>
              <span className="logo-text">LawMate</span>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              {['home', 'features', 'how-it-works', 'why-choose', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              {['home', 'features', 'how-it-works', 'why-choose', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="mobile-nav-link"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <button className="btn-primary">Get Started</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge">
                🎯 Sri Lanka's Trusted Legal Platform
              </div>
              <h1 className="hero-title">
                Find Your Perfect
                <span className="gradient-text"> Legal Match</span>
              </h1>
              <p className="hero-description">
                Connect with verified lawyers across Sri Lanka. Get expert legal help for your case in minutes, not days.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary large">
                  Find a Lawyer <span className="arrow">→</span>
                </button>
                <button className="btn-secondary large">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="stats-grid">
                {stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card-container">
              <div className="hero-card">
                <div className="card-header">
                  <span className="card-icon">⚖️</span>
                  <div>
                    <div className="card-subtitle">Legal Assistance</div>
                    <div className="card-title">Case Consultation</div>
                  </div>
                </div>
                <div className="card-features">
                  <div className="feature-item blue">
                    <span className="check">✓</span>
                    <span>Verified Professionals</span>
                  </div>
                  <div className="feature-item purple">
                    <span className="check">✓</span>
                    <span>Instant Matching</span>
                  </div>
                  <div className="feature-item green">
                    <span className="check">✓</span>
                    <span>Secure Platform</span>
                  </div>
                </div>
                <button className="btn-primary full-width">
                  Start Your Case
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose LawMate?</h2>
            <p className="section-subtitle">Everything you need to find and hire the right lawyer</p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Three simple steps to find your lawyer</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
                {idx < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <h2 className="section-title">The Smart Way to Find Legal Help</h2>
              <p className="why-description">
                LawMate revolutionizes how Sri Lankans access legal services. Our platform combines technology with expertise to deliver exceptional legal connections.
              </p>
              
              <div className="why-features">
                {[
                  { icon: "🏆", title: "Verified Professionals", desc: "Every lawyer is thoroughly vetted and verified" },
                  { icon: "⭐", title: "Transparent Ratings", desc: "Read reviews from real clients before you decide" },
                  { icon: "💼", title: "All Practice Areas", desc: "From family law to corporate matters, we cover it all" }
                ].map((item, idx) => (
                  <div key={idx} className="why-feature-item">
                    <div className="why-feature-icon">{item.icon}</div>
                    <div>
                      <h3 className="why-feature-title">{item.title}</h3>
                      <p className="why-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-card-container">
              <div className="cta-card">
                <h3 className="cta-title">Ready to Get Started?</h3>
                <ul className="cta-list">
                  <li><span className="check">✓</span> No upfront fees</li>
                  <li><span className="check">✓</span> Free case evaluation</li>
                  <li><span className="check">✓</span> Quick response time</li>
                  <li><span className="check">✓</span> 100% confidential</li>
                </ul>
                <button className="btn-white full-width">Find Your Lawyer Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title white">Get Started Today</h2>
            <p className="section-subtitle white">
              Join thousands of satisfied clients who found their perfect legal match through LawMate
            </p>
            
            <div className="contact-card">
              <div className="contact-stats">
                <div className="contact-stat">
                  <div className="contact-stat-number">500+</div>
                  <div className="contact-stat-label">Lawyers</div>
                </div>
                <div className="contact-stat">
                  <div className="contact-stat-number">24/7</div>
                  <div className="contact-stat-label">Support</div>
                </div>
                <div className="contact-stat">
                  <div className="contact-stat-number">98%</div>
                  <div className="contact-stat-label">Satisfaction</div>
                </div>
              </div>
              
              <button className="btn-white-solid large">Find Your Lawyer</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">⚖️</span>
              <span className="logo-text">LawMate</span>
            </div>
            <div className="footer-text">
              © 2025 LawMate. All rights reserved. | Connecting Sri Lanka with Legal Excellence
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;