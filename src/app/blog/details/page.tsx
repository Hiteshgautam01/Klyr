'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function BlogDetailsPage() {
  const blogPost = {
    id: 'gtm-engine-90-days',
    title: "How to Build a Scalable GTM Engine in 90 Days",
    content: `
      <p>Building a scalable go-to-market (GTM) engine doesn't have to take quarters of planning and execution. With the right framework and focused implementation, you can transform your revenue operations in just 90 days.</p>
      
      <p>Most SaaS companies are stuck in the "spray and pray" era of growth. They're burning cash on expensive ads, chasing unqualified leads, and watching prospects disappear into the void. But what if there was a better way?</p>
      
      <h3>The Current State of B2B Sales</h3>
      <p>The B2B sales landscape has fundamentally changed. Buyers are more informed, sales cycles are longer, and the traditional "spray and pray" approach no longer works. Yet most SaaS companies still operate with:</p>
      <ul>
        <li>Disconnected marketing and sales systems</li>
        <li>Manual processes that don't scale</li>
        <li>No clear visibility into what's actually driving revenue</li>
        <li>Inconsistent messaging across touchpoints</li>
        <li>Lead scoring models that predict nothing</li>
        <li>Sales teams spending 60% of time on unqualified prospects</li>
      </ul>
      
      <p>The result? Leaky funnels, unpredictable revenue, and frustrated teams. But here's the thing – it doesn't have to be this way.</p>
      
      <h3>The 90-Day GTM Transformation Framework</h3>
      <p>Here's how to systematically rebuild your GTM engine in just 90 days:</p>
      
      <h4>Days 1-30: Diagnosis and Foundation</h4>
      <p>Start by auditing your current funnel. Where are leads dropping off? What's your actual CAC by channel? Which sources drive the highest quality pipeline? This phase is about brutal honesty and data collection.</p>
      
      <p><strong>Key activities:</strong></p>
      <ul>
        <li>Comprehensive funnel analysis</li>
        <li>Lead source attribution audit</li>
        <li>Sales process documentation</li>
        <li>Customer journey mapping</li>
        <li>Tech stack evaluation</li>
      </ul>
      
      <h4>Days 31-60: System Implementation</h4>
      <p>Based on your audit, implement the core systems. This typically includes lead scoring, automated nurture sequences, sales enablement tools, and proper attribution tracking. The key is choosing systems that integrate well and can scale.</p>
      
      <p><strong>Key deliverables:</strong></p>
      <ul>
        <li>Behavioral lead scoring model</li>
        <li>Automated email nurture sequences</li>
        <li>Sales playbooks and battlecards</li>
        <li>Revenue attribution dashboard</li>
        <li>Integrated tech stack</li>
      </ul>
      
      <h4>Days 61-90: Optimization and Scale</h4>
      <p>With systems in place, focus on optimization. A/B test your messaging, refine your ICP, adjust lead scoring models based on actual conversion data. This is where the compound gains happen.</p>
      
      <p><strong>Optimization focus:</strong></p>
      <ul>
        <li>Message testing and refinement</li>
        <li>Lead scoring model optimization</li>
        <li>Sales process improvements</li>
        <li>Attribution model fine-tuning</li>
        <li>Team training and enablement</li>
      </ul>
      
      <h3>Real Results from Real Companies</h3>
      <p>We've used this framework with 50+ B2B SaaS companies. Here's what typically happens:</p>
      
      <div class="results-stats">
        <div class="stat-item">
          <h4>44%</h4>
          <p>Average demo close rate</p>
        </div>
        <div class="stat-item">
          <h4>150+</h4>
          <p>Monthly SQLs generated</p>
        </div>
        <div class="stat-item">
          <h4>$2.3M</h4>
          <p>Average pipeline value increase</p>
        </div>
      </div>
      
      <h3>The Secret Ingredient: Systems Thinking</h3>
      <p>The companies that succeed don't just implement tactics – they build systems. Every touchpoint is connected, every interaction is measured, and every process can scale.</p>
      
      <p>Think about it this way: if you can't systematically predict and influence your revenue, you're not running a business – you're running an expensive science experiment.</p>
      
      <h3>Getting Started</h3>
      <p>Ready to build your own GTM engine? Start with the diagnosis. You can't fix what you can't measure, and you can't measure what you don't track.</p>
      
      <p>If you want help with your GTM audit, <a href="/contact">we offer free funnel assessments</a> for qualifying SaaS companies. In 90 minutes, we'll show you exactly where your revenue is leaking and how to fix it.</p>
      
      <p>Because at the end of the day, growth isn't about luck – it's about systems.</p>
    `,
    author: "Sarah Chen",
    authorImage: "/assets/img/blog/blog-avata-1.png",
    authorBio: "Sarah is the founder of KLYRR and has helped 50+ SaaS companies fix their GTM engines. Previously VP of Revenue Ops at three successful exits.",
    authorSocial: {
      linkedin: "#",
      twitter: "#"
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "GTM Strategy",
    image: "/assets/img/blog/blog-details-hero.jpg",
    tags: ["GTM Strategy", "Sales Operations", "Revenue Growth", "SaaS", "Lead Scoring", "Sales Process"]
  }

  const relatedPosts = [
    {
      id: 2,
      title: "The Hidden Costs of a Broken Sales Funnel",
      excerpt: "Discover the exact leaks killing your conversion rates and how to fix them before burning more budget.",
      image: "/assets/img/blog/blog-2.jpg",
      category: "Sales Operations",
      date: "March 12, 2024"
    },
    {
      id: 3,
      title: "From Founder-Led to Team Selling",
      excerpt: "Scale your sales process without losing the magic that closed your first 100 customers.",
      image: "/assets/img/blog/blog-3.jpg",
      category: "Sales Leadership",
      date: "March 8, 2024"
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
                {/* Article Header */}
                <div className="tp-blog-details-header mb-40">
                  <div className="tp-blog-details-meta mb-25">
                    <span className="category">
                      <i className="fal fa-folder"></i> {blogPost.category}
                    </span>
                    <span className="date">
                      <i className="fal fa-calendar-alt"></i> {blogPost.date}
                    </span>
                    <span className="read-time">
                      <i className="fal fa-clock"></i> {blogPost.readTime}
                    </span>
                    <span className="author">
                      <i className="fal fa-user"></i> By {blogPost.author}
                    </span>
                  </div>
                  <h1 className="tp-blog-details-title mb-30">{blogPost.title}</h1>
                </div>

                {/* Featured Image */}
                <div className="tp-blog-details-thumb mb-50">
                  <img src={blogPost.image} alt={blogPost.title} />
                </div>

                {/* Article Content */}
                <div className="tp-blog-details-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                
                {/* Tags */}
                <div className="tp-blog-details-tags mt-50 mb-50">
                  <div className="tp-blog-tags-wrapper d-flex align-items-center">
                    <span className="tags-label">Tags:</span>
                    <div className="tp-blog-tags-list">
                      {blogPost.tags.map((tag, index) => (
                        <Link key={index} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="tag-item">
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="tp-blog-details-author-box mb-50">
                  <div className="tp-blog-author-wrapper d-flex align-items-center">
                    <div className="tp-blog-author-thumb mr-30">
                      <img src={blogPost.authorImage} alt={blogPost.author} />
                    </div>
                    <div className="tp-blog-author-content">
                      <h4 className="tp-blog-author-name mb-10">{blogPost.author}</h4>
                      <p className="tp-blog-author-bio mb-20">{blogPost.authorBio}</p>
                      <div className="tp-blog-author-social">
                        <a href={blogPost.authorSocial.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={blogPost.authorSocial.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="tp-blog-details-share mb-50">
                  <div className="tp-blog-share-wrapper d-flex align-items-center">
                    <span className="share-label">Share this article:</span>
                    <div className="tp-blog-share-list">
                      <a href="#" className="share-item linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="share-item twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="share-item facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="share-item email">
                        <i className="far fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="tp-blog-details-navigation mb-50">
                  <div className="row">
                    <div className="col-6">
                      <div className="tp-blog-nav-prev">
                        <Link href="/blog/2">
                          <div className="tp-blog-nav-content">
                            <span><i className="far fa-arrow-left"></i> Previous Article</span>
                            <h5>The Hidden Costs of a Broken Sales Funnel</h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="tp-blog-nav-next text-right">
                        <Link href="/blog/3">
                          <div className="tp-blog-nav-content">
                            <span>Next Article <i className="far fa-arrow-right"></i></span>
                            <h5>From Founder-Led to Team Selling</h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="tp-blog-details-related">
                  <h3 className="tp-blog-related-title mb-40">Related Articles</h3>
                  <div className="row">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="col-xl-6 col-lg-6 mb-30">
                        <div className="tp-blog-related-item">
                          <div className="tp-blog-related-img mb-20">
                            <Link href={`/blog/${post.id}`}>
                              <img src={post.image} alt={post.title} />
                            </Link>
                          </div>
                          <div className="tp-blog-related-content">
                            <div className="tp-blog-related-meta mb-10">
                              <span><i className="fal fa-folder"></i> {post.category}</span>
                              <span><i className="fal fa-calendar-alt"></i> {post.date}</span>
                            </div>
                            <h4 className="tp-blog-related-title mb-15">
                              <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </h4>
                            <p>{post.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-blog-details-sidebar">
                {/* Newsletter Widget */}
                <div className="tp-blog-widget tp-blog-widget-newsletter mb-50">
                  <div className="tp-blog-widget-content text-center">
                    <div className="tp-blog-widget-icon mb-25">
                      <i className="flaticon-email"></i>
                    </div>
                    <h3 className="tp-blog-widget-title mb-20 text-white">
                      Get GTM Insights
                    </h3>
                    <p className="text-white mb-25">
                      Weekly tips to fix your funnel and scale revenue.
                    </p>
                    <form className="tp-blog-newsletter-form">
                      <input type="email" placeholder="Your email" />
                      <button type="submit" className="tp-btn-yellow-sm">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="tp-blog-widget mb-50">
                  <h3 className="tp-blog-widget-title mb-30">Recent Posts</h3>
                  <div className="tp-blog-widget-recent">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="tp-blog-recent-item d-flex align-items-center mb-25">
                        <div className="tp-blog-recent-thumb mr-15">
                          <Link href={`/blog/${post.id}`}>
                            <img src={post.image} alt={post.title} style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                          </Link>
                        </div>
                        <div className="tp-blog-recent-content">
                          <h5 className="tp-blog-recent-title">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h5>
                          <span className="tp-blog-recent-date">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="tp-blog-widget mb-50">
                  <h3 className="tp-blog-widget-title mb-30">Categories</h3>
                  <div className="tp-blog-widget-category">
                    <ul>
                      <li>
                        <Link href="/category/gtm-strategy">GTM Strategy <span>(8)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/sales-operations">Sales Operations <span>(6)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/revenue-operations">Revenue Operations <span>(4)</span></Link>
                      </li>
                      <li>
                        <Link href="/category/sales-leadership">Sales Leadership <span>(3)</span></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="tp-blog-widget tp-blog-widget-cta">
                  <div className="tp-blog-cta-content text-center">
                    <h4 className="text-white mb-20">Ready to Fix Your Funnel?</h4>
                    <p className="text-white mb-30">Get a free GTM audit and see exactly where you're leaking revenue.</p>
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
      {/* Blog Details Area End */}
    </PageLayout>
  )
}