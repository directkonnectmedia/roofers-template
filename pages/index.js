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

function ServiceRoofIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 13l9-9 9 9" />
      <path d="M5 11v10h14V11" />
      <path d="M10 21v-6h4v6" />
    </svg>
  )
}

const Home = (props) => {
  const [wizardOpen, setWizardOpen] = useState(false)
  const openWizard = () => setWizardOpen(true)
  const closeWizard = () => setWizardOpen(false)
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>SlatePeak Roofing | Heavy-duty roofing Arizona</title>
          <meta
            property="og:title"
            content="SlatePeak Roofing — Heavy-Duty Roofing Solutions"
          />
          <link rel="canonical" href="https://roofers-template-rho.vercel.app/" />
          <meta
            property="og:url"
            content="https://roofers-template-rho.vercel.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-media">
            <img
              alt="Heavy-duty industrial commercial roofing crew on a membrane roof."
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="hero-bg-image"
              loading="eager"
            />
            <div className="hero-grit" aria-hidden="true" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-logo" aria-hidden="true">
              <span className="hero-logo-text">SlatePeak</span>
              <span className="hero-logo-accent">Roofing</span>
            </div>
            <h1 id="hero-heading" className="home-hero-title hero-title">
              <span className="hero-brand-line">SlatePeak Roofing</span>
              <span className="hero-tagline-line">
                Heavy-duty roofing solutions
              </span>
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Quality, reliability, and expert craftsmanship across Arizona —
              engineered for extremes, inspected to code, backed by workmanship
              you can track.
            </p>
            <div className="hero-actions hero-actions-centered">
              <button
                type="button"
                onClick={openWizard}
                className="btn btn-accent btn-xl hero-cta-primary"
              >
                <span>Get an estimate</span>
              </button>
            </div>
            <div className="hero-gallery-nudge">
              <Link href="/gallery">
                <a className="hero-gallery-link">View our project gallery</a>
              </Link>
            </div>
          </div>
          <div className="scroll-hint" aria-hidden="true">
            <div className="mouse-icon">
              <div className="mouse-wheel"></div>
            </div>
          </div>
        </section>
        <section
          id="trust-credentials"
          className="credentials-trust-section"
          aria-labelledby="trust-credentials-heading"
        >
          <div className="credentials-inner">
            <p id="trust-credentials-heading" className="credentials-trust-intro">
              Licensed crews · OSHA-minded job sites · Local dispatch
            </p>
            <div className="credentials-pills">
              <div className="credential-item">
                <span className="credential-num">25+</span>
                <span className="credential-label">Years in business</span>
              </div>
              <div className="credential-item">
                <span className="credential-num">5,000+</span>
                <span className="credential-label">Jobs completed</span>
              </div>
              <div className="credential-item">
                <span className="credential-num">4.9</span>
                <span className="credential-label">Customer rating</span>
              </div>
              <div className="credential-item">
                <span className="credential-num">A+</span>
                <span className="credential-label">BBB profile</span>
              </div>
            </div>
            <div className="credentials-meta">
              <p className="credentials-licenses">
                AZ ROC #334455 · Registrar of Contractors License CR‑42‑123456 ·
                City of Phoenix Contractor Reg. PCM‑778899 · OSHA 10‑hr trained
                foremen on every SlatePeak Commercial crew · GL & WC on file —
                certificate available on request.
              </p>
              <p className="credentials-secondary-services">
                Supporting scope: Seamless gutters &amp; downspouts · Storm
                response &amp; tarping · Coatings · Skylights &amp; penetration
                flashings · Attic ventilation packages · HOA compliance
                inspections · Drone-assisted documentation.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="services-chunk-section">
          <div className="carousel-header">
            <h2 className="section-title">Specialized Roofing Services</h2>
            <p className="section-content">
              Professional roofing solutions tailored to your property — every
              system below is engineered, installed, and warrantied by our ironclad crew.
            </p>
          </div>
          <div className="services-grid-chunk">
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Asphalt shingle installation"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">
                    Asphalt shingle roofing
                  </h3>
                </div>
                <p className="section-content">
                  Versatile, durable, cost-effective membranes for pitched
                  residential envelopes with Class A fire-ready assemblies when
                  required.
                </p>
                <a href="/#trust-credentials">
                  <div className="btn-link">
                    <span>Licensing snapshot</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/19187101/pexels-photo-19187101.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Standing seam metal roof"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">Metal roofing</h3>
                </div>
                <p className="section-content">
                  Architectural standing seam profiles with radiant-barrier-ready
                  underlayment for Arizona heat loads plus wind-uplift hardware.
                </p>
                <a href="/gallery">
                  <div className="btn-link">
                    <span>Metal gallery</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/11467876/pexels-photo-11467876.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Tile roof installation"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">Tile roofing</h3>
                </div>
                <p className="section-content">
                  Precision-set clay/concrete assemblies with ASTM-rated flashings —
                  engineered for uplift and monsoon runoff control.
                </p>
                <a href="/#reviews">
                  <div className="btn-link">
                    <span>Homeowner reactions</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/6338827/pexels-photo-6338827.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Flat membrane roofing"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">Flat &amp; low-slope</h3>
                </div>
                <p className="section-content">
                  Reinforced TPO/EPDM build-ups with tapered insulation decks,
                  crickets, drains, and walk-pad integrations for rooftop MEP traffic.
                </p>
                <a href="/#estimate-wizard">
                  <div className="btn-link">
                    <span>Plan a rooftop walk</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/33501308/pexels-photo-33501308.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Roof leak repair technician"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">Emergency repairs</h3>
                </div>
                <p className="section-content">
                  Rapid leak isolation, uplifted shingle re-secures, fascia
                  rebuilds — documentation delivered for HOA and insurance filings.
                </p>
                <a href="/#reviews">
                  <div className="btn-link">
                    <span>Emergency case studies</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Architect reviewing roof plans"
                />
              </div>
              <div className="service-content">
                <div className="service-card-head">
                  <div className="service-card-icon">
                    <ServiceRoofIcon />
                  </div>
                  <h3 className="section-subtitle">
                    Replacement planning
                  </h3>
                </div>
                <p className="section-content">
                  Tear-off sequencing, salvage inspections, phased staging for occupied
                  buildings, and cradle-to-grave waste manifests for LEED-minded owners.
                </p>
                <a href="/#process">
                  <div className="btn-link">
                    <span>See our playbook</span>
                  </div>
                </a>
              </div>
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
                <span className="phone-number">(555) 766-3464</span>
              </div>
              <button
                type="button"
                onClick={openWizard}
                className="btn btn-accent btn-lg sticky-cta-btn"
              >
                <span>Get an estimate</span>
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

  document.querySelectorAll(".service-card, .stat-card, .photo-card, .process-step, .review-card, .credential-item").forEach((el) => {
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
