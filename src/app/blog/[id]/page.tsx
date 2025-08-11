'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the blog post data based on the ID
  const blogPost = {
    id: params.id,
    title: "How to Build a Scalable GTM Engine in 90 Days",
    content: `
      <p>Building a scalable go-to-market (GTM) engine doesn't have to take quarters of planning and execution. With the right framework and focused implementation, you can transform your revenue operations in just 90 days.</p>
      
      <h4>The Current State of B2B Sales</h4>
      <p>The B2B sales landscape has fundamentally changed. Buyers are more informed, sales cycles are longer, and the traditional "spray and pray" approach no longer works. Yet most SaaS companies still operate with:</p>
      <ul>
        <li>Disconnected marketing and sales systems</li>
        <li>Manual processes that don't scale</li>
        <li>No clear visibility into what's actually driving revenue</li>
        <li>Inconsistent messaging across touchpoints</li>
      </ul>
      
      <h4>The 90-Day GTM Transformation Framework</h4>
      <p>Here's how to systematically rebuild your GTM engine:</p>
      
      <h5>Days 1-30: Diagnosis and Foundation</h5>
      <p>Start by auditing your current funnel. Where are leads dropping off? What's your actual CAC? Which channels drive the highest quality pipeline? This phase is about brutal honesty and data collection.</p>
      
      <h5>Days 31-60: System Implementation</h5>
      <p>Based on your audit, implement the core systems. This typically includes lead scoring, automated nurture sequences, sales enablement tools, and proper attribution tracking. The key is choosing systems that integrate well and can scale.</p>
      
      <h5>Days 61-90: Optimization and Scale</h5>
      <p>With systems in place, focus on optimization. A/B test your messaging, refine your ICP, adjust lead scoring models based on actual conversion data. This is where the compound gains happen.</p>
    `,
    author: "Sarah Chen",
    authorImage: "/assets/img/blog/blog-avata-1.png",
    authorBio: "Sarah is the founder of KLYRR and has helped 50+ SaaS companies fix their GTM engines.",
    date: "March 15, 2024",
    category: "GTM Strategy",
    image: "/assets/img/blog/blog-details-1.jpg",
    tags: ["GTM", "Sales Operations", "Revenue Growth", "SaaS"]
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
                <h2 className="breadcrumb__title">Blog Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/blog">Blog</Link></span></li>
                      <li><span>Blog Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Blog Details Area */}
      <div className="tp-blog-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-blog-details-wrapper">
                <div className="tp-blog-details-thumb mb-40">
                  <img src={blogPost.image} alt={blogPost.title} />
                </div>
                <div className="tp-blog-details-meta mb-30">
                  <span>
                    <i className="fal fa-user"></i> By {blogPost.author}
                  </span>
                  <span>
                    <i className="fal fa-calendar-alt"></i> {blogPost.date}
                  </span>
                  <span>
                    <i className="fal fa-folder"></i> {blogPost.category}
                  </span>
                </div>
                <h2 className="tp-blog-details-title mb-30">{blogPost.title}</h2>
                <div className="tp-blog-details-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                
                {/* Tags */}
                <div className="tp-blog-details-tags mt-40 mb-40">
                  <span>Tags:</span>
                  {blogPost.tags.map((tag, index) => (
                    <Link key={index} href={`/tag/${tag.toLowerCase().replace(' ', '-')}`}>{tag}</Link>
                  ))}
                </div>

                {/* Author Box */}
                <div className="tp-blog-details-author-box mb-40">
                  <div className="tp-blog-details-author-thumb">
                    <img src={blogPost.authorImage} alt={blogPost.author} />
                  </div>
                  <div className="tp-blog-details-author-content">
                    <h4>{blogPost.author}</h4>
                    <p>{blogPost.authorBio}</p>
                    <div className="tp-blog-details-author-social">
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="tp-blog-details-navigation">
                  <div className="row">
                    <div className="col-6">
                      <div className="tp-blog-details-nav-prev text-left">
                        <Link href="/blog/2">
                          <span><i className="far fa-arrow-left"></i> Previous Post</span>
                          <h5>The Hidden Costs of a Broken Sales Funnel</h5>
                        </Link>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="tp-blog-details-nav-next text-right">
                        <Link href="/blog/3">
                          <span>Next Post <i className="far fa-arrow-right"></i></span>
                          <h5>From Founder-Led to Team Selling</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-blog-sidebar">
                {/* Search Widget */}
                <div className="tp-blog-widget mb-50">
                  <div className="tp-blog-widget-search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="tp-blog-widget mb-50">
                  <h3 className="tp-blog-widget-title mb-30">Categories</h3>
                  <div className="tp-blog-widget-category">
                    <ul>
                      <li>
                        <Link href="/category/gtm-strategy">GTM Strategy <span>(12)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/sales-operations">Sales Operations <span>(8)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/sales-leadership">Sales Leadership <span>(15)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/customer-success">Customer Success <span>(10)</span></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Newsletter Widget */}
                <div className="tp-blog-widget tp-blog-widget-cta mb-50">
                  <h3 className="tp-blog-widget-title mb-20 text-white">Get GTM Insights</h3>
                  <p className="text-white mb-20">Weekly tips to fix your funnel and scale revenue.</p>
                  <form action="#">
                    <input type="email" placeholder="Your email" />
                    <button type="submit" className="tp-btn-yellow-sm">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Details Area End */}
    </PageLayout>
  )
}