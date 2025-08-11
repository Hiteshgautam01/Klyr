'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function TeamDetailsPage() {
  const teamMember = {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: '/assets/img/team/team-details-1.jpg',
    bio: 'Sarah is the founder and CEO of KLYRR, bringing over 12 years of experience in GTM operations and revenue optimization. Before founding KLYRR, she led revenue operations at three high-growth SaaS companies, helping them scale from Series A to IPO.',
    experience: '12+ Years in Revenue Operations',
    specializations: ['GTM Strategy', 'Revenue Operations', 'Sales Process Design', 'Customer Success'],
    education: 'MBA, Stanford Graduate School of Business',
    previousRoles: [
      'VP Revenue Operations at CloudTech (IPO)',
      'Director of Sales Ops at DataFlow ($50M ARR)',
      'Senior Sales Analyst at TechStart (Series C)'
    ],
    achievements: [
      'Led 3 companies through successful exits totaling $2.4B',
      'Designed GTM engines that generated $500M+ in pipeline',
      'Scaled sales teams from 5 to 150+ reps',
      'Built revenue operations frameworks used by 100+ SaaS companies'
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@klyrr.com'
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
                <h2 className="breadcrumb__title">Team Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/team">Team</Link></span></li>
                      <li><span>Team Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Team Details Area */}
      <div className="tp-team-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-team-details-wrapper">
                {/* Profile Header */}
                <div className="tp-team-details-header mb-50">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                      <div className="tp-team-details-thumb mb-30">
                        <img src={teamMember.image} alt={teamMember.name} />
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                      <div className="tp-team-details-info mb-30">
                        <h3 className="tp-team-details-title mb-10">{teamMember.name}</h3>
                        <span className="tp-team-details-role mb-20">{teamMember.role}</span>
                        <p className="mb-30">{teamMember.bio}</p>
                        
                        <div className="tp-team-details-social">
                          <a href={teamMember.social.linkedin}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href={teamMember.social.twitter}>
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href={`mailto:${teamMember.social.email}`}>
                            <i className="far fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="tp-team-details-experience mb-50">
                  <h4 className="tp-team-details-subtitle mb-30">Professional Experience</h4>
                  <div className="tp-team-details-experience-list">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="tp-team-details-experience-item mb-30">
                          <h5>Experience</h5>
                          <p>{teamMember.experience}</p>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="tp-team-details-experience-item mb-30">
                          <h5>Education</h5>
                          <p>{teamMember.education}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h5 className="mb-20">Previous Roles</h5>
                  <ul className="tp-team-details-list mb-30">
                    {teamMember.previousRoles.map((role, index) => (
                      <li key={index}><i className="far fa-check"></i> {role}</li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div className="tp-team-details-skills mb-50">
                  <h4 className="tp-team-details-subtitle mb-30">Areas of Expertise</h4>
                  <div className="tp-team-details-skills-list">
                    <div className="row">
                      {teamMember.specializations.map((skill, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 mb-20">
                          <div className="tp-team-details-skill-item">
                            <i className="flaticon-check-mark"></i>
                            <span>{skill}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="tp-team-details-achievements mb-50">
                  <h4 className="tp-team-details-subtitle mb-30">Key Achievements</h4>
                  <ul className="tp-team-details-list">
                    {teamMember.achievements.map((achievement, index) => (
                      <li key={index}><i className="far fa-star"></i> {achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Quote Section */}
                <div className="tp-team-details-quote">
                  <blockquote>
                    <p>"Most SaaS companies are sitting on goldmines of untapped revenue. The key is building systems that turn every interaction into a growth opportunity. At KLYRR, we don't just fix funnels – we engineer revenue predictability."</p>
                    <cite>- {teamMember.name}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-team-details-sidebar">
                {/* Contact Widget */}
                <div className="tp-team-details-widget mb-40">
                  <h4 className="tp-team-details-widget-title mb-25">Get In Touch</h4>
                  <div className="tp-team-details-contact">
                    <div className="tp-team-details-contact-item mb-20">
                      <i className="flaticon-email"></i>
                      <div className="tp-team-details-contact-content">
                        <span>Email</span>
                        <h5><a href={`mailto:${teamMember.social.email}`}>{teamMember.social.email}</a></h5>
                      </div>
                    </div>
                    <div className="tp-team-details-contact-item mb-20">
                      <i className="flaticon-linkedin"></i>
                      <div className="tp-team-details-contact-content">
                        <span>LinkedIn</span>
                        <h5><a href={teamMember.social.linkedin}>Connect on LinkedIn</a></h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Team Members */}
                <div className="tp-team-details-widget mb-40">
                  <h4 className="tp-team-details-widget-title mb-25">Other Team Members</h4>
                  <div className="tp-team-details-team-list">
                    <div className="tp-team-details-team-item d-flex align-items-center mb-20">
                      <div className="tp-team-details-team-thumb mr-15">
                        <img src="/assets/img/team/team-4-2.png" alt="" style={{width: '60px', height: '60px', borderRadius: '50%'}} />
                      </div>
                      <div className="tp-team-details-team-content">
                        <h5><Link href="/team/2">Michael Torres</Link></h5>
                        <span>Head of GTM Strategy</span>
                      </div>
                    </div>
                    <div className="tp-team-details-team-item d-flex align-items-center mb-20">
                      <div className="tp-team-details-team-thumb mr-15">
                        <img src="/assets/img/team/team-4-3.png" alt="" style={{width: '60px', height: '60px', borderRadius: '50%'}} />
                      </div>
                      <div className="tp-team-details-team-content">
                        <h5><Link href="/team/3">Priya Sharma</Link></h5>
                        <span>VP of Customer Success</span>
                      </div>
                    </div>
                    <div className="tp-team-details-team-item d-flex align-items-center">
                      <div className="tp-team-details-team-thumb mr-15">
                        <img src="/assets/img/team/team-4-4.png" alt="" style={{width: '60px', height: '60px', borderRadius: '50%'}} />
                      </div>
                      <div className="tp-team-details-team-content">
                        <h5><Link href="/team/4">David Kim</Link></h5>
                        <span>Engineering Lead</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-30">
                    <Link href="/team" className="tp-btn-blue-sm">
                      View All Team
                    </Link>
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="tp-team-details-widget tp-team-details-cta">
                  <div className="tp-team-details-cta-content text-center">
                    <h4 className="text-white mb-20">Want to Work With Us?</h4>
                    <p className="text-white mb-30">Join our mission to fix broken funnels and drive predictable growth.</p>
                    <Link href="/career" className="tp-btn-yellow-lg">
                      View Open Positions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Details Area End */}
    </PageLayout>
  )
}