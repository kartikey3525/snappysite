import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import ServiceDetail from './ServiceDetail';
import {Helmet} from "react-helmet";

function RoService() {
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
    <title>Snappy: Best RO Water Purifier Service in Ghaziabad, Noida</title>

<meta name="description" content="Snappy Services is the Best RO Services Company in Ghaziabad providing services for Kent, Aquaguard, LivPure, Whirlpool, Aqua Grand, AO Smith and other brands."/>
<meta name="keywords" content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Kent RO service in Ghaziabad, Kent water purifier Service provider in Ghaziabad, Aquaguard Service in Ghaziabad, Water Purifier Service in Ghazibad, Livpure Service in Ghaziabad, RO Service in noida"/>
<link rel="canonical" href="https://www.snappyserv.com/ro-services.aspx" />
    </Helmet>
    
    <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>RO Services</h1>
               <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ro-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleClick} > <h4>Repair</h4></Link>
                  </div>
                </div></div>
                 <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ro-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleRepair}> <h4>Service</h4></Link>
                  </div>
                </div></div>
                <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ro-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleInstall}> <h4>Installation/ Uninstallation</h4></Link>
                  </div>
                </div></div>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/ro.png" className="img-responsive" style={{borderRadius: '30px'}} alt=""/>
            </div>
          </div>
        </div>
      </section>
       <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
           <ServiceDetail service={"ROSerivce"} category={"service"} type={service} heading={'Service'}/>
          <ServiceDetail service={"ROSerivce"} category={"repair"} type={repair} heading={'Repair'} />
            <ServiceDetail service={"ROSerivce"} category={"install"} type={install} heading={'Installation/Uninstallation'} />
         
          
           
        </div>
          <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
                <h1 className="service-heading">Water Purifier Repair And Maintenance Service</h1>
                  <p>Top-class reliable Water Purifier Service services at your convenience in Delhi NCR, India. </p>
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
            <p>Water Purifier Repair And Maintenance Service: Water purifier is one of the vital home appliances as it brings pure and healthy water irrespective of the source of water. These days with the increased water pollution get contaminated free water is nearly impossible until you install a water purifier at your home. Installation of water purifier ensures that you will get the best solution, but you need to buy water purifier service along with the installation of water purifier. It is because a water purifier service cleans the water purifier filters properly. Cleaning of water purifier filters ensures that you will get pure water without getting disturbed. Regular water purifier servicing ensures that you will get pure and contamination free water and ensure that your water purifier will work for a longer duration.</p>

            <h1 className="panel-heading text-center">Water Purifier Repair Ghaziabad</h1>
            <p>Water purifiers are the basic need of every house or office due to the increasing pollution level globally. The upsurging amount of the pollution directly affects the quality of the water which can be attainted beck with the help of the water purifiers as there are essential to drink clean and healthy water every day and every time. The problem does not end up with the installation of the purifier only. This requires proper maintenance and repair from time to time so that it should be in the working condition and gives the purified water to the people all the time. Ro Services Ghaziabad is there to give you regular services at affordable prices as cleaning of the purifier is imperative so that the unpurified water substances should not enter the body while drinking the water from the water purifier. Regular checking can be performed by the expert team if you give a call to us any time when you feel so. Regular services of the water purifiers ensure the quality of the water that you are drinking contaminated free water. Moreover, if the service takes place after regular intervals the duration of the working of the machine increases as well as its durability. We are eligible for the installation of the RO if you are facing difficulty in the installation of the purifiers then what are you waiting for? Pick up your cell phone and ring a bell to our store and we are there to give our assistance with just a single call. On the other hand, if you are willing to remove or uninstall the previous water purifier then that is also available with us as we can perform that task for your convenience. Whether the work is to install or to uninstall the purifier both can be performed by our team with efficiency and effectively without creating any kind of disturbance in the home or offices as we are aware of how to work in a peaceful manner.</p>
            <h1 className="panel-heading text-center">Ro Services Ghaziabad</h1>
            <p>If you are willing to get your RO serviced then contact us anytime as we are available to you all the time when you are in our need. Any kind of service of the water purifier can be performed by us. Whether the service is related to a small fault the identified fault is bigger in nature both the situations can be easily handled by the quality professionals. The repair is of high quality which is always appreciated by the clients and they always prefer to call us again for the other services in their homes or offices. The quickest Water Purifier Repair Ghaziabad service is provided to the client within 48 hours so they need not wait for a long duration to get their RO repaired. Whether the fault is minor or major both are rectified by the team members. The services are available at your doorsteps you need not take the appliance at the store instead of that our workers will come to your premises to fix the fault with the required material</p>
          </div>
        </section>
       <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>Why do I need a RO water purifier repair? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>A water purifier is one of the most important house appliance. With a host of waterborne diseases, it is important to know that you are drinking and cooking in clean water. If you have a faulty RO or water purifier system, it is extremely important to get it repaired so you and your family stays healthy.
                    </p>
                  </div>
                </div>
              </div>
               <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What are the services you provide with water purifier system ?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Following services are available: Installation and uninstallation of a water purifier Water purifier repair Basic serving which includes changing the pre-filter, cleaning of the tank, cleaning of all filters, checking for electrical components, pump and RO tubes Regular servicing which also includes changing of sediment filter apart from all that is stated in basic servicing A comprehensive servicing of the RO system that would include changing of RO membrane apart from all that is a part of regular servicing.
                  </p>
                </div>
              </div>
            </div>
           
              </div>  <div className="row text-left">
               <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Do you also provide water filter service?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Yes we do. Snappy services offers a host of choices when it comes to regularly maintaining the water purifier system in your home to ensure its longevity. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>The water tastes bad and smells. What could be wrong?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>TDS or total dissolved salt of water determines its drinkability. They comprise inorganic and organic salt in water, which classifies its consumption. The TDS level of drinking water should be below 300 mg/Litre.
                  </p>
                </div>
              </div>
            </div>
            </div>
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
export default RoService;
