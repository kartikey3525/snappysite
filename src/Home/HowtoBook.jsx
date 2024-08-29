import React, { Component } from 'react'

export default class HowtoBook extends Component {
  render() {
    return (
      <section id="howitwork" style={{paddingBottom: '30px'}}>
        <div className="container text-center">
          <h1 className="panel-heading">How to book your service?</h1>
          <div className="row">
            <div className="col-md-3 col-xs-offset-0 step-one"> <img src="assets/images/p1.png" alt="Book" className="img-circle htw" />
              <h4>Book</h4>
              <p>Book from website, call or WhatsApp</p>
            </div>
            <div className="col-md-1 hidden-xs hidden-sm"> </div>
            <div className="col-md-3 step-two"> <img src="assets/images/p2.png" alt="Schedule" className="img-circle" />
              <h4>Schedule</h4>
              <p>Certified service engineer comes over
                to fix your appliance</p>
            </div>
            <div className="col-md-1 hidden-xs hidden-sm"> </div>
            <div className="col-md-3"> <img src="assets/images/p3.png" alt="Relax" className="img-circle" />
              <h4>Relax</h4>
              <p>Your task is completed to your<br />
                satisfaction - Guranteed</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
