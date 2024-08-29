import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Testimonial extends Component {
  render() {
    return (
       <section id="testimonails">
        <div className="container text-center">
          <h1 className="panel-heading">Testimonails</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="cmsmasters_quotes cmsmasters_quotes_grid quote_two">
                <div className="cmsmasters_quotes_list">
                  <div className="cmsmasters_quote">
                    <article className="cmsmasters_quote_inner">
                      <div className="cmsmasters_quote_img_info_wrap">
                        <div className="cmsmasters_quote_image"><img src="../assets/images/02home/clinte2.png" alt="Kevin" /></div>
                        <div className="cmsmasters_quote_info_wrap">
                          <h3 className="cmsmasters_quote_title">Kush srivastava</h3>
                          <h5 className="cmsmasters_quote_subtitle">Customer</h5>
                        </div>
                      </div>
                      <div className="cmsmasters_quote_content">
                        <p>Wonderful Service by Snappy technician. Costed less than what local AC technician were asking and work is done in very professional manner.</p>
                      </div>
                    </article>
                  </div>
                  <div className="cmsmasters_quote">
                    <article className="cmsmasters_quote_inner">
                      <div className="cmsmasters_quote_img_info_wrap">
                        <div className="cmsmasters_quote_image"><img src="../assets/images/02home/clinte4.png" alt="Kevin" /></div>
                        <div className="cmsmasters_quote_info_wrap">
                          <h3 className="cmsmasters_quote_title">Rinki Arora</h3>
                          <h5 className="cmsmasters_quote_subtitle">Customer</h5>
                        </div>
                      </div>
                      <div className="cmsmasters_quote_content">
                        <p>We got our Geyser repaired from Snappy services.Had a nice experience. Technicians were good in providing services.. They tried their best to resolve the issue.</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="cmsmasters_quotes_list">
                  <div className="cmsmasters_quote">
                    <article className="cmsmasters_quote_inner">
                      <div className="cmsmasters_quote_img_info_wrap">
                        <div className="cmsmasters_quote_image"><img src="../assets/images/02home/clinte3.png" alt="Kevin" /></div>
                        <div className="cmsmasters_quote_info_wrap">
                          <h3 className="cmsmasters_quote_title">Vivek Goel</h3>
                          <h5 className="cmsmasters_quote_subtitle">Customer</h5>
                        </div>
                      </div>
                      <div className="cmsmasters_quote_content">
                        <p>I am happy to see the professional work done by technicians without much cluttering in house.</p>
                      </div>
                    </article>
                  </div>
                  <div className="cmsmasters_quote">
                    <article className="cmsmasters_quote_inner">
                      <div className="cmsmasters_quote_img_info_wrap">
                        <div className="cmsmasters_quote_image"><img src="../assets/images/02home/clinte2.png" alt="Kevin" /></div>
                        <div className="cmsmasters_quote_info_wrap">
                          <h3 className="cmsmasters_quote_title">Sudhanshu Chauhan
                          </h3>
                          <h5 className="cmsmasters_quote_subtitle">Customer</h5>
                        </div>
                      </div>
                      <div className="cmsmasters_quote_content">
                        <p>First time avail the services. Fast service. Reasonable price compare to urban clap. Professional person. No extra charges demanded.</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="clearfix" />
              <div className="view_all"><Link to={`${process.env.PUBLIC_URL}/testimonials`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> View All Testimonails <i className="fa fa-angle-right" aria-hidden="true" />
                  </Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
