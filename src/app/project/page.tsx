'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: 'B2B SaaS CRM Platform',
      category: 'Revenue Operations',
      result: '44% Demo Close Rate',
      image: '/assets/img/project/project-img-1.jpg',
      description: 'Implemented end-to-end GTM engine for a growing CRM platform.'
    },
    {
      id: 2,
      title: 'Fintech Startup',
      category: 'Sales Acceleration',
      result: '150+ SQLs in 90 Days',
      image: '/assets/img/project/project-img-2.jpg',
      description: 'Built inbound magnet engine that transformed their pipeline.'
    },
    {
      id: 3,
      title: 'Analytics Software',
      category: 'Customer Expansion',
      result: '$390K Expansion Revenue',
      image: '/assets/img/project/project-img-3.jpg',
      description: 'Deployed land & expand engine for systematic upsells.'
    },
    {
      id: 4,
      title: 'HR Tech Platform',
      category: 'Outbound Revival',
      result: '7 Days to First Demo',
      image: '/assets/img/project/project-img-4.jpg',
      description: 'Revived dead outbound with proven re-engagement frameworks.'
    },
    {
      id: 5,
      title: 'MarTech Solution',
      category: 'Founder-Led Growth',
      result: '23% Reply Rate',
      image: '/assets/img/project/project-img-5.jpg',
      description: 'Built founder signal engine for category authority.'
    },
    {
      id: 6,
      title: 'DevOps Platform',
      category: 'Sales Transition',
      result: 'Zero Drop in Close Rate',
      image: '/assets/img/project/project-img-6.jpg',
      description: 'Scaled from founder-led to team selling seamlessly.'
    }
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
                <h2 className="breadcrumb__title">Case Studies</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span>Case Studies</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Project Area */}
      <div className="tp-project-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-section-wrapper text-center mb-60">
                <span className="tp-section-subtitle">Success Stories</span>
                <h2 className="tp-section-title">
                  Real Results From <br />
                  Real SaaS Companies
                </h2>
                <p>See how we've helped SaaS companies fix their funnels <br />
                  and drive predictable growth.</p>
              </div>
            </div>
          </div>
          
          {/* Filter */}
          <div className="row mb-40">
            <div className="col-xl-12">
              <div className="tp-project-filter text-center">
                <button className="active" data-filter="*">All Projects</button>
                <button data-filter=".revenue-ops">Revenue Operations</button>
                <button data-filter=".sales">Sales Acceleration</button>
                <button data-filter=".expansion">Customer Expansion</button>
                <button data-filter=".outbound">Outbound Revival</button>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="tp-project-item">
                  <div className="tp-project-img mb-30">
                    <Link href={`/project/${project.id}`}>
                      <img src={project.image} alt={project.title} />
                    </Link>
                    <div className="tp-project-overlay">
                      <div className="tp-project-overlay-content">
                        <span className="tp-project-category">{project.category}</span>
                        <h4 className="tp-project-title">
                          <Link href={`/project/${project.id}`}>{project.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="tp-project-content">
                    <span className="tp-project-result">{project.result}</span>
                    <p>{project.description}</p>
                    <Link href={`/project/${project.id}`} className="tp-project-link">
                      View Case Study <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Stats */}
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="tp-project-stats grey-bg pt-60 pb-60">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="tp-project-stat text-center">
                      <h3 className="tp-project-stat-number">44%</h3>
                      <p>Average Demo Close Rate</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="tp-project-stat text-center">
                      <h3 className="tp-project-stat-number">150+</h3>
                      <p>SQLs Generated in 90 Days</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="tp-project-stat text-center">
                      <h3 className="tp-project-stat-number">$390K</h3>
                      <p>Average Expansion Revenue</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="tp-project-stat text-center">
                      <h3 className="tp-project-stat-number">7 Days</h3>
                      <p>To First Demo Booked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Area End */}

      {/* CTA Area */}
      <div className="tp-cta-area">
        <div className="container">
          <div className="tp-cta-bg" style={{backgroundImage: 'url(/assets/img/cta/cta-bg.jpg)'}}>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-cta-content text-center">
                  <h3 className="tp-section-title-3 text-white pb-25">Ready to Fix Your Funnel?</h3>
                  <p className="text-white mb-40">Join these successful SaaS companies and transform <br />
                    your GTM engine in days, not quarters.</p>
                  <Link href="/contact" className="tp-btn-yellow-lg circle-effect">
                    Get Your Free GTM Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Area End */}
    </PageLayout>
  )
}