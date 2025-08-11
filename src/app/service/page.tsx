'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ServicePage() {
  return (
    <PageLayout>
      {/* Breadcrumb Area */}
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
                <div className="about-banner-content">
                  <h4 className="about-banner-title" data-parallax='{"y": 1000, "smoothness": 10}'>
                    <span>Our</span> <br />
                    <span>Services</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Service Area */}
      <div className="tp-service-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                <div className="tp-section-box tp-section-box-2  p-relative">
                  <span className="tp-section-subtitle right d-inline-block">Our Services</span>
                  <h2 className="tp-section-title">
                    Modular GTM Systems <br />
                    For SaaS Growth
                  </h2>
                </div>
                <div className="tp-service-section-content pb-8">
                  <p>Each engine fixes a common SaaS failure point — demo no-shows, <br />
                    low close rates, ghosted outbound, churn.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30 tp-service-border-right">
              <div className="tp-service-item-four tp-service-item-four-active p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-1.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/zero-to-pipeline">Zero-to-Pipeline Engine</Link>
                  </h3>
                  <p>Transform cold traffic into qualified pipeline with automated nurture sequences and scoring systems.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/zero-to-pipeline">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30 tp-service-border-right">
              <div className="tp-service-item-four p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-2.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/demo-conversion">Demo Conversion Killshot</Link>
                  </h3>
                  <p>Convert 44% of demos with proven frameworks that handle objections and drive urgency.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/demo-conversion">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30">
              <div className="tp-service-item-four p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-3.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/inbound-magnet">Inbound Magnet Engine</Link>
                  </h3>
                  <p>Generate 150+ SQLs in 90 days with content systems that attract and convert your ICP.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/inbound-magnet">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30 tp-service-border-right">
              <div className="tp-service-item-four p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-4.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/founder-signal">Founder Signal Engine</Link>
                  </h3>
                  <p>Build founder-led content systems that establish category authority and drive enterprise deals.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/founder-signal">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30 tp-service-border-right">
              <div className="tp-service-item-four p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-1.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/land-expand">Land & Expand Engine</Link>
                  </h3>
                  <p>Systematic upsell campaigns that compound customer value and drive $390K+ expansion revenue.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/land-expand">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-30">
              <div className="tp-service-item-four p-relative">
                <div className="tp-service-item-four-icon">
                  <img src="/assets/img/service/sv-icon-4-2.png" alt="" />
                </div>
                <div className="tp-service-item-four-content">
                  <h3 className="tp-service-item-four-title">
                    <Link href="/products/sales-transition">Sales Transition System</Link>
                  </h3>
                  <p>Scale from founder-led to team selling without losing conversion rates or deal velocity.</p>
                  <div className="tp-service-item-four-btn">
                    <Link href="/products/sales-transition">
                      Learn More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Area End */}

      {/* CTA Area */}
      <div className="tp-sales-area tp-sales-space" style={{backgroundImage: 'url(/assets/img/cta/cta-bg.jpg)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-sales-section-box pb-20">
                <h3 className="tp-section-title-3 pb-15 text-white">Fix Your Funnel in Days, <br />Not Quarters</h3>
                <p className="text-white">Stop guessing. KLYRR audits your funnel and exposes the exact leaks — from ICP misfires to CRM bloat.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-sales-btn text-start text-lg-end">
                <Link className="tp-btn-yellow-lg circle-effect mr-15" href="#"><i className="fal fa-exclamation-triangle"></i> Fix My Funnel</Link>
                <Link className="tp-btn-white-yellow" href="#"><i className="fal fa-search"></i> Show Me My Leaks</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Area End */}
    </PageLayout>
  )
}