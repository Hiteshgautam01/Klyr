'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function IntegrationsPage() {
  const integrations = [
    { id: 1, name: 'Salesforce', logo: '/assets/img/integration/integration-1.png', category: 'CRM' },
    { id: 2, name: 'HubSpot', logo: '/assets/img/integration/integration-2.png', category: 'CRM' },
    { id: 3, name: 'Slack', logo: '/assets/img/integration/integration-3.png', category: 'Communication' },
    { id: 4, name: 'Zoom', logo: '/assets/img/integration/integration-4.png', category: 'Communication' },
    { id: 5, name: 'Google Analytics', logo: '/assets/img/integration/integration-5.png', category: 'Analytics' },
    { id: 6, name: 'Stripe', logo: '/assets/img/integration/integration-6.png', category: 'Payment' },
    { id: 7, name: 'Zapier', logo: '/assets/img/integration/integration-7.png', category: 'Automation' },
    { id: 8, name: 'Mailchimp', logo: '/assets/img/integration/integration-8.png', category: 'Marketing' },
  ]

  return (
    <PageLayout>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
        <div className="breadcrumb__thumb" style={{backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg.jpg)'}}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper text-center">
                <h2 className="breadcrumb__title">Integrations</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span>Integrations</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Integration Area */}
      <div className="tp-integration-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-integration-section text-center mb-60">
                <span className="tp-section-subtitle">Seamless Integrations</span>
                <h2 className="tp-section-title">
                  Connect KLYRR With Your <br />
                  Entire Tech Stack
                </h2>
                <p>KLYRR integrates with all major SaaS tools to create a unified GTM engine <br />
                  that drives results across your entire revenue operation.</p>
              </div>
            </div>
          </div>
          
          {/* Integration Categories */}
          <div className="row mb-50">
            <div className="col-xl-12">
              <div className="tp-integration-filter text-center">
                <button className="active" data-filter="*">All Integrations</button>
                <button data-filter=".crm">CRM</button>
                <button data-filter=".communication">Communication</button>
                <button data-filter=".analytics">Analytics</button>
                <button data-filter=".payment">Payment</button>
                <button data-filter=".automation">Automation</button>
                <button data-filter=".marketing">Marketing</button>
              </div>
            </div>
          </div>

          {/* Integration Grid */}
          <div className="row">
            {integrations.map((integration) => (
              <div key={integration.id} className={`col-xl-3 col-lg-4 col-md-6 mb-30 ${integration.category.toLowerCase()}`}>
                <div className="tp-integration-item text-center">
                  <div className="tp-integration-item-thumb mb-20">
                    <img src={integration.logo} alt={integration.name} />
                  </div>
                  <div className="tp-integration-item-content">
                    <h4 className="tp-integration-item-title">{integration.name}</h4>
                    <p>{integration.category}</p>
                    <Link href="#" className="tp-btn-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="row mt-50">
            <div className="col-xl-12">
              <div className="tp-integration-cta text-center">
                <h3 className="mb-20">Don't See Your Tool?</h3>
                <p className="mb-30">We're always adding new integrations. Let us know what you need.</p>
                <Link href="/contact" className="tp-btn-blue-lg tp-btn-hover alt-color-black">
                  <span>Request Integration</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integration Area End */}
    </PageLayout>
  )
}