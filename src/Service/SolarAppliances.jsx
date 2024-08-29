import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import ServiceDetail from './ServiceDetail';
import {Helmet} from "react-helmet";

function SolarAppliances (){
 
   
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
    <title> Best Solar Product Repair and Installation Services Ghaziabad</title>

<meta name="description" content="Snappy Services one of the Best solar product repair and installation service provider, offering their services in Ghaziabad, Noida. Call: +91-9999794426"/>
<meta name="keywords" content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Best Solar Appliances repair and service, Solar Appliances services, Solar System service provider in Ghaziabad, Solar Panel installation, Best Solar Service provider in Ghaziabad, Solar Appliances in Ghaziabad"/>
<link rel="canonical" href="https://www.snappyserv.com/solar-appliances.html" />
    </Helmet>
    <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Solar Appliances</h1>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/solar-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleRepair}> <h4>Repair</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/solar-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleInstall}> <h4>Installation</h4></Link>
                  </div>
                </div>
              </div>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/solar.png" className="img-responsive" style={{borderRadius: '30px'}} alt=""/>
            </div>
          </div>
        </div>
      </section>
      <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
          <ServiceDetail service={"Solar Appliances"} category={"repair"} type={repair} heading={'Repair'} />
            <ServiceDetail service={"Solar Appliances"} category={"install"} type={install} heading={'Installation/Uninstallation'} />
          
          
        </div>
         <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
                 <h1 className="service-heading">Book Solar Repair Services</h1>
                  <p>We provide you best Solar product repair and installation services</p>
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
            <h1 className="panel-heading text-center">Solar Product Repair Ghaziabad</h1>
            <p>Installation of the solar products helps to save the power as well as the electricity charges. Additionally, the utilization of solar products is non-stoppable even when there are long power cuts. No doubt from where you purchase the solar items or solar products who install those products for you, however, we are there to assist you in the maintenance of that product, repair the faulty items, and upgrade them when necessary for the item holder. All these things are performed to obtain the maximum level of capacity from the solar panels that are working to generate electricity from the sun’s rays which is helpful to the appliances to work on the solar energy. </p><p>Best Solar Appliances Ghaziabad is providing the services to the customers at nominal prices so that they should not feel cheated about the prices of the repair. Maximum energy production should be consumed from the panels in order to get the maximum level of the benefit from the products by maintaining them on regular basis and this is our duty to provide you with the maintenance. While performing the services by the expert team every kind of the solar PV makes and the model of the solar panels are repaired, maintained, and upgraded by the professional team and they are specialized in every model to handle with care and proper effectiveness. </p><p>The complete diagnosis of the panel is taken to identify the exact problem that needed to be repaired by the electrician so that the problem should be rectified easily after diagnosis. If the identification of the problem is not taken into consideration initially then finding the solution for the problem is not possible so we always go for the identification at first. The repair is always performed by the expert person who has the proper skill as well as the knowledge of the error that has taken place which is not allowing the solar gadgets to work in a proper manner. A team of professional workers is sent to identify and rectify the errors that have been in the solar products.</p>
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
                    <h4>Why do I need AC service?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>All leading AC brands recommend seasonal cleaning and periodic maintenance to remove impurities. AC servicing helps to boost AC performance and reduce your home electricity bill. A non-serviced AC may consume more power to deliver cool air or may not provide effective cooling due to reasons such as a gas leakage.
                    </p>
                  </div>
                </div>
              </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What is signs and possibility for Electric Motor not to work?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Signs noise Overheating frosting of polished metal surfaces premature grease darkening. Possible causes Leakage current from the armature windings, Non-symmetrical magnetic fields Induced voltage from a VFD. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>How AC service is done?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Complete check up of the AC unit, Deep Cleaning clogged air filter, coil etc, air distribution check
                    Thermostat Test, calibrate and level, Condenser Coil inspection, Refrigerant operating pressures check, cooling temperature functionality, finally is it working as new AC.
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
export default SolarAppliances;
