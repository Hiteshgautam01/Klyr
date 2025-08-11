'use client'

import { useEffect, useState } from 'react'
import ScriptLoader from './ScriptLoader'

interface ProductPageLayoutProps {
  children: React.ReactNode
}

export default function ProductPageLayout({ children }: ProductPageLayoutProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Function to initialize all plugins
    const initializePlugins = () => {
      setIsReady(true)
      // Hide the preloader
      const preloader = document.getElementById('loading')
      if (preloader) {
        preloader.style.display = 'none'
      }
      
      // Initialize jQuery plugins after DOM is ready
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        const $ = (window as any).jQuery
        
        // Initialize mobile menu
        if ((window as any).meanmenu) {
          $('.mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanRevealPosition: "right",
          })
        }
        
        // Initialize other plugins
        if ((window as any).WOW) {
          new (window as any).WOW().init()
        }
        
        // Initialize nice select
        if ($.fn.niceSelect) {
          $('select').niceSelect()
        }
        
        // Initialize smooth scroll
        if ((window as any).gsap && (window as any).ScrollSmoother) {
          (window as any).ScrollSmoother.create({
            smooth: 1.35,
            effects: true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
          })
        }
        
        // Initialize scroll to top
        $('.scroll-top').on('click', function(this: HTMLElement) {
          const target = $(this).attr('data-target')
          if (target) {
            const targetElement = $(target)
            if (targetElement.length && targetElement.offset()) {
              $('html, body').animate({
                scrollTop: targetElement.offset()!.top
              }, 1000)
            }
          }
          return false
        })
        
        // Initialize mobile menu toggle
        $('.tp-menu-bar').on('click', function(this: HTMLElement) {
          $('.tpoffcanvas').addClass('tpoffcanvas-open')
          $('.body-overlay').addClass('body-overlay-open')
        })
        
        $('.close-btn, .body-overlay').on('click', function(this: HTMLElement) {
          $('.tpoffcanvas').removeClass('tpoffcanvas-open')
          $('.body-overlay').removeClass('body-overlay-open')
        })
      }
    }
    
    // Listen for custom event
    const handleScriptsLoaded = () => {
      initializePlugins()
    }
    
    window.addEventListener('scriptsLoaded', handleScriptsLoaded)
    
    // Also check if scripts are already loaded
    const checkScriptsLoaded = () => {
      const requiredScripts = ['jQuery', 'WOW', 'gsap']
      const allLoaded = requiredScripts.every(script => 
        typeof window !== 'undefined' && (window as any)[script]
      )
      
      if (allLoaded && !isReady) {
        initializePlugins()
      }
    }
    
    // Check immediately and periodically
    checkScriptsLoaded()
    const interval = setInterval(() => {
      if (!isReady) {
        checkScriptsLoaded()
      } else {
        clearInterval(interval)
      }
    }, 100)
    
    // Cleanup
    return () => {
      window.removeEventListener('scriptsLoaded', handleScriptsLoaded)
      clearInterval(interval)
    }
  }, [isReady])

  return (
    <>
      <ScriptLoader />
      <div style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
        {children}
      </div>
    </>
  )
}