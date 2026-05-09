import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import EstimateWizard from '../components/estimate-wizard'
import PhotoGallery from '../components/photo-gallery'
import GALLERY_PHOTOS from '../lib/gallery-photos'

const HOMEPAGE_PREVIEW_PHOTOS = GALLERY_PHOTOS.slice(0, 4)

const Home = (props) => {
  const [wizardOpen, setWizardOpen] = useState(false)
  const openWizard = () => setWizardOpen(true)
  const closeWizard = () => setWizardOpen(false)
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Witty Great Lark</title>
          <meta property="og:title" content="Witty Great Lark" />
          <link
            rel="canonical"
            href="https://witty-great-lark-ibfrif.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://witty-great-lark-ibfrif.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-video-wrapper">
            <video
              autoPlay="true"
              muted="true"
              loop="true"
              playsInline="true"
              poster="https://images.pexels.com/videos/4198817/pictures/preview-0.jpg"
              src="https://videos.pexels.com/video-files/4198817/4198817-hd_1280_720_24fps.mp4"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-logo" aria-label="SlatePeak Roofing">
              <span className="hero-logo-text">SlatePeak</span>
              <span className="hero-logo-accent">Roofing</span>
            </div>
            <h1 className="home-hero-title hero-title">
              Roofing Done Right. Built to Last.
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Premium quality craftsmanship backed by industry-leading
              warranties. We protect what matters most with durable materials
              and expert installation.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                onClick={openWizard}
                className="btn btn-accent btn-xl hero-cta-btn"
              >
                <span>Get Your Free Estimate</span>
              </button>
              <a href="#gallery">
                <div className="btn btn-xl btn-outline">
                  <span>View Our Work</span>
                </div>
              </a>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-item">
                <span className="trust-number">25+</span>
                <span className="trust-label">Years in Business</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">5,000+</span>
                <span className="trust-label">Jobs Completed</span>
              </div>
              <div className="trust-item">
                <div className="star-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span className="trust-number">4.9</span>
                </div>
                <span className="trust-label">Customer Rating</span>
              </div>
              <div className="trust-item">
                <div className="shield-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <span className="trust-label">Licensed &amp; Insured</span>
              </div>
            </div>
          </div>
          <div className="scroll-hint">
            <div className="mouse-icon">
              <div className="mouse-wheel"></div>
            </div>
          </div>
        </section>
        <section id="services" className="services-carousel-section">
          <div className="carousel-header">
            <h2 className="section-title">Our Specialized Services</h2>
            <p className="section-content">
              Professional roofing solutions tailored to your property&apos;s
              specific needs.
            </p>
          </div>
          <div className="services-carousel-wrapper">
            <div id="servicesTrack" className="services-track">
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Asphalt Shingle Installation"
                  />
                </div>
                <div className="service-content">
                  <h3 className="section-subtitle">Asphalt Shingle Roofing</h3>
                  <p className="section-content">
                    Versatile, durable, and cost-effective solutions for
                    residential homes.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="https://images.pexels.com/photos/19187101/pexels-photo-19187101.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Metal Roofing Detail"
                  />
                </div>
                <div className="service-content">
                  <h3 className="section-subtitle">Metal Roofing</h3>
                  <p className="section-content">
                    Modern aesthetics combined with exceptional longevity and
                    energy efficiency.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="https://images.pexels.com/photos/11467876/pexels-photo-11467876.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Tile Roof Installation"
                  />
                </div>
                <div className="service-content">
                  <h3 className="section-subtitle">Tile Roofing</h3>
                  <p className="section-content">
                    Elegant clay and concrete tiles for timeless beauty and fire
                    resistance.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="https://images.pexels.com/photos/6338827/pexels-photo-6338827.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Flat Roofing Maintenance"
                  />
                </div>
                <div className="service-content">
                  <h3 className="section-subtitle">Flat Roofing</h3>
                  <p className="section-content">
                    Expert TPO and EPDM membrane applications for commercial and
                    modern residential properties.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="https://images.pexels.com/photos/33501308/pexels-photo-33501308.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Roof Repair in Progress"
                  />
                </div>
                <div className="service-content">
                  <h3 className="section-subtitle">Roof Repairs</h3>
                  <p className="section-content">
                    Quick response for leaks, missing shingles, and structural
                    maintenance.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button id="prevBtn" className="carousel-btn prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5m7-7l-7 7l7 7"></path>
                </svg>
              </button>
              <div id="carouselDots" className="carousel-dots"></div>
              <button id="nextBtn" className="carousel-btn next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="trust-stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                  <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                </svg>
              </div>
              <div className="stat-info">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
              </div>
              <div className="stat-info">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Roofs Completed</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="stat-info">
                <span className="stat-number">2hr</span>
                <span className="stat-label">Avg. Response Time</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <div className="stat-info">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Google Star Rating</span>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-teaser-section">
          <div className="gallery-header">
            <h2 className="section-title">Take a Peek at Our Recent Work</h2>
            <p className="section-content gallery-intro">
              A small preview — click any photo to take a closer look.
            </p>
          </div>
          <PhotoGallery photos={HOMEPAGE_PREVIEW_PHOTOS} variant="preview" />
          <div className="gallery-footer">
            <Link href="/gallery">
              <a className="btn btn-primary btn-lg">
                <span>View Full Project Gallery</span>
              </a>
            </Link>
          </div>
        </section>
        <section id="process" className="process-snapshot-section">
          <div className="section-container">
            <div className="process-header">
              <h2 className="section-title">How We Work</h2>
              <p className="section-content">
                A transparent, professional approach to every roofing project.
              </p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">
                  <span>01</span>
                </div>
                <div className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Inspection</h3>
                <p className="section-content">
                  Comprehensive on-site assessment of your roof&apos;s current
                  condition.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">
                  <span>02</span>
                </div>
                <div className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path>
                    <path d="M9 12h6"></path>
                    <path d="M9 16h6"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Estimate</h3>
                <p className="section-content">
                  Detailed, transparent proposal with material options and
                  pricing.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">
                  <span>03</span>
                </div>
                <div className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                    <path d="m18.5 14.5l3-3a2 2 0 0 0 0-2.828l-1.414-1.414a2 2 0 0 0-2.828 0l-3 3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Execution</h3>
                <p className="section-content">
                  Expert repair or replacement by our certified professional
                  crews.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">
                  <span>04</span>
                </div>
                <div className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Warranty</h3>
                <p className="section-content">
                  Final quality check and issuance of our industry-leading
                  warranties.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="testimonials-section">
          <div className="featured-testimonial">
            <div className="testimonial-image">
              <img
                src="https://images.pexels.com/photos/33404981/pexels-photo-33404981.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Completed Roofing Project"
              />
            </div>
            <div className="testimonial-content">
              <div className="star-rating-large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent)"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent)"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent)"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent)"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent)"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <blockquote className="testimonial-quote">
                <span>
                  &quot;SlatePeak Roofing transformed our home. The crew was
                  professional, efficient, and the quality of the asphalt
                  shingle installation is second to none. They handled
                  everything from the initial inspection to the final cleanup
                  with incredible care.&quot;
                </span>
              </blockquote>
              <div className="testimonial-author">
                <span className="author-name">Robert Thompson</span>
                <span className="author-location">
                  Fort Worth, TX • Full Roof Replacement
                </span>
              </div>
            </div>
          </div>
          <div className="review-carousel">
            <div className="review-card">
              <div className="star-rating-sm">
                <span>★★★★★</span>
              </div>
              <p className="review-text">
                &quot;Amazing response time after the storm. They had my roof
                patched within hours.&quot;
              </p>
              <div className="review-meta">
                <span>Sarah L. • Repairs</span>
              </div>
            </div>
            <div className="review-card">
              <div className="star-rating-sm">
                <span>★★★★★</span>
              </div>
              <p className="review-text">
                &quot;The metal roof they installed looks fantastic and has
                already lowered our energy bills.&quot;
              </p>
              <div className="review-meta">
                <span>James M. • Metal Install</span>
              </div>
            </div>
            <div className="review-card">
              <div className="star-rating-sm">
                <span>★★★★★</span>
              </div>
              <p className="review-text">
                &quot;Professional, honest, and high quality. Highly recommend
                SlatePeak for any roofing needs.&quot;
              </p>
              <div className="review-meta">
                <span>Emily R. • Inspection</span>
              </div>
            </div>
          </div>
          <div className="testimonials-footer">
            <div className="trust-logos">
              <div className="trust-logo-placeholder">
                <span>Google Reviews 4.9 ★</span>
              </div>
              <div className="trust-logo-placeholder">
                <span>BBB Accredited A+</span>
              </div>
            </div>
            <a href="#">
              <div className="btn btn-outline btn-lg">
                <span>Leave a Review</span>
              </div>
            </a>
          </div>
        </section>
        <section id="estimate-wizard" className="wizard-teaser-section">
          <div className="section-container">
            <div className="wizard-card">
              <div className="wizard-header">
                <h2 className="section-title">Tell us about your project</h2>
                <p className="section-content">
                  A few quick questions — no pressure, no commitment, and no
                  pushy follow-ups. We&apos;ll come back to you with a clear
                  next step.
                </p>
              </div>
              <div className="wizard-body">
                <div className="wizard-shortcut-grid">
                  <div className="shortcut-item">
                    <div className="shortcut-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className="shortcut-text">
                      <span className="shortcut-label">Takes about 2 minutes</span>
                      <span className="shortcut-value">
                        Share as much or as little as you&apos;d like
                      </span>
                    </div>
                  </div>
                  <div className="shortcut-item">
                    <div className="shortcut-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <div className="shortcut-text">
                      <span className="shortcut-label">No spam, no hard sell</span>
                      <span className="shortcut-value">
                        Just an honest conversation when you&apos;re ready
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openWizard}
                  className="wizard-launch-btn btn btn-primary btn-lg"
                >
                  <span>Let&apos;s get started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="sticky-cta-strip">
          <div className="cta-strip-container">
            <div className="cta-text-group">
              <h2 className="section-title">Ready for your new roof?</h2>
              <p className="section-content">
                Schedule your free 21-point inspection today.
              </p>
            </div>
            <div className="cta-actions-group">
              <div className="cta-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="phone-number">(555) 123-4567</span>
              </div>
              <button
                type="button"
                onClick={openWizard}
                className="btn btn-accent btn-lg sticky-cta-btn"
              >
                <span>Get Free Estimate</span>
              </button>
            </div>
          </div>
        </section>
        <EstimateWizard open={wizardOpen} onClose={closeWizard} />
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes scrollWheel {0% {transform: translate(-50%, 0);
opacity: 1;}
100% {transform: translate(-50%, 20px);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="slatepeak-interactions">
(function(){
  const track = document.getElementById("servicesTrack")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")

  if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 340, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -340, behavior: "smooth" })
    })
  }

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .stat-card, .photo-card, .process-step, .review-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-wizard-progress-bar-elm {
            width: 25%;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
