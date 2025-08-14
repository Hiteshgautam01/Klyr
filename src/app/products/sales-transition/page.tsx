'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function SalesTransitionPage() {
  return (
    <ProductPageLayout>
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
              {/* Hero Area */}
              <section className="tp-hero-area tp-hero-five__ptb-5 p-relative z-index-3">

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-hero-five__content">
                        <span className="tp-hero-subtitle-5 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                          <i className="fal fa-circle"></i> Sales Transition System
                        </span>
                        <h1 className="tp-hero-title-5 hero__title">
                          If Your Reps Don't Ramp Fast —<br/>You're Paying to <span className="tp-hero-five__title-sm">Lose Deals.</span>
                        </h1>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                          KLYRR installs a modular onboarding and transition system that turns new hires into confident closers — and makes GTM handoffs consistent, frictionless, and revenue-aligned.
                        </p>
                        <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                          <a className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="#contact">
                            <span><i className="fal fa-brain"></i> Run My Onboarding Diagnostic</span>
                            <b></b>
                          </a>
                          <a className="tp-btn-border tp-btn-hover alt-color-black" href="#benchmarks">
                            <span><i className="fal fa-chart-bar"></i> See Ramp Time Benchmarks</span>
                            <b></b>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-hero-five__thumb p-relative">
                        <img src="/assets/img/hero/hero-4-3.png" alt="Sales Transition" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Problem Section */}
              <section className="tp-about-area pb-60 pt-60 grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-thumb-wrapper p-relative">
                        <div className="tp-about-thumb m-img">
                          <img src="/assets/img/about/about-4.png" alt="Onboarding Problems" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-wrapper pl-80">
                        <div className="tp-section-box tp-section-box-2 p-relative">
                          <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-times-circle"></i> The Risks You're Tolerating</span>
                          <h2 className="tp-section-title-5 mb-30" style={{color: '#1a1a1a'}}>
                            Most teams treat onboarding like a checklist.<br/>But here's what that misses:
                          </h2>
                        </div>
                        <div className="tp-about-list mb-40">
                          <ul>
                            <li><i className="fal fa-times text-danger"></i>Reps mishandling discovery and burning pipeline</li>
                            <li><i className="fal fa-times text-danger"></i>Demos going sideways — value not sticking</li>
                            <li><i className="fal fa-times text-danger"></i>Founders pulled back in to "save" late-stage calls</li>
                            <li><i className="fal fa-times text-danger"></i>CS getting zero context and inheriting churn risks</li>
                          </ul>
                        </div>
                        <p><strong>Bad onboarding doesn't show up in week 1. It shows up in week 12 — as missed revenue, broken trust, and chaotic handoffs.</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* System Breakdown Section */}
              <section id="benchmarks" className="tp-service-area pt-60 pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-55">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-check-circle"></i> What This System Actually Does</span>
                        <h2 className="tp-section-title-5 mb-20" style={{color: '#1a1a1a'}}>
                          This isn't HR onboarding.<br/>It's a conversion-first <span>enablement layer</span>
                        </h2>
                        <p>Built to clone founder-level sales intuition, tighten GTM execution, and prevent deals from falling through the cracks.</p>
                      </div>
                    </div>
                  </div>

                                     {/* Phase breakdown */}
                   <div className="row mb-40">
                     <div className="col-xxl-12">
                       <h3 className="tp-section-subtitle-3 mb-30"><i className="fal fa-ruler"></i> What's Inside (System Overview)</h3>
                     </div>
                   </div>

                   {/* Phase 1 */}
                   <div className="row mb-40">
                    <div className="col-xxl-12">
                      <h4 className="tp-section-subtitle-4 mb-40"><i className="fal fa-dot-circle"></i> Phase 1: Diagnose the Gaps</h4>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-search"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Call Audits</h3>
                          <p>Find rep blindspots and demo misses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-bullseye"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Persona & Objection Sync</h3>
                          <p>Align on how real buyers push back</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-sync"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Handoff Debriefs</h3>
                          <p>Spot sales → CS gaps that lead to churn</p>
                        </div>
                      </div>
                    </div>
                  </div>

                                     {/* Phase 2 */}
                   <div className="row mb-40">
                    <div className="col-xxl-12">
                      <h4 className="tp-section-subtitle-4 mb-40"><i className="fal fa-dot-circle"></i> Phase 2: Build the Assets</h4>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-clipboard-list"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Narrative-Driven Demo Playbook</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-shield-alt"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Objection Handling Vault</h3>
                          <p>(based on real calls)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-file-alt"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Founder Scripts + Follow-Ups</h3>
                          <p>Codified and coached into motion</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-link"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">SDR → AE → CS Templates</h3>
                          <p>Make transitions frictionless</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="row">
                    <div className="col-xxl-12">
                      <h4 className="tp-section-subtitle-4 mb-40"><i className="fal fa-dot-circle"></i> Phase 3: Activate the Motion</h4>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-users"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Live Shadowing for 2 Reps</h3>
                          <p>Speed up learning</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-calendar-alt"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Ramp Plan by Day/Week</h3>
                          <p>What to know, say, and send</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-graduation-cap"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">LMS & Tracker Setup</h3>
                          <p>Centralized training + accountability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-check-circle"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Handoff QA Checklist</h3>
                          <p>Audit GTM transitions with revenue impact in mind</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who It's For Section */}
              <section className="tp-about-area pb-60 pt-60 grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-wrapper pr-80">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-30">
                          <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-users"></i> Who This Is For</span>
                          <h2 className="tp-section-title-5" style={{color: '#1a1a1a'}}>
                            You don't have an onboarding issue.<br/>You have an <span>execution leak.</span>
                          </h2>
                        </div>
                        <div className="tp-about-list mb-40">
                          <ul>
                            <li><i className="fal fa-check text-success"></i>Founders who close best — but can't scale themselves</li>
                            <li><i className="fal fa-check text-success"></i>RevOps and Sales leads stuck with slow ramp + spotty execution</li>
                            <li><i className="fal fa-check text-success"></i>CS leaders inheriting accounts with zero context</li>
                            <li><i className="fal fa-check text-success"></i>GTM teams where the handoff = the graveyard</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-about-thumb-wrapper p-relative">
                        <div className="tp-about-thumb m-img">
                          <img src="/assets/img/about/about-1.jpg" alt="Target audience" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Results Section */}
              <section className="tp-counter-area pt-60 pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-55">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-chart-bar"></i> Real Results</span>
                        <h2 className="tp-section-title-5 mb-20" style={{color: '#1a1a1a'}}>
                          "This is the first time I've seen our founder's sales process<br/><span>documented clearly."</span>
                        </h2>
                        <p className="text-muted">— Head of Sales, B2B SaaS</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30">
                        <div className="tp-counter-icon mb-20">
                          <span><i className="fal fa-bolt"></i></span>
                        </div>
                        <h3 className="tp-counter-number">38%</h3>
                        <p>ramp time cut for new hires</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30">
                        <div className="tp-counter-icon mb-20">
                          <span><i className="fal fa-chart-line"></i></span>
                        </div>
                        <h3 className="tp-counter-number">2.4x</h3>
                        <p>increase in 90-day close rate</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30">
                        <div className="tp-counter-icon mb-20">
                          <span><i className="fal fa-chart-line-down"></i></span>
                        </div>
                        <h3 className="tp-counter-number">29%</h3>
                        <p>drop in churn tied to cleaner handoffs</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30">
                        <div className="tp-counter-icon mb-20">
                          <span><i className="fal fa-rocket"></i></span>
                        </div>
                        <h3 className="tp-counter-number">90</h3>
                        <p>day revenue impact from faster ramp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section className="tp-service-area pt-60 pb-60 grey-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-55">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-cog"></i> How It Works (3-Step Flow)</span>
                        <h2 className="tp-section-title-5" style={{color: '#1a1a1a'}}>
                          Faster ramp, tighter demos, cleaner transitions,<br/><span>better revenue outcomes</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-process-item text-center mb-40">
                        <div className="tp-process-icon mb-30">
                          <span><i className="fal fa-stethoscope"></i></span>
                          <div className="tp-process-number">1</div>
                        </div>
                        <div className="tp-process-content">
                          <h3 className="tp-process-title mb-20">Run a GTM Diagnostic</h3>
                          <p>Audit ramp friction, sales flow, and handoff breakdowns</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-process-item text-center mb-40">
                        <div className="tp-process-icon mb-30">
                          <span><i className="fal fa-wrench"></i></span>
                          <div className="tp-process-number">2</div>
                        </div>
                        <div className="tp-process-content">
                          <h3 className="tp-process-title mb-20">Build & Ship Assets</h3>
                          <p>Playbooks, scripts, handoff tools — everything your team needs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-process-item text-center mb-40">
                        <div className="tp-process-icon mb-30">
                          <span><i className="fal fa-rocket"></i></span>
                          <div className="tp-process-number">3</div>
                        </div>
                        <div className="tp-process-content">
                          <h3 className="tp-process-title mb-20">Activate & Optimize</h3>
                          <p>Shadow, coach, audit, and iterate based on real calls</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="tp-faq-area pt-60 pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-55">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#3b82f6'}}><i className="fal fa-clipboard-list"></i> Common Questions</span>
                        <h2 className="tp-section-title-5" style={{color: '#1a1a1a'}}>What founders ask about our transition systems</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-faq-item mb-30">
                        <h4 className="tp-faq-title mb-20">
                          <i className="far fa-question-circle"></i> "What if we don't have any sales process documented?"
                        </h4>
                        <p>We'll extract it from your founder calls, win recordings, and team knowledge — then codify it into repeatable assets.</p>
                      </div>
                      <div className="tp-faq-item mb-30">
                        <h4 className="tp-faq-title mb-20">
                          <i className="far fa-question-circle"></i> "How is this different from sales training?"
                        </h4>
                        <p>Training = theory. We build systems based on what actually works in your market, with your buyers.</p>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="tp-faq-item mb-30">
                        <h4 className="tp-faq-title mb-20">
                          <i className="far fa-question-circle"></i> "Can this help our current team, not just new hires?"
                        </h4>
                        <p>Yes. Many clients use this to level up existing reps and standardize what "good" looks like.</p>
                      </div>
                      <div className="tp-faq-item mb-30">
                        <h4 className="tp-faq-title mb-20">
                          <i className="far fa-question-circle"></i> "What about our unique sales motion?"
                        </h4>
                        <p>Every asset is built from YOUR calls, YOUR wins, YOUR buyer personas — not generic templates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div id="contact" className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: 'url(/assets/img/cta/cta-bg-5-1.png)'}}>
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
                        <span className="tp-section-subtitle-5"><i className="fal fa-fire"></i> Are Slow Ramps Costing You Revenue?</span>
                        <h3 className="tp-section-title-5 pb-30">
                          Every week of slow onboarding<br/>is pipeline lost forever.<br/><span>Fix it before Q1 ends.</span>
                        </h3>
                        <p className="pb-30">
                          KLYRR's Sales Transition System cuts ramp time, standardizes excellence, and makes GTM handoffs seamless.
                        </p>
                        <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                          <a className="tp-btn-blue-lg circle-effect" href="/contact"><i className="fal fa-brain"></i> Diagnose My Onboarding</a>
                          <a className="tp-btn-yellow-lg circle-effect" href="/contact"><i className="fal fa-chart-bar"></i> See System Details</a>
                          <a className="tp-btn-grey circle-effect" href="/pricing"><i className="fal fa-cog"></i> View Investment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
    </ProductPageLayout>
  );
}