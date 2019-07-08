import React from 'react';

function Billing() {
  return (
      <section className="billing">
          <div className="container">
              <div className="billing-sec">
                  <div className="top-sec">
                      <h3>Tell us about yourself to helpl us process your policy</h3>
                      <span className="float-left">
                          <a href><i className="fa fa-arrow-left" aria-hidden="true" /> &nbsp; Back To Review</a>
                      </span>
                      <p className="subline">Female,22 years old | Not a Smoker | Annual Income:600000</p>
                  </div>
                  <div className="btm-sec">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="left-billing-sec">
                                  <div className="tab-sec">
                                      <ul className="navbar nav">
                                          <li><a href>Contact</a></li>
                                          <li><a href>Personal</a></li>
                                          <li><a href>Address</a></li>
                                          <li><a href>Nomenee</a></li>
                                          <li><a href>Make Payment</a></li>
                                      </ul>
                                  </div>
                                  <div className="form-sec">
                                      <form>
                                          <div className="form-group">
                                              <input type="text" className="form-control" name="full-name" placeholder="Your Full Name" />
                                          </div>
                                          <div className="form-group">
                                              <input type="text" className="form-control" name="number" placeholder="mobile Number" />
                                          </div>
                                          <div className="form-group">
                                              <input type="email" className="form-control" name="email" placeholder="E-Mail Address" />
                                          </div>
                                          <div className="btn-sec">
                                              <button className="btn">Next : Personal Details</button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="right-billing-sec">
                                  <div className="top-logo">
                                      <img className="icon" src="images/billing-form-icon.png" />
                                      <h6>iTerm</h6>
                                  </div>
                                  <div className="body-part">
                                      <div className="sec-div">
                                          <h5>cover</h5>
                                          <p>50 lakhs</p>
                                      </div>
                                      <div className="sec-div1">
                                          <h5>cover up to</h5>
                                          <p>60 lakhs</p>
                                      </div>
                                      <div className="sec-div2">
                                          <h5>claims settled</h5>
                                          <p>97.67%</p>
                                      </div>
                                  </div>
                                  <div className="last-btn-sec">
                                      <button className="btn"><i className="fa fa-inr" aria-hidden="true" /> &nbsp;3,295/Year</button>
                                  </div>
                                  <div className="end-part">
                                      <div className="text">
                                          <p>Increase your cover by 25 lacs by paying 959 extra</p>
                                      </div>
                                      <div className="button">
                                          <button className="btn">Yes Upgrade</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  );
}

export default Billing;
