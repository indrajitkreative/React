import React from 'react';

function Home() {
    return (
      <div>
        {/* navbar section */}
        <section className="header">
          <div className="container">
            <div className="row">
              <div className="nav-sec">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                  <h2><a className="navbar-brand" href="#">Insurance Changer</a></h2>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link box" href="#">My Account</a>
                      </li>
                    </ul>
                  </div>
                </nav>    
              </div>
            </div>
          </div>
        </section>
        {/* navbar section */}
        {/* banner section */}
        <section className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="banner-sec">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/banner.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/banner1.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/banner.png" alt="Third slide" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner section */}
        {/* service section */}
        <section className="service">
          <div className="container p-0">
            <div className="row">
              <div className="service-sec">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="left-part">
                      <h6>DON’T SEE WHAT YOU ARE LOOKING FOR?</h6>
                      <p>Use our Budget planner to keep on top of your spending, use our tool to work out what you have left after paying your most important bills.</p>
                      <button className="read">Read More<i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mid-part">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="top-mid-sec">
                            <div className="icon-sec">
                              <img src="images/icon1.png" className="icon" />
                            </div>
                            <div className="text-sec">
                              <h6>health insurance</h6>
                              <p>Health Insurance plans suitable for your requirements</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="btm-mid-sec">
                            <div className="icon-sec">
                              <img src="images/icon4.png" className="icon" />
                            </div>
                            <div className="text-sec">
                              <h6>Travel Insurance</h6>
                              <p>Find the perfect travel insurance plans for you and your loved ones</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="right-part">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="top-right-sec">
                            <div className="icon-sec">
                              <img src="images/icon3.png" className="icon" />
                            </div>
                            <div className="text-sec">
                              <h6>health insurance</h6>
                              <p>Health Insurance plans suitable for your requirements</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="btm-right-sec">
                            <div className="icon-sec">
                              <img src="images/icon2.png" className="icon" />
                            </div>
                            <div className="text-sec">
                              <h6>Travel Insurance</h6>
                              <p>Find the perfect travel insurance plans for you and your loved ones</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service section */}
        {/* graph section */}
        <section className="graph">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {/* grid sydtem , do not delete */}
              </div>
              <div className="col-md-6">
                <div className="graph-text-sec">
                  <div className="graph-top-part">
                    <h6>Easy steps to get insured</h6>
                    <p>With any financial product that you buy, it is important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet, so it’s important that you can trust the people who are dealing with your personal information.</p>
                  </div>
                  <div className="graph-btm-part">
                    {/* background image section, do not delete */}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                {/* grid sydtem , do not delete */}
              </div>
            </div>
          </div>
        </section>
        {/* graph section */}
        {/* layer part section */}
        <section className="layer">
          <div className="container">
            <div className="row">
              <div className="layer-sec">
                <div className="layer-part">
                  <h5>For any insurance advice contact our advisors</h5>
                  <p>
                    We work with the leading insurance companies like ICICI Lombard, Bajaj Allianz, Tata AIG, Religare, Bharti AXA, Apollo Munich Health Insurance to name a few. Presently, you might be stable with your steady flow of income that is good enough to meet your family’s lifestyle needs.
                  </p>
                  <button className="read">Learn More</button>
                  <button className="read">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* layer part section */}
        {/* our-service section */}
        <section className="our-service">
          <div className="container">
            <div className="our-service-sec">
              <div className="our-service-head">
                <h2>our service</h2>
                <p>With these values, we embrace our mission to bring each client the best service.</p>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="service-modal">
                    <div className="card">
                      <div className="img-top">
                        <span className="img-top-icon"><i className="fa fa-fighter-jet" aria-hidden="true" /></span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-1">Quick Claim</h5>
                        <h6 className="card-subtitle mb-2">Settlement</h6>
                        <p className="card-text">We are best known for the quick claim settlement</p>					    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-modal text-center">
                    <div className="card">
                      <div className="img-top">
                        <span className="img-top-icon"><i className="fa fa-user-circle" aria-hidden="true" /></span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-1">Best Insurance</h5>
                        <h6 className="card-subtitle mb-2">Assistance</h6>
                        <p className="card-text">We provide you the best assistance in choosing the best Insurance Policy</p>	    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-modal text-center">
                    <div className="card">
                      <div className="img-top">
                        <span className="img-top-icon"><i className="fa fa-file-text" aria-hidden="true" /></span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-1">Hassle Free</h5>
                        <h6 className="card-subtitle mb-2">Paperwork</h6>
                        <p className="card-text">We will do all the paper works on your behalf</p>					    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-modal text-center">
                    <div className="card">
                      <div className="img-top">
                        <span className="img-top-icon"><i className="fa fa-file-archive-o" aria-hidden="true" /></span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-1">Wide Range of</h5>
                        <h6 className="card-subtitle mb-2">Products</h6>
                        <p className="card-text">We cover all Life and General Insurance companies's products</p>					    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our-service section */}
        {/* why-slider section */}
        <section className="why-slider">
          <div className="container">
            <div className="row">
              <div id="thumbnail-slider">
                <div className="inner">
                  <ul>
                    <li>
                      <a className="thumb" href="images/3.jpg">
                        <div className="img-inner">
                          <h4>Robert Dwouney Jr.</h4>
                          <h6 className="subtitle">Avengers Iron Man</h6>		                        		
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="thumb" href="images/2.jpg">
                        <div className="img-inner">
                          <h4>Chrish Hemsworth</h4>
                          <h6 className="subtitle">Avengers Thor</h6>			                        		
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="thumb" href="images/1.png">
                        <div className="img-inner">
                          <h4>Natasha Johanson</h4>
                          <h6 className="subtitle">Avengers Black Widow</h6>		                        		
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="thumb" href="images/3.jpg">
                        <div className="img-inner">
                          <h4>Chrish Evans</h4>
                          <h6 className="subtitle">Avengers Captain America</h6>		                        		
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="thumb" href="images/2.jpg">
                        <div className="img-inner">
                          <h4>Scarlet Witch</h4>
                          <h6 className="subtitle">Avengers Wanda</h6>	                        		
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="thumb" href="images/1.png">
                        <div className="img-inner">
                          <h4>Bruce Banner</h4>
                          <h6 className="subtitle">Software Hulk</h6>		                        		
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why-slider section */}
        {/* our partner section */}
        <section className="our-partner">
          <div className="container">
            <div className="our-partner-sec">
              <div className="partner-head">
                <h2>our partners</h2>
              </div>
              <div className="top-partner">
                <div className="row">
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/apollo.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/bajaj.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/apollo.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/bajaj.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btm-partner">
                <div className="row">
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/bajaj.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/apollo.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/bajaj.png" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="partner">
                      <img src="images/apollo.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our partner section */}
        {/* hellp section */}
        <section className="help">
          <div className="container">
            <div className="help-sec">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-help">
                    <h2>Let us help you choose, talk to our experts!</h2>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" name="number" placeholder="Contact Number" />
                        <input type="submit" className="btn btn-submit" name="submit" defaultValue="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-help">
                    <div className="contact-icon">
                      <i className="fa fa-phone-square" aria-hidden="true" />
                    </div>
                    <h5>Support Center</h5>
                    <h2>+919958258625</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hellp section */}
        {/* testimonial section */}
        <section className="testimonial">
          <div className="container">
            <div className="testimonial-sec">
              <div className="row">
                <div className="col-md-3 p-0">
                  <div className="left-test">
                    <h6>Recent News</h6>
                    <div className="top-mid-sec">
                      <div className="icon-sec">
                        <img src="images/icon1.png" className="icon" />
                      </div>
                      <div className="text-sec">
                        <p>Health Insurance plans suitable for your requirements</p>
                        <span><small>Date : 25/05/2019</small></span>
                      </div>
                    </div>
                    <div className="top-mid-sec">
                      <div className="icon-sec">
                        <img src="images/icon1.png" className="icon" />
                      </div>
                      <div className="text-sec">
                        <p>Health Insurance plans suitable for your requirements</p>
                        <span><small>Date : 25/05/2019</small></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 p-0">
                  <div className="mid1-test">
                    <h6>Useful Links</h6>
                    <div className="left-part-links">
                      <div className="links">
                        <ul>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href>Web Design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 p-0">
                  <div className="mid2-test">
                    <h6>Mailing List</h6>
                    <p>Sign up for our mailing list to get latest updates and offers.</p>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" placeholder="Email Address" />
                      <button className="btn"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                    </div>
                    <p>We respect your privacy</p>
                    <div className="social-icons">
                      <a href><i className="fa fa-twitter-square" aria-hidden="true" /></a>
                      <a href><i className="fa fa-google-plus-square" aria-hidden="true" /></a>
                      <a href><i className="fa fa-facebook-official" aria-hidden="true" /></a>
                      <a href><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                      <a href><i className="fa fa-youtube-square" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 p-0">
                  <div className="right-test">
                    <h6>About Insurence</h6>
                    <p className="test-declaire">
                      finance Website Builder is a big library of pre-designed web elements which help you create website in few minutes.
                    </p><hr className="test-hzr" />
                    <span>
                      <p><i className="fa fa-envelope" aria-hidden="true" />mail@insurance.com</p>
                    </span><hr className="test-hzr" />
                    <span>
                      <p><i className="fa fa-phone" aria-hidden="true" />P: +91-973-235-4558</p>
                    </span><hr className="test-hzr" />
                    <span>
                      <p><i className="fa fa-map-marker" aria-hidden="true" />12/4 Barnard St - Suite 888 <br />United State - GA 22563</p> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial section */}
        {/* footer section */}
        <section className="footer-main">
          <div className="container">
            <div className="footer-sec">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-left float-left">
                    <p>© All rights reserved</p>
                  </div>
                </div>
                <div className="col-md-5">
                </div>
                <div className="col-md-4">
                  <div className="footer-right float-right">
                    <div className="footer-menu">
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href>Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href>About Us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href>Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer section */}
      </div>
    );
  }

export default Home ;
