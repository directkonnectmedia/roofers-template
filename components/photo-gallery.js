import React, { useState, useEffect, useCallback } from 'react'

/**
 * Reusable photo grid with a click-to-expand lightbox.
 *
 * Props:
 *   photos:  array of { src, alt, title?, tag? }
 *   variant: 'preview' (homepage, 2-col-ish) | 'full' (gallery page, masonry)
 */
const PhotoGallery = ({ photos = [], variant = 'full' }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  )

  useEffect(() => {
    if (activeIndex === null) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex !== null ? photos[activeIndex] : null

  return (
    <>
      <div className={`photo-grid photo-grid--${variant}`}>
        {photos.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            type="button"
            className="photo-card"
            aria-label={`Expand photo: ${p.title || p.alt}`}
            onClick={() => setActiveIndex(i)}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            {(p.title || p.tag) && (
              <div className="photo-card-overlay">
                {p.tag && <span className="photo-card-tag">{p.tag}</span>}
                {p.title && <h4 className="photo-card-title">{p.title}</h4>}
              </div>
            )}
            <span className="photo-card-expand-hint" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photo view"
          onClick={close}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            aria-label="Close"
            onClick={close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-prev"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-next"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
          <div
            className="photo-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} />
            {(active.title || active.tag) && (
              <div className="photo-lightbox-caption">
                {active.tag && (
                  <span className="photo-card-tag">{active.tag}</span>
                )}
                {active.title && <h4>{active.title}</h4>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGallery
