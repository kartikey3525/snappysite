import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import ServiceDetail from './ServiceDetail';
import {Helmet} from "react-helmet";

function ElectricalMotors(){
const service = useRef();
  const repair = useRef();
  const install = useRef();

function handleClick() {
  service.current.scrollIntoView({ behavior: "smooth" });
}
function handleRepair() {
  repair.current.scrollIntoView({ behavior: "smooth" });
}
function handleInstall() {
  install.current.scrollIntoView({ behavior: "smooth" });
}
    return <>
    <Helmet>
    <title>AC Motor Repair & Rewinding Services Ghaziabad | Snappy Services</title>

<meta name="description" content="Snappy Services an Electric Motor Repair Shop in Ghaziabad. Offers Electric Motor Repair, AC Motor Repair & Rewinding Services. Call: +91-9999794426"/>
<meta name="keywords" content=" AC Motor Repair in Ghaziabad, Ac Motor Rewinding in Ghaziabad, Motor Repair Shop in Ghaziabad, Electrical Motor Repair "/>
<link rel="canonical" href="https://www.snappyserv.com/electrical-motors.html" />
    </Helmet>
    <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Electric Motors</h1>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/motor-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleRepair}> <h4>Motor Repair</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/motor-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleInstall}> <h4>Motor Rewinding</h4></Link>
                  </div>
                </div>
              </div>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/motor.png" className="img-responsive" style={{borderRadius: '30px'}} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
           <ServiceDetail service={"Electrical Motor"} category={"repair"} type={repair} heading={'Motor Repair'} />
            <ServiceDetail service={"Electrical Motor"} category={"install"} type={install} heading={'Motor Rewinding'} />
          
           
        </div>
         <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
                  <h1 className="service-heading">AC Motor Repair & Rewinding Services</h1>
                  <p>We not only repair and refurbish your motor but to provide root cause failure analysis on why it has failed.</p>
                  <h2>Why choose Snappy?</h2>
                  <ul className="featurs_list">
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Certified Technician</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Same Day Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Quality Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Pricing</li>
                  </ul>
               
              </div>
              <QuickContact/>
            </div>
          <QuickLink/>
        
          </div>
      </div>
        </div>
      </section>
     
        <section id="What_offer">
          <div className="container text-justify">
            <h1 className="panel-heading text-center">Why Snappy best choice for you?</h1>
            <p>Electric motors are among the highest reliability incident reports for many companies. This leads to a continual cycle of costly electric motor repair, inconsistent quality and unplanned downtime factors that can hurt your bottom line. We not only repair and refurbish your motor but to provide root cause failure analysis on why it has failed. We consistently provide electric motor repairs and refurbishments that are better than new motors!</p>
          </div>
        </section>
        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>My motor is very hot to the touch, is that normal? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Yes. Most standard motors are rated at 40 deg.C, which is 104 deg.F.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>How long will a motor capacitor last?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>The average life is approximately 60,000 hours.
                    </p>
                  </div>
                </div>
              </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>My single phase motor won’t start, Should it be replaced?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>First check the capacitor to see if it is bad. Replace the capacitor, if the motor starts its okay. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What are common causes of electric motor failure?
</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>The most common cause of electric motor failure is a poor operating environment such as excessive heat or moisture, which causes damage and malfunction to the motor. Electrical overload, misalignment issues or dirt and debris build up are other potential causes of failure.
                  </p>
                </div>
              </div>
            </div></div> 
            <div className='row text-center'>
              <div className='col-md-12'>
                <h1 className='text-red'>Still Have Questions?</h1>
                <h2>Give us a call at <strong>+91-99997 94426</strong></h2>
                <p>Snappy is dedicated to providing you with the best service possible.<br></br> We look forward to working with you!</p>
              </div>
            </div>
          </div>
        </section>
    </>
  }
export default ElectricalMotors;
