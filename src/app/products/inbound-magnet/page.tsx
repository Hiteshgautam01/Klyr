'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function InboundMagnetPage() {
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
            <div className="tp-hero-area tp-hero-five__ptb-5 p-relative grey-bg-2 fix" style={{paddingBottom: '70px !important'}}>
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
                  <div className="col-xl-8 col-lg-8">
                    <div className="tp-hero-five-section-wrap">
                      <div className="tp-hero-five-section-box z-index">
                        <h1 className="tp-hero-title-5 hero-text-anim-2" style={{fontSize: '3rem', animationDelay: '0.2s'}}>
                          <i><i className="child-2">Most Inbound Funnels <span className="child-1 p-relative">Leak</span>. <br /></i></i>
                          <i><i className="child-2">You Just <span className="child-2">Don't See It</span></i></i>
                        </h1>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                          <strong>KLYRR installs a compounding inbound engine</strong> that captures, qualifies, and converts high-intent traffic — turning visitors into booked meetings, not just MQLs.
                        </p>
                      </div>
                      <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                        <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#"><i className="fal fa-brain"></i> Run Free Inbound Audit</a>
                        <a className="tp-btn-grey mb-20" href="#"><i className="fal fa-chart-line"></i> See the Full Engine</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Section */}
            <div className="tp-about-area pt-60 pb-60 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-about-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-times-circle"></i> The Problem <span>You're Tolerating</span></h3>
                      <p>Your traffic looks fine. Content? Decent. But still:</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-bounce"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Visitors bounce</h4>
                        <p>Your traffic arrives but doesn't stick around long enough to convert.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-form"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Demo forms drop off</h4>
                        <p>People start your forms but abandon them before completing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-nurture"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Nurture? Almost non-existent</h4>
                        <p>Leads fall into a black hole with no systematic follow-up.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-attribution"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>No real attribution</h4>
                        <p>You can't tell what's actually driving conversions and revenue.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-silent"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Content → silent funnel</h4>
                        <p>Your content gets views but doesn't drive meaningful engagement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-leak"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>You're bleeding revenue from silent friction</h4>
                        <p>If it's not engineered, it's just noise.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
              <div className="container-fluid p-0">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6">
                    <div className="tp-service-five-section-box">
                      <span className="tp-section-subtitle-5">Revenue Infrastructure</span>
                      <h3 className="tp-section-title-5 pb-15">
                        <i className="fal fa-check-circle"></i> What the Inbound Magnet <br /><span>Engine Does</span>
                      </h3>
                      <p className="pb-20">This isn't lead gen. It's revenue infrastructure — installed.<br />
                        We build personalized, AI-powered inbound systems that convert real buyer intent into sales pipeline.
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> Inbound Audit</h3>
                              <p>Diagnose site, forms, CTAs, and drop-offs</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> Conversion Flows</h3>
                              <p>Calendar workflows that actually book demos</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> Email Nurtures</h3>
                              <p>Triggered journeys post-signup and post-demo</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> Lead Magnet</h3>
                              <p>Built to convert (checklist, guide, or calculator)</p>
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
                              <img src="/assets/img/service/sv-icon-5-1.png" alt="" />
                            </div>
                            <div className="tp-service-five-content">
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> CRO Boosts</h3>
                              <p>Above-the-fold upgrades and CTA tuning</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-check-circle"></i> Newsletter + Welcome</h3>
                              <p>Nurture that prevents churn</p>
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
            <div className="tp-price-area pt-60 pb-60 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-price-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-puzzle-piece"></i> Choose Your <span>Inbound Stack</span></h3>
                      <p><i className="fal fa-lightbulb"></i> Each tier compounds. Drop one, lose momentum.</p>
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
                        <h4>Capture & Convert</h4>
                        <p>Startups with decent site flow</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Book more calls from traffic</li>
                            <li>Inbound Audit</li>
                            <li>Conversion Flows</li>
                            <li>Basic Lead Magnet</li>
                            <li>CRO Improvements</li>
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
                        <h4>Behavioral Engine</h4>
                        <p>Teams battling drop-off & silence</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Nurture + score + automate</li>
                            <li>Everything in Capture & Convert</li>
                            <li><i className="fal fa-robot"></i> Chatbots, WhatsApp capture</li>
                            <li><i className="fal fa-search"></i> Behavior analytics, A/B tests</li>
                            <li><i className="fal fa-sync"></i> Multi-path automation, lead scoring</li>
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
                        <h4>Compounding Layer</h4>
                        <p>SaaS scaling CAC vs. LTV</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Personalization + ROI clarity</li>
                            <li>Everything in Behavioral Engine</li>
                            <li><i className="fal fa-bullseye"></i> Personalization by ICP</li>
                            <li><i className="fal fa-chart-bar"></i> Attribution dashboard</li>
                            <li><i className="fal fa-exclamation-triangle"></i> SDR hot lead alerts</li>
                            <li><i className="fal fa-chart-line"></i> SEO + session insights</li>
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

            {/* Who It's For */}
            <div className="tp-about-area pt-60 pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-about-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-bullseye"></i> Who <span>This Is For</span></h3>
                      <p>You're earning the traffic. Now make it buy.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="tp-about-details-item-list">
                      <ul>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-traffic"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Decent traffic, low conversion</h4>
                              <p>You're getting visitors but they're not taking action.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-signal"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>No nurture, no signals</h4>
                              <p>Leads disappear into the void with no systematic follow-up.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-newsletter"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>"Send newsletter sometimes" = strategy</h4>
                              <p>Your marketing efforts are sporadic and inconsistent.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-convert"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Can't tell what converts</h4>
                              <p>You're flying blind without proper attribution and tracking.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-adapt"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Website doesn't adapt by ICP or behavior</h4>
                              <p>One-size-fits-all approach ignores buyer personas and intent.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="tp-fun-fact-area tp-fun-fact-2 pt-60 pb-60 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-fun-fact-section-title text-center pb-60">
                      <h4 className="tp-fun-fact-title"><i className="fal fa-chart-bar"></i> Real Results</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center">
                      <h4>2.4<span>×</span></h4>
                      <p>Increase in form-to-call <br /> conversion</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                      <h4>40<span>%</span></h4>
                      <p>Shorter nurture-to-meeting <br /> time</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                      <h4>3<span>+</span></h4>
                      <p>MQLs/week from <br /> personalization</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-4 tp-fun-fact-space-4 d-flex align-items-center">
                      <h4>500<span>+</span></h4>
                      <p>Emails in 6 weeks via <br /> SEO + magnet</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tp-testimonial-quote text-center pt-40">
                      <blockquote>
                        <p>"It didn't just increase leads — it activated buyers."</p>
                        <cite>— Head of Marketing, B2B SaaS</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="tp-plan-area tp-plan-space pt-60 pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-plan-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-cog"></i> 3-Step <span>Snapshot</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-stethoscope"></i></span>
                        <h4>Audit</h4>
                      </div>
                      <p>Funnel, CTAs, nurture gaps diagnosed</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-wrench"></i></span>
                        <h4>Install Engine</h4>
                      </div>
                      <p>CRO, workflows, automation, content</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-chart-line"></i></span>
                        <h4>Watch Pipeline Lift</h4>
                      </div>
                      <p>Bookings rise, quality improves, signals trigger action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: 'url(/assets/img/cta/cta-bg-5-1.png)'}}>
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
                      <span className="tp-section-subtitle-5"><i className="fal fa-bomb"></i> Final CTA</span>
                      <h3 className="tp-section-title-5 pb-30">You wrote the content. Paid for traffic. <br /><span>Earned the visit.</span></h3>
                      <p className="pb-30">So why is your pipeline still starving?<br />
                      This engine captures every missed opportunity — and compounds it into growth.</p>
                      <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                        <a className="tp-btn-blue-lg circle-effect" href="#"><i className="fal fa-brain"></i> Run Audit</a>
                        <a className="tp-btn-yellow-lg circle-effect" href="#"><i className="fal fa-chart-line"></i> See Results</a>
                        <a className="tp-btn-grey circle-effect" href="#"><i className="fal fa-cog"></i> Compare Options</a>
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