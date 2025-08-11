'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: '/assets/img/team/team-4-1.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Torres',
      role: 'Head of GTM Strategy',
      image: '/assets/img/team/team-4-2.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'VP of Customer Success',
      image: '/assets/img/team/team-4-3.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Engineering Lead',
      image: '/assets/img/team/team-4-4.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Emma Wilson',
      role: 'Head of Sales Operations',
      image: '/assets/img/team/team-4-5.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 6,
      name: 'Alex Kumar',
      role: 'Growth Marketing Lead',
      image: '/assets/img/team/team-4-6.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 7,
      name: 'Lisa Rodriguez',
      role: 'Product Manager',
      image: '/assets/img/team/team-4-7.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 8,
      name: 'James Park',
      role: 'Revenue Operations',
      image: '/assets/img/team/team-4-8.png',
      social: {
        linkedin: '#',
        twitter: '#'
      }
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
                <h2 className="breadcrumb__title">Our Team</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span>Team</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Team Area */}
      <div className="tp-team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-section-wrapper text-center mb-60">
                <span className="tp-section-subtitle">Meet Our Team</span>
                <h2 className="tp-section-title">
                  GTM Experts Who've Been <br />
                  In Your Shoes
                </h2>
                <p>Former operators who've built, scaled, and optimized GTM engines <br />
                  at high-growth SaaS companies.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="tp-team-item">
                  <div className="tp-team-img">
                    <img src={member.image} alt={member.name} />
                    <div className="tp-team-social">
                      <a href={member.social.linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={member.social.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="tp-team-content text-center">
                    <h4 className="tp-team-title">
                      <Link href={`/team/${member.id}`}>{member.name}</Link>
                    </h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Area End */}

      {/* CTA Area */}
      <div className="tp-cta-area p-relative">
        <div className="tp-cta-grey-bg grey-bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-cta-bg" style={{backgroundImage: 'url(/assets/img/cta/cta-bg.jpg)'}}>
                <div className="tp-cta-content text-center">
                  <h3 className="tp-section-title-3 text-white pb-25">Join Our Mission</h3>
                  <p className="text-white mb-40">We're always looking for talented people who want to <br />
                    revolutionize how SaaS companies grow.</p>
                  <Link href="/career" className="tp-btn-yellow-lg circle-effect">
                    View Open Positions
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