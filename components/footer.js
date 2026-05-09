import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-header">
              <div className="footer-brand">
                <div className="footer-logo-wrapper">
                  <span className="footer-logo-text">SlatePeak</span>
                  <span className="footer-logo-sub">Roofing</span>
                </div>
                <p className="footer-description section-content">
                  Premium roofing solutions crafted with precision and
                  integrity. From residential repairs to commercial
                  installations, we protect what matters most.
                </p>
                <div className="footer-socials">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-newsletter">
                <h3 className="footer-nav-title section-subtitle">
                  Stay Informed
                </h3>
                <p className="footer-newsletter-text section-content">
                  Subscribe for maintenance tips and seasonal roofing offers.
                </p>
                <form
                  action="#"
                  method="POST"
                  data-form-id="4f468160-b5a6-4333-9302-58ea35a818e2"
                  className="footer-form"
                >
                  <div className="footer-input-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required="true"
                      aria-label="Email Address"
                      id="thq_textinput_NFHL"
                      name="textinput"
                      data-form-field-id="thq_textinput_NFHL"
                      className="footer-input"
                    />
                    <button
                      type="submit"
                      id="thq_button_xvx8"
                      name="button"
                      data-form-field-id="thq_button_xvx8"
                      className="footer-submit-btn btn btn-accent btn-sm"
                    >
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-grid">
              <div className="footer-column">
                <h3 className="footer-nav-title section-subtitle">Company</h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>About Our Team</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Project Gallery</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Customer Reviews</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Safety Standards</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Financing Options</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-nav-title section-subtitle">
                  Roofing Services
                </h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Residential Roofing</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Commercial Roofing</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Storm Damage Repair</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Metal &amp; Tile Roofs</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Gutter Installation</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-nav-title section-subtitle">
                  Get In Touch
                </h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:15557528373">
                      <div className="footer-link">
                        <span>(555) SLATE-PEAK</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:hello@slatepeak.com?subject=">
                      <div className="footer-link">
                        <span>hello@slatepeak.com</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-text">
                      <span>
                        {' '}
                        1200 Summit Ridge Blvd, Suite 400
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        {' '}
                        Denver, CO 80202
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-nav-title section-subtitle">
                  Certified Quality
                </h3>
                <div className="footer-trust-grid">
                  <div className="footer-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span className="footer-badge-text">
                      Licensed &amp; Insured
                    </span>
                  </div>
                  <div className="footer-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3h14m-1 10l-6-6l-6 6m6-6v14"
                      ></path>
                    </svg>
                    <span className="footer-badge-text">GAF Master Elite</span>
                  </div>
                </div>
                <div className="footer-cta-wrapper">
                  <a href="#">
                    <div className="footer-cta btn btn-primary btn-lg">
                      <span>Get Free Estimate</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <span>
                  &amp;copy; 2026 SlatePeak Roofing. All rights reserved.
                </span>
              </div>
              <div className="footer-legal">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Sitemap</span>
                  </div>
                </a>
              </div>
              <div className="footer-author">
                <span>
                  {' '}
                  Website by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="footer-accent-text">CreativeDirector</span>
              </div>
            </div>
          </div>
          <button
            id="backToTop"
            aria-label="Back to Top"
            className="footer-back-top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              ></path>
            </svg>
          </button>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  const backToTopBtn = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("is-visible")
    } else {
      backToTopBtn.classList.remove("is-visible")
    }
  })

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  const footerForm = document.querySelector(".footer-form")
  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      const input = footerForm.querySelector(".footer-input")
      if (input.checkValidity()) {
        const originalText = footerForm.querySelector(".footer-submit-btn").textContent
        footerForm.querySelector(".footer-submit-btn").textContent = "Subscribed!"
        footerForm.querySelector(".footer-submit-btn").classList.replace("btn-accent", "btn-primary")
        input.value = ""

        setTimeout(() => {
          footerForm.querySelector(".footer-submit-btn").textContent = originalText
          footerForm.querySelector(".footer-submit-btn").classList.replace("btn-primary", "btn-accent")
        }, 3000)
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
