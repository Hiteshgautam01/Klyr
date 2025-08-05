'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function ZeroPipelinePage() {
  return (
    <ProductPageLayout>

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
                        <ul className="submenu">
                          <li><a href="/products/zero-to-pipeline">Zero-to-Pipeline Engine</a></li>
                          <li><a href="/products/demo-conversion">Demo Conversion Killshot</a></li>
                          <li><a href="/products/inbound-magnet">Inbound Magnet Engine</a></li>
                          <li><a href="/products/founder-signal">Founder Signal Engine</a></li>
                          <li><a href="/products/land-expand">Land & Expand Engine</a></li>
                          <li><a href="/products/sales-transition">Sales Transition System</a></li>
                        </ul>
                      </li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/pricing">Pricing</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <a className="tp-btn-yellow inner-color tp-btn-hover alt-color-black d-none d-md-inline-block" href="#">
                      <span className="white-text">🧠 Free GTM Diagnosis</span>
                      <b></b>
                    </a>
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
                📍 India HQ<br />
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

            {/* Breadcrumb Section */}
            <section className="breadcrumb__area include-bg pt-200 pb-50" style={{backgroundColor: '#F8F8FF'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="breadcrumb__content p-relative z-index-1">
                      <h3 className="breadcrumb__title">Zero-to-Pipeline Engine</h3>
                      <div className="breadcrumb__list">
                        <span><a href="/">Home</a></span>
                        <span>Zero-to-Pipeline Engine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section className="hero__area hero-height d-flex align-items-center p-relative fix">
              <div className="hero__shape">
                <img className="hero-shape-1" src="/assets/img/hero/hero-shape-1.png" alt="shape" />
                <img className="hero-shape-2" src="/assets/img/hero/hero-shape-2.png" alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="hero__content">
                      <span className="hero__sub-title">🔥 Zero-to-Pipeline Engine</span>
                      <h1 className="hero__title">You Don't Need More Leads.<br />You Need Pipeline That <span className="hero__title-sm">Converts.</span></h1>
                      <p>You're not short on activity — you're short on systems that deliver results. KLYRR installs a zero-to-pipeline engine that books 15–20 qualified demos in 30–45 days.</p>
                      <div className="hero__btn">
                        <a href="#contact" className="btn mr-20">🧠 Book Free Funnel Diagnosis</a>
                        <a href="#results" className="btn btn-border-white">📩 See Real Campaigns</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="hero__thumb p-relative">
                      <img src="/assets/img/hero/hero-5-1.png" alt="Pipeline Engine" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="about__area pt-120 pb-120" style={{backgroundColor: '#F8F8FF'}}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="about__thumb p-relative">
                      <img src="/assets/img/about/about-5.png" alt="Problem illustration" />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="about__content">
                      <div className="section__title-wrapper mb-20">
                        <span className="section__title-pre">❌ The Problem You're Tolerating</span>
                        <h2 className="section__title">You think it's a volume issue.<br />It's a <span className="section__title-sm">system failure.</span></h2>
                      </div>
                      <div className="about__text">
                        <div className="about__list mb-40">
                          <ul>
                            <li><i className="fal fa-times text-danger"></i>SDRs burn out chasing the wrong ICPs</li>
                            <li><i className="fal fa-times text-danger"></i>Founders still doing manual follow-ups</li>
                            <li><i className="fal fa-times text-danger"></i>Sequences sound "smart," but get ghosted</li>
                            <li><i className="fal fa-times text-danger"></i>Agencies pitch "awareness," not conversions</li>
                            <li><i className="fal fa-times text-danger"></i>You're leaking time, trust, and cash — daily</li>
                          </ul>
                        </div>
                        <p className="highlight-text">You're not running outbound. Outbound is running you.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
              <div className="container-fluid p-0">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6">
                    <div className="tp-service-five-section-box">
                      <span className="tp-section-subtitle-5">GTM Growth Stack</span>
                      <h3 className="tp-section-title-5 pb-15">
                        ✅ What the Zero-to-Pipeline <br /><span>Engine Actually Does</span>
                      </h3>
                      <p className="pb-20">A GTM Growth Stack — Installed, Not Consulted<br />
                        We don't sell outreach. We install the system that delivers results across cold, warm, and inbound.
                      </p>
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
                              <h3 className="tp-service-five-title-sm">🔍 ICP Mapping + <br />Data Enrichment</h3>
                              <p>Built with Clay, Apollo, Groq — 100% precision targeting</p>
                            </div>
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
                              <h3 className="tp-service-five-title-sm">📬 Cold Outreach <br />System</h3>
                              <p>Persona-specific email & LinkedIn flows that create urgency, not annoyance</p>
                            </div>
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
                              <h3 className="tp-service-five-title-sm">🤖 Reply Intelligence <br />Bot</h3>
                              <p>AI replies instantly to objections, FAQs, CTAs — no lead goes cold</p>
                            </div>
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
                              <h3 className="tp-service-five-title-sm">🧲 Inbound <br />Amplification</h3>
                              <p>CRO-tuned landing pages + proof-rich content built to convert silent lurkers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="tp-price-area pt-120 pb-120 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-price-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black">🧩 Choose Your <span>Engine Intensity</span></h3>
                      <p>💡 This isn't deliverables. It's designed outcomes.<br />
                      Remove one layer — and you remove compound results.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-price-item p-relative mb-40">
                      <div className="tp-price-shape">
                        <img src="/assets/img/price/price-shape.png" alt="" />
                      </div>
                      <div className="tp-price-header">
                        <h4>🚀 Starter</h4>
                        <p>Early-stage teams launching outbound</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>15–20 demos in 30–45 days</li>
                            <li>ICP Mapping & Data Enrichment</li>
                            <li>Cold Outreach System</li>
                            <li>Basic Reply Intelligence</li>
                          </ul>
                        </div>
                      </div>
                      <div className="tp-price-btn">
                        <a className="tp-btn-price" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-price-item active p-relative mb-40">
                      <div className="tp-price-shape">
                        <img src="/assets/img/price/price-shape.png" alt="" />
                      </div>
                      <div className="tp-price-header">
                        <h4>🔁 Conversion</h4>
                        <p>Founders scaling but still too involved</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Async + inbound + CRO</li>
                            <li>Everything in Starter</li>
                            <li>Inbound Amplification</li>
                            <li>Advanced Reply Intelligence</li>
                            <li>Weekly Signal-Based Optimization</li>
                          </ul>
                        </div>
                      </div>
                      <div className="tp-price-btn">
                        <a className="tp-btn-price" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-price-item p-relative mb-40">
                      <div className="tp-price-shape">
                        <img src="/assets/img/price/price-shape.png" alt="" />
                      </div>
                      <div className="tp-price-header">
                        <h4>💸 Revenue</h4>
                        <p>SaaS teams offloading GTM to scale fast</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Fully autonomous pipeline machine</li>
                            <li>Everything in Conversion</li>
                            <li>Complete GTM Automation</li>
                            <li>24/7 Pipeline Monitoring</li>
                            <li>Dedicated Success Manager</li>
                          </ul>
                        </div>
                      </div>
                      <div className="tp-price-btn">
                        <a className="tp-btn-price" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who It's For Section */}
            <section className="about__area pt-120 pb-120">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="about__content">
                      <div className="section__title-wrapper mb-20">
                        <span className="section__title-pre">🎯 Who It's For</span>
                        <h2 className="section__title">It's not you.<br />It's the system you <span className="section__title-sm">haven't installed yet.</span></h2>
                      </div>
                      <div className="about__text">
                        <div className="about__list mb-40">
                          <ul>
                            <li><i className="fal fa-check text-success"></i>You've wasted months on SDRs, agencies, or internal hacks</li>
                            <li><i className="fal fa-check text-success"></i>You're sending 100s of emails and getting silence</li>
                            <li><i className="fal fa-check text-success"></i>You're still jumping on cold calls to keep the funnel alive</li>
                            <li><i className="fal fa-check text-success"></i>You feel like you're working hard — but growth isn't compounding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="about__thumb p-relative">
                      <img src="/assets/img/about/about-4.png" alt="Target audience" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <div className="tp-fun-fact-area tp-fun-fact-2 pt-100 pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-fun-fact-section-title text-center pb-60">
                      <h4 className="tp-fun-fact-title">📊 Real Results</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center">
                      <h4>31<span></span></h4>
                      <p>📈 Demos in 30 days <br /> from just 1 sequence</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                      <h4>82<span>K</span></h4>
                      <p>💰 Pipeline from "non-buyers" <br /> reactivated by AI</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                      <h4>3.4<span>x</span></h4>
                      <p>💡 Close rate increase <br /> after removing founder from calls</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-4 tp-fun-fact-space-4 d-flex align-items-center">
                      <h4>44<span>%</span></h4>
                      <p>🔁 Reply rate using pain-first, <br /> pattern-breaker messaging</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="tp-plan-area tp-plan-space">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-plan-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black">⚙️ How It Works — <span>3-Step Snapshot</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span>🩺</span>
                        <h4>1. Funnel Diagnosis</h4>
                      </div>
                      <p>Audit current GTM leaks, assets, ICP, and reply data</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span>🧱</span>
                        <h4>2. Engine Install</h4>
                      </div>
                      <p>Positioning, targeting, outbound, reply automation — done-for-you</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span>📈</span>
                        <h4>3. Pipeline Compounds</h4>
                      </div>
                      <p>Close rates increase, CAC drops, founder effort disappears</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" data-background="/assets/img/cta/cta-bg-5-1.png">
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
                      <span className="tp-section-subtitle-5">🔚 Final CTA</span>
                      <h3 className="tp-section-title-5 pb-30">How many more weeks will you spend <br /><span>guessing why cold leads don't convert?</span></h3>
                      <p className="pb-30">You don't need another tool. You need a system.<br />
                      This one installs in weeks, runs on signal — and doesn't break.</p>
                      <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                        <a className="tp-btn-blue-lg circle-effect" href="#">🧠 Book Your Diagnosis</a>
                        <a className="tp-btn-yellow-lg circle-effect" href="#">📩 Ask for a Campaign Breakdown</a>
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
                          <p>KLYRR — Modular GTM Systems for SaaS Growth<br />📍 India HQ. Serving global SaaS teams.</p>
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
                            <button>→</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </ProductPageLayout>
  );
}