'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function DemoConversionPage() {
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
                          <i><i className="child-2">Your Demos Aren't Bad. <br /></i></i>
                          <i><i className="child-2">They're Quietly <span className="child-1 p-relative">Killing</span> <br /></i></i>
                          <i><i className="child-2">Your <span className="child-2">Close Rate</span></i></i>
                        </h1>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                          <strong><i className="fal fa-brain"></i> Demo Conversion Killshot:</strong> KLYRR's Conversion Killshot Engine transforms average demos into high-converting sales assets — powered by buyer psychology, AI feedback, and repeatable pitch systems.
                        </p>
                      </div>
                      <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                        <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#contact"><i className="fal fa-brain"></i> Run a Demo Audit</a>
                        <a className="tp-btn-grey mb-20" href="#system"><i className="fal fa-bullseye"></i> See the Killshot System</a>
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
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-times-circle"></i> The Problem <span>Section</span></h3>
                      <p>If your demos feel "fine" but deals stall, it's not a lead issue — it's a demo system failure.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-improvisation"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Reps improvise value props</h4>
                        <p>Without consistent messaging, every demo becomes a gamble.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-hope"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Objections handled with hope</h4>
                        <p>Your team relies on wishful thinking instead of proven frameworks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-follow-up"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Follow-ups are weak or missing</h4>
                        <p>Deals die in silence because your follow-up game is broken.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-businessman"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Founders still lead key deals</h4>
                        <p>You're the bottleneck because your team can't close without you.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-random"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Coaching is random, not repeatable</h4>
                        <p>Without systems, improvement happens by chance, not design.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-survive"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>You're not running demos. You're surviving them.</h4>
                        <p>Every demo feels like rolling the dice instead of executing a plan.</p>
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
                      <span className="tp-section-subtitle-5">Sales Infrastructure</span>
                      <h3 className="tp-section-title-5 pb-15">
                        <i className="fal fa-check-circle"></i> What It Does <br /><span>(Engine Breakdown)</span>
                      </h3>
                      <p className="pb-20">This isn't sales training. It's sales infrastructure — installed.<br />
                        We rebuild your sales team's execution from discovery to close, backed by AI tools and real-time feedback systems.
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-search"></i> Call Audit</h3>
                              <p>We score 10–20 real demos to uncover where deals stall</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-brain"></i> AI Scoring</h3>
                              <p>Every move tracked, benchmarked, and decoded</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-wrench"></i> Narrative Rewrite</h3>
                              <p>Persona-specific scripts and value drivers</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-pen"></i> Objection Templates</h3>
                              <p>Pre-built, psychology-based responses</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-mailbox"></i> Follow-Up Frameworks</h3>
                              <p>Emails + DMs that actually drive action</p>
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
                              <h3 className="tp-service-five-title-sm"><i className="fal fa-bullseye"></i> Live Drills</h3>
                              <p>AI roleplay systems that build muscle memory</p>
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
            <div className="tp-price-area pt-60 pb-60 grey-bg-2">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-price-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-puzzle-piece"></i> Engine <span>Tiers Table</span></h3>
                      <p><i className="fal fa-lightbulb"></i> Stackable layers — remove one, lose compounding effect.</p>
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
                        <h4>Killshot Audit</h4>
                        <p>Founders, small teams</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Demo + script teardown</li>
                            <li>Call recording analysis</li>
                            <li>Conversion gap identification</li>
                            <li>Basic improvement roadmap</li>
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
                        <h4>Execution System</h4>
                        <p>SaaS teams needing consistency</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>Coaching + AI feedback</li>
                            <li>Everything in Killshot Audit</li>
                            <li>Custom objection handling</li>
                            <li>Follow-up automation</li>
                            <li>Weekly performance reviews</li>
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
                        <h4>Culture Engine</h4>
                        <p>Leaders scaling sales orgs</p>
                      </div>
                      <div className="tp-price-body">
                        <div className="tp-price-list">
                          <ul>
                            <li>LMS + full tracking layer</li>
                            <li>Everything in Execution System</li>
                            <li>Team-wide training modules</li>
                            <li>Performance dashboards</li>
                            <li>Scalable coaching framework</li>
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
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-bullseye"></i> Who <span>It's For</span></h3>
                      <p>The leak isn't in your leads — it's in how you convert them.</p>
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
                              <i className="flaticon-time"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Demos run long but don't go deep</h4>
                              <p>Your team talks but doesn't connect with buyer pain points.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-value"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>"Value" is said, not felt</h4>
                              <p>You communicate features instead of transformative outcomes.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-objection"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Objections stall momentum</h4>
                              <p>Your team gets defensive instead of using objections to close.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-winner"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Only 1–2 closers consistently win</h4>
                              <p>Your top performers can't scale their success across the team.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-flat"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Win rate is flat</h4>
                              <p>More leads aren't helping because conversion stays the same.</p>
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
                      <h4>2.7<span>×</span></h4>
                      <p>Increase in demo-to-close <br /> in 45 days</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                      <h4>40<span>%</span></h4>
                      <p>Shorter sales cycles <br /> through better qualification</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                      <h4>68<span>%</span></h4>
                      <p>Faster onboarding via <br /> LMS + drills</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                    <div className="tp-fun-fact-item bg-color-4 tp-fun-fact-space-4 d-flex align-items-center">
                      <h4>180<span>K</span></h4>
                      <p>Pipeline saved from <br /> objection handling</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tp-testimonial-quote text-center pt-40">
                      <blockquote>
                        <p>"We didn't fix a script. We made our team 30% more lethal."</p>
                        <cite>— VP Sales, Enterprise SaaS</cite>
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
                        <span><i className="fal fa-headphones"></i></span>
                        <h4>Demo Audit</h4>
                      </div>
                      <p>AI + expert review of real calls</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-wrench"></i></span>
                        <h4>Pitch System Install</h4>
                      </div>
                      <p>Rewrite scripts, slides, follow-ups</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-chart-line"></i></span>
                        <h4>Scale the Killshot</h4>
                      </div>
                      <p>Weekly reviews + LMS make it repeatable</p>
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
                      <h3 className="tp-section-title-5 pb-30">How many deals are dying in <br /><span>your current demo system?</span></h3>
                      <p className="pb-30">You don't need new tools. You need infrastructure.</p>
                      <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                        <a className="tp-btn-blue-lg circle-effect" href="#"><i className="fal fa-brain"></i> Get a Demo Audit</a>
                        <a className="tp-btn-yellow-lg circle-effect" href="#"><i className="fal fa-chart-line"></i> See the Engine in Action</a>
                        <a className="tp-btn-grey circle-effect" href="#"><i className="fal fa-cog"></i> Compare Tiers</a>
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