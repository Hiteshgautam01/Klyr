'use client'

import PageLayout from '@/components/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout>
      {/* tp-breadcrumb-area-start */}
      <div className="about-banner-area p-relative">
        <div className="about-shape-1 z-index-3">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="about-shape-2 z-index-3">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div className="about-banner p-relative z-index fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-banner-content z-index-5">
                  <h4 className="about-banner-title" data-parallax='{"y": 1000, "smoothness": 10}'>
                    <span>About</span> <br />
                    <span>KLYRR</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-breadcrumb-area-end */}

      {/* tp-breadcrumb-header-area-start */}
      <div className="about-img-area mb-100 z-index-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-img about-img-height p-relative" style={{backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-2.jpg)'}}>
                <div className="about-img-content">
                  <h4 className="about-img-title" data-parallax='{"y": 1000, "smoothness": 10}'>
                    <span>About</span> <br />
                    <span>KLYRR</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-breadcrumb-header-area-end */}

      {/*ab-brand-area-start */}
      <div className="ab-brand-area">
        <div className="container">
          <div className="ab-brand-border-bottom pb-60">
            <div className="row">
              <div className="col-12">
                <div className="ab-brand-section-box text-center mb-50">
                  <h4 className="ab-brand-title">Trusted by SaaS Founders</h4>
                  <p>More than 100+ SaaS companies trust KLYRR for their growth</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                  <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".2s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-1.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-2.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-3.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".8s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-4.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.0s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-5.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-6.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.4s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-7.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.6s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-8.png" alt="" />
                       </div>
                     </div>
                    <div className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.8s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                       <div className="ab-brand-item mb-25">
                         <img src="/assets/img/brand/brand-inner-9.png" alt="" />
                       </div>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*ab-brand-area-end */}

      {/*ab-company-area-start */}
      <div className="ab-company-area pt-60 pb-60">
        <div className="container">
          <div className="row ab-company-section-space">
              <div className="col-xl-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                 <div className="ab-company-section-box">
                   <h4 className="inner-section-subtitle">ABOUT THE COMPANY</h4>
                   <h3 className="tp-section-title">KLYRR is Built by Founders, <br />
                     For Founders.</h3>
                 </div>
               </div>
              <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                 <div className="ab-company-right">
                   <div className="ab-company-section-text">
                     <p className="pb-10">We've been where you are. The late nights wondering why your funnel isn't converting. The expensive experiments that never pan out. The constant feeling that you're one breakthrough away from predictable growth.</p>
                     <p className="pb-10">KLYRR was born from our own frustration with the status quo. We're not just another agency—we're founders who got tired of watching good companies struggle with broken growth systems.</p>
                     <p><span>Our modular, data-driven systems eliminate chaos and guesswork from SaaS growth.</span></p>
                   </div>
                 </div>
               </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="ab-company-video">
                <a className="popup-video" href="https://www.youtube.com/watch?v=EW4ZYb3mCZk"><i className="fas fa-play"></i></a>
                <span>Watch Demo</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                    <div className="ab-company-fun-fact">
                      <span>HELPED</span>
                      <h4>100<em>+</em></h4>
                      <p>SaaS Companies</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>AVERAGE</span>
                      <h4>340<em>%</em></h4>
                      <p>Pipeline Increase</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>CLIENT</span>
                      <h4>97<em>%</em></h4>
                      <p>Retention Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*ab-company-area-end */}

      {/* tp-about-area-start */}
      <div className="tp-about__area tp-about__pt-pb pb-160">
        <div className="container">
          <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                 <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                <div className="tp-about__bg-shape">
                  <img src="/assets/img/about/about-bg-shape.png" alt="" />
                </div>
                <div className="tp-about__main-img z-index">
                  <img src="/assets/img/about/about-2.jpg" alt="" />
                </div>
                <div className="tp-about__sub-img-1 d-none d-sm-block z-index-3">
                  <img src="/assets/img/about/about-1.jpg" alt="" />
                </div>
                <div className="tp-about__sub-img-2 d-none d-sm-block">
                  <img src="/assets/img/about/about-3.jpg" alt="" />
                </div>
                <div className="tp-about__sub-img-3 d-none d-sm-block z-index-3">
                  <img src="/assets/img/about/about-5.png" alt="" />
                </div>
              </div>
            </div>
              <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s" data-wow-iteration="1" style={{visibility: 'visible', opacity: '1'}}>
                <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle">FOUNDER-FIRST THINKING</h4>
                  <h3 className="tp-section-title mb-15">We Build Growth Systems, Not Dependencies
                  </h3>
                  <p>Every system we build is designed by founders, for founders <br />
                    who refuse to accept 'good enough'.</p>
                </div>
                <div className="tp-about__list">
                  <ul>
                    <li><i className="fal fa-check"></i>Modular growth systems you own.</li>
                    <li><i className="fal fa-check"></i>Data-driven results with real ROI.</li>
                    <li><i className="fal fa-check"></i>30-90 day payback period.</li>
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <a className="tp-btn tp-btn-inner tp-btn-hover alt-color-black" href="/products">
                    <span>Our Services</span>
                    <b></b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-about-area-end */}

      {/* tp-team-area-start */}
      <div className="tp-team-area grey-bg pt-60 pb-60">
        <div className="container">
          <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-team-section-box text-center text-sm-start">
                  <h5 className="inner-section-subtitle pb-10">THE TEAM</h5>
                  <h3 className="tp-section-title mb-0 text-black">Meet the Founders</h3>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-team-top-content text-center text-md-end">
                  <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#">
                    <span>View All</span>
                    <b></b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-1 team-inner-border-right">
              <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-1.png" alt="" />
                </div>
                <div className="tp-team-content">
                  <h4 className="tp-team-title-sm"><a href="#">Alex Rivera</a></h4>
                  <span>Co-Founder & CEO</span>
                </div>
                <div className="tp-team-social">
                  <a className="icon-color-4" href="#">
                    <i className="fab fa-linkedin-in"></i>
                    <span></span>
                  </a>
                  <a className="icon-color-3" href="#">
                    <i className="fab fa-twitter"></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-2 team-inner-border-right">
              <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-2.png" alt="" />
                </div>
                <div className="tp-team-content">
                  <h4 className="tp-team-title-sm"><a href="#">Sarah Chen</a></h4>
                  <span>Co-Founder & CTO</span>
                </div>
                <div className="tp-team-social">
                  <a className="icon-color-4" href="#">
                    <i className="fab fa-linkedin-in"></i>
                    <span></span>
                  </a>
                  <a className="icon-color-3" href="#">
                    <i className="fab fa-twitter"></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-3 team-inner-border-right">
              <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-3.png" alt="" />
                </div>
                <div className="tp-team-content">
                  <h4 className="tp-team-title-sm"><a href="#">Marcus Johnson</a></h4>
                  <span>Head of Growth Engineering</span>
                </div>
                <div className="tp-team-social">
                  <a className="icon-color-4" href="#">
                    <i className="fab fa-linkedin-in"></i>
                    <span></span>
                  </a>
                  <a className="icon-color-3" href="#">
                    <i className="fab fa-twitter"></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-4 team-inner-border-right">
              <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-4.png" alt="" />
                </div>
                <div className="tp-team-content">
                  <h4 className="tp-team-title-sm"><a href="#">Emily Rodriguez</a></h4>
                  <span>Head of Data Analytics</span>
                </div>
                <div className="tp-team-social">
                  <a className="icon-color-4" href="#">
                    <i className="fab fa-linkedin-in"></i>
                    <span></span>
                  </a>
                  <a className="icon-color-3" href="#">
                    <i className="fab fa-twitter"></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-team-area-end */}

      {/* tp-journey-area-start */}
      <div className="journey-area p-relative fix">
        <div className="journey-grey-bg grey-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey-section-box">
                <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                <h3 className="ab-brand-title pb-0 mb-0">Our Growth Journey</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="journey-slider-wrapper">
                <div className="swiper-container journey-slider-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>01</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>OCT 2019</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">The Frustration <br />
                            Point</h4>
                          <p>Fed up with broken growth systems, <br />
                            we decided to build something <br /> different.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>02</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>JAN 2020</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">First Modular <br />
                            Systems Built</h4>
                          <p>Developed our signature approach: <br />
                            modular, data-driven growth systems <br /> that founders can own.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>03</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>OCT 2021</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">Proven <br /> Results
                            Emerge</h4>
                          <p>First clients achieve 300%+ pipeline <br />
                            growth within 90 days using our <br /> systematic approach.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>04</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>OCT 2022</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">Scale & <br />
                            Recognition</h4>
                          <p>100+ SaaS companies trust KLYRR <br />
                            for their growth systems and <br /> predictable results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>05</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>Present</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">The Future <br />
                            of Growth</h4>
                          <p>Continuing to eliminate chaos from <br />
                            SaaS growth, one founder at a <br /> time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="journey-slider-item p-relative">
                        <div className="journey-stroke-text">
                          <h2>06</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>DEC 2023</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">KLYRR <br />
                            Officially Launches</h4>
                          <p>Bringing systematic, founder-owned <br />
                            growth solutions to the SaaS <br /> community.
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
      {/* tp-journey-area-end */}

      {/* tp-cta-area-start */}
      <div className="tp-cta-area p-relative pb-60 pt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-cta-bg" style={{backgroundImage: 'url(/assets/img/cta/cta-bg.jpg)'}}>
                <div className="tp-cta-content tp-inner-font text-center">
                  <h3 className="tp-section-title text-white">Ready to scale predictably?</h3>
                  <p>Everything you need to build systematic, measurable growth <br />
                    that compounds over time.</p>
                  <a className="tp-btn-inner white-bg text-black" href="/contact">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-cta-area-end */}
    </PageLayout>
  )
}