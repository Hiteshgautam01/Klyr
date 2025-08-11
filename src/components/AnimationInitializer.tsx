'use client'

import { useEffect } from 'react'

export default function AnimationInitializer() {
  useEffect(() => {
    // Function to initialize animations
    const initAnimations = () => {
      // Initialize WOW.js if available
      if (typeof window !== 'undefined' && (window as any).WOW) {
        new (window as any).WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
          scrollContainer: null,
          resetAnimation: true
        }).init()
      }

      // Add custom fade animations if WOW is not available
      const animateElements = document.querySelectorAll('[data-wow-delay], [data-wow-duration]')
      if (animateElements.length > 0 && !(window as any).WOW) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              const delay = element.getAttribute('data-wow-delay') || '0s'
              const duration = element.getAttribute('data-wow-duration') || '1s'
              
              element.style.animationDelay = delay
              element.style.animationDuration = duration
              element.classList.add('animated')
              
              observer.unobserve(element)
            }
          })
        }, {
          threshold: 0.1,
          rootMargin: '50px'
        })

        animateElements.forEach(element => {
          element.classList.add('wow')
          observer.observe(element)
        })
      }
    }

    // Initialize on load
    if (document.readyState === 'complete') {
      initAnimations()
    } else {
      window.addEventListener('load', initAnimations)
    }

    // Also listen for the custom scriptsLoaded event
    window.addEventListener('scriptsLoaded', initAnimations)

    // Re-initialize on route changes
    const handleRouteChange = () => {
      setTimeout(initAnimations, 100)
    }

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('load', initAnimations)
      window.removeEventListener('scriptsLoaded', initAnimations)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return null
}