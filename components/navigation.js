import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: var(--color-surface);
}
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--border-radius-full);
  border: 3px solid var(--color-surface);
  transition: all 0.3s ease;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
  box-shadow: 0 0 10px var(--color-accent);
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav className="navigation-wrapper">
          <div id="scrollProgress" className="navigation-scroll-progress"></div>
          <div className="navigation-top-bar">
            <div className="navigation-top-content">
              <div className="navigation-contact-group">
                <div className="navigation-info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="navigation-top-icon"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(555) 766-3464</span>
                </div>
                <div className="navigation-info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="navigation-top-icon"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Serving Greater Peak Region</span>
                </div>
              </div>
              <div className="navigation-info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="navigation-top-icon"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span>Mon - Sat: 8am - 6pm</span>
              </div>
            </div>
          </div>
          <div id="stickyNav" className="navigation-main-bar">
            <div className="navigation-main-content">
              <Link href="/">
                <a>
                  <div
                    aria-label="SlatePeak Roofing Home"
                    className="navigation-logo-link"
                  >
                    <div className="navigation-logo-container">
                      <span className="navigation-logo-text">SlatePeak</span>
                      <span className="navigation-logo-accent">Roofing</span>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="navigation-desktop-links">
                <Link href="/#services">
                  <a>
                    <div className="navigation-link">
                      <span>Services</span>
                    </div>
                  </a>
                </Link>
                <Link href="/gallery">
                  <a>
                    <div className="navigation-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </Link>
                <Link href="/#reviews">
                  <a>
                    <div className="navigation-link">
                      <span>Reviews</span>
                    </div>
                  </a>
                </Link>
                <Link href="/#process">
                  <a>
                    <div className="navigation-link">
                      <span>About</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="navigation-actions">
                <Link href="/#estimate-wizard">
                  <a className="btn-md navigation-cta btn btn-accent">
                    Get Free Estimate
                  </a>
                </Link>
                <button
                  id="mobileMenuToggle"
                  aria-label="Toggle Menu"
                  aria-expanded="false"
                  className="navigation-mobile-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="navigation-menu-icon"
                  >
                    <path d="M4 12h16M4 6h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="mobileOverlay" className="navigation-mobile-overlay">
            <div className="navigation-mobile-header">
              <div className="navigation-logo-container">
                <span className="navigation-logo-text">SlatePeak</span>
                <span className="navigation-logo-accent">Roofing</span>
              </div>
              <button
                id="mobileMenuClose"
                aria-label="Close Menu"
                className="navigation-mobile-close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="navigation-mobile-content">
              <div className="navigation-mobile-links">
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
                <Link href="/#services">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Services</span>
                    </div>
                  </a>
                </Link>
                <Link href="/gallery">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </Link>
                <Link href="/#reviews">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Reviews</span>
                    </div>
                  </a>
                </Link>
                <Link href="/#process">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>About</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="navigation-mobile-footer">
                <Link href="/#estimate-wizard">
                  <a className="navigation-mobile-cta btn btn-accent btn-xl">
                    Get Free Estimate
                  </a>
                </Link>
                <div className="navigation-mobile-contact">
                  <p className="section-content">(555) 766-3464</p>
                  <p className="section-content">info@slatepeakroofing.com</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes navFadeInUp {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const stickyNav = document.getElementById("stickyNav")
  const scrollProgress = document.getElementById("scrollProgress")
  const mobileToggle = document.getElementById("mobileMenuToggle")
  const mobileClose = document.getElementById("mobileMenuClose")
  const mobileOverlay = document.getElementById("mobileOverlay")

  // Handle Scroll Effects
  window.addEventListener("scroll", () => {
    // Sticky Header Styling
    if (window.scrollY > 50) {
      stickyNav.classList.add("is-scrolled")
    } else {
      stickyNav.classList.remove("is-scrolled")
    }

    // Progress Indicator
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    scrollProgress.style.width = scrolled + "%"
  })

  // Mobile Menu Toggle
  const openMenu = () => {
    mobileOverlay.style.display = "flex"
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden" // Prevent body scroll

    // Small delay to trigger CSS transition
    setTimeout(() => {
      mobileOverlay.classList.add("is-active")
    }, 10)
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = "" // Restore body scroll

    // Wait for transition to finish before hiding
    setTimeout(() => {
      if (!mobileOverlay.classList.contains("is-active")) {
        mobileOverlay.style.display = "none"
      }
    }, 500)
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  // Close menu on link / CTA click
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link, .navigation-mobile-cta")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
