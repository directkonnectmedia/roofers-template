import React, { useState, useEffect, useReducer } from 'react'

/**
 * Slow auto-advancing carousel. Manual next immediately shows the following
 * slide and restarts the autoplay timer.
 *
 * Props:
 *   slides: React node array (one visible at a time)
 *   autoplayMs: interval between automatic advances (default 8800)
 *   labelNext: aria-label for the control button
 *   className: optional wrapper class
 */
const SlowCarousel = ({
  slides = [],
  autoplayMs = 8800,
  labelNext = 'Show next slide',
  className = '',
}) => {
  const len = slides.length
  const [index, setIndex] = useState(0)
  const [restartTick, bumpRestart] = useReducer((n) => n + 1, 0)

  useEffect(() => {
    if (len < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [len, autoplayMs, restartTick])

  const goNextManual = () => {
    setIndex((i) => (i + 1) % len)
    bumpRestart()
  }

  if (!len) return null

  return (
    <div
      className={className ? `slow-carousel ${className}` : 'slow-carousel'}
    >
      <div className="slow-carousel-viewport">
        <div className="slow-carousel-slides">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${len}`}
              aria-hidden={i !== index}
              className={
                i === index
                  ? 'slow-carousel-slide is-active'
                  : 'slow-carousel-slide'
              }
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {len > 1 && (
        <button
          type="button"
          className="slow-carousel-next"
          onClick={goNextManual}
          aria-label={labelNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SlowCarousel
