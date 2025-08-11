'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    // Hide preloader
    const preloader = document.getElementById('preloader')
    if (preloader) {
      preloader.style.display = 'none'
    }
  }, [])

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="tp-error-area tp-error-height p-relative">
        <div className="tp-error-shape-1">
          <img src="/assets/img/login/error-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="tp-error-content-box text-center">
                <div className="tp-error-404-text">
                  <img src="/assets/img/login/text-404.png" alt="404" />
                </div>
                <h2 className="tp-error-title">Oops! Page Not Found</h2>
                <p>The page you're looking for doesn't exist or has been moved. <br />
                  Let's get you back on track.</p>
                <div className="tp-error-btn-wrapper d-flex justify-content-center flex-wrap gap-20">
                  <Link href="/" className="tp-btn-blue-lg tp-btn-hover alt-color-black">
                    <span>Back to Homepage</span>
                    <b></b>
                  </Link>
                  <Link href="/contact" className="tp-btn-white-lg">
                    <span>Contact Support</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}