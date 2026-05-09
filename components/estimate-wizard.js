import React, { useState, useEffect, useRef } from 'react'

const TIMELINE_OPTIONS = [
  {
    id: 'asap',
    label: 'ASAP / Emergency',
    description: 'Need help right away',
  },
  {
    id: 'month',
    label: 'Within the next month',
    description: 'Planning to get going soon',
  },
  {
    id: 'quarter',
    label: 'Within 3 months',
    description: 'Thinking ahead a little',
  },
  {
    id: 'flexible',
    label: "I'm flexible",
    description: 'Just exploring options',
  },
  {
    id: 'quote',
    label: 'Just getting a quote',
    description: 'Gathering information for now',
  },
]

const SERVICE_OPTIONS = [
  { id: 'asphalt', label: 'Asphalt Shingle Roofing' },
  { id: 'metal', label: 'Metal Roofing' },
  { id: 'tile', label: 'Tile Roofing' },
  { id: 'flat', label: 'Flat Roofing' },
  { id: 'repair', label: 'Roof Repairs' },
  { id: 'custom', label: 'Something else — tell us about it' },
]

const SQFT_QUICK_PICKS = [
  'Under 1,000 sq ft',
  '1,000–2,000',
  '2,000–3,000',
  '3,000+',
  'Not sure yet',
]

const TOTAL_STEPS = 5

const EstimateWizard = ({ open, onClose }) => {
  const dialogRef = useRef(null)
  const [step, setStep] = useState(1)
  const [timeline, setTimeline] = useState(null)
  const [services, setServices] = useState([])
  const [customService, setCustomService] = useState('')
  const [sqft, setSqft] = useState('')
  const [sqftPick, setSqftPick] = useState('')
  const [notes, setNotes] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [attemptedNext, setAttemptedNext] = useState(false)

  // Sync native <dialog> open state with the `open` prop.
  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (open && !el.open) {
      el.showModal()
    } else if (!open && el.open) {
      el.close()
    }
  }, [open])

  // Reset wizard state a moment after closing so the next open starts fresh.
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => {
      setStep(1)
      setTimeline(null)
      setServices([])
      setCustomService('')
      setSqft('')
      setSqftPick('')
      setNotes('')
      setName('')
      setPhone('')
      setEmail('')
      setSubmitted(false)
      setAttemptedNext(false)
    }, 300)
    return () => clearTimeout(t)
  }, [open])

  const toggleService = (id) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const canContinue = () => {
    if (step === 1) return !!timeline
    if (step === 2) {
      if (services.length === 0) return false
      if (services.includes('custom') && customService.trim().length === 0)
        return false
      return true
    }
    if (step === 3) return sqft.trim().length > 0 || sqftPick.length > 0
    if (step === 4) return true
    if (step === 5) {
      if (!name.trim()) return false
      return phone.trim().length > 0 || email.trim().length > 0
    }
    return false
  }

  const handleClose = () => {
    if (onClose) onClose()
  }

  const handleBackdropClick = (e) => {
    // Native <dialog> fires click on itself when backdrop is clicked.
    if (e.target === dialogRef.current) handleClose()
  }

  const handleNext = () => {
    if (!canContinue()) {
      setAttemptedNext(true)
      return
    }
    setAttemptedNext(false)
    if (step < TOTAL_STEPS) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handleBack = () => {
    setAttemptedNext(false)
    if (step > 1) setStep(step - 1)
  }

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="wizard-step">
          <h3 className="wizard-step-title">
            When are you hoping to get this done?
          </h3>
          <p className="wizard-step-subtitle">
            Totally okay if you&apos;re still deciding — just pick the closest
            fit.
          </p>
          <div className="wizard-option-list">
            {TIMELINE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`wizard-option-card ${
                  timeline === opt.id ? 'selected' : ''
                }`}
                onClick={() => setTimeline(opt.id)}
              >
                <span className="wizard-option-text">
                  <span className="wizard-option-label">{opt.label}</span>
                  <span className="wizard-option-desc">{opt.description}</span>
                </span>
                <span className="wizard-option-check" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      )
    }
    if (step === 2) {
      return (
        <div className="wizard-step">
          <h3 className="wizard-step-title">
            Which services are you interested in?
          </h3>
          <p className="wizard-step-subtitle">
            Pick as many as apply — it helps us send the right specialist.
          </p>
          <div className="wizard-checkbox-list">
            {SERVICE_OPTIONS.map((opt) => {
              const selected = services.includes(opt.id)
              return (
                <label
                  key={opt.id}
                  className={`wizard-checkbox-card ${
                    selected ? 'selected' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleService(opt.id)}
                  />
                  <span className="wizard-checkbox-indicator" aria-hidden="true">
                    {selected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </span>
                  <span className="wizard-checkbox-label">{opt.label}</span>
                </label>
              )
            })}
          </div>
          {services.includes('custom') && (
            <div className="wizard-field">
              <label htmlFor="wizardCustom">Tell us about it</label>
              <textarea
                id="wizardCustom"
                rows="3"
                placeholder="Describe what you need…"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
              />
            </div>
          )}
          {attemptedNext && !canContinue() && (
            <p className="wizard-error">
              Pick at least one service to keep going.
            </p>
          )}
        </div>
      )
    }
    if (step === 3) {
      return (
        <div className="wizard-step">
          <h3 className="wizard-step-title">Roughly how big is the area?</h3>
          <p className="wizard-step-subtitle">
            A ballpark is fine — we&apos;ll measure it properly on-site.
          </p>
          <div className="wizard-chip-row">
            {SQFT_QUICK_PICKS.map((label) => (
              <button
                key={label}
                type="button"
                className={`wizard-chip ${
                  sqftPick === label ? 'selected' : ''
                }`}
                onClick={() =>
                  setSqftPick(sqftPick === label ? '' : label)
                }
              >
                {label}
              </button>
            ))}
          </div>
          <div className="wizard-field">
            <label htmlFor="wizardSqft">Or enter an exact number</label>
            <div className="wizard-sqft-input">
              <input
                id="wizardSqft"
                type="number"
                inputMode="numeric"
                placeholder="e.g. 1,800"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
              />
              <span>sq ft</span>
            </div>
          </div>
          {attemptedNext && !canContinue() && (
            <p className="wizard-error">
              Pick a range or enter a number — even a rough one works.
            </p>
          )}
        </div>
      )
    }
    if (step === 4) {
      return (
        <div className="wizard-step">
          <h3 className="wizard-step-title">Anything else we should know?</h3>
          <p className="wizard-step-subtitle">
            Damage details, access quirks, deadlines — or leave it blank. No
            worries either way.
          </p>
          <div className="wizard-field">
            <textarea
              rows="6"
              placeholder="E.g. leak in the upstairs bedroom after last storm, two-story with steep pitch, need it wrapped up before a family visit…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      )
    }
    // step 5
    return (
      <div className="wizard-step">
        <h3 className="wizard-step-title">How can we reach you?</h3>
        <p className="wizard-step-subtitle">
          Share your name, plus either a phone number, email, or both — whichever
          you prefer.
        </p>
        <div className="wizard-field">
          <label htmlFor="wizardName">
            Your name <span className="required">*</span>
          </label>
          <input
            id="wizardName"
            type="text"
            placeholder="First and last"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="wizard-field-grid">
          <div className="wizard-field">
            <label htmlFor="wizardPhone">Phone</label>
            <input
              id="wizardPhone"
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="wizard-field">
            <label htmlFor="wizardEmail">Email</label>
            <input
              id="wizardEmail"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {attemptedNext && !canContinue() && (
          <p className="wizard-error">
            Please share your name and at least one way to reach you (phone or
            email).
          </p>
        )}
      </div>
    )
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleBackdropClick}
      className="wizard-dialog"
    >
      <div
        className="wizard-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="wizard-close-btn"
          aria-label="Close estimate wizard"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        {submitted ? (
          <div className="wizard-success">
            <div className="wizard-success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="wizard-step-title">
              Thanks, {(name.trim().split(/\s+/)[0]) || 'friend'}!
            </h3>
            <p className="wizard-step-subtitle">
              We&apos;ve got your details. A real person from our team will reach
              out soon to talk through next steps — no hard sell, just a
              straightforward conversation.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleClose}
            >
              <span>Close</span>
            </button>
          </div>
        ) : (
          <>
            <div className="wizard-progress">
              <div className="wizard-progress-bar-track">
                <div
                  className="wizard-progress-bar-fill"
                  style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
              </div>
              <span className="wizard-step-indicator-text">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="wizard-step-body">{renderStep()}</div>
            <div className="wizard-footer">
              {step > 1 ? (
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleBack}
                >
                  <span>Back</span>
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                className="btn btn-primary wizard-next-btn"
                onClick={handleNext}
              >
                <span>
                  {step === TOTAL_STEPS ? 'Send it over' : 'Continue'}
                </span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}

export default EstimateWizard
