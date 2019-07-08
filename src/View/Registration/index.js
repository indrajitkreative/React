import React from 'react';

function Registration() {
    return (
        <div>
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="nav-sec">
                            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <p className="nav-link toll">Toll Free:1800-654-236</p>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Download App</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sign Up</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Call Back</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="btm-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="logo-sec">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <h3 className="nav-link"><span className="logo">Policy</span>Changer</h3>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link active" href="#">Plains</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Renew</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Claims</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="registration">
                <div className="container">
                    <div className="registration-sec">
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <div className="content">
                                    <h2>Health Insurance</h2>
                                    <p>Protection against all forms of death, disease &amp; disability</p>
                                    <div className="form-sec">
                                        <div className="form-group">
                                            <span><i className="fa fa-user" aria-hidden="true" /></span>
                                            <label htmlFor="name">Name</label>
                                            <div className="drop-down">
                                                <select>
                                                    <option value="mr.">Mr.</option>
                                                    <option value="mrs.">Mrs.</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <input className="form-control" type="text" name="name" placeholder="Your Full Name" />
                                        </div>
                                        <div className="form-group">
                                            <span><i className="fa fa-birthday-cake" aria-hidden="true" /></span>
                                            <label htmlFor="name">DOB</label>
                                            <div className="drop-down">
                                                <select className="dd">
                                                    <option value="DD">DD.</option>
                                                    <option value={2}>2.</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <div className="drop-down">
                                                <select className="mm">
                                                    <option value="MM">MM</option>
                                                    <option value="feb">February</option>
                                                    <option value="mar">March</option>
                                                    <option value="apl">April</option>
                                                    <option value="may">May</option>
                                                </select>
                                            </div>
                                            <div className="drop-down">
                                                <select className="yy">
                                                    <option value="YY">YYYY</option>
                                                    <option value={2000}>2000</option>
                                                    <option value={2001}>2001</option>
                                                    <option value={2002}>2002</option>
                                                    <option value={2003}>2003</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span><i className="fa fa-mobile" aria-hidden="true" /></span>
                                            <label htmlFor="name">Mobile</label>
                                            <div className="drop-down">
                                                <select>
                                                    <option value={+91}>+91</option>
                                                    <option value={+72}>+72</option>
                                                    <option value={+93}>+93</option>
                                                    <option value={+52}>+52</option>
                                                    <option value={+92}>+92</option>
                                                </select>
                                            </div>
                                            <input className="form-control" type="text" name="name" placeholder="Enter Your Mobile" />
                                        </div>
                                        <div className="form-group">
                                            <span><i className="fa fa-envelope" aria-hidden="true" /></span>
                                            <label htmlFor="name">Email<br /><p>(optional)</p></label>
                                            <input className="form-control" type="text" name="name" placeholder="Enter Your Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <span><i className="fa fa-map-marker" aria-hidden="true" /></span>
                                            <label htmlFor="name">Address</label>
                                            <div className="drop-down">
                                                <select>
                                                    <option value="State">State</option>
                                                    <option value="Bengal">Bengal</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                </select>
                                            </div>
                                            <div className="drop-down">
                                                <select>
                                                    <option value="City">City</option>
                                                    <option value="Midnapore">Midnapore</option>
                                                    <option value="Kolkata">Kolkata</option>
                                                    <option value="Siliguri">Siliguri</option>
                                                    <option value="Delhi">Delhi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <a href><i className="fa fa-plus-square-o" aria-hidden="true" /> &nbsp; Add More Family Member</a>
                                        <p>By clicking on continue, you agreed to our <a href>Privacy Policy</a> and <a href>Terms of use</a></p>
                                        <div className="btn-sec"><button className="btn">View Free Quotes</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="plan">
                <div className="container">
                    <div className="plan-sec">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left-part">
                                    <span className="subtitle">Select your</span>
                                    <h3 className="title">Top Insurance Plan</h3>
                                    <p className="tag-line">When its come to health there should be no compromise</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="right-part">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="img-top">
                                                    <img className="icon-img" src="images/ic1.png" />
                                                </div>
                                                <div className="text-btm">
                                                    <span className="text">Insurance for myself</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="img-top">
                                                    <img className="icon-img" src="images/ic2.png" />
                                                </div>
                                                <div className="text-btm">
                                                    <span className="text">Insurance for family</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="img-top">
                                                    <img className="icon-img" src="images/ic1.png" />
                                                </div>
                                                <div className="text-btm">
                                                    <span className="text">Insurance for parents</span>
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
            <section className="what">
                <div className="container">
                    <div className="what-sec">
                        <div className="row">
                            <div className="what-content">
                                <h4>What is health insurence?</h4>
                                <p className="what-text">
                                    Health Insurance relates to a type of insurance that essentially covers your medical expenses. A health insurance policy like other policies is a contract between an insurer and an individual/group in which the insurer agrees to provide specified health insurance cover at a particular “premium” subject to terms and conditions specified in the policy.
            </p>
                                <a className="btn btn-success" href="#">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why">
                <div className="container">
                    <div className="why-sec">
                        <div className="head-sec">
                            <h3>Why xyz health insurence is <span>smart choise?</span></h3>
                            <span className="reason">Here is some reasons</span>
                        </div>
                        <div className="top-row-sec">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="shadow-box">
                                        <div className="left-sec">
                                            <img className="iconic-img" src="images/why3.png" />
                                        </div>
                                        <div className="right-sec">
                                            <h5>Largest Network hospital</h5>
                                            <span className="subline">base of 8800+ hospitals</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="shadow-box">
                                        <div className="left-sec">
                                            <img className="iconic-img" src="images/why2.png" />
                                        </div>
                                        <div className="right-sec">
                                            <h5>hassle free and customer friendly</h5>
                                            <span className="subline">direct claim settelement without intervation of TPA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btm-row-sec">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="shadow-box">
                                        <div className="left-sec">
                                            <img className="iconic-img" src="images/why4.png" />
                                        </div>
                                        <div className="right-sec">
                                            <h5>rs 1970.85 cr. of</h5>
                                            <span className="subline">claims setteled in the financial year 2017-2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="shadow-box">
                                        <div className="left-sec">
                                            <img className="iconic-img" src="images/why1.png" />
                                        </div>
                                        <div className="right-sec">
                                            <h5>93% of cashels claims</h5>
                                            <span className="subline">setteled in less then 2 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial4">
                <div className="testimoni-content-sec">
                    <div className="container">
                        <div className="testimonial4-sec">
                            <div className="row">
                                <div className="testimoni-slider">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="slider-content-sec">
                                                    <div className="slide-head">
                                                        <h3>customer speak</h3>
                                                        <span className="speak">What our customers are saying ...</span>
                                                    </div>
                                                    <div className="slide-body">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="avatar">
                                                                    <img className="avatar-img" src="images/testimoni-avatar.png" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text-field">
                                                                    <p>
                                                                        " I would like to thank www.xyz.com because of which I could get a proper and appropriate Health Policy for my myself and my family. "
                              </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="slider-content-sec">
                                                    <div className="slide-head">
                                                        <h3>customer speak</h3>
                                                        <span className="speak">What our customers are saying ...</span>
                                                    </div>
                                                    <div className="slide-body">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="avatar">
                                                                    <img className="avatar-img" src="images/testimoni-avatar.png" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text-field">
                                                                    <p>
                                                                        " I would like to thank www.xyz.com because of which I could get a proper and appropriate Health Policy for my myself and my family. "
                              </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partner4">
                <div className="container">
                    <div className="our-partner4-sec">
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
            <section className="footer">
                <div className="container">
                    <div className="footer-bottom-widgets">
                        <div className="row">
                            <div className="footer-contact col-md-3">
                                <div className="footer-logo">
                                    <h3 className="title"><span className="logo">Policy</span>Changer</h3>
                                </div>{/* /.footer-contact */}
                                <div className="logo-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
                                    <ul>
                                        <li><span className="label">Call:</span> +91 9874563210</li>
                                        <li><span className="label">Email:</span> info@idomain.com</li>
                                        <li><span className="label">Address:</span> Saltlake, Kolkata, India</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="columns">
                                    <aside id="nav_menu-2" className="widget clearfix widget_nav_menu">
                                        <div className="body">
                                            <h4 className="widget-title">Quick Links</h4>
                                            <div className="menu-footer-menu-1-container">
                                                <ul id="menu-footer-menu-1" className="menu">
                                                    <li className="menu-item"><a href="#">Terms &amp; Conditions</a></li>
                                                    <li className="menu-item"><a href="#">Media</a></li>
                                                    <li className="menu-item"><a href="#">Privacy Policy</a></li>
                                                    <li className="menu-item"><a href="#">Career</a></li>
                                                    <li className="menu-item"><a href="#">Other Insurence POlicy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>{/* /.columns */}
                            </div>
                            <div className="col-md-3">
                                <div className="column-cont">
                                    <aside id="nav_menu-3" className="widget clearfix widget_nav_menu">
                                        <div className="body">
                                            <div className="menu-footer-menu-2-container">
                                                <ul id="menu-footer-menu-2" className="menu">
                                                    <li className="menu-item"><a href="#">FAQ</a></li>
                                                    <li className="menu-item"><a href="#">Disclaimer</a></li>
                                                    <li className="menu-item"><a href="#">Terms Of Use</a></li>
                                                    <li className="menu-item"><a href="#">Feedback</a></li>
                                                    <li className="menu-item"><a href="#">Sitemap</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>{/* /.columns */}
                            </div>
                            <div className="col-md-3">
                                <div className="columns">
                                    <aside id="nav_menu-4" className="widget clearfix widget_nav_menu">
                                        <div className="body">
                                            <h4 className="widget-title">Follow Us</h4>
                                            <div className="menu-footer-menu-3-container">
                                                <ul className="social-icon">
                                                    <li className="menu-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                    <li className="menu-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                    <li className="menu-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                                                    <li className="menu-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-payment-logo">
                                                <ul className="cash-card card-inline">
                                                    <li className="card-item"><img src="images/payment-icon/2.png" alt width={50} /></li>
                                                    <li className="card-item"><img src="images/payment-icon/3.png" alt width={50} /></li>
                                                    <li className="card-item"><img src="images/payment-icon/4.png" alt width={50} /></li>
                                                    <li className="card-item"><img src="images/payment-icon/5.png" alt width={50} /></li>
                                                </ul>
                                            </div>{/* /.payment-methods */}
                                        </div>
                                    </aside>
                                </div>{/* /.columns */}
                            </div>{/* /.col */}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Registration;