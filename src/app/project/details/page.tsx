'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ProjectDetailsPage() {
  const project = {
    title: 'B2B SaaS CRM Platform',
    category: 'Revenue Operations',
    client: 'TechFlow CRM',
    timeline: '90 Days',
    team: '4 Specialists',
    result: '44% Demo Close Rate',
    heroImage: '/assets/img/project/project-details-hero.jpg',
    challenge: 'TechFlow CRM was a growing B2B SaaS platform struggling with a 12% demo close rate and inconsistent lead qualification. Their sales team was spending 60% of their time on unqualified prospects, and marketing-generated leads had poor conversion rates.',
    solution: 'We implemented our Zero-to-Pipeline Engine with advanced lead scoring, automated nurture sequences, and sales enablement tools. The solution included behavioral tracking, progressive profiling, and real-time sales alerts.',
    results: [
      {
        metric: '44%',
        description: 'Demo Close Rate',
        improvement: '+32%'
      },
      {
        metric: '150+',
        description: 'SQLs Generated',
        improvement: 'Monthly'
      },
      {
        metric: '7 Days',
        description: 'To First Demo',
        improvement: '-50%'
      },
      {
        metric: '$2.3M',
        description: 'Pipeline Value',
        improvement: '+280%'
      }
    ],
    implementation: [
      {
        phase: 'Discovery & Audit',
        duration: '2 weeks',
        description: 'Comprehensive analysis of existing funnel, lead sources, and sales processes'
      },
      {
        phase: 'System Design',
        duration: '3 weeks',
        description: 'Custom GTM engine blueprint with lead scoring models and automation workflows'
      },
      {
        phase: 'Implementation',
        duration: '8 weeks',
        description: 'Platform setup, integration deployment, and team training'
      },
      {
        phase: 'Optimization',
        duration: '3 weeks',
        description: 'A/B testing, refinement, and performance optimization'
      }
    ],
    technologies: [
      'Salesforce CRM',
      'HubSpot Marketing Hub',
      'Zapier Automation',
      'Calendly Scheduling',
      'Gong Call Intelligence',
      'Mixpanel Analytics'
    ],
    testimonial: {
      quote: "KLYRR transformed our entire revenue operation. We went from guessing which leads to call to having a systematic engine that identifies and converts our best prospects. The results speak for themselves.",
      author: "Sarah Martinez",
      role: "VP of Sales, TechFlow CRM",
      image: "/assets/img/testimonial/client-1.jpg"
    }
  }

  return (
    <PageLayout>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
        <div className="breadcrumb__thumb" style={{backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg.jpg)'}}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper text-center">
                <h2 className="breadcrumb__title">Project Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/project">Case Studies</Link></span></li>
                      <li><span>Project Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Project Details Area */}
      <div className="tp-project-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-project-details-wrapper">
                {/* Project Header */}
                <div className="tp-project-details-header mb-40">
                  <div className="tp-project-details-meta mb-20">
                    <span className="tp-project-category">{project.category}</span>
                    <span className="tp-project-client">Client: {project.client}</span>
                  </div>
                  <h2 className="tp-project-details-title mb-30">{project.title}</h2>
                  <div className="tp-project-details-info">
                    <div className="row">
                      <div className="col-xl-4 col-md-4">
                        <div className="tp-project-info-item">
                          <span>Timeline</span>
                          <h5>{project.timeline}</h5>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4">
                        <div className="tp-project-info-item">
                          <span>Team Size</span>
                          <h5>{project.team}</h5>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4">
                        <div className="tp-project-info-item">
                          <span>Key Result</span>
                          <h5>{project.result}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="tp-project-details-thumb mb-50">
                  <img src={project.heroImage} alt={project.title} />
                </div>

                {/* Challenge Section */}
                <div className="tp-project-details-challenge mb-50">
                  <h3 className="tp-project-details-subtitle mb-25">The Challenge</h3>
                  <p>{project.challenge}</p>
                </div>

                {/* Solution Section */}
                <div className="tp-project-details-solution mb-50">
                  <h3 className="tp-project-details-subtitle mb-25">Our Solution</h3>
                  <p>{project.solution}</p>
                </div>

                {/* Results Section */}
                <div className="tp-project-details-results mb-50">
                  <h3 className="tp-project-details-subtitle mb-40">Results Achieved</h3>
                  <div className="row">
                    {project.results.map((result, index) => (
                      <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-30">
                        <div className="tp-project-result-item text-center">
                          <div className="tp-project-result-number mb-10">
                            <h3>{result.metric}</h3>
                            <span className="improvement">{result.improvement}</span>
                          </div>
                          <p>{result.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Process */}
                <div className="tp-project-details-implementation mb-50">
                  <h3 className="tp-project-details-subtitle mb-40">Implementation Process</h3>
                  <div className="tp-project-implementation-timeline">
                    {project.implementation.map((phase, index) => (
                      <div key={index} className="tp-project-timeline-item mb-30">
                        <div className="tp-project-timeline-number">
                          <span>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="tp-project-timeline-content">
                          <div className="tp-project-timeline-header mb-15">
                            <h4>{phase.phase}</h4>
                            <span className="duration">{phase.duration}</span>
                          </div>
                          <p>{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="tp-project-details-tech mb-50">
                  <h3 className="tp-project-details-subtitle mb-30">Technologies & Tools</h3>
                  <div className="tp-project-tech-list">
                    <div className="row">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-20">
                          <div className="tp-project-tech-item">
                            <i className="flaticon-check-mark"></i>
                            <span>{tech}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="tp-project-details-testimonial">
                  <div className="tp-project-testimonial-content">
                    <div className="tp-project-testimonial-quote mb-30">
                      <i className="flaticon-quote"></i>
                      <blockquote>
                        <p>"{project.testimonial.quote}"</p>
                      </blockquote>
                    </div>
                    <div className="tp-project-testimonial-author d-flex align-items-center">
                      <div className="tp-project-testimonial-thumb mr-20">
                        <img src={project.testimonial.image} alt={project.testimonial.author} />
                      </div>
                      <div className="tp-project-testimonial-info">
                        <h4>{project.testimonial.author}</h4>
                        <span>{project.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-project-details-sidebar">
                {/* Project Summary */}
                <div className="tp-project-details-widget mb-40">
                  <h4 className="tp-project-details-widget-title mb-25">Project Summary</h4>
                  <div className="tp-project-summary">
                    <div className="tp-project-summary-item mb-20">
                      <span className="label">Client:</span>
                      <span className="value">{project.client}</span>
                    </div>
                    <div className="tp-project-summary-item mb-20">
                      <span className="label">Industry:</span>
                      <span className="value">B2B SaaS</span>
                    </div>
                    <div className="tp-project-summary-item mb-20">
                      <span className="label">Category:</span>
                      <span className="value">{project.category}</span>
                    </div>
                    <div className="tp-project-summary-item mb-20">
                      <span className="label">Timeline:</span>
                      <span className="value">{project.timeline}</span>
                    </div>
                    <div className="tp-project-summary-item">
                      <span className="label">Team:</span>
                      <span className="value">{project.team}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="tp-project-details-widget mb-40">
                  <h4 className="tp-project-details-widget-title mb-25">Key Metrics</h4>
                  <div className="tp-project-metrics">
                    <div className="tp-project-metric-item mb-20">
                      <div className="tp-project-metric-number">44%</div>
                      <div className="tp-project-metric-label">Demo Close Rate</div>
                    </div>
                    <div className="tp-project-metric-item mb-20">
                      <div className="tp-project-metric-number">150+</div>
                      <div className="tp-project-metric-label">Monthly SQLs</div>
                    </div>
                    <div className="tp-project-metric-item">
                      <div className="tp-project-metric-number">$2.3M</div>
                      <div className="tp-project-metric-label">Pipeline Value</div>
                    </div>
                  </div>
                </div>

                {/* Related Projects */}
                <div className="tp-project-details-widget mb-40">
                  <h4 className="tp-project-details-widget-title mb-25">Related Case Studies</h4>
                  <div className="tp-project-related-list">
                    <div className="tp-project-related-item mb-20">
                      <h5><Link href="/project/2">Fintech Startup</Link></h5>
                      <span>Sales Acceleration • 150+ SQLs in 90 Days</span>
                    </div>
                    <div className="tp-project-related-item mb-20">
                      <h5><Link href="/project/3">Analytics Software</Link></h5>
                      <span>Customer Expansion • $390K Expansion Revenue</span>
                    </div>
                    <div className="tp-project-related-item">
                      <h5><Link href="/project/4">HR Tech Platform</Link></h5>
                      <span>Outbound Revival • 7 Days to First Demo</span>
                    </div>
                  </div>
                  <div className="text-center mt-30">
                    <Link href="/project" className="tp-btn-blue-sm">
                      View All Case Studies
                    </Link>
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="tp-project-details-widget tp-project-details-cta">
                  <div className="tp-project-details-cta-content text-center">
                    <h4 className="text-white mb-20">Ready for Similar Results?</h4>
                    <p className="text-white mb-30">Get a free GTM audit and discover your funnel's potential.</p>
                    <Link href="/contact" className="tp-btn-yellow-lg">
                      Get Free Audit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Details Area End */}
    </PageLayout>
  )
}