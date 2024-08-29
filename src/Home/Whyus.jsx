import React, { Component } from 'react'

export default class Whyus extends Component {
  render() {
    return (
       <section id="features">
        <div className="container text-center features-section">
          <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-center"> <img src="../assets/images/qualit_work.png" alt="Meet the Hire Pros" /> </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <h2>Why Snappy?</h2>
              <div className="icon_box_one"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                <div className="box_content">
                  <h4>Best transparent Pricing</h4>
                  <p>You approve the price before we start the job, complete parts to be used detail and price shared.</p>
                </div>
              </div>
              <div className="icon_box_one"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                <div className="box_content">
                  <h4>Our Guarantee</h4>
                  <p>We give you a 30 day service warranty taking full ownership for the job done.</p>
                </div>
              </div>
              <div className="icon_box_one"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                <div className="box_content">
                  <h4>Best Quality Service</h4>
                  <p>Our repair service specialist gets the job done right each time and is committed to provide swift and accurate solutions for your home appliances repair.</p>
                </div>
              </div>
              <div className="icon_box_one"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                <div className="box_content">
                  <h4>Certified and trained technicians</h4>
                  <p>We follow stringent process for taking professionals on board all credentials are verified and tested. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
