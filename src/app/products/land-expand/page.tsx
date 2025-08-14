'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function LandExpandPage() {
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
                            <i><i className="child-2">Retention Isn't a Metric. <br /></i></i>
                            <i><i className="child-2">It's a System — and Yours Is <span className="child-1 p-relative">Bleeding</span></i></i>
                          </h1>
                          <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                            <strong><i className="fal fa-fire"></i> Land & Expand Engine:</strong> The Land & Expand Engine installs post-sale GTM infrastructure that turns silent accounts into renewals, expansions, and referrals — without hiring more CSMs.
                          </p>
                        </div>
                        <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                          <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#contact"><i className="fal fa-brain"></i> Get a Retention System Audit</a>
                          <a className="tp-btn-grey mb-20" href="#playbooks"><i className="fal fa-chart-line"></i> See Expansion Playbooks</a>
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
                        <h3 className="tp-section-title-5 text-black"><i className="fal fa-times-circle"></i> The Hidden Risks <span>You're Ignoring</span></h3>
                        <p>You're landing logos — but can't explain why some vanish. Your upsells are reactive. Your CSMs are overwhelmed.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                      <div className="tp-about-details-item d-flex">
                        <div className="tp-about-details-icon">
                          <i className="flaticon-vanish"></i>
                        </div>
                        <div className="tp-about-details-content">
                          <h4>"Happy" customers vanish at renewal</h4>
                          <p>Customer satisfaction doesn't guarantee retention without systematic engagement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                      <div className="tp-about-details-item d-flex">
                        <div className="tp-about-details-icon">
                          <i className="flaticon-expansion"></i>
                        </div>
                        <div className="tp-about-details-content">
                          <h4>Expansion stalls — no one's owning the motion</h4>
                          <p>Without dedicated processes, growth opportunities slip through the cracks.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                      <div className="tp-about-details-item d-flex">
                        <div className="tp-about-details-icon">
                          <i className="flaticon-features"></i>
                        </div>
                        <div className="tp-about-details-content">
                          <h4>Features sit unused, unmissed</h4>
                          <p>Low adoption leads to low value realization and higher churn risk.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                      <div className="tp-about-details-item d-flex">
                        <div className="tp-about-details-icon">
                          <i className="flaticon-disconnect"></i>
                        </div>
                        <div className="tp-about-details-content">
                          <h4>CS, product, and GTM don't talk</h4>
                          <p>Siloed teams miss opportunities for expansion and retention.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12 mb-30">
                      <div className="tp-about-details-item d-flex">
                        <div className="tp-about-details-icon">
                          <i className="flaticon-surprise"></i>
                        </div>
                        <div className="tp-about-details-content">
                          <h4>You're not running a revenue engine. You're running a leaky bucket.</h4>
                          <p>Churn surprises you because you lack early warning systems and proactive retention strategies.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engine Breakdown Section */}
              <div id="playbooks" className="tp-service-area pt-60 pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="tp-section-box text-center mb-55">
                        <span className="tp-section-subtitle-5 d-inline-block" style={{color: '#007bff', fontWeight: '600'}}><i className="fal fa-check-circle"></i> What the Land & Expand Engine Actually Does</span>
                        <h2 className="tp-section-title-5 mb-20" style={{color: '#1a1a1a', fontWeight: '700'}}>
                          This isn't success coaching.<br/>It's a modular post-sale <span style={{color: '#007bff', fontWeight: '800'}}>GTM system</span>
                        </h2>
                        <p>Built to stop churn, trigger upsells, and compound NRR. We don't "train" your team. We install the playbooks, workflows, and signals that drive outcomes.</p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 1 */}
                   <div className="row mb-30">
                     <div className="col-xxl-12">
                       <h3 className="tp-section-subtitle-3 mb-20"><i className="fal fa-wrench"></i> What's Inside (System Overview)</h3>
                     </div>
                   </div>

                   <div className="row mb-30">
                     <div className="col-xxl-12">
                       <h4 className="tp-section-subtitle-4 mb-20">Phase 1: Find the Leaks</h4>
                     </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-bullseye"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Segment by ARR, risk, and expansion signals</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-map"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Map onboarding and QBR gaps</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-exclamation-triangle"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Flag silent churn patterns</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                   <div className="row mb-30">
                     <div className="col-xxl-12">
                       <h4 className="tp-section-subtitle-4 mb-20">Phase 2: Install the System</h4>
                     </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-envelope"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Win-back + expansion email flows</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-comments"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">CSM scripts for renewals + upsells</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-mobile"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Product nudges to boost usage</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                   <div className="row">
                     <div className="col-xxl-12">
                       <h4 className="tp-section-subtitle-4 mb-20">Phase 3: Drive Forecastable Growth</h4>
                     </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-robot"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">AI churn + expansion scoring</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-chart-bar"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">KPI dashboards</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-bolt"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Trigger-based rescue and upsell workflows</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <span><i className="fal fa-handshake"></i></span>
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">Built-in referral/advocacy motions</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who It's For Section */}
              <div className="tp-about-area pt-60 pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tp-about-section-box text-center mb-60">
                        <h3 className="tp-section-title-5 text-black"><i className="fal fa-puzzle-piece"></i> Who <span>It's For</span></h3>
                        <p>Retention isn't magic. But it can be engineered.</p>
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
                                <i className="flaticon-revenue-loss"></i>
                              </div>
                              <div className="tp-about-details-content">
                                <h4>Losing revenue silently after the sale</h4>
                                <p>Post-sale revenue leakage is happening without clear visibility.</p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30">
                            <div className="tp-about-details-item d-flex">
                              <div className="tp-about-details-icon">
                                <i className="flaticon-nrr"></i>
                              </div>
                              <div className="tp-about-details-content">
                                <h4>Flat on NRR despite low logo churn</h4>
                                <p>You're retaining customers but not growing revenue from existing accounts.</p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30">
                            <div className="tp-about-details-item d-flex">
                              <div className="tp-about-details-icon">
                                <i className="flaticon-cs-support"></i>
                              </div>
                              <div className="tp-about-details-content">
                                <h4>Treating CS as support, not revenue</h4>
                                <p>Customer Success is viewed as cost center instead of growth driver.</p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30">
                            <div className="tp-about-details-item d-flex">
                              <div className="tp-about-details-icon">
                                <i className="flaticon-guessing"></i>
                              </div>
                              <div className="tp-about-details-content">
                                <h4>Guessing on expansions</h4>
                                <p>Expansion opportunities are based on intuition rather than data-driven signals.</p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30">
                            <div className="tp-about-details-item d-flex">
                              <div className="tp-about-details-icon">
                                <i className="flaticon-headcount"></i>
                              </div>
                              <div className="tp-about-details-content">
                                <h4>Scaling headcount to patch broken systems</h4>
                                <p>Adding more people without fixing underlying process issues.</p>
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
                    <div className="col-xxl-12">
                      <div className="tp-fun-fact-section-title text-center pb-60">
                        <h4 className="tp-fun-fact-title"><i className="fal fa-chart-bar"></i> Real Results for SaaS Teams</h4>
                        <p>This is how the best SaaS companies grow</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                      <div className="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center">
                        <h4>147<span>%</span></h4>
                        <p>Average NRR after implementation</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                      <div className="tp-fun-fact-item bg-color-2 tp-fun-fact-space-2 d-flex align-items-center">
                        <h4>-62<span>%</span></h4>
                        <p>Reduction in unexpected churn</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                      <div className="tp-fun-fact-item bg-color-3 tp-fun-fact-space-3 d-flex align-items-center">
                        <h4>3.2<span>x</span></h4>
                        <p>More upsells per quarter</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-60 tp-counter-br">
                      <div className="tp-fun-fact-item bg-color-4 tp-fun-fact-space-4 d-flex align-items-center">
                        <h4>45<span></span></h4>
                        <p>Days to first expansion signal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div id="contact" className="tp-cta-area mt-120 pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: 'url(/assets/img/cta/cta-bg-5-1.png)'}}>
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
                        <span className="tp-section-subtitle-5"><i className="fal fa-rocket"></i> Stop the Bleed. Start the Growth.</span>
                        <h3 className="tp-section-title-5 pb-30">You've built the product.<br/>You've closed the deals.<br/><span>Now let's keep them.</span></h3>
                        <p className="pb-30">
                          The Land & Expand Engine installs post-sale GTM infrastructure that turns silent accounts into renewals, expansions, and referrals.
                        </p>
                        <div className="tp-cta-five-btn d-flex justify-content-center gap-3 flex-wrap">
                          <a className="tp-btn-blue-lg circle-effect" href="/contact"><i className="fal fa-brain"></i> Get Your Retention Audit</a>
                          <a className="tp-btn-yellow-lg circle-effect" href="/contact"><i className="fal fa-chart-line"></i> See Implementation Timeline</a>
                          <a className="tp-btn-grey circle-effect" href="/pricing"><i className="fal fa-cog"></i> View Pricing</a>
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