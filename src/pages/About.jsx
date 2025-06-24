import React from 'react'
import { Link } from 'react-router-dom'
import about_banner1 from './../assets/about-banner-01.jpg'
import about_banner2 from './../assets/about-banner-02.jpg'
import about_banner3 from './../assets/about-banner-03.jpg'
import about_banner4 from './../assets/about-banner-04.jpg'
import about_banner5 from './../assets/about-banner-05.png'


const About = () => {
  return (
    <>
     <div className="Page-section mb-2 text-center">
        <p className="text-muted">
          <Link to='/'>Home</Link> / About 
        </p>
        <h2 className='fw-bold'>About</h2>
     </div>

     <div className="section ">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={about_banner1} className='img-fluid  h-100 object-fit-cover' alt="About Banner 1" style={{minHeight: '100%', width: '98%'}} />
            </div>

            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-12">
                  <img src={about_banner2} className='img-fluid h-100 object-fit-cover' alt="About-banner2" style={{minHeight : '100%'}} />
                </div>
              </div>

              <div className="row " style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="col-6">
                  <img src={about_banner3} className='img-fluid h-100 object-fit-cover' alt="About-banner3" style={{minHeight : '100%', width: '98%'}} />
                </div>
                <div className="col-6">
                  <img src={about_banner4} className='img-fluid h-100 object-fit-cover' alt="About-banner4" style={{minHeight : '100%', width: '98%'}} />
                </div>
              </div>
          </div>
          </div>
        </div>
     </div>

     <div className="section opportunities">
      <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-4 mb-md-0 opportunities_title">
              <h2 className="mb-3">
                INSPIRATION, INNOVATION, <br />
                AND OPPORTUNITIES.
              </h2>
              <p className="text-muted mb-4">
                Many Desktop Publishing Packages and Web Page Editors Now Use Lorem Ipsum As Their Default Model Text.
              </p>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor : 'white', boxShadow: '0' }}>
                    Business's Vision
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body px-4 py-3">
                      It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor : 'white', boxShadow: '0'}}>
                    Our Mission
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body px-4 py-3">
                      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor : 'white', boxShadow: '0'}}>
                    Our Support
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body px-4 py-3">
                      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will gie you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-center">
              <img src={about_banner5} alt="idea" className='img-fluid' />
            </div>
          </div>
        </div>
     </div>

      <div className="section">
        <div className="container my-5 py-5">
          <div className="row g-4">
           <div className="col-lg-4">
              <div className="About_card card text-center border-0">
                  <div className="mb-3">
                    <i className="bi bi check-square fs-1 text-success"></i>
                  </div>
                  <h5 className="fw-normal">SUBMIT A TASK</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, similique.
                  </p>
                </div>
           </div>
           <div className="col-lg-4">
              <div className="About_card card text-center border-0">
                  <div className="mb-3">
                    <i className="bi bi check-square fs-1 text-success"></i>
                  </div>
                  <h5 className="fw-normal">SEND MESSAGE</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, similique.
                  </p>
                </div>
           </div>
           <div className="col-lg-4">
              <div className="About_card card text-center border-0">
                  <div className="mb-3">
                    <i className="bi bi check-square fs-1 text-success"></i>
                  </div>
                  <h5 className="fw-normal">TRUSTED EXPERIENCE</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, similique.
                  </p>
                </div>
           </div>
          </div>
        </div>
      </div>

      <div className=" section stats_section text-white text-center py-5 my-3">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
              <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                <h2>18+</h2>
                <p>Years</p>
              </div>
              <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                <h2>200+</h2>
                <p>Employee</p>
              </div>
              <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                <h2>85+</h2>
                <p>Page Views</p>
              </div>
              <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                <h2>27+</h2>
                <p>Awards</p>
              </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container my-5 py-5 text-center">
          <p className="text-muted mb-2">Contact Us</p>
          <h2 className="fw-bold mb-4 text-uppercase">About Us Info</h2>
          <p className="text-muted mx-auto mb-5" style={{maxWidth: '600px'}}>
            It is a long-established fact that a reader will be distracted
             by the readable content of a page when looking at its layout. 
             The point of using lorem ipsum is that it is a more-or-less 
             normal distrubution of letters, as opposed to using "Content here".
          </p>
          <Link to='/contact' className="contact_btn px-4 py-2" id='contact_btn'>
            CLICK HERE TO CONTACT US
          </Link>
        </div>
      </div>
    </>
  )
}

export default About