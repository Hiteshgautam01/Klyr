'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function CareerPage() {
  const positions = [
    {
      id: 1,
      title: 'Senior GTM Strategist',
      department: 'Strategy',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead client engagements and design custom GTM engines for high-growth SaaS companies.'
    },
    {
      id: 2,
      title: 'Revenue Operations Manager',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and optimize revenue operations systems that drive predictable growth.'
    },
    {
      id: 3,
      title: 'Sales Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Implement technical solutions and integrations for our GTM engine deployments.'
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure clients achieve maximum value from their KLYRR implementations.'
    },
    {
      id: 5,
      title: 'Content Marketing Lead',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling content that drives inbound demand and thought leadership.'
    },
    {
      id: 6,
      title: 'Product Designer',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive interfaces and experiences for our GTM platform.'
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
                <h2 className="breadcrumb__title">Careers</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span>Careers</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Career Intro Area */}
      <div className="tp-career-intro-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-career-intro-content text-center mb-60">
                <span className="tp-section-subtitle">Join Our Team</span>
                <h2 className="tp-section-title mb-30">
                  Help SaaS Companies <br />
                  Fix Their Broken Funnels
                </h2>
                <p>We're building the future of GTM operations. Join a team of former operators <br />
                  who've been in the trenches and know what it takes to scale.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-career-benefit-item text-center">
                <div className="tp-career-benefit-icon mb-25">
                  <i className="flaticon-flexibility"></i>
                </div>
                <h4 className="tp-career-benefit-title mb-15">100% Remote</h4>
                <p>Work from anywhere in the world. We believe in results, not hours in seats.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-career-benefit-item text-center">
                <div className="tp-career-benefit-icon mb-25">
                  <i className="flaticon-growth"></i>
                </div>
                <h4 className="tp-career-benefit-title mb-15">Growth & Learning</h4>
                <p>Annual learning budget, mentorship programs, and exposure to cutting-edge GTM strategies.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-career-benefit-item text-center">
                <div className="tp-career-benefit-icon mb-25">
                  <i className="flaticon-team"></i>
                </div>
                <h4 className="tp-career-benefit-title mb-15">Impact & Ownership</h4>
                <p>Direct impact on client success. Own your work and see the results compound.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Career Intro Area End */}

      {/* Career Positions Area */}
      <div className="tp-career-position-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-career-position-title-wrapper text-center mb-60">
                <h3 className="tp-section-title-3">Open Positions</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {positions.map((position) => (
                <div key={position.id} className="tp-career-position-item mb-30">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                      <div className="tp-career-position-content">
                        <h4 className="tp-career-position-title mb-10">
                          <Link href={`/career/${position.id}`}>{position.title}</Link>
                        </h4>
                        <p>{position.description}</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tp-career-position-meta d-flex align-items-center justify-content-lg-end">
                        <span className="mr-20"><i className="fal fa-briefcase"></i> {position.department}</span>
                        <span className="mr-20"><i className="fal fa-map-marker-alt"></i> {position.location}</span>
                        <span className="mr-20"><i className="fal fa-clock"></i> {position.type}</span>
                        <Link href={`/career/${position.id}`} className="tp-btn-blue-sm">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Career Positions Area End */}

      {/* CTA Area */}
      <div className="tp-cta-area grey-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cta-content text-center">
                <h3 className="tp-section-title-3 mb-25">Don't See the Right Fit?</h3>
                <p className="mb-40">We're always looking for exceptional talent. Send us your resume <br />
                  and tell us how you can help revolutionize GTM operations.</p>
                <a href="mailto:careers@klyrr.com" className="tp-btn-blue-lg tp-btn-hover alt-color-black">
                  <span>Send Your Resume</span>
                  <b></b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Area End */}
    </PageLayout>
  )
}