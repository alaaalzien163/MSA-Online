import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'

/**
 * Scrolls the element referenced by the current URL hash into view whenever
 * the hash changes. Enables in-page section navigation from anywhere in the
 * app (react-router updates the hash without triggering native scrolling).
 * Respects prefers-reduced-motion.
 */
export function useScrollToHash() {
  const { hash } = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!hash) return
    let el = null
    try {
      el = document.querySelector(hash)
    } catch {
      el = null
    }
    if (el) {
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    }
  }, [hash, reduceMotion])
}

export default useScrollToHash
