import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from "../Blogs.json"

import blog1 from "./../assets/blog-1.jpeg"
import blog2 from "./../assets/blog-2.jpeg"
import blog3 from "./../assets/blog-3.jpeg"
import blog4 from "./../assets/blog-4.jpeg"
import blog5 from "./../assets/blog-5.jpeg"

const Blog = () => {
  return (
    <>
      <div className="Page-section mb-4 text-center">
        <p className="text-muted">
          <Link to='/'>Home</Link> / Blog 
        </p>
        <h2 className='fw-bold'>Blog</h2>
      </div>
      
      <div className="section mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 blog-wrapper">
              <div className="row ">
                {Blogs.map((blog, index) => (
                  <div className="col-lg-6 mb-3" key={index}>
                    <div className="blog-card overflow-hidden p-3 border rounded h-100 mb-4">
                      <div className="blog-img overflow-hidden rounded">
                        <img src={blog.image} className='img-fluid rounded' alt={blog.title} />
                      </div>
                      <div className="blog-content mt-3">
                        <h6>
                          {blog.categories.map((cat, i) => (
                            <span key={i}>
                              {cat}
                              {i < blog.categories.length - 1 && <span className="mx-1">|</span>}
                            </span>
                          ))}
                        </h6>
                        <h4 className="mt-2">{blog.title}</h4>
                        <h5>
                          {blog.date} <span className="dot">*</span> <span>by {blog.author}</span>
                        </h5>
                        <p>{blog.pera}</p>
                        <Link className='blog-btn'>Read More <i className="ri-arrow-right-long-line"></i></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 blog-sidebar">
              {/* Recent Post */}
              <div className="blog-side-box border d-flex gap-2 flex-column rounded p-2 post-hide">
                <h2 className="border-bottom pb-2">Recent Posts</h2>
                {[blog1, blog2, blog3, blog4, blog5].map((img, idx) => (
                  <div className="blog-post-box d-flex gap-2" key={idx}>
                    <div className="blog-post-img">
                      <img src={img} className='img-fluid' alt={`Recent post ${idx + 1}`} />
                    </div>
                    <div className="blog-post-text">
                      <p>How to Write a Blog Post Your Readers Will Love in 5 Steps</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Comments */}
              <div className="blog-side-box border rounded p-2 mt-2 post-hide">
                <h2 className="border-bottom pb-2">Recent Comments</h2>
                {[
                  "Wilson on ExoticRarePlants Small Jute Modern Plant",
                  "Jones on Philo Alobtt Artificial New Xaradu Plant",
                  "Emily on Euphorbia Natural Cactus Potted Plant",
                  "Jennifer on Little Krimson Aspidistra Indoor Plant",
                  "Wilson on Dracaena Trifasciata Big Ornamental Plant",
                ].map((comment, idx) => (
                  <div className="blog-post-text mt-3" key={idx}>
                    <p>{comment}</p>
                  </div>
                ))}
              </div>

              {/* Category */}
              <div className="blog-side-box border rounded p-2 mt-4">
                <h2 className="border-bottom pb-2">Category</h2>
                {[
                  "Business", "Information", "Marketing", "Promotions",
                  "Search Engine", "Social Media", "Statistics", "Writing"
                ].map((cat, idx) => (
                  <div className="blog-post-link mt-1" key={idx}>
                    <Link className='blog-text'>{cat}</Link>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="blog-side-box border rounded p-2 mt-4">
                <h2 className="border-bottom pb-2">Tags</h2>
                {[
                  "Blogging (4)", "Community (6)", "Copywriting (4)", "Educational (4)",
                  "Experiences (4)", "Knowledge (5)", "Learning (4)",
                  "Management (7)", "Networking (5)", "Photography (4)", "Success Story (4)"
                ].map((tag, idx) => (
                  <div className="blog-post-text mt-3" key={idx}>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
