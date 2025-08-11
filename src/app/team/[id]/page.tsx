'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function TeamDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch team member data based on the ID
  const teamMember = {
    id: params.id,
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: '/assets/img/team/team-details-1.jpg',
    bio: `Sarah Chen is the founder and CEO of KLYRR. With over 15 years of experience building and scaling GTM engines at high-growth SaaS companies, she's helped generate over $100M in pipeline for clients.

    Before founding KLYRR, Sarah was VP of Revenue Operations at a Series C SaaS company where she built the GTM playbook that took them from $10M to $50M ARR in 18 months. She's also held leadership roles at Salesforce, HubSpot, and several successful startups.

    Sarah is passionate about democratizing access to world-class GTM strategies. She believes every SaaS company deserves a revenue engine that actually works, not just looks good on paper.`,
    expertise: [
      'GTM Strategy',
      'Revenue Operations',
      'Sales Process Design',
      'Team Scaling',
      'SaaS Metrics'
    ],
    achievements: [
      'Built GTM engines for 50+ SaaS companies',
      'Generated $100M+ in client pipeline',
      'Scaled 3 startups from seed to Series B',
      'Speaker at SaaStr, RevOps Summit'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
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
                      <li><span>{teamMember.name}</span></li>
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
            <div className="col-xl-4 col-lg-4">
              <div className="tp-team-details-thumb mb-40">
                <img src={teamMember.image} alt={teamMember.name} />
              </div>
              <div className="tp-team-details-social mb-40">
                <h4 className="mb-20">Connect</h4>
                <div className="tp-team-details-social-links">
                  <a href={teamMember.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                  </a>
                  <a href={teamMember.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href={`mailto:${teamMember.social.email}`}>
                    <i className="far fa-envelope"></i> Email
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-xl-8 col-lg-8">
              <div className="tp-team-details-content">
                <h2 className="tp-team-details-title mb-10">{teamMember.name}</h2>
                <span className="tp-team-details-designation mb-30">{teamMember.role}</span>
                
                <div className="tp-team-details-bio mb-40">
                  <h4 className="mb-20">About</h4>
                  <p style={{whiteSpace: 'pre-line'}}>{teamMember.bio}</p>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-team-details-expertise mb-40">
                      <h4 className="mb-20">Areas of Expertise</h4>
                      <ul>
                        {teamMember.expertise.map((item, index) => (
                          <li key={index}><i className="far fa-check"></i> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-team-details-achievements mb-40">
                      <h4 className="mb-20">Key Achievements</h4>
                      <ul>
                        {teamMember.achievements.map((item, index) => (
                          <li key={index}><i className="far fa-trophy"></i> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tp-team-details-cta">
                  <h4 className="mb-20">Work With {teamMember.name.split(' ')[0]}</h4>
                  <p className="mb-30">
                    Ready to transform your GTM engine? Let's discuss how KLYRR can help 
                    you fix your funnel and drive predictable growth.
                  </p>
                  <Link href="/contact" className="tp-btn-blue-lg tp-btn-hover alt-color-black">
                    <span>Schedule a Consultation</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Details Area End */}

      {/* Other Team Members */}
      <div className="tp-team-related-area grey-bg pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-related-title text-center mb-60">
                <h3>Meet Other Team Members</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div className="tp-team-item">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-2.png" alt="Michael Torres" />
                  <div className="tp-team-social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h4 className="tp-team-title">
                    <Link href="/team/2">Michael Torres</Link>
                  </h4>
                  <span>Head of GTM Strategy</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div className="tp-team-item">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-3.png" alt="Priya Sharma" />
                  <div className="tp-team-social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h4 className="tp-team-title">
                    <Link href="/team/3">Priya Sharma</Link>
                  </h4>
                  <span>VP of Customer Success</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div className="tp-team-item">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-4.png" alt="David Kim" />
                  <div className="tp-team-social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h4 className="tp-team-title">
                    <Link href="/team/4">David Kim</Link>
                  </h4>
                  <span>Engineering Lead</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div className="tp-team-item">
                <div className="tp-team-img">
                  <img src="/assets/img/team/team-4-5.png" alt="Emma Wilson" />
                  <div className="tp-team-social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h4 className="tp-team-title">
                    <Link href="/team/5">Emma Wilson</Link>
                  </h4>
                  <span>Head of Sales Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Team Members End */}
    </PageLayout>
  )
}