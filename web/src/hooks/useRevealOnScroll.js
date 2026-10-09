import { useEffect } from 'react'

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view.
 * Call once per page, after the sections have rendered.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    // Older browsers: just show everything.
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      // Reveal as soon as any part enters the screen. A ratio threshold left
      // tall sections (stacked cards on phones) blank while scrolling into them.
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
