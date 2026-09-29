import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently in view.
 *
 * Observes elements matching the given ids and updates the active id as they
 * enter the viewport. Returns '' when no matching section has been observed
 * yet — including on routes that have none of these sections (e.g. /contact),
 * so callers never mark an in-page link as active there.
 *
 * @param {string[]} ids - Section element ids to observe (stable reference).
 */
export function useActiveSection(ids = []) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    // No sections on this route — nothing is marked active.
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Set from the observer (an external system), not synchronously here.
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default useActiveSection
