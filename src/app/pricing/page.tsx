'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('monthly')

  return (
    <PageLayout>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area p-relative">
        <div className="breadcrumb-shape-1 z-index-3">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="breadcrumb-shape-2 z-index-3">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-7 col-md-7">
              <div className="price-banner z-index-3">
                <div className="price-banner-title-box">
                  <h3 className="price-banner-title tp-char-animation">Pricing plans</h3>
                  <p>Clear, affordable plans for every team and requirement.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-5">
              <div className="tp-price__btn-box tp-price__btn-inner">
                <div className="tp-price__btn-line d-none d-md-block">
                  <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.164835 56.549C40.9814 63.3663 32.9699 -14.7417 50.2037 30.0803C67.4374 74.9024 -21.1494 2.27453 55.6761 0.848635" stroke="white" strokeDasharray="3 3"/>
                  </svg>
                </div>
                <div className="tp-price__btn-offer-tag d-none d-md-block">
                  <span>SAVE <br /> 35%</span>
                </div>
                <nav>
                  <div className="nav nav-tab tp-price__btn-bg" id="nav-tab" role="tablist">
                    <button 
                      className={`nav-link monthly ${activeTab === 'monthly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('monthly')}
                      type="button"
                    >
                      Monthly
                    </button>
                    <button 
                      className={`nav-link yearly ${activeTab === 'yearly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('yearly')}
                      type="button"
                    >
                      Yearly
                    </button>
                    <span className="test"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Area */}
      <div className="tp-price-area mb-120">
        <div className="container">
          <div className="price-tab-content">
            <div className="tab-content" id="nav-tabContent">
              {/* Monthly Tab */}
              <div className={`tab-pane fade ${activeTab === 'monthly' ? 'show active' : ''}`} role="tabpanel">
                <div className="tp-price-table price-inner-white-bg z-index-3">
                  <div className="tp-price-table-wrapper">
                    <div className="row g-0 align-items-center">
                      <div className="col-4">
                        <div className="tp-price-header">
                          <div className="tp-price-header-img">
                            <img src="/assets/img/price/price-4.1.png" alt="" />
                          </div>
                          <div className="tp-price-header-content">
                            <p>You pay <span>$2,500/mo</span> today Renews <br />
                              next month for <span>$2,500/mo</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tp-price-top-wrapper">
                          <div className="tp-price-top-item text-center">
                            <div className="tp-price-top-tag-wrapper">
                              <span>STARTER</span>
                              <p>Perfect for early-stage <br /> startups getting started</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>$2,500 <span>/mo</span></h4>
                              <p>Billed monthly</p>
                              <a className="tp-btn-service" href="/contact">Get Started</a>
                            </div>
                          </div>
                          <div className="tp-price-top-item text-center active">
                            <div className="tp-price-top-tag-wrapper">
                              <span>GROWTH</span>
                              <p>For scaling SaaS <br /> companies expanding fast</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>$5,000 <span>/mo</span></h4>
                              <p>Billed monthly</p>
                              <a className="tp-btn-service" href="/contact">Get Started</a>
                            </div>
                          </div>
                          <div className="tp-price-top-item text-center">
                            <div className="tp-price-top-tag-wrapper">
                              <span>ENTERPRISE</span>
                              <p>Full GTM transformation <br /> for large organizations</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>Custom</h4>
                              <p>Custom pricing</p>
                              <a className="tp-btn-service" href="/contact">Contact Sales</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-price-feature-wrapper">
                      <div className="row g-0">
                        <div className="col-4">
                          <div className="tp-price-feature-box">
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>GTM Engines</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Number of GTM engines included in your plan</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Implementation</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Level of implementation support provided</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Reporting</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Frequency and depth of performance reports</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Support Level</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Type and responsiveness of customer support</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Optimization</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Frequency of performance optimization reviews</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="tp-price-feature-info-item">
                            <div className="tp-price-feature-info text-center">
                              <span>1</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Basic</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Monthly</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Email</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>-</span>
                            </div>
                          </div>
                          <div className="tp-price-feature-info-item active">
                            <div className="tp-price-feature-info text-center">
                              <span>2-3</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Advanced</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Weekly</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Slack</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Quarterly</span>
                            </div>
                          </div>
                          <div className="tp-price-feature-info-item">
                            <div className="tp-price-feature-info text-center">
                              <span>All</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>White-glove</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Real-time</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Dedicated</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Continuous</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Tab */}
              <div className={`tab-pane fade ${activeTab === 'yearly' ? 'show active' : ''}`} role="tabpanel">
                <div className="tp-price-table price-inner-white-bg z-index-5">
                  <div className="tp-price-table-wrapper">
                    <div className="row g-0 align-items-center">
                      <div className="col-4">
                        <div className="tp-price-header">
                          <div className="tp-price-header-img">
                            <img src="/assets/img/price/price-4.1.png" alt="" />
                          </div>
                          <div className="tp-price-header-content">
                            <p>You pay <span>$24,000/year</span> today <br />
                              Save <span>35%</span> with annual billing</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tp-price-top-wrapper">
                          <div className="tp-price-top-item text-center">
                            <div className="tp-price-top-tag-wrapper">
                              <span>STARTER</span>
                              <p>Perfect for early-stage <br /> startups getting started</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>$1,950 <span>/mo</span></h4>
                              <p>Billed annually</p>
                              <a className="tp-btn-service" href="/contact">Get Started</a>
                            </div>
                          </div>
                          <div className="tp-price-top-item text-center active">
                            <div className="tp-price-top-tag-wrapper">
                              <span>GROWTH</span>
                              <p>For scaling SaaS <br /> companies expanding fast</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>$3,900 <span>/mo</span></h4>
                              <p>Billed annually</p>
                              <a className="tp-btn-service" href="/contact">Get Started</a>
                            </div>
                          </div>
                          <div className="tp-price-top-item text-center">
                            <div className="tp-price-top-tag-wrapper">
                              <span>ENTERPRISE</span>
                              <p>Full GTM transformation <br /> for large organizations</p>
                            </div>
                            <div className="tp-price-top-title-wrapper">
                              <h4>Custom</h4>
                              <p>Custom pricing</p>
                              <a className="tp-btn-service" href="/contact">Contact Sales</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-price-feature-wrapper">
                      <div className="row g-0">
                        <div className="col-4">
                          <div className="tp-price-feature-box">
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>GTM Engines</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Number of GTM engines included in your plan</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Implementation</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Level of implementation support provided</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Reporting</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Frequency and depth of performance reports</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Support Level</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Type and responsiveness of customer support</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-price-feature-item p-relative">
                              <div className="d-flex align-items-center">
                                <span>Optimization</span>
                                <div className="tp-price-feature-tooltip-box p-relative">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.5" cx="8" cy="8" r="7" stroke="#5F6168" strokeWidth="1.5"/>
                                    <path d="M8 11.5V7.3" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19941)" fill="#5F6168"/>
                                  </svg>
                                  <div className="tp-price-feature-tooltip">
                                    <p>Frequency of performance optimization reviews</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="tp-price-feature-info-item">
                            <div className="tp-price-feature-info text-center">
                              <span>1</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Basic</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Monthly</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Email</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>-</span>
                            </div>
                          </div>
                          <div className="tp-price-feature-info-item active">
                            <div className="tp-price-feature-info text-center">
                              <span>2-3</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Advanced</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Weekly</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Slack</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Quarterly</span>
                            </div>
                          </div>
                          <div className="tp-price-feature-info-item">
                            <div className="tp-price-feature-info text-center">
                              <span>All</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>White-glove</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Real-time</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Dedicated</span>
                            </div>
                            <div className="tp-price-feature-info text-center">
                              <span>Continuous</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Area */}
      <div className="tp-cta-area p-relative">
        <div className="tp-cta-grey-bg grey-bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-cta-bg" data-background="/assets/img/cta/cta-bg.jpg">
                <div className="tp-cta-content tp-inner-font text-center">
                  <h3 className="tp-section-title text-white">Try our service now!</h3>
                  <p>Everything you need to accept card payments and grow your business <br />
                    anywhere on the planet.</p>
                  <a className="tp-btn-inner white-bg text-black" href="/contact">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}