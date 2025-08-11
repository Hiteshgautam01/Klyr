'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function CareerDetailsPage() {
  const jobPosition = {
    title: 'Senior GTM Strategist',
    department: 'Strategy',
    location: 'Remote',
    type: 'Full-time',
    experience: '5-8 years',
    salary: '$120,000 - $160,000',
    postedDate: 'January 15, 2024',
    description: 'We are looking for a Senior GTM Strategist to lead client engagements and design custom go-to-market engines for high-growth SaaS companies. You will work directly with C-level executives to diagnose funnel leaks, design revenue systems, and drive implementation.',
    responsibilities: [
      'Lead end-to-end GTM strategy engagements for enterprise SaaS clients',
      'Conduct comprehensive funnel audits and revenue operations assessments',
      'Design custom GTM engines based on client ICP, sales process, and growth stage',
      'Collaborate with implementation team to ensure successful deployment',
      'Present strategic recommendations to C-level stakeholders',
      'Develop frameworks and methodologies for GTM optimization',
      'Mentor junior strategists and contribute to team growth'
    ],
    requirements: [
      '5-8 years of experience in revenue operations, sales operations, or GTM roles',
      'Proven track record of building and scaling GTM engines at B2B SaaS companies',
      'Deep understanding of sales funnels, lead scoring, and revenue attribution',
      'Experience with CRM platforms (Salesforce, HubSpot) and marketing automation',
      'Strong analytical skills with ability to interpret complex data',
      'Excellent communication and presentation skills',
      'Consulting or client-facing experience preferred',
      'Bachelor\'s degree in Business, Marketing, or related field; MBA preferred'
    ],
    benefits: [
      'Competitive salary plus performance bonuses',
      '100% remote work with flexible hours',
      'Equity participation in high-growth company',
      'Comprehensive health, dental, and vision insurance',
      '$3,000 annual learning and development budget',
      'Latest MacBook Pro and home office setup allowance',
      'Unlimited PTO policy',
      'Quarterly team retreats in amazing locations'
    ],
    skills: [
      'Revenue Operations',
      'GTM Strategy',
      'Sales Process Design',
      'Data Analysis',
      'CRM Management',
      'Client Consultation'
    ]
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
                <h2 className="breadcrumb__title">Career Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/career">Careers</Link></span></li>
                      <li><span>Career Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Career Details Area */}
      <div className="tp-career-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-career-details-wrapper">
                {/* Job Header */}
                <div className="tp-career-details-header mb-40">
                  <h2 className="tp-career-details-title mb-20">{jobPosition.title}</h2>
                  <div className="tp-career-details-meta">
                    <span className="mr-30"><i className="fal fa-briefcase"></i> {jobPosition.department}</span>
                    <span className="mr-30"><i className="fal fa-map-marker-alt"></i> {jobPosition.location}</span>
                    <span className="mr-30"><i className="fal fa-clock"></i> {jobPosition.type}</span>
                    <span className="mr-30"><i className="fal fa-user-graduate"></i> {jobPosition.experience}</span>
                    <span><i className="fal fa-calendar-alt"></i> Posted {jobPosition.postedDate}</span>
                  </div>
                </div>

                {/* Job Description */}
                <div className="tp-career-details-description mb-40">
                  <h4 className="tp-career-details-subtitle mb-20">Job Description</h4>
                  <p>{jobPosition.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="tp-career-details-responsibilities mb-40">
                  <h4 className="tp-career-details-subtitle mb-20">Key Responsibilities</h4>
                  <ul className="tp-career-details-list">
                    {jobPosition.responsibilities.map((responsibility, index) => (
                      <li key={index}><i className="far fa-check"></i> {responsibility}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="tp-career-details-requirements mb-40">
                  <h4 className="tp-career-details-subtitle mb-20">Requirements</h4>
                  <ul className="tp-career-details-list">
                    {jobPosition.requirements.map((requirement, index) => (
                      <li key={index}><i className="far fa-check"></i> {requirement}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="tp-career-details-benefits mb-40">
                  <h4 className="tp-career-details-subtitle mb-20">What We Offer</h4>
                  <ul className="tp-career-details-list">
                    {jobPosition.benefits.map((benefit, index) => (
                      <li key={index}><i className="far fa-star"></i> {benefit}</li>
                    ))}
                  </ul>
                </div>

                {/* Application Process */}
                <div className="tp-career-details-process mb-40">
                  <h4 className="tp-career-details-subtitle mb-20">Application Process</h4>
                  <div className="tp-career-process">
                    <div className="tp-career-process-item d-flex mb-20">
                      <div className="tp-career-process-number">
                        <span>01</span>
                      </div>
                      <div className="tp-career-process-content">
                        <h5>Application Review</h5>
                        <p>We'll review your application and resume within 3-5 business days</p>
                      </div>
                    </div>
                    <div className="tp-career-process-item d-flex mb-20">
                      <div className="tp-career-process-number">
                        <span>02</span>
                      </div>
                      <div className="tp-career-process-content">
                        <h5>Initial Interview</h5>
                        <p>30-minute video call with our hiring manager to discuss your background</p>
                      </div>
                    </div>
                    <div className="tp-career-process-item d-flex mb-20">
                      <div className="tp-career-process-number">
                        <span>03</span>
                      </div>
                      <div className="tp-career-process-content">
                        <h5>Technical Assessment</h5>
                        <p>Case study presentation on GTM strategy for a sample SaaS company</p>
                      </div>
                    </div>
                    <div className="tp-career-process-item d-flex">
                      <div className="tp-career-process-number">
                        <span>04</span>
                      </div>
                      <div className="tp-career-process-content">
                        <h5>Final Interview</h5>
                        <p>Meet with team members and leadership for culture and role fit</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="tp-career-details-apply text-center">
                  <h4 className="mb-30">Ready to Join Our Mission?</h4>
                  <p className="mb-40">Help us fix broken funnels and drive predictable growth for SaaS companies worldwide.</p>
                  <a href="mailto:careers@klyrr.com?subject=Application for Senior GTM Strategist" className="tp-btn-blue-lg">
                    Apply for This Position
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-career-details-sidebar">
                {/* Job Summary */}
                <div className="tp-career-details-widget mb-40">
                  <h4 className="tp-career-details-widget-title mb-25">Job Summary</h4>
                  <div className="tp-career-details-summary">
                    <div className="tp-career-details-summary-item mb-20">
                      <span className="label">Position:</span>
                      <span className="value">{jobPosition.title}</span>
                    </div>
                    <div className="tp-career-details-summary-item mb-20">
                      <span className="label">Department:</span>
                      <span className="value">{jobPosition.department}</span>
                    </div>
                    <div className="tp-career-details-summary-item mb-20">
                      <span className="label">Location:</span>
                      <span className="value">{jobPosition.location}</span>
                    </div>
                    <div className="tp-career-details-summary-item mb-20">
                      <span className="label">Type:</span>
                      <span className="value">{jobPosition.type}</span>
                    </div>
                    <div className="tp-career-details-summary-item mb-20">
                      <span className="label">Experience:</span>
                      <span className="value">{jobPosition.experience}</span>
                    </div>
                    <div className="tp-career-details-summary-item">
                      <span className="label">Salary:</span>
                      <span className="value">{jobPosition.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="tp-career-details-widget mb-40">
                  <h4 className="tp-career-details-widget-title mb-25">Required Skills</h4>
                  <div className="tp-career-details-skills">
                    {jobPosition.skills.map((skill, index) => (
                      <span key={index} className="tp-career-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Other Positions */}
                <div className="tp-career-details-widget mb-40">
                  <h4 className="tp-career-details-widget-title mb-25">Other Open Positions</h4>
                  <div className="tp-career-details-positions">
                    <div className="tp-career-position-item mb-20">
                      <h5><Link href="/career/2">Revenue Operations Manager</Link></h5>
                      <span>Operations • Remote • Full-time</span>
                    </div>
                    <div className="tp-career-position-item mb-20">
                      <h5><Link href="/career/3">Sales Engineer</Link></h5>
                      <span>Engineering • Remote • Full-time</span>
                    </div>
                    <div className="tp-career-position-item">
                      <h5><Link href="/career/4">Customer Success Manager</Link></h5>
                      <span>Customer Success • Remote • Full-time</span>
                    </div>
                  </div>
                  <div className="text-center mt-30">
                    <Link href="/career" className="tp-btn-blue-sm">
                      View All Positions
                    </Link>
                  </div>
                </div>

                {/* Contact Widget */}
                <div className="tp-career-details-widget">
                  <h4 className="tp-career-details-widget-title mb-25">Questions?</h4>
                  <div className="tp-career-details-contact">
                    <div className="tp-career-details-contact-item mb-20">
                      <i className="flaticon-email"></i>
                      <div className="tp-career-details-contact-content">
                        <span>Email us</span>
                        <h5><a href="mailto:careers@klyrr.com">careers@klyrr.com</a></h5>
                      </div>
                    </div>
                    <div className="tp-career-details-contact-item">
                      <i className="flaticon-phone-call"></i>
                      <div className="tp-career-details-contact-content">
                        <span>Call us</span>
                        <h5><a href="tel:+1234567890">+1 (234) 567-890</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Career Details Area End */}
    </PageLayout>
  )
}