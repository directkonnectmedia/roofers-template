import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import PhotoGallery from '../components/photo-gallery'
import GALLERY_PHOTOS from '../lib/gallery-photos'

const GalleryPage = () => {
  return (
    <>
      <div className="gallery-page-container">
        <Head>
          <title>Project Gallery — SlatePeak Roofing</title>
          <meta
            property="og:title"
            content="Project Gallery — SlatePeak Roofing"
          />
          <meta
            name="description"
            content="A look at recent roofing projects from SlatePeak — residential replacements, commercial installs, and storm repairs."
          />
        </Head>
        <Navigation />

        <main className="gallery-page-main">
          <section className="gallery-page-header">
            <div className="gallery-page-header-inner">
              <span className="gallery-page-eyebrow">Project Gallery</span>
              <h1 className="gallery-page-title">A look at our recent work</h1>
              <p className="gallery-page-subtitle">
                Real roofs, real homes, real customers. Click any photo to take
                a closer look.
              </p>
            </div>
          </section>

          <section className="gallery-page-grid-section">
            <div className="gallery-page-grid-container">
              <PhotoGallery photos={GALLERY_PHOTOS} variant="full" />
            </div>
          </section>

          <section className="gallery-page-cta">
            <div className="gallery-page-cta-inner">
              <h2 className="section-title">See something you like?</h2>
              <p className="section-content">
                Tell us about your project and we&apos;ll take it from there —
                no pressure, no pushy follow-ups.
              </p>
              <div className="gallery-page-cta-actions">
                <Link href="/#estimate-wizard">
                  <a className="btn btn-primary btn-lg">
                    <span>Start my project</span>
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-outline btn-lg">
                    <span>Back to home</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <style jsx>
        {`
          .gallery-page-container {
            width: 100%;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default GalleryPage
