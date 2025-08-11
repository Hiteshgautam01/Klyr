'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function RegisterPage() {
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

      <div className="tp-register-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="tp-register-thumb">
                <img src="/assets/img/login/login-4.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-register-wrapper d-flex justify-content-center">
                <div className="tp-register-from">
                  <div className="tp-register-from-heading text-center">
                    <h3 className="tp-register-from-title">Start Your Free Trial</h3>
                    <p>Install a GTM engine in days, not quarters</p>
                  </div>
                  <form action="#">
                    <div className="tp-register-from-input-box">
                      <div className="tp-register-from-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="tp-register-from-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div className="tp-register-from-input">
                        <input type="email" placeholder="Business Email" />
                      </div>
                      <div className="tp-register-from-input">
                        <input type="text" placeholder="Company Name" />
                      </div>
                      <div className="tp-register-from-input">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="tp-register-from-input">
                        <input type="password" placeholder="Confirm Password" />
                      </div>
                    </div>
                    <div className="tp-register-from-checkbox d-flex align-items-center mb-20">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>
                      </label>
                    </div>
                    <div className="tp-register-from-btn mb-20">
                      <button type="submit" className="tp-btn-blue-lg w-100">
                        Get Started Free
                      </button>
                    </div>
                    <div className="tp-register-from-divider text-center mb-20">
                      <span>or</span>
                    </div>
                    <div className="tp-register-from-social text-center mb-20">
                      <a href="#" className="tp-btn-white-lg w-100 mb-10">
                        <img src="/assets/img/login/google.png" alt="" className="mr-10" style={{width: '20px'}} />
                        Continue with Google
                      </a>
                      <a href="#" className="tp-btn-white-lg w-100">
                        <img src="/assets/img/login/linkedin.png" alt="" className="mr-10" style={{width: '20px'}} />
                        Continue with LinkedIn
                      </a>
                    </div>
                    <div className="tp-register-from-bottom text-center">
                      <span>
                        Already have an account? <Link href="/auth/sign-in">Sign In</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}