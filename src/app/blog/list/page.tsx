'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function BlogListPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Scalable GTM Engine in 90 Days",
      excerpt: "Transform your go-to-market strategy with proven frameworks that drive predictable pipeline growth. Learn the exact process we use to help SaaS companies scale.",
      author: "Sarah Chen",
      authorImage: "/assets/img/blog/blog-avata-1.png",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "GTM Strategy",
      image: "/assets/img/blog/blog-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Hidden Costs of a Broken Sales Funnel",
      excerpt: "Discover the exact leaks killing your conversion rates and how to fix them before burning more budget. Real data from 50+ SaaS audits.",
      author: "Michael Torres",
      authorImage: "/assets/img/blog/blog-avata-2.png",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Sales Operations",
      image: "/assets/img/blog/blog-2.jpg",
      featured: false
    },
    {
      id: 3,
      title: "From Founder-Led to Team Selling: A Transition Guide",
      excerpt: "Scale your sales process without losing the magic that closed your first 100 customers. Step-by-step transition framework.",
      author: "Alex Kumar",
      authorImage: "/assets/img/blog/blog-avata-3.png",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Sales Leadership",
      image: "/assets/img/blog/blog-3.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Lead Scoring That Actually Predicts Revenue",
      excerpt: "Most lead scoring models are broken. Here's how to build a system that identifies your best prospects with 90%+ accuracy.",
      author: "Priya Sharma",
      authorImage: "/assets/img/blog/blog-avata-4.png",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Revenue Operations",
      image: "/assets/img/blog/blog-4.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Outbound Playbook for B2B SaaS",
      excerpt: "Cold email is not dead – you're just doing it wrong. The complete guide to building an outbound engine that gets replies.",
      author: "David Kim",
      authorImage: "/assets/img/blog/blog-avata-5.png",
      date: "March 1, 2024",
      readTime: "12 min read",
      category: "Outbound Sales",
      image: "/assets/img/blog/blog-5.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Customer Success: The Hidden Revenue Engine",
      excerpt: "Your existing customers are your biggest growth opportunity. Learn how to build a systematic expansion engine.",
      author: "Emma Wilson",
      authorImage: "/assets/img/blog/blog-avata-6.png",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Customer Success",
      image: "/assets/img/blog/blog-6.jpg",
      featured: false
    }
  ]

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'GTM Strategy', count: 8, active: false },
    { name: 'Sales Operations', count: 6, active: false },
    { name: 'Revenue Operations', count: 4, active: false },
    { name: 'Sales Leadership', count: 3, active: false },
    { name: 'Customer Success', count: 3, active: false }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <PageLayout>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
        <div className="breadcrumb__thumb" style={{backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg.jpg)'}}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper text-center">
                <h2 className="breadcrumb__title">Blog Articles</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span><Link href="/blog">Blog</Link></span></li>
                      <li><span>Articles</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Blog List Area */}
      <div className="tp-blog-list-area pt-120 pb-120">
        <div className="container">
          {/* Blog Intro */}
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-list-intro text-center mb-60">
                <span className="tp-section-subtitle">GTM Insights</span>
                <h2 className="tp-section-title mb-30">
                  Latest Articles & <br />
                  Revenue Insights
                </h2>
                <p>Actionable strategies, real case studies, and proven frameworks <br />
                  from the trenches of B2B SaaS growth.</p>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="tp-blog-featured-area mb-80">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-blog-featured-item">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-blog-featured-img">
                          <Link href={`/blog/${featuredPost.id}`}>
                            <img src={featuredPost.image} alt={featuredPost.title} />
                          </Link>
                          <div className="tp-blog-featured-badge">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-blog-featured-content">
                          <div className="tp-blog-featured-meta mb-20">
                            <span className="category">
                              <i className="fal fa-folder"></i> {featuredPost.category}
                            </span>
                            <span className="read-time">
                              <i className="fal fa-clock"></i> {featuredPost.readTime}
                            </span>
                          </div>
                          <h3 className="tp-blog-featured-title mb-20">
                            <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                          </h3>
                          <p className="mb-30">{featuredPost.excerpt}</p>
                          <div className="tp-blog-featured-author d-flex align-items-center">
                            <div className="tp-blog-author-img mr-15">
                              <img src={featuredPost.authorImage} alt={featuredPost.author} />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>{featuredPost.author}</h5>
                              <span>{featuredPost.date}</span>
                            </div>
                            <div className="tp-blog-featured-btn ml-auto">
                              <Link href={`/blog/${featuredPost.id}`} className="tp-btn-blue-sm">
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-xl-8 col-lg-8">
              {/* Category Filter */}
              <div className="tp-blog-list-filter mb-50">
                <div className="tp-blog-filter-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    {categories.map((category, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${category.active ? 'active' : ''}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          role="tab"
                        >
                          {category.name} ({category.count})
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="tp-blog-list-wrapper">
                <div className="row">
                  {regularPosts.map((post) => (
                    <div key={post.id} className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="tp-blog-list-item">
                        <div className="tp-blog-list-img mb-25">
                          <Link href={`/blog/${post.id}`}>
                            <img src={post.image} alt={post.title} />
                          </Link>
                        </div>
                        <div className="tp-blog-list-content">
                          <div className="tp-blog-list-meta mb-15">
                            <span className="category">
                              <i className="fal fa-folder"></i> {post.category}
                            </span>
                            <span className="read-time">
                              <i className="fal fa-clock"></i> {post.readTime}
                            </span>
                          </div>
                          <h4 className="tp-blog-list-title mb-15">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <p className="mb-20">{post.excerpt}</p>
                          <div className="tp-blog-list-author d-flex align-items-center justify-content-between">
                            <div className="tp-blog-author-info d-flex align-items-center">
                              <div className="tp-blog-author-img mr-10">
                                <img src={post.authorImage} alt={post.author} />
                              </div>
                              <div>
                                <h6>{post.author}</h6>
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <Link href={`/blog/${post.id}`} className="tp-blog-list-btn">
                              <i className="far fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="tp-blog-list-loadmore text-center mt-40">
                  <button className="tp-btn-blue-lg">
                    Load More Articles
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="tp-blog-list-sidebar">
                {/* Newsletter Widget */}
                <div className="tp-blog-widget tp-blog-widget-newsletter mb-50">
                  <div className="tp-blog-widget-content text-center">
                    <div className="tp-blog-widget-icon mb-25">
                      <i className="flaticon-email"></i>
                    </div>
                    <h3 className="tp-blog-widget-title mb-20 text-white">
                      Get GTM Insights Weekly
                    </h3>
                    <p className="text-white mb-30">
                      Actionable strategies, case studies, and frameworks delivered to your inbox.
                    </p>
                    <form className="tp-blog-newsletter-form">
                      <input type="email" placeholder="Your email address" />
                      <button type="submit" className="tp-btn-yellow-sm">
                        Subscribe Now
                      </button>
                    </form>
                    <p className="tp-blog-newsletter-note text-white">
                      Join 2,500+ revenue leaders. No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="tp-blog-widget mb-50">
                  <h3 className="tp-blog-widget-title mb-30">Most Popular</h3>
                  <div className="tp-blog-widget-popular">
                    {blogPosts.slice(0, 4).map((post, index) => (
                      <div key={post.id} className="tp-blog-popular-item d-flex align-items-center mb-25">
                        <div className="tp-blog-popular-number mr-15">
                          <span>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="tp-blog-popular-content">
                          <h5 className="tp-blog-popular-title">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h5>
                          <div className="tp-blog-popular-meta">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
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
                        <Link href="/category/gtm-strategy">
                          GTM Strategy <span>(8)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/sales-operations">
                          Sales Operations <span>(6)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/revenue-operations">
                          Revenue Operations <span>(4)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/sales-leadership">
                          Sales Leadership <span>(3)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/customer-success">
                          Customer Success <span>(3)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="tp-blog-widget">
                  <h3 className="tp-blog-widget-title mb-30">Popular Tags</h3>
                  <div className="tp-blog-widget-tag">
                    <Link href="/tag/saas-growth">SaaS Growth</Link>
                    <Link href="/tag/gtm-strategy">GTM Strategy</Link>
                    <Link href="/tag/sales-ops">Sales Ops</Link>
                    <Link href="/tag/pipeline">Pipeline</Link>
                    <Link href="/tag/conversions">Conversions</Link>
                    <Link href="/tag/revenue-ops">Revenue Ops</Link>
                    <Link href="/tag/lead-scoring">Lead Scoring</Link>
                    <Link href="/tag/outbound">Outbound</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog List Area End */}
    </PageLayout>
  )
}