'use client'

import { useEffect } from 'react'

export default function Home() {
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
                          <li style={{ marginBottom: '1px' }}><a href="/blog">Blog</a></li>
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
            <div className="tpoffcanvas__close-btn">
              <button className="close-btn"><i className="fal fa-times"></i></button>
            </div>
            <div className="tpoffcanvas__logo text-center">
              <a href="/">
                <img src="/assets/img/logo/mainlogo.svg" alt="KLYRR" style={{height: '35px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(109deg) brightness(100%) contrast(100%)'}} />
              </a>
            </div>
            <div className="mobile-menu"></div>
            <div className="tpoffcanvas__instagram text-center">
              <div className="tpoffcanvas__instagram-title">
                <h4>showcase</h4>
              </div>
              <a href="#"><img src="/assets/img/project/project-inner-4.jpg" alt="" /></a>
              <a href="#"><img src="/assets/img/project/project-inner-5.jpg" alt="" /></a>
              <a href="#"><img src="/assets/img/project/project-inner-6.jpg" alt="" /></a>
              <a href="#"><img src="/assets/img/project/project-inner-7.jpg" alt="" /></a>
            </div>
            <div className="tpoffcanvas__info text-center">
              <h4 className="offcanva-title">we are here</h4>
              <a href="#" target="_blank">
                <i className="fal fa-map-marker-alt"></i> India HQ<br />
                Serving global SaaS teams
              </a>
            </div>
            <div className="tpoffcanvas__social">
              <div className="social-icon text-center">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="body-overlay"></div>
      </header>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">

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
                        <h3 className="tp-hero-title-5 hero-text-anim-2" style={{fontSize: '3rem', animationDelay: '0.1s'}}>
                          <i><i className="child-2">What If Your <br /></i></i>
                          <i>
                            <i className="child-2">
                              Growth Has <span className="child-1 p-relative">Already 
                                <svg width="300" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 6C0 2.68629 2.68629 0 6 0H294C297.314 0 300 2.68629 300 6C300 9.31371 297.314 12 294 12H6C2.68629 12 0 9.31371 0 6Z" fill="#6865FF"/>
                                </svg>
                              </span> 
                              <br /> 
                            </i>
                          </i>
                          <i><i className="child-2"><span className="child-2">Flatlined</span> — And <br /></i></i>
                          <i><i className="child-2">You're the Last to Know?</i></i>
                        </h3>
                        <p className="hero-text-animate" style={{animationDelay: '0.5s'}}>
                          Leads "look fine." Metrics seem "okay." But CAC climbs, deals stall, and ghosting grows.<br />
                          <strong>KLYRR installs plug-and-play GTM engines</strong> that drive pipeline, conversions, and expansion — in <strong>days</strong>, not quarters.
                        </p>
                      </div>
                      <div className="tp-hero-five-btn-box d-flex align-items-center hero-btn-animate" style={{animationDelay: '0.7s'}}>
                        <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#"><i className="fal fa-exclamation-triangle"></i> Fix My Funnel</a>
                        <a className="tp-btn-grey mb-20" href="#"><i className="fal fa-search"></i> Join the Waitlist</a>
                      </div>
                      <div className="tp-hero-stats d-flex align-items-center hero-stats-animate" style={{animationDelay: '0.9s'}}>
                        <span className="mr-30"><i className="fal fa-check-circle"></i> 150+ SQLs in 90 days</span>
                        <span><i className="fal fa-check-circle"></i> $390K revenue lift</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-1 order-lg-0">
                    <div className="tp-hero-five-video-wrap">
                      <video className="tp-hero-video" autoPlay loop muted playsInline>
                        <source src="/assets/img/herovideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Integration Area - Original HTML Structure */}
            <div className="tp-intigration-area tp-intigration-five-space fix" style={{overflow:'visible'}}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-intigration-five-wrapper p-relative">
                      <div className="tp-intigration-five-section-box text-center">
                        <h3 className="tp-section-title-5 pb-10 text-black"><span>Featured</span> <br /> Across Global SaaS Teams</h3>
                        <p>KLYRR has been trusted by growing SaaS companies <br /> across the world to fix their GTM operations.</p>
                        <div className="tp-intigration-five-btn">
                          <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect" href="#">Explore All</a>
                        </div>
                      </div>
                      <div className="tp-intigration-five-circle-img-1 tp-zoom-thumb d-none d-lg-block">
                        <img src="/assets/img/feature/fea-circle-5-1.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-2 tp-zoom-thumb d-none d-md-block">
                        <img src="/assets/img/feature/fea-circle-5-2.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-3 tp-zoom-thumb d-none d-lg-block">
                        <img src="/assets/img/feature/fea-circle-5-3.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-4 tp-zoom-thumb d-none d-md-block">
                        <img src="/assets/img/feature/fea-circle-5-4.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-5 tp-zoom-thumb d-none d-md-block">
                        <img src="/assets/img/feature/fea-circle-5-5.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-6 tp-zoom-thumb d-none d-lg-block">
                        <img src="/assets/img/feature/fea-circle-5-6.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-7 tp-zoom-thumb d-none d-lg-block">
                        <img src="/assets/img/feature/fea-circle-5-7.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-8 tp-zoom-thumb d-none d-lg-block">
                        <img src="/assets/img/feature/fea-circle-5-8.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-9 tp-zoom-thumb d-none d-md-block">
                        <img src="/assets/img/feature/fea-circle-5-9.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-10 tp-zoom-thumb d-none d-md-block">
                        <img src="/assets/img/feature/fea-circle-5-10.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-11 tp-zoom-thumb">
                        <img src="/assets/img/feature/fea-circle-5-11.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-12 tp-zoom-thumb">
                        <img src="/assets/img/feature/fea-circle-5-12.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-13 tp-zoom-thumb">
                        <img src="/assets/img/feature/fea-circle-5-13.png" alt="" />
                      </div>
                      <div className="tp-intigration-five-circle-img-14 tp-zoom-thumb">
                        <img src="/assets/img/feature/fea-circle-5-14.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Wins That Compound */}
            <div className="tp-fun-fact-area tp-fun-fact-2 pt-120 pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-fun-fact-section-title text-center pb-60">
                      <h4 className="tp-fun-fact-title" style={{fontSize: '2rem', fontWeight: 'bold'}}>Wins That Compound Across SaaS Teams</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center" style={{paddingLeft: '70px'}}>
                      <h4>44<span>%</span></h4>
                      <p>Demo Close <br /> Rate</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                      <h4>390<span>K</span></h4>
                      <p>Expansion <br /> Revenue</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                      <h4>7<span> days</span></h4>
                      <p>First Demo <br /> Booked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area - Four Pillars */}
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
              <div className="container-fluid p-0">
                <div className="tp-service-five-bg" style={{backgroundImage: 'url(/assets/img/service/service-5-1-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6">
                    <div className="tp-service-five-section-box">
                      <span className="tp-section-subtitle-5">GTM Operating System</span>
                      <h3 className="tp-section-title-5 pb-15">
                        KLYRR is a <br /><span>GTM Operating</span> <br />
                        <span>System</span> — Not Another Agency  
                      </h3>
                      <p className="pb-20">Choose from 6 modular GTM systems — built to fix <br />
                        specific choke points.
                      </p>
                      <a className="tp-btn-yellow-lg text-black" href="#"><i className="fal fa-box"></i> Join the Waitlist</a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-0">
                      <div className="col-md-6">
                        <div className="tp-service-five-item z-index">
                          <div className="tp-services-five-item-bg">
                            <div className="inner"></div>
                          </div>
                          <div className="tp-service-five-wrapper">
                            <div className="tp-service-five-icon">
                              <img src="/assets/img/service/sv-icon-5-1.png" alt="" />
                            </div>
                            <div className="tp-service-five-content">
                              <h3 className="tp-service-five-title-sm"><a href="#"><i className="fal fa-search"></i> Diagnose <br />Fast</a></h3>
                              <p>Uncover where your funnel leaks — before burning more budget.</p>
                            </div>
                          </div>
                          <div className="tp-service-five-btn text-end">
                            <a href="#"><i className="far fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-service-five-item z-index">
                          <div className="tp-services-five-item-bg">
                            <div className="inner"></div>
                          </div>
                          <div className="tp-service-five-wrapper">
                            <div className="tp-service-five-icon">
                              <img src="/assets/img/service/sv-icon-5-2.png" alt="" />
                            </div>
                            <div className="tp-service-five-content">
                              <h3 className="tp-service-five-title-sm"><a href="#"><i className="fal fa-cog"></i> Plug In <br />Growth Engines</a></h3>
                              <p>Choose from 6 modular GTM systems — built to fix specific choke points.</p>
                            </div>
                          </div>
                          <div className="tp-service-five-btn text-end">
                            <a href="#"><i className="far fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-service-five-item z-index">
                          <div className="tp-services-five-item-bg">
                            <div className="inner"></div>
                          </div>
                          <div className="tp-service-five-wrapper">
                            <div className="tp-service-five-icon">
                              <img src="/assets/img/service/sv-icon-5-3.png" alt="" />
                            </div>
                            <div className="tp-service-five-content">
                              <h3 className="tp-service-five-title-sm"><a href="#"><i className="fal fa-brain"></i> Expert <br />Deployment</a></h3>
                              <p>We install everything: copy, workflows, automations, scoring — zero fluff.</p>
                            </div>
                          </div>
                          <div className="tp-service-five-btn text-end">
                            <a href="#"><i className="far fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-service-five-item z-index">
                          <div className="tp-services-five-item-bg">
                            <div className="inner"></div>
                          </div>
                          <div className="tp-service-five-wrapper">
                            <div className="tp-service-five-icon">
                              <img src="/assets/img/service/sv-icon-5-4.png" alt="" />
                            </div>
                            <div className="tp-service-five-content">
                              <h3 className="tp-service-five-title-sm"><a href="#"><i className="fal fa-rocket"></i> Results Without <br />Hiring</a></h3>
                              <p>No retainers. No headcount. Just outcomes — compounding from week one.</p>
                            </div>
                          </div>
                          <div className="tp-service-five-btn text-end">
                            <a href="#"><i className="far fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Area 1 - Plug-and-Play Growth Engines */}
            <div className="tp-plan-area tp-plan-space">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="tp-plan-img-box p-relative">
                      <div className="tp-plan-img-1">
                        <img src="/assets/img/plan/plan-1.png" alt="" />
                      </div> 
                      <div className="tp-plan-img-2 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-2.png" alt="" />
                      </div> 
                      <div className="tp-plan-img-3 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-3.png" alt="" />
                      </div> 
                      <div className="tp-plan-img-4">
                        <img src="/assets/img/plan/plan-4.png" alt="" />
                      </div> 
                      <div className="tp-plan-img-5">
                        <img src="/assets/img/plan/plan-5.png" alt="" />
                      </div> 
                      <div className="tp-plan-img-6 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-6.png" alt="" />
                      </div> 
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="tp-plan-section-box">
                      <div className="tp-plan-section-icon pb-30">
                        <img src="/assets/img/cta/cta-title-icon-1.png" alt="" />
                      </div>
                      <span className="tp-section-subtitle-5 text-black">GTM Systems</span>
                      <h3 className="tp-section-title-5 text-black pb-15"><span>Plug-and-Play</span><br />Growth Engines.</h3>
                      <p className=" mb-0 pb-30">Each engine fixes a common SaaS failure point — demo no-shows, <br />
                        low close rates, ghosted outbound, churn.
                      </p>
                      <div className="tp-plan-feature">
                        <ul>
                          <li><i className="far fa-check"></i>Install in Days</li>
                          <li><i className="far fa-check"></i>Zero Fluff Implementation</li>
                          <li><i className="far fa-check"></i>Compounding Results</li>
                        </ul>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Area 2 - Expert Deployment */}
            <div className="tp-plan-area tp-plan-2-space fix">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-5">
                    <div className="tp-plan-section-box">
                      <div className="tp-plan-section-icon pb-30">
                        <img src="/assets/img/cta/cta-title-icon-2.png" alt="" />
                      </div>
                      <span className="tp-section-subtitle-5 text-black">EXECUTION</span>
                      <h3 className="tp-section-title-5 text-black pb-25">
                        Expert <span>Deployment</span>, Zero Learning Curve
                      </h3>
                    </div> 
                    <div className="tp-custom-accordio-2">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-buttons collapsed " type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Funnel Diagnosis
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              KLYRR audits your entire funnel and exposes exact leaks — from ICP misfires to CRM bloat, before you burn more budget.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Engine Installation
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              We install everything: copy, workflows, automations, scoring — zero fluff. Our team builds, installs, and runs your engine with weekly sprints.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="tp-plan-2-img-box p-relative">
                      <div className="tp-plan-2-img-1">
                        <img src="/assets/img/plan/plan-1-1.png" alt="" />
                      </div> 
                      <div className="tp-plan-2-img-2 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-1-2.png" alt="" />
                      </div> 
                      <div className="tp-plan-2-img-3">
                        <img src="/assets/img/plan/plan-1-3.png" alt="" />
                      </div> 
                      <div className="tp-plan-2-img-4">
                        <img src="/assets/img/plan/plan-1-4.png" alt="" />
                      </div> 
                      <div className="tp-plan-2-img-5 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-1-5.png" alt="" />
                      </div> 
                      <div className="tp-plan-2-img-6 d-none d-sm-block">
                        <img src="/assets/img/plan/plan-1-6.png" alt="" />
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials - Original HTML Structure */}
            <div className="tp-testimonial-area pt-130 pb-130 fix" style={{backgroundImage: 'url(/assets/img/testimonial/testi-bg-5-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="container">
                <div className="row align-items-end tp-testimonial-five-section-space">
                  <div className="col-md-8">
                    <div className="tp-testimonial-five-section-box">
                      <span className="tp-section-subtitle-5">CLIENT SUCCESS</span>
                      <h3 className="tp-section-title-5">Real <span>Results</span></h3>
                    </div>  
                  </div>
                  <div className="col-md-4">
                    <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                      <div className="test-next">
                        <button><i className="far fa-arrow-left"></i></button>
                      </div>
                      <div className="test-prev">
                        <button><i className="far fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12">
                    <div className="tp-testimonial-five-slider-section">
                      <div className=" swiper-container testimonial-five-slider-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tp-testimonial-five-item">
                              <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                  <div className="tp-testimonial-five-avata">
                                    <img src="/assets/img/testimonial/testi-icon-5-4.png" alt="" />
                                  </div>
                                  <div className="tp-testimonial-five-author-info">
                                    <h4>COO</h4>
                                    <span>B2B CRM</span>
                                  </div>
                                </div>
                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                  <img src="/assets/img/testimonial/testi-logo-5-2.png" alt="" />
                                </div>
                              </div>
                              <div className="tp-testimonial-five-content">
                                <p>" This is really awesome. many small businessmen are
                                  suffering from this service in different platform and the
                                  lovers are always looking this kind of feature on
                                  their own website. "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tp-testimonial-five-item">
                              <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                  <div className="tp-testimonial-five-avata">
                                    <img src="/assets/img/testimonial/testi-icon-5-2.png" alt="" />
                                  </div>
                                  <div className="tp-testimonial-five-author-info">
                                    <h4>Head of Growth</h4>
                                    <span>Fintech</span>
                                  </div>
                                </div>
                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                  <img src="/assets/img/testimonial/testi-logo-5-1.png" alt="" />
                                </div>
                              </div>
                              <div className="tp-testimonial-five-content">
                                <p>" This is really awesome. many small businessmen are
                                  suffering from this service in different platform and the
                                  lovers are always looking this kind of feature on
                                  their own website. "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tp-testimonial-five-item">
                              <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                  <div className="tp-testimonial-five-avata">
                                    <img src="/assets/img/testimonial/testi-icon-5-3.png" alt="" />
                                  </div>
                                  <div className="tp-testimonial-five-author-info">
                                    <h4>Gary M. Adams</h4>
                                    <span>Community Organiser</span>
                                  </div>
                                </div>
                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                  <img src="/assets/img/testimonial/testi-logo-5-3.png" alt="" />
                                </div>
                              </div>
                              <div className="tp-testimonial-five-content">
                                <p>" This is really awesome. many small businessmen are
                                  suffering from this service in different platform and the
                                  lovers are always looking this kind of feature on
                                  their own website. "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tp-testimonial-five-item">
                              <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                  <div className="tp-testimonial-five-avata">
                                    <img src="/assets/img/testimonial/testi-icon-5-4.png" alt="" />
                                  </div>
                                  <div className="tp-testimonial-five-author-info">
                                    <h4>Edward G. Hall</h4>
                                    <span>Community Organiser</span>
                                  </div>
                                </div>
                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                  <img src="/assets/img/testimonial/testi-logo-5-3.png" alt="" />
                                </div>
                              </div>
                              <div className="tp-testimonial-five-content">
                                <p>" This is really awesome. many small businessmen are
                                  suffering from this service in different platform and the
                                  lovers are always looking this kind of feature on
                                  their own website. "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tp-testimonial-five-item">
                              <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                  <div className="tp-testimonial-five-avata">
                                    <img src="/assets/img/testimonial/testi-icon-5-1.png" alt="" />
                                  </div>
                                  <div className="tp-testimonial-five-author-info">
                                    <h4>Erma P. Brown</h4>
                                    <span>Community Organiser</span>
                                  </div>
                                </div>
                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                  <img src="/assets/img/testimonial/testi-logo-5-2.png" alt="" />
                                </div>
                              </div>
                              <div className="tp-testimonial-five-content">
                                <p>" This is really awesome. many small businessmen are
                                  suffering from this service in different platform and the
                                  lovers are always looking this kind of feature on
                                  their own website. "
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tp-scrollbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Area - Original HTML Structure */}
            <div className="tp-feature-area grey-bg-3 pt-120 pb-110">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-feature-five-section-box text-center mb-40">
                      <h3 className="tp-section-title-5 text-black">Modular <span>GTM Engines</span></h3>
                      <p>Take your SaaS business to the next level with <span>6</span> modular
                        GTM systems <br />
                        built to fix specific growth bottlenecks</p>
                    </div>
                  </div>
                </div>
                <div className="row gx-0 tp-feature-five-wrapper-main">
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="tp-feature-five-wrapper">
                      <div className="tp-feature-five-item tp-feature-five-item-1 text-center z-index">
                        <div className="tp-feature-five-icon p-relative">
                          <img src="/assets/img/feature/fea-icon-5-1.png" alt="" />
                          <div className="tp-feature-five-shape-color tp-feature-five-shape-color-1"></div>
                        </div>
                        <div className="tp-feature-five-content">
                          <h4 className="tp-feature-five-title-sm">Demo No-Show <br /> Recovery</h4>
                          <p>Automated sequences that turn <br />
                            cold prospects into warm demos</p>
                        </div>
                        <div className="tp-feature-five-btn">
                          <a className="tp-btn-blue" href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="tp-feature-five-wrapper">
                      <div className="tp-feature-five-item tp-feature-five-item-2 text-center z-index">
                        <div className="tp-feature-five-icon p-relative">
                          <img src="/assets/img/feature/fea-icon-5-2.png" alt="" />
                          <div className="tp-feature-five-shape-color tp-feature-five-shape-color-2"></div>
                        </div>
                        <div className="tp-feature-five-content">
                          <h4 className="tp-feature-five-title-sm">Outbound <br /> Revival Engine</h4>
                          <p>Resurrect dead prospects with <br />
                            proven re-engagement frameworks</p>
                        </div>
                        <div className="tp-feature-five-btn">
                          <a className="tp-btn-blue" href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="tp-feature-five-wrapper">
                      <div className="tp-feature-five-item tp-feature-five-item-3 text-center z-index">
                        <div className="tp-feature-five-icon p-relative">
                          <img src="/assets/img/feature/fea-icon-5-3.png" alt="" />
                          <div className="tp-feature-five-shape-color tp-feature-five-shape-color-3"></div>
                        </div>
                        <div className="tp-feature-five-content">
                          <h4 className="tp-feature-five-title-sm">Pipeline <br /> Velocity Boost</h4>
                          <p>Accelerate deal progression with <br />
                            proven conversion workflows</p>
                        </div>
                        <div className="tp-feature-five-btn">
                          <a className="tp-btn-blue" href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="tp-feature-five-wrapper">
                      <div className="tp-feature-five-item tp-feature-five-item-4 text-center z-index">
                        <div className="tp-feature-five-icon p-relative">
                          <img src="/assets/img/feature/fea-icon-5-4.png" alt="" />
                          <div className="tp-feature-five-shape-color tp-feature-five-shape-color-4"></div>
                        </div>
                        <div className="tp-feature-five-content">
                          <h4 className="tp-feature-five-title-sm">Expansion <br /> Revenue Engine</h4>
                          <p>Systematic upsell campaigns that <br />
                            compound customer value</p>
                        </div>
                        <div className="tp-feature-five-btn">
                          <a className="tp-btn-blue" href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tp-feature-five-link text-center">
                      <span>Check out all of our <a href="#">GTM Systems</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Area */}
            <div className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: 'url(/assets/img/cta/cta-bg-5-1.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '100px'}}>
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
                      <span className="tp-section-subtitle-5">All-in-one GTM Operating System</span>
                      <h3 className="tp-section-title-5 pb-30">Supercharge Your Growing <br /> <span>SaaS Business</span> </h3>
                      <div className="tp-cta-five-btn">
                        <a className="tp-btn-yellow-lg circle-effect" href="#">Join the Waitlist</a>
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
    </>
  );
}