'use client'

import ProductPageLayout from '@/components/ProductPageLayout'

export default function ZeroToPipelinePage() {
  return (
    <ProductPageLayout>
      <div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="fix">
              {/* Hero Area */}
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
                    <div className="col-xl-7 col-lg-7 order-2">
                      <div className="tp-hero-five-section-wrap">
                        <div className="tp-hero-five-section-box z-index">
                          <span className="tp-hero-subtitle-5 mb-20"><i className="fal fa-fire"></i> Zero-to-Pipeline Engine</span>
                          <h3 className="tp-hero-title-5 hero-text-anim-2">
                            You Don't Need More Leads.<br />
                            You Need Pipeline That <span className="tp-hero-five__title-sm">Converts.</span>
                          </h3>
                          <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                            You're not short on activity — you're short on systems that deliver results. KLYRR installs a zero-to-pipeline engine that books 15–20 qualified demos in 30–45 days.
                          </p>
                        </div>
                        <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                          <a className="tp-btn-blue-lg tp-btn-hover alt-color-black circle-effect mr-15 mb-20" href="#contact">
                            <span><i className="fal fa-brain"></i> Book Free Funnel Diagnosis</span>
                            <b></b>
                          </a>
                          <a className="tp-btn-grey mb-20" href="#results">
                            <span><i className="fal fa-envelope"></i> See Real Campaigns</span>
                            <b></b>
                          </a>
                        </div>
                        <div className="tp-hero-stats d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                          <span className="mr-30"><i className="fal fa-check-circle"></i> 150+ SQLs in 90 days</span>
                          <span><i className="fal fa-check-circle"></i> $390K revenue lift</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1">
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
              <section className="tp-about-area pb-95 pt-120">
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
                          <h2 className="tp-section-title-5 mb-30">
                            You think it's a volume issue.<br />It's a <span>system failure.</span>
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
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="tp-service-five-section-box grey-bg-2 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <span className="tp-section-subtitle-5 d-inline-block mb-15">GTM Growth Stack</span>
                        <h3 className="tp-section-title-5 pb-15">
                          <i className="fal fa-check-circle"></i> What the Zero-to-Pipeline <br /><span>Engine Actually Does</span>
                        </h3>
                        <p className="pb-20">A GTM Growth Stack — Installed, Not Consulted<br />
                        This isn't advice or training — it's a fully built system that books demos. Here's what we install:</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-service-five-bg" style={{backgroundImage: 'url(/assets/img/service/service-5-1-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Items */}
              <section className="tp-service-area p-relative pb-120 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
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
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
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
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-3.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 3: Multi-Channel Activation</a>
                          </h3>
                          <p>Omnichannel sequences that compound impact</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                      <div className="tp-service-five__item mb-30">
                        <div className="tp-service-five__icon">
                          <img src="/assets/img/service/sv-icon-5-4.png" alt="" />
                        </div>
                        <div className="tp-service-five__content">
                          <h3 className="tp-service-five__title">
                            <a href="#">Phase 4: CRM Orchestration</a>
                          </h3>
                          <p>Pipeline tracking that surfaces insights, not just activity</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
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
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.3s">
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
                        <span className="tp-section-subtitle-5 d-inline-block"><i className="fal fa-chart-bar"></i> Real Results for SaaS Teams</span>
                        <h2 className="tp-section-title-5">This is how you scale without <span>scaling headcount</span></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                        <h3 className="tp-counter-number">150+</h3>
                        <p>SQLs generated in 90 days</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <h3 className="tp-counter-number">44%</h3>
                        <p>average demo show rate</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                        <h3 className="tp-counter-number">$390K</h3>
                        <p>average pipeline created</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                      <div className="tp-counter-item text-center mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <h3 className="tp-counter-number">7</h3>
                        <p>days to first booked demo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who It's For Section */}
              <section className="tp-about-area pb-120 pt-120 grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                      <div className="tp-about-wrapper pr-80">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-30">
                          <span className="tp-section-subtitle-5 d-inline-block"><i className="fal fa-puzzle-piece"></i> Is This For You?</span>
                          <h2 className="tp-section-title-5">
                            Founders who say "we tried outbound" <br />but only did <span>half the job</span>
                          </h2>
                        </div>
                        <div className="tp-about-list mb-40">
                          <ul>
                            <li><i className="fal fa-check text-success"></i>Pre-seed to Series A ($50K+ ACVs)</li>
                            <li><i className="fal fa-check text-success"></i>Selling to technical/enterprise ICPs</li>
                            <li><i className="fal fa-check text-success"></i>Need predictable demos, not "brand awareness"</li>
                            <li><i className="fal fa-check text-success"></i>Have product-market fit but lack GTM fit</li>
                            <li><i className="fal fa-check text-success"></i>Want to fix this once, not every quarter</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
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
              <div id="contact" className="tp-cta-area pt-120 pb-120 tp-cta-five-bg p-relative">
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
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
}