'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ServiceDetailsPage() {
  return (
    <PageLayout>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
        <div className="breadcrumb__thumb" style={{backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg.jpg)'}}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper text-center">
                <h2 className="breadcrumb__title">Service Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/service">Services</Link></span></li>
                      <li><span>Service Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Service Details Area */}
      <div className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-service-details-wrapper">
                <div className="tp-service-details-thumb mb-40">
                  <img src="/assets/img/service/sv-details-1.jpg" alt="" />
                </div>
                <h3 className="tp-service-details-title mb-20">Zero-to-Pipeline Engine</h3>
                <p className="mb-30">
                  Transform cold traffic into qualified pipeline with our proven Zero-to-Pipeline Engine. 
                  This comprehensive GTM system is designed to capture, nurture, and convert prospects 
                  at every stage of their journey.
                </p>
                
                <h4 className="tp-service-details-subtitle mb-20">The Challenge</h4>
                <p className="mb-30">
                  Most SaaS companies struggle with leaky funnels. Visitors come to your site, 
                  maybe download a resource, then disappear forever. Your sales team wastes time 
                  on unqualified leads while hot prospects slip through the cracks.
                </p>

                <h4 className="tp-service-details-subtitle mb-20">Our Solution</h4>
                <div className="tp-service-details-list mb-40">
                  <ul>
                    <li><i className="far fa-check"></i> <strong>Smart Lead Capture:</strong> Multi-touch attribution and progressive profiling</li>
                    <li><i className="far fa-check"></i> <strong>Behavioral Scoring:</strong> AI-powered lead scoring based on engagement patterns</li>
                    <li><i className="far fa-check"></i> <strong>Automated Nurture:</strong> Personalized email sequences based on persona and stage</li>
                    <li><i className="far fa-check"></i> <strong>Sales Enablement:</strong> Automated alerts and insights for perfect timing</li>
                    <li><i className="far fa-check"></i> <strong>Pipeline Analytics:</strong> Real-time visibility into funnel performance</li>
                  </ul>
                </div>

                <div className="row mb-40">
                  <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="tp-service-details-img">
                      <img src="/assets/img/service/service-3-bg.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="tp-service-details-img">
                      <img src="/assets/img/service/sv-dashbord.png" alt="" />
                    </div>
                  </div>
                </div>

                <h4 className="tp-service-details-subtitle mb-20">Expected Results</h4>
                <p className="mb-30">
                  Within 90 days of implementation, our clients typically see:
                </p>
                <div className="tp-service-details-stats mb-40">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                      <div className="tp-service-stat text-center">
                        <h3>150+</h3>
                        <p>Qualified Leads</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                      <div className="tp-service-stat text-center">
                        <h3>44%</h3>
                        <p>Demo Conversion</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                      <div className="tp-service-stat text-center">
                        <h3>7 Days</h3>
                        <p>To First Demo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="tp-service-details-subtitle mb-20">Implementation Process</h4>
                <div className="tp-service-process mb-40">
                  <div className="tp-service-process-item d-flex mb-20">
                    <div className="tp-service-process-number">
                      <span>01</span>
                    </div>
                    <div className="tp-service-process-content">
                      <h5>Funnel Audit</h5>
                      <p>We analyze your current funnel to identify leaks and opportunities</p>
                    </div>
                  </div>
                  <div className="tp-service-process-item d-flex mb-20">
                    <div className="tp-service-process-number">
                      <span>02</span>
                    </div>
                    <div className="tp-service-process-content">
                      <h5>System Design</h5>
                      <p>Custom GTM engine blueprint based on your ICP and sales process</p>
                    </div>
                  </div>
                  <div className="tp-service-process-item d-flex mb-20">
                    <div className="tp-service-process-number">
                      <span>03</span>
                    </div>
                    <div className="tp-service-process-content">
                      <h5>Implementation</h5>
                      <p>We build and deploy all systems, integrations, and automations</p>
                    </div>
                  </div>
                  <div className="tp-service-process-item d-flex">
                    <div className="tp-service-process-number">
                      <span>04</span>
                    </div>
                    <div className="tp-service-process-content">
                      <h5>Optimization</h5>
                      <p>Continuous testing and refinement to maximize conversions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-service-details-sidebar">
                {/* Service List */}
                <div className="tp-service-details-widget mb-40">
                  <h4 className="tp-service-details-widget-title mb-25">All Services</h4>
                  <div className="tp-service-details-widget-list">
                    <ul>
                      <li className="active">
                        <Link href="/service/zero-to-pipeline">
                          Zero-to-Pipeline Engine <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/demo-conversion">
                          Demo Conversion Killshot <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/inbound-magnet">
                          Inbound Magnet Engine <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/founder-signal">
                          Founder Signal Engine <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/land-expand">
                          Land & Expand Engine <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/sales-transition">
                          Sales Transition System <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="tp-service-details-widget tp-service-details-cta mb-40">
                  <div className="tp-service-details-cta-content text-center">
                    <h4 className="text-white mb-20">Ready to Fix Your Funnel?</h4>
                    <p className="text-white mb-30">Get a free GTM audit and see exactly where you're leaking revenue.</p>
                    <Link href="/contact" className="tp-btn-yellow-lg">
                      Get Free Audit
                    </Link>
                  </div>
                </div>

                {/* Contact Widget */}
                <div className="tp-service-details-widget">
                  <h4 className="tp-service-details-widget-title mb-25">Need Help?</h4>
                  <div className="tp-service-details-contact">
                    <div className="tp-service-details-contact-item mb-20">
                      <i className="flaticon-phone-call"></i>
                      <div className="tp-service-details-contact-content">
                        <span>Call us</span>
                        <h5><a href="tel:+1234567890">+1 (234) 567-890</a></h5>
                      </div>
                    </div>
                    <div className="tp-service-details-contact-item">
                      <i className="flaticon-email"></i>
                      <div className="tp-service-details-contact-content">
                        <span>Email us</span>
                        <h5><a href="mailto:contact@klyrr.com">contact@klyrr.com</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Details Area End */}
    </PageLayout>
  )
}