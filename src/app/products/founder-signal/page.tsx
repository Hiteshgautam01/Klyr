'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function FounderSignalPage() {
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
                      <span className="white-text"><i className="fal fa-brain"></i> Free GTM Diagnosis</span>
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
                  <div className="col-xl-8 col-lg-8">
                    <div className="tp-hero-five-section-wrap">
                      <div className="tp-hero-five-section-box z-index">
                        <h1 className="tp-hero-title-5 hero-text-anim-2">
                          <i><i className="child-2">If They Don't <span className="child-1 p-relative">Trust</span> You, <br /></i></i>
                          <i><i className="child-2">They Won't <span className="child-2">Buy From You</span></i></i>
                        </h1>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                          <strong>KLYRR installs a founder-led trust engine</strong> that turns silence into sales, thought into traction, and presence into pipeline.
                        </p>
                      </div>
                      <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                        <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#"><i className="fal fa-brain"></i> Book My Founder Audit</a>
                        <a className="tp-btn-grey mb-20" href="#"><i className="fal fa-bullhorn"></i> See Real Signal Systems</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Section */}
            <div className="tp-about-area pt-120 pb-120 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-about-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-times-circle"></i> The Problem <span>You're Tolerating</span></h3>
                      <p>Your product works. Your GTM might even be decent. But without founder visibility:</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-ghost"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Buyers ghost — no leadership signal</h4>
                        <p>Without founder visibility, prospects lose trust and engagement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-demo"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Demo show-up drops — no face behind the brand</h4>
                        <p>People need to connect with leadership to feel confident buying.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-investor"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Investors hesitate — you sound scripted</h4>
                        <p>Authentic founder voice builds credibility with all stakeholders.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-cold-leads"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>Cold leads lag — they're still figuring out who you are</h4>
                        <p>Strong founder presence accelerates trust and decision-making.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-12 col-md-12 mb-30">
                    <div className="tp-about-details-item d-flex">
                      <div className="tp-about-details-icon">
                        <i className="flaticon-gravity"></i>
                      </div>
                      <div className="tp-about-details-content">
                        <h4>You're not missing demand. You're missing founder gravity.</h4>
                        <p>In B2B, people buy from people — and founders are the ultimate trust signal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-service-five-section-box text-center mb-60">
                      <span className="tp-section-subtitle-5">Trust — Systemized</span>
                      <h3 className="tp-section-title-5 pb-15">
                        <i className="fal fa-cube"></i> What the Founder Signal <br /><span>Engine Does</span>
                      </h3>
                      <p className="pb-40">This isn't ghostwritten fluff. It's trust — systemized.<br />
                        We engineer your founder presence to attract deals, activate buyers, and build market inevitability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 mb-40">
                    <div className="tp-service-details-item">
                      <div className="tp-service-details-icon">
                        <span>Phase 1</span>
                      </div>
                      <div className="tp-service-details-content">
                        <h4>Build the Signal</h4>
                        <ul>
                          <li>→ Clarify POV, stance, and narrative</li>
                          <li>→ Rewrite LinkedIn bio + design banner</li>
                          <li>→ Publish 2 signature founder stories</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-40">
                    <div className="tp-service-details-item">
                      <div className="tp-service-details-icon">
                        <span>Phase 2</span>
                      </div>
                      <div className="tp-service-details-content">
                        <h4>Weekly Compounding Trust</h4>
                        <ul>
                          <li>→ 4 founder-style posts/month</li>
                          <li>→ ICP comment strategy + silent funnel reactivation</li>
                          <li>→ Asynchronous follow-up content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-40">
                    <div className="tp-service-details-item">
                      <div className="tp-service-details-icon">
                        <span>Phase 3</span>
                      </div>
                      <div className="tp-service-details-content">
                        <h4>Expand Beyond LinkedIn</h4>
                        <ul>
                          <li>→ 20+ content prompts or ghostwritten ideas</li>
                          <li>→ Founder DM playbook</li>
                          <li>→ 3–5 podcast bookings with CTA flows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-40">
                    <div className="tp-service-details-item">
                      <div className="tp-service-details-icon">
                        <span>Phase 4</span>
                      </div>
                      <div className="tp-service-details-content">
                        <h4>Distribute & Compound</h4>
                        <ul>
                          <li>→ 2–4 monthly short-form video clips</li>
                          <li>→ Newsletter setup & founder-style launch</li>
                          <li>→ GTM asset for investor confidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who It's For */}
            <div className="tp-about-area pt-120 pb-120 grey-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-about-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-puzzle-piece"></i> Who <span>It's For</span></h3>
                      <p>This isn't personal branding. It's pipeline leverage.</p>
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
                              <i className="flaticon-bottleneck"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>You still lead sales — but now you're the bottleneck</h4>
                              <p>Your expertise needs to scale beyond your personal involvement.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-voice"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>Your content is good, but founder voice is missing</h4>
                              <p>Generic content doesn't build the trust that founder content does.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-inevitable"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>You want to be seen as inevitable, not optional</h4>
                              <p>Market leaders have visible, trusted founders driving the narrative.</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30">
                          <div className="tp-about-details-item d-flex">
                            <div className="tp-about-details-icon">
                              <i className="flaticon-showing-up"></i>
                            </div>
                            <div className="tp-about-details-content">
                              <h4>You know "showing up" is no longer negotiable</h4>
                              <p>In today's market, founder visibility is a competitive requirement.</p>
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
            <div className="tp-fun-fact-area tp-fun-fact-2 pt-120 pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-fun-fact-section-title text-center pb-60">
                      <h4 className="tp-fun-fact-title"><i className="fal fa-chart-bar"></i> Real Results</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                    <div className="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center">
                      <h4>190<span>K</span></h4>
                      <p>ARR sourced from 1 post <br /> → DM → demo</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                    <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                      <h4>3<span></span></h4>
                      <p>Inbound investor convos <br /> from newsletter replies</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                    <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                      <h4>44<span>%</span></h4>
                      <p>Increase in post-demo conversion <br /> when founder was active</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                    <div className="tp-fun-fact-item bg-color-4 tp-fun-fact-space-4 d-flex align-items-center">
                      <h4>5<span>×</span></h4>
                      <p>"You're everywhere" heard <br /> on a single call</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tp-testimonial-quote text-center pt-40">
                      <blockquote>
                        <p>Founder-led GTM builds deals before the demo even starts.</p>
                        <cite>— VP Sales, Enterprise SaaS</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="tp-plan-area tp-plan-space grey-bg-3 pt-120 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-plan-section-box text-center mb-60">
                      <h3 className="tp-section-title-5 text-black"><i className="fal fa-cog"></i> How It Works <span>(3 Steps)</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-map-marker-alt"></i></span>
                        <h4>Diagnose Signal Gap</h4>
                      </div>
                      <p>Platform, presence, narrative, and ICP alignment</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-cog"></i></span>
                        <h4>Install the Engine</h4>
                      </div>
                      <p>Posts, DMs, podcasts, visuals, newsletter, trust assets</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="tp-plan-step-item text-center mb-40">
                      <div className="tp-plan-step-icon mb-30">
                        <span><i className="fal fa-chart-line"></i></span>
                        <h4>Watch It Compound</h4>
                      </div>
                      <p>More reach → more trust → more replies → more deals</p>
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
                      <span className="tp-section-subtitle-5"><i className="fal fa-brain"></i> Final CTA</span>
                      <h3 className="tp-section-title-5 pb-30">If your company feels invisible, <br /><span>ask this:</span></h3>
                      <p className="pb-30">Is your founder signal pulling any weight?<br />
                      Buyers follow founders. Founders who show up win.<br />
                      Those who don't? Quietly fall behind.</p>
                      <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                        <a className="tp-btn-blue-lg circle-effect" href="#"><i className="fal fa-brain"></i> Book My Audit</a>
                        <a className="tp-btn-yellow-lg circle-effect" href="#"><i className="fal fa-bullhorn"></i> See Signal Systems</a>
                        <a className="tp-btn-grey circle-effect" href="#"><i className="fal fa-cog"></i> Build the Engine</a>
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