'use client'

import { useEffect } from 'react'
import ScriptLoader from '@/components/ScriptLoader'

export default function ZeroToPipelinePage() {
  useEffect(() => {
    // Immediately hide preloader
    const preloader = document.getElementById('preloader')
    if (preloader) {
      preloader.style.display = 'none'
    }

    // Wait for scripts to be loaded by ScriptLoader
    const handleScriptsLoaded = () => {
      console.log('All scripts loaded')
      // Initialize any specific components that need manual initialization
      if (typeof window !== 'undefined' && (window as any).WOW) {
        new (window as any).WOW().init()
      }
    }

    window.addEventListener('scriptsLoaded', handleScriptsLoaded)

    return () => {
      window.removeEventListener('scriptsLoaded', handleScriptsLoaded)
    }
  }, [])

  return (
    <>
      <ScriptLoader />
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Back to top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="far fa-angle-double-up"></i>
      </button>

      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner">
        <a href="#"><i className="fas fa-play"></i></a>
      </div>

      {/* Header */}
      <header className="tp-header-height">
        <div id="header-sticky" className="header-bottom__area header-bottom__plr-5 header-bottom__transparent z-index-3 white-bg">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <a href="/"><img src="/assets/img/logo/mainlogo.svg" alt="KLYRR" style={{height: '40px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(4%) sepia(97%) saturate(7486%) hue-rotate(240deg) brightness(93%) contrast(116%)'}} /></a>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 col-lg-8 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-5 text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="#">GTM Engines</a>
                        <ul className="submenu" style={{ padding: '2px 0px' }}>
                          <li style={{ marginBottom: '1px' }}><a href="/products/zero-to-pipeline">Zero-to-Pipeline Engine</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/products/demo-conversion">Demo Conversion Killshot</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/products/inbound-magnet">Inbound Magnet Engine</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/products/founder-signal">Founder Signal Engine</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/products/land-expand">Land & Expand Engine</a></li>
                          <li style={{ marginBottom: '0px' }}><a href="/products/sales-transition">Sales Transition System</a></li>
                        </ul>
                      </li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/pricing">Pricing</a></li>
                      <li><a href="/resources">Resources</a>
                      <ul className="submenu" style={{ padding: '2px 0px' }}>
                          <li style={{ marginBottom: '1px' }}><a href="/resources/blog">Blog</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/resources/case-studies">Case Studies</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/resources/ebooks">Ebooks</a></li>
                          <li style={{ marginBottom: '1px' }}><a href="/resources/videos">Videos</a></li>
                        </ul>
                      </li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <a className="header-bottom__bar tp-menu-bar d-lg-none" href="javascript:void(0)"><i className="fal fa-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="tpoffcanvas-area">
          <div className="tpoffcanvas">
            <div className="tpoffcanvas__header d-flex align-items-center justify-content-between">
              <div className="tpoffcanvas__logo">
                <a href="/"><img src="/assets/img/logo/mainlogo.svg" alt="KLYRR" style={{height: '40px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(4%) sepia(97%) saturate(7486%) hue-rotate(240deg) brightness(93%) contrast(116%)'}} /></a>
              </div>
              <div className="tpoffcanvas__close">
                <button className="close-btn"><i className="fal fa-times"></i></button>
              </div>
            </div>
            <div className="tpoffcanvas__content">
              <div className="mobile-menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
        <div className="body-overlay"></div>
      </header>

      <div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* Hero Section */}
              <div className="tp-hero-area tp-hero-five__ptb-5 p-relative grey-bg-2 fix">
                <div className="tp-hero-five__shape-2">
                  <img src="/assets/img/hero/hero-circle-5-1.png" alt="" />
                </div>
                <div className="tp-hero-five__shape-3">
                  <img src="/assets/img/hero/hero-circle-5-2.png" alt="" />
                </div>
                <div className="tp-hero-five__shape-4">
                  <img src="/assets/img/hero/hero-circle-5-3.png" alt="" />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 order-2 order-lg-0">
                      <div className="tp-hero-five-section-wrap">
                        <div className="tp-hero-five-section-box z-index">
                          <span className="tp-hero-subtitle-5 mb-20"><i className="fal fa-fire"></i> Zero-to-Pipeline Engine</span>
                            <h1 className="tp-hero-title-5 hero-text-anim-2" style={{fontSize: '3rem', animationDelay: '0.2s'}}>
                            <i><i className="child-2">You Don't Need More Leads. <br /></i></i>
                            <i><i className="child-2">You Need Pipeline That <span className="child-1 p-relative">Converts</span></i></i>
                          </h1>
                          <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s" style={{visibility: 'visible', opacity: '1'}}>
                            You're not short on activity — you're short on systems that deliver results. KLYRR installs a zero-to-pipeline engine that books 15–20 qualified demos in 30–45 days.
                          </p>
                        </div>
                        <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s" style={{visibility: 'visible', opacity: '1'}}>
                          <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#contact">
                            <span><i className="fal fa-brain"></i> Book Free Funnel Diagnosis</span>
                            <b></b>
                          </a>
                          <a className="tp-btn-grey mb-20" href="#results">
                            <span><i className="fal fa-envelope"></i> See Real Campaigns</span>
                            <b></b>
                          </a>
                        </div>
                        <div className="tp-hero-stats d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s" style={{visibility: 'visible', opacity: '1'}}>
                          <span className="mr-30"><i className="fal fa-check-circle"></i> 150+ SQLs in 90 days</span>
                          <span><i className="fal fa-check-circle"></i> $390K revenue lift</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                      <div className="tp-hero-five-2-thumb-main p-relative">
                        <div className="tp-hero-five-2-thumb">
                          <img className="tp-hero-five-2-thumb-inner" src="/assets/img/hero/hero-5-1.png" alt="" />
                        </div>
                        <div className="tp-hero-five-2-sub-img-1 d-none d-md-block">
                          <img src="/assets/img/hero/home-shape-1-1.png" alt="" />
                        </div>
                        <div className="tp-hero-five-2-sub-img-2 d-none d-md-block">
                          <img src="/assets/img/hero/home-shape-1-2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
               <section className="tp-about-area pb-95 pt-60">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-thumb-wrapper p-relative">
                        <div className="tp-about-thumb m-img">
                          <img src="/assets/img/about/about-5.png" alt="Problem illustration" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-wrapper pl-80">
                        <div className="tp-section-box tp-section-box-2 p-relative">
                          <span className="tp-section-subtitle-5 d-inline-block"><i className="fal fa-times-circle"></i> The Problem You're Tolerating</span>
                           <h2 className="tp-section-title-5 mb-30" style={{color: '#1a1a1a', fontWeight: '700', lineHeight: '1.2'}}>
                             You think it's a volume issue.<br />It's a <span style={{color: '#007bff', fontWeight: '800'}}>system failure.</span>
                          </h2>
                        </div>
                        <div className="tp-about-list mb-40">
                          <ul>
                            <li><i className="fal fa-times text-danger"></i>SDRs burn out chasing the wrong ICPs</li>
                            <li><i className="fal fa-times text-danger"></i>Founders still doing manual follow-ups</li>
                            <li><i className="fal fa-times text-danger"></i>Sequences sound "smart," but get ghosted</li>
                            <li><i className="fal fa-times text-danger"></i>Agencies pitch "awareness," not conversions</li>
                            <li><i className="fal fa-times text-danger"></i>You're leaking time, trust, and cash — daily</li>
                          </ul>
                        </div>
                        <p><strong>You're not running outbound. Outbound is running you.</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
                <div className="container-fluid p-0">
                   <div className="tp-service-five-bg" style={{backgroundImage: 'url(/assets/img/service/service-5-1-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                       <div className="tp-service-five-section-box">
                         <span className="tp-section-subtitle-5">GTM Growth Stack</span>
                        <h3 className="tp-section-title-5 pb-15">
                           What the Zero-to-Pipeline <br /><span>Engine Actually Does</span>
                        </h3>
                        <p className="pb-20">A GTM Growth Stack — Installed, Not Consulted<br />
                         This isn't advice or training — it's a fully built system that books demos.</p>
                         <a className="tp-btn-yellow-lg text-black" href="#contact"><i className="fal fa-box"></i> Get Started</a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-service-five-bg" style={{backgroundImage: 'url(/assets/img/service/service-5-1-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Items */}
               <section className="tp-service-area p-relative pb-120 pt-120 grey-bg-2">
                <div className="container">
                  <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-1.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 1: Audience Research & ICP Maps</a>
                          </h3>
                          <p>Signal-based ICPs, not spray-and-pray lists</p>
                        </div>
                      </div>
                    </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-2.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 2: Messaging & Asset Creation</a>
                          </h3>
                          <p>Value hooks that earn replies, not eye-rolls</p>
                        </div>
                      </div>
                    </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                            <img src="/assets/img/service/sv-icon-5-2.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 3: Multi-Channel Activation</a>
                          </h3>
                          <p>Omnichannel sequences that compound impact</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                            <img src="/assets/img/service/sv-icon-5-3.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 4: CRM Orchestration</a>
                          </h3>
                          <p>Pipeline tracking that surfaces insights, not just activity</p>
                        </div>
                      </div>
                    </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-1.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 5: Optimization Loops</a>
                          </h3>
                          <p>Real-time iteration based on what's working</p>
                        </div>
                      </div>
                    </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-2.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 6: Handoff Systems</a>
                          </h3>
                          <p>Warm transfers that convert, not confuse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Results Section */}
              <section id="results" className="tp-counter-area pt-120 pb-120">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-50">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#007bff', fontWeight: '600'}}><i className="fal fa-chart-bar"></i> Real Results for SaaS Teams</span>
                        <h2 className="tp-section-title-5" style={{color: '#1a1a1a', fontWeight: '700'}}>This is how you scale without <span style={{color: '#007bff', fontWeight: '800'}}>scaling headcount</span></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s" style={{visibility: 'visible', opacity: '1'}}>
                        <h3 className="tp-counter-number" style={{color: '#007bff', fontWeight: '800'}}>150+</h3>
                        <p style={{color: '#333333'}}>SQLs generated in 90 days</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s" style={{visibility: 'visible', opacity: '1'}}>
                        <h3 className="tp-counter-number" style={{color: '#007bff', fontWeight: '800'}}>44%</h3>
                        <p style={{color: '#333333'}}>average demo show rate</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s" style={{visibility: 'visible', opacity: '1'}}>
                        <h3 className="tp-counter-number" style={{color: '#007bff', fontWeight: '800'}}>$390K</h3>
                        <p style={{color: '#333333'}}>average pipeline created</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s" style={{visibility: 'visible', opacity: '1'}}>
                        <h3 className="tp-counter-number" style={{color: '#007bff', fontWeight: '800'}}>7</h3>
                        <p style={{color: '#333333'}}>days to first booked demo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who It's For Section */}
              <section className="tp-about-area pb-120 pt-120 grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s" style={{visibility: 'visible', opacity: '1'}}>
                      <div className="tp-about-wrapper pr-80">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-30">
                          <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#007bff', fontWeight: '600'}}><i className="fal fa-puzzle-piece"></i> Is This For You?</span>
                          <h2 className="tp-section-title-5" style={{color: '#1a1a1a', fontWeight: '700'}}>
                            Founders who say "we tried outbound" <br />but only did <span style={{color: '#007bff', fontWeight: '800'}}>half the job</span>
                          </h2>
                        </div>
                        <div className="tp-about-list mb-40">
                          <ul>
                            <li style={{color: '#333333'}}><i className="fal fa-check text-success"></i>Pre-seed to Series A ($50K+ ACVs)</li>
                            <li style={{color: '#333333'}}><i className="fal fa-check text-success"></i>Selling to technical/enterprise ICPs</li>
                            <li style={{color: '#333333'}}><i className="fal fa-check text-success"></i>Need predictable demos, not "brand awareness"</li>
                            <li style={{color: '#333333'}}><i className="fal fa-check text-success"></i>Have product-market fit but lack GTM fit</li>
                            <li style={{color: '#333333'}}><i className="fal fa-check text-success"></i>Want to fix this once, not every quarter</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s" style={{visibility: 'visible', opacity: '1'}}>
                      <div className="tp-about-thumb-wrapper p-relative">
                        <div className="tp-about-thumb m-img">
                          <img src="/assets/img/about/about-4-2.png" alt="Who It's For" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
                             <div id="contact" className="tp-cta-area tp-cta-five-bg p-relative" style={{paddingTop: '80px', paddingBottom: '80px', marginTop: '30px', marginBottom: '30px'}}>
                <div className="tp-cta-five__bg" style={{backgroundImage: 'url(/assets/img/cta/cta-bg-5-1.png)'}}></div>
                <div className="tp-cta-five-shape-1 d-none d-md-block">
                  <img src="/assets/img/cta/cta-shape-5-1.png" alt="" />
                </div> 
                <div className="tp-cta-five-shape-2 d-none d-md-block">
                  <img src="/assets/img/cta/cta-shape-5-2.png" alt="" />
                </div> 
                <div className="container-fluid g-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="tp-cta-five-section-box text-center">
                        <span className="tp-section-subtitle-5"><i className="fal fa-bomb"></i> Your GTM is Broken — But It's Fixable</span>
                        <h3 className="tp-section-title-5 pb-30">Leads vanish. SDRs quit. <br /><span>Founders stay stuck selling.</span></h3>
                        <p className="pb-30">
                          KLYRR installs the exact engine that generates 150+ SQLs and $390K+ in pipeline — in 90 days.
                        </p>
                        <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                          <a className="tp-btn-blue-lg circle-effect" href="/contact"><i className="fal fa-brain"></i> Get Your Free Diagnosis</a>
                          <a className="tp-btn-yellow-lg circle-effect" href="/contact"><i className="fal fa-chart-line"></i> See the Full Engine</a>
                          <a className="tp-btn-grey circle-effect" href="/pricing"><i className="fal fa-cog"></i> Compare Solutions</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer>
              <div className="tp-footer__pl-pr">
                <div className="tp-footer__area tp-footer__tp-border-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                        <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-1">
                          <div className="tp-footer__logo mb-25">
                            <a href="/">
                              <img src="/assets/img/logo/mainlogo.svg" alt="KLYRR" style={{height: '45px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(4%) sepia(97%) saturate(7486%) hue-rotate(240deg) brightness(93%) contrast(116%)'}} />
                            </a>
                          </div>
                          <div className="tp-footer__contact-info">
                            <p>KLYRR — Modular GTM Systems for SaaS Growth<br /><i className="fal fa-map-marker-alt"></i> India HQ. Serving global SaaS teams.</p>
                            <div className="tp-footer__contact-mail">
                              <span><i className="fal fa-mailbox"></i> contact@klyrr.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                        <div className="tp-footer__widget footer-widget-3 footer-col-3-2">
                          <h4 className="tp-footer__widget-title">GTM Engines</h4>
                          <div className="tp-footer__content">
                            <ul>
                              <li><a href="/products/zero-to-pipeline">Zero-to-Pipeline Engine</a></li>
                              <li><a href="/products/demo-conversion">Demo Conversion Killshot</a></li>
                              <li><a href="/products/inbound-magnet">Inbound Magnet Engine</a></li>
                              <li><a href="/products/founder-signal">Founder Signal Engine</a></li>
                              <li><a href="/products/land-expand">Land & Expand Engine</a></li>
                              <li><a href="/products/sales-transition">Sales Transition System</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-6 pb-30">
                        <div className="tp-footer__widget footer-widget-3 footer-col-3-3">
                          <h4 className="tp-footer__widget-title">Company</h4>
                          <div className="tp-footer__content">
                            <ul>
                              <li><a href="/about">About</a></li>
                              <li><a href="/pricing">Pricing</a></li>
                              <li><a href="/contact">Contact</a></li>
                              <li><a href="#"><i className="fal fa-scroll"></i> Privacy Policy</a></li>
                              <li><a href="#"><i className="fal fa-file-alt"></i> Terms of Service</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 pb-30">
                        <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                          <h4 className="tp-footer__widget-title">Newsletter</h4>
                          <p>Join 1,000+ founders reading GTM playbooks that actually convert.</p>
                          <div className="tp-footer__input mb-35 p-relative">
                            <form action="#">
                              <input type="text" placeholder="Business email address" />
                              <button>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.00098 7H13.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </button>
                            </form>
                          </div>
                          <div className="tp-footer__social-3">
                            <h4>Social media</h4>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-copyright__text tp-copyright__text-3 text-center">
                          <span>Full Copyright & Design By <a href="#">KLYRR</a> – 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}