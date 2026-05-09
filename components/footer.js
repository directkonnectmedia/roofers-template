import React from 'react'

import Script from 'dangerous-html/react'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root footer-slim">
          <div className="footer-container footer-slim-inner">
            <div className="footer-slim-row">
              <div className="footer-slim-brand">
                <div className="footer-logo-wrapper">
                  <span className="footer-logo-text">Slate Peak</span>
                  <span className="footer-logo-sub">Roofing</span>
                </div>
                <p className="footer-slim-tagline">
                  Heavy-duty roofing across Arizona.
                </p>
              </div>
              <div className="footer-slim-trust" aria-label="Certifications">
                <div className="footer-slim-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>Certified quality</span>
                </div>
                <div className="footer-slim-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>Licensed &amp; insured</span>
                </div>
                <div className="footer-slim-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>GAF Master Elite</span>
                </div>
              </div>
              <div className="footer-slim-contact-row">
                <a href="tel:+15557663464" className="footer-slim-link">
                  (555) 766-3464
                </a>
                <span className="footer-slim-divider" aria-hidden="true">
                  ·
                </span>
                <a
                  href="mailto:hello@slatepeak.com"
                  className="footer-slim-link"
                >
                  hello@slatepeak.com
                </a>
              </div>
              <div className="footer-slim-socials">
                <a href="#" aria-label="Facebook">
                  <div className="footer-social-link">
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
                        d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#" aria-label="Instagram">
                  <div className="footer-social-link">
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
                        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <div className="footer-social-link">
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
                        <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                        <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-bottom footer-slim-bar">
              <div className="footer-copyright">
                <span>© 2026 Slate Peak Roofing. All rights reserved.</span>
              </div>
              <nav className="footer-legal" aria-label="Legal">
                <a href="#">
                  <span className="footer-legal-link">Privacy Policy</span>
                </a>
                <a href="#">
                  <span className="footer-legal-link">Terms</span>
                </a>
                <a href="#">
                  <span className="footer-legal-link">Sitemap</span>
                </a>
              </nav>
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
    if (window.scrollY > 400) backToTopBtn.classList.add("is-visible")
    else backToTopBtn.classList.remove("is-visible")
  })
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
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
