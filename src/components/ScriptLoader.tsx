'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
  useEffect(() => {
    // Only load scripts on client side
    const scripts = [
      '/assets/js/jquery.js',
      '/assets/js/waypoints.js',
      '/assets/js/bootstrap.bundle.min.js',
      '/assets/js/slick.min.js',
      '/assets/js/magnific-popup.js',
      '/assets/js/counterup.js',
      '/assets/js/wow.js',
      '/assets/js/nice-select.js',
      '/assets/js/swiper-bundle.js',
      '/assets/js/meanmenu.js',
      '/assets/js/tilt.jquery.js',
      '/assets/js/isotope-pkgd.js',
      '/assets/js/imagesloaded-pkgd.js',
      '/assets/js/ajax-form.js',
      '/assets/js/gsap.min.js',
      '/assets/js/ScrollTrigger.min.js',
      '/assets/js/ScrollSmoother.min.js',
      '/assets/js/split-text.min.js',
      '/assets/js/parallax-scroll.js',
      '/assets/js/main.js'
    ]

    const loadedScripts: HTMLScriptElement[] = []
    
    // Load scripts sequentially to ensure proper dependencies
    const loadScriptsSequentially = async () => {
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i]
        await new Promise<void>((resolve) => {
          const script = document.createElement('script')
          script.src = src
          script.async = false
          
          script.onload = () => {
            // Initialize specific libraries after they load
            if (src.includes('wow.js') && typeof window !== 'undefined' && (window as any).WOW) {
              new (window as any).WOW().init()
            }
            resolve()
          }
          
          script.onerror = () => {
            console.error(`Failed to load script: ${src}`)
            resolve() // Continue loading other scripts even if one fails
          }
          
          document.body.appendChild(script)
          loadedScripts.push(script)
        })
      }
      
      // Trigger a custom event when all scripts are loaded
      window.dispatchEvent(new CustomEvent('scriptsLoaded'))
    }
    
    loadScriptsSequentially()

    // Cleanup function
    return () => {
      loadedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return null
}