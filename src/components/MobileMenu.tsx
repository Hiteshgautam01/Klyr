'use client'

import { useEffect } from 'react'

export default function MobileMenu() {
  useEffect(() => {
    // Handle mobile menu toggle
    const menuBar = document.querySelector('.tp-menu-bar')
    const offcanvasArea = document.querySelector('.tpoffcanvas-area')
    const closeBtn = document.querySelector('.tpoffcanvas__close-btn button')
    const bodyOverlay = document.querySelector('.body-overlay')
    const mobileMenuContainer = document.querySelector('.mobile-menu')

    // Clone the main menu for mobile
    const mainMenu = document.querySelector('#mobile-menu')
    if (mainMenu && mobileMenuContainer) {
      const clonedMenu = mainMenu.cloneNode(true) as HTMLElement
      // Remove the ID to avoid duplicate IDs
      clonedMenu.removeAttribute('id')
      // Add mobile menu class
      clonedMenu.classList.add('mean-nav')
      mobileMenuContainer.innerHTML = ''
      mobileMenuContainer.appendChild(clonedMenu)

      // Handle submenu toggles
      const submenuParents = mobileMenuContainer.querySelectorAll('li:has(ul)')
      submenuParents.forEach(parent => {
        const link = parent.querySelector('a')
        if (link) {
          // Add arrow for submenus
          const arrow = document.createElement('span')
          arrow.className = 'mean-expand'
          arrow.innerHTML = '<i class="far fa-plus"></i>'
          arrow.style.cursor = 'pointer'
          link.appendChild(arrow)

          // Toggle submenu on arrow click
          arrow.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const submenu = parent.querySelector('ul')
            if (submenu) {
              submenu.classList.toggle('mean-show')
              arrow.classList.toggle('mean-clicked')
              arrow.innerHTML = arrow.classList.contains('mean-clicked') 
                ? '<i class="far fa-minus"></i>' 
                : '<i class="far fa-plus"></i>'
            }
          })

          // Prevent navigation on parent links with submenus
          link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
              e.preventDefault()
            }
          })
        }
      })
    }

    // Open menu
    const openMenu = () => {
      offcanvasArea?.classList.add('opened')
      bodyOverlay?.classList.add('opened')
      document.body.style.overflow = 'hidden'
    }

    // Close menu
    const closeMenu = () => {
      offcanvasArea?.classList.remove('opened')
      bodyOverlay?.classList.remove('opened')
      document.body.style.overflow = ''
    }

    // Event listeners
    menuBar?.addEventListener('click', openMenu)
    closeBtn?.addEventListener('click', closeMenu)
    bodyOverlay?.addEventListener('click', closeMenu)

    // Close menu on link click
    const mobileLinks = mobileMenuContainer?.querySelectorAll('a')
    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        const href = link.getAttribute('href')
        if (href && href !== '#') {
          closeMenu()
        }
      })
    })

    // Cleanup
    return () => {
      menuBar?.removeEventListener('click', openMenu)
      closeBtn?.removeEventListener('click', closeMenu)
      bodyOverlay?.removeEventListener('click', closeMenu)
    }
  }, [])

  return null
}