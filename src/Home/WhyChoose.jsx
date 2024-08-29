import React, { Component } from 'react'
import CountUp from "react-countup";

export default class WhyChoose extends Component {
  render() {
    return (
      <section id="numbers" style={{paddingTop: '30px'}}>
        <div className="container text-center">
          <div className="row">
            <h1 className="panel-heading">Why Choose Us</h1>
            <div className="col-md-3 col-sm-6 col-xs-6">
              {/*counter box*/}
              <div className="counter_box text-center">
                <div className="counter_icon"><i className="fa  fa-caret-down" /></div>
                <div className="counter_number counter">
                  <CountUp end={365139} delay={0} duration={5} start={364000}  /> <sup>+</sup>
                 </div>
                <h4 className="counter_name">Services Received</h4>
              </div>
              {/*counter box end*/}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              {/*counter box*/}
              <div className="counter_box text-center">
                <div className="counter_icon"><i className="fa fa-user" aria-hidden="true" /></div>
                <div className="counter_number counter">
                  <CountUp end={365139} delay={0} duration={5} start={364000}  /> <sup>+</sup>
                  </div>
                <h4 className="counter_name">Services Completed</h4>
              </div>
              {/*counter box end*/}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              {/*counter box*/}
              <div className="counter_box text-center">
                <div className="counter_icon"><i className="fa fa-smile-o" aria-hidden="true" /></div>
                <div className="counter_number counter"> <CountUp end={365139} delay={0} duration={5} start={364000}  /> <sup>+</sup></div>
                <h4 className="counter_name">Happy Clients</h4>
              </div>
              {/*counter box end*/}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              {/*counter box*/}
              <div className="counter_box text-center">
                <div className="counter_icon"><i className="fa fa-calendar-o" aria-hidden="true" /></div>
                <div className="counter_number counter"> <CountUp end={20} delay={0} duration={5} start={1}  /> <sup>+</sup></div>
                <h4 className="counter_name">Years Experience</h4>
              </div>
              {/*counter box end*/}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
