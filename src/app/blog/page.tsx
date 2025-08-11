'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Scalable GTM Engine in 90 Days",
      excerpt: "Transform your go-to-market strategy with proven frameworks that drive predictable pipeline growth.",
      author: "Sarah Chen",
      authorImage: "/assets/img/blog/blog-avata-1.png",
      date: "March 15, 2024",
      category: "GTM Strategy",
      image: "/assets/img/blog/blog-1.jpg"
    },
    {
      id: 2,
      title: "The Hidden Costs of a Broken Sales Funnel",
      excerpt: "Discover the exact leaks killing your conversion rates and how to fix them before burning more budget.",
      author: "Michael Torres",
      authorImage: "/assets/img/blog/blog-avata-2.png",
      date: "March 12, 2024",
      category: "Sales Operations",
      image: "/assets/img/blog/blog-2.jpg"
    },
    {
      id: 3,
      title: "From Founder-Led to Team Selling: A Transition Guide",
      excerpt: "Scale your sales process without losing the magic that closed your first 100 customers.",
      author: "Alex Kumar",
      authorImage: "/assets/img/blog/blog-avata-3.png",
      date: "March 8, 2024",
      category: "Sales Leadership",
      image: "/assets/img/blog/blog-3.jpg"
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
                <h2 className="breadcrumb__title">Blog</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li><span>Blog</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Blog Area */}
      <div className="tp-blog-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-blog-wrapper">
                {blogPosts.map((post) => (
                  <div key={post.id} className="tp-blog-item mb-50">
                    <div className="tp-blog-img mb-35">
                      <Link href={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </div>
                    <div className="tp-blog-content">
                      <div className="tp-blog-meta mb-20">
                        <span>
                          <Link href={`/category/${post.category.toLowerCase().replace(' ', '-')}`}>
                            <i className="fal fa-folder"></i> {post.category}
                          </Link>
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt"></i> {post.date}
                        </span>
                      </div>
                      <h3 className="tp-blog-title mb-20">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="mb-30">{post.excerpt}</p>
                      <div className="tp-blog-author d-flex align-items-center">
                        <div className="tp-blog-author-img mr-15">
                          <img src={post.authorImage} alt={post.author} />
                        </div>
                        <div className="tp-blog-author-info">
                          <h5>{post.author}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-left"></i>
                        </Link>
                      </li>
                      <li>
                        <span className="current">1</span>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
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
                      <li>
                        <Link href="/category/product-marketing">Product Marketing <span>(7)</span></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="tp-blog-widget mb-50">
                  <h3 className="tp-blog-widget-title mb-30">Recent Posts</h3>
                  <div className="tp-blog-widget-content">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="tp-blog-widget-item d-flex align-items-center mb-20">
                        <div className="tp-blog-widget-thumb mr-15">
                          <Link href={`/blog/${post.id}`}>
                            <img src={post.image} alt={post.title} style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                          </Link>
                        </div>
                        <div className="tp-blog-widget-text">
                          <h4 className="tp-blog-widget-text-title">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    ))}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}
    </PageLayout>
  )
}