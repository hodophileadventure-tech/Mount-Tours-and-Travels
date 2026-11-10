import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { BedDouble, CalendarDays, Check, MapPin, Utensils, X } from 'lucide-react'

function PackageItineraryModal({ title, duration, itinerary, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousActiveElement = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousActiveElement?.focus()
    }
  }, [onClose])

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={handleBackdropClick}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-itinerary-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.8rem] bg-[#fcfaf6] shadow-2xl"
      >
        <div className="relative overflow-hidden bg-[#172a32] px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a76555,_transparent_55%)]" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close itinerary"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#f7d98d] sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f7d98d]">Group tour itinerary</p>
            <h2 id="package-itinerary-title" className="mt-3 pr-10 text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              <CalendarDays size={16} /> {duration}
            </p>
          </div>
        </div>

        <div className="space-y-10 p-5 sm:p-10">
          {itinerary.places?.length ? (
            <section aria-labelledby="itinerary-places-title">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#f3ead7] p-2.5 text-[#b88635]"><MapPin size={19} /></span>
              <h3 id="itinerary-places-title" className="text-xl font-semibold text-[#111827]">Places to be visited</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {itinerary.places.map((place) => (
                <span key={place} className="rounded-full border border-[#e5d7b8] bg-white px-4 py-2 text-sm font-medium text-[#374151]">
                  {place}
                </span>
              ))}
            </div>
            </section>
          ) : null}

          <section aria-labelledby="itinerary-plan-title">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#f3ead7] p-2.5 text-[#b88635]"><CalendarDays size={19} /></span>
              <h3 id="itinerary-plan-title" className="text-xl font-semibold text-[#111827]">Detailed plan</h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {itinerary.days.map((day, index) => (
                <article key={day.title} className="rounded-2xl border border-[#e5d7b8] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88635]">Day {String(index + 1).padStart(2, '0')}</p>
                  <h4 className="mt-2 text-lg font-semibold text-[#111827]">{day.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {day.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2.5 text-sm leading-6 text-[#4b5563]">
                        <span className="mt-1 text-[#b88635]">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {itinerary.accommodation?.length ? (
            <section aria-labelledby="itinerary-accommodation-title">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#f3ead7] p-2.5 text-[#b88635]"><BedDouble size={19} /></span>
                <h3 id="itinerary-accommodation-title" className="text-xl font-semibold text-[#111827]">Accommodation plan</h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {itinerary.accommodation.map(({ night, location }) => (
                  <div key={night} className="rounded-xl border border-[#e5d7b8] bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88635]">{night}</p>
                    <p className="mt-2 font-medium text-[#111827]">{location}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {itinerary.included?.length || itinerary.excluded?.length ? (
            <section aria-labelledby="itinerary-services-title">
              <h3 id="itinerary-services-title" className="text-xl font-semibold text-[#111827]">Services</h3>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {itinerary.included?.length ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6">
                    <h4 className="text-lg font-semibold text-emerald-950">Included</h4>
                    <ul className="mt-4 space-y-3">
                      {itinerary.included.map((service) => (
                        <li key={service} className="flex items-start gap-2.5 text-sm leading-6 text-emerald-950/80">
                          <Check size={17} className="mt-1 shrink-0 text-emerald-700" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {itinerary.excluded?.length ? (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 sm:p-6">
                    <h4 className="text-lg font-semibold text-rose-950">Not included</h4>
                    <ul className="mt-4 space-y-3">
                      {itinerary.excluded.map((service) => (
                        <li key={service} className="flex items-start gap-2.5 text-sm leading-6 text-rose-950/80">
                          <span aria-hidden="true" className="mt-0.5 text-base leading-5 text-rose-700">×</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {itinerary.meals ? (
            <section aria-labelledby="itinerary-meals-title" className="rounded-2xl border border-[#e5d7b8] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#f3ead7] p-2.5 text-[#b88635]"><Utensils size={19} /></span>
              <h3 id="itinerary-meals-title" className="text-xl font-semibold text-[#111827]">Meals provided</h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {itinerary.meals.breakfast ? (
                <p className="rounded-xl bg-[#fcfaf6] p-4 text-sm leading-6 text-[#4b5563]">
                  <strong className="text-[#111827]">Breakfast:</strong> {itinerary.meals.breakfast}
                </p>
              ) : null}
              {itinerary.meals.dinner ? (
                <p className="rounded-xl bg-[#fcfaf6] p-4 text-sm leading-6 text-[#4b5563]">
                  <strong className="text-[#111827]">Dinner:</strong> {itinerary.meals.dinner}
                </p>
              ) : null}
            </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>,
    document.body,
  )
}

export default PackageItineraryModal
