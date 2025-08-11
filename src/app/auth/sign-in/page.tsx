'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function SignInPage() {
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

      <div className="tp-login-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="tp-login-thumb">
                <img src="/assets/img/login/login-3.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-login-wrapper d-flex justify-content-center">
                <div className="tp-login-from">
                  <div className="tp-login-from-heading text-center">
                    <h3 className="tp-login-from-title">Welcome Back</h3>
                    <p>Access your GTM dashboard and analytics</p>
                  </div>
                  <form action="#">
                    <div className="tp-login-from-input-box">
                      <div className="tp-login-from-input">
                        <input type="email" placeholder="Business Email" />
                      </div>
                      <div className="tp-login-from-input">
                        <input type="password" placeholder="Password" />
                      </div>
                    </div>
                    <div className="tp-login-from-options d-flex align-items-center justify-content-between mb-20">
                      <div className="tp-login-from-checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                      </div>
                      <div className="tp-login-from-forgot">
                        <Link href="/auth/forgot-password">Forgot password?</Link>
                      </div>
                    </div>
                    <div className="tp-login-from-btn mb-20">
                      <button type="submit" className="tp-btn-blue-lg w-100">
                        Sign In
                      </button>
                    </div>
                    <div className="tp-login-from-divider text-center mb-20">
                      <span>or</span>
                    </div>
                    <div className="tp-login-from-social text-center mb-20">
                      <a href="#" className="tp-btn-white-lg w-100 mb-10">
                        <img src="/assets/img/login/google.png" alt="" className="mr-10" style={{width: '20px'}} />
                        Continue with Google
                      </a>
                      <a href="#" className="tp-btn-white-lg w-100">
                        <img src="/assets/img/login/linkedin.png" alt="" className="mr-10" style={{width: '20px'}} />
                        Continue with LinkedIn
                      </a>
                    </div>
                    <div className="tp-login-from-bottom text-center">
                      <span>
                        Don't have an account? <Link href="/auth/register">Sign Up Free</Link>
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