import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import ServiceDetail from './ServiceDetail';
import {Helmet} from "react-helmet";

function HomeAutomation() {
  const repair = useRef();
  const install = useRef();


function handleRepair() {
  repair.current.scrollIntoView({ behavior: "smooth" });
}
function handleInstall() {
  install.current.scrollIntoView({ behavior: "smooth" });
}
    return <>
    <Helmet>
    <title>Home Security Automation Systems Installation in Ghaziabad</title>

<meta name="description" content="Snappy Services Advanced Home Automation Systems and Home Security Systems Installation Service Providers in Ghaziabad. Make Your Home Safe N Secure With Us. Call: +91-9999794426"/>
<link rel="canonical" href="https://www.snappyserv.com/home-automation.html" />
    </Helmet>
    <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Home Automation</h1>
            {/* <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ha.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleClick}> <h4>Service</h4></Link>
                  </div>
                </div>
              </div>*/} 
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ha.png" alt="Bathroom" /></div>
                  <div className="box_content">
                     <Link onClick={handleRepair}> <h4>Repair</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ha.png" alt="cleaning" /></div>
                  <div className="box_content">
                    <Link onClick={handleInstall}><h4>Installation / Uninstallation</h4></Link>
                  </div>
                </div>
              </div>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/homea.png" className="img-responsive" style={{borderRadius: '30px'}} alt=""/>
            </div>
          </div>
        </div>
      </section>
       <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
          {/*  <ServiceDetail data={data} type={service} heading={'Service'}/> */}
          <ServiceDetail service={"Home Automation"} category={"repair"} type={repair} heading={'Repair'} />
            <ServiceDetail service={"Home Automation"} category={"install"} type={install} heading={'Installation/Uninstallation'} />
          
          
        </div>
       <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
                 <h1 className="service-heading">Home Automation Service in Ghaziabad</h1>
                  <p>SNAPPY provides regular maintenance services on a variety of home automation systems to valley homeowners. </p>
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
            <p>Snappy provides regular maintenance services on a variety of home automation systems to valley homeowners. Regular maintenance allows the homeowner to continue to enjoy their systems for years to come while ensuring all components are being maintained in accordance with manufactures guidelines. Basic semi-annual maintenance includes activities such as:</p>
            <ul>
              <li>Updating software on all home automation devices including processors, remote controls, etc.</li>
<li>Downloading a fresh backup of the home's automation programming sequence.</li>
<li>Changing batteries in all remote controls and/or performing a battery test on those without disposable batteries.</li>
<li>Adjusting all time clocks to ensure accurate timing across the home automation platform.</li>
<li>Testing all features including pool/spa control, automated blinds/drapes, automated doors, fireplaces, etc.</li>
<li>Replacing memory battery backup batteries in central processing units.</li>
<li>Calibrating any sensors or feedback mechanism within the system for proper operation.</li>
<li>Repair and replace any defective items found during the maintenance call.</li></ul>
          </div>
        </section>
        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>Who can design, install, and maintain electrical systems in my home? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>You can get your home electrical design, install, and maintain electrical done by a certified and licensed electrical contractor. All installation must be inspected by the city, district, area electrical inspector.  Contact your local government electricity board authorities for rules and regulations. It is best you a hire a licensed electrician.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>What kind of projects do you do?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>We do all kinds of fully integrated Smart Home systems incorporating everything from audio & video media systems to climate control, lighting control and surveillance.
                    </p>
                  </div>
                </div>
              </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Where have you done projects?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We’ve installed Smart Technologies in homes and businesses throughout Delhi/NCR region. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Do I need a professional to install my equipment?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Sanppy is equipped to work closely with you, from designing and installing your system to teaching everyone in the house how to use it. Sanppy will also provide ongoing support and upgrades after the system is up and running.
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
export default HomeAutomation;
