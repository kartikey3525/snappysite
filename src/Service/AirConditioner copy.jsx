import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import data from "../data/acservice";
import data1 from "../data/acrepair";

import data2 from "../data/acinstallation";

import ModalBody from './ModalBody';

function AirConditioner (){
 const [show, setShow] = useState(false);
 const [show1, setShow1] = useState(false);
 const [show2, setShow2] = useState(false);
  const [items, setItem] = useState(data);
  const [items1, setItem1] = useState(data1);
  const [items2, setItem2] = useState(data2);

  const handleClose = () => setShow(false);
   const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
   const handleShow = () => setShow(true);
   const handleShow1 = () => setShow1(true);
   const handleShow2 = () => setShow2(true);
 
    return <>
    <ModalBody  title={'Air Conditioner Service'} data={items} show={show} handleClose={handleClose} />
     <ModalBody title={'Air Conditioner Repair'} data={items1} show={show1} handleClose={handleClose1} />
      <ModalBody title={'Air Conditioner Installation/Unistallation'} data={items2} show={show2} handleClose={handleClose2} />
      
        <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-center" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Air Conditioner</h1>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ac-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleShow}> <h4>Service</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ac-2.png" alt="Bathroom" /></div>
                  <div className="box_content">
                     <Link onClick={handleShow1}> <h4>Repair</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ac-3.png" alt="cleaning" /></div>
                  <div className="box_content">
                    <Link onClick={handleShow2}><h4>Installation / Uninstallation</h4></Link>
                  </div>
                </div>
              </div></div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/appliances.png" className="img-responsive" style={{borderRadius: '30px'}} />
            </div>
          </div>
        </div>
      </section>
       <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
          <div className="row">
              <h2>Service</h2><hr></hr>
            <div className="col-md-3"><img src="../assets/images/service_detail/ac1.png" className='img-responsive' alt="" /></div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9">
                  <h5><strong>AC Service Window (All Brands)</strong></h5>
                  <i className="fa fa-star" /> 4.5 (354)
                  <h4><i className="fa fa-inr" /> 799</h4>
                  <p>Deep cleaning of dust particles for fresh air, filter coils, ac parts with water and foam using jet technology. All elements checked for optimum functioning and performance.</p>
                  <div className="row" id="myDIV" style={{display: 'none'}}>
                    <div className="col-md-12">
                      <h4>How AC service is done?</h4>
                      <ul>
                        <li>Complete check up of the AC unit</li>
                        <li>Deep Cleaning  clogged air filter, coil etc</li>
                        <li>Air distribution check</li>
                        <li>Thermostat Test, calibrate and level</li>
                        <li>Condenser Coil inspection</li>
                        <li>Refrigerant operating pressures check</li>
                        <li>Cooling temperature functionality</li>
                        <li>Finally is it working as new AC</li>
                      </ul>
                    </div>
                  </div>
                  <a onclick="myFunction()">View Details</a>
                </div>
                <div className="col-md-3">
                  <a href="booking.html"><button className="btn btn-primary">Book</button></a>
                </div>
              </div>
            </div>
          </div><hr />
          <div className="row">
            <div className="col-md-3"><img src="../assets/images/service_detail/ac1.png" alt="" /></div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9">
                  <h5><strong>AC Service Split (All Brands)</strong></h5>
                  <i className="fa fa-star" /> 4.5 (354)
                  <h4><i className="fa fa-inr" /> 799</h4>
                  <p>Deep cleaning of dust particles for fresh air, filter coils, ac parts with water and foam using jet technology. All elements checked for optimum functioning and performance.</p>
                  <div className="row" id="myDIV1" style={{display: 'none'}}>
                    <div className="col-md-12">
                      <h4>How AC service is done?</h4>
                      <ul>
                        <li>Complete check up of the AC unit indoor and outdoor</li>
                        <li>Power jet &amp; deep Cleaning  clogged air filter, coil etc</li>
                        <li>Outdoor Unit dismantling and Power jet &amp; deep Cleaning</li>
                        <li>Air distribution check</li>
                        <li>Thermostat Test, calibrate and level</li>
                        <li>Condenser Coil inspection</li>
                        <li>Refrigerant operating pressures check</li>
                        <li>Cooling temperature rate</li>
                        <li>Finally is it working as new Split AC</li>
                      </ul>
                    </div>
                  </div>
                  <a onclick="myFunction1()">View Details</a>
                </div>
                <div className="col-md-3">
                  <a href="booking.html"><button className="btn btn-primary">Book</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
      <section id="service_banner" style={{marginTop: '0px'}}>
        <div className="container text-center service_banner_layer">
          <div className="banner_content">
            <div className="row text-left">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <h1 className="service-heading">Book your AC Services Today</h1>
                <p> Our service technicians deliver quick and efficient air conditioner repair and service. We are experts in all brands and models of air conditioners.</p>
                <h2>Why Choose Us? </h2><br />
                <ul className="featurs_list">
                  <li><i className="fa fa-check-square-o" aria-hidden="true" /> Certified Technician</li>
                  <li><i className="fa fa-check-square-o" aria-hidden="true" /> Same Day Service</li>
                  <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Quality Service</li>
                  <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Pricing</li>
                </ul>
                <a className="btn btn-warning btn-booknow" href="booking.html"> Book now </a>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="quick_contact">
                  <p>We Are Here To Help <br />
                    You!!!</p>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-user" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleName" placeholder="Name" name="name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleemail" placeholder="Email" name="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="examplePhone" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="quick_btn">
                        <button type="submit" className="btn btn-default btn-skin">SUBMIT</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section id="What_offer">
        <div className="container text-justify">
          <h1 className="panel-heading text-center">Why Snappy best choice for you?</h1>
          <p>Every home deserves best-in-class efficiency, peace of mind getting their appliances repaired or serviced. Given its critical role in your home, it’s imperative you only entrust it to a reputable home appliances repair &amp; service company like Snappy. <br /><br />
            Each service engineers on the Snappy team undergoes a rigorous background check to assess whether they have what it takes to meet and beat clientele expectations. They’re fully licensed, insured, and certified.<br /><br />
            Our efficient work helps you in saving energy cost, long lifespan through quality workmanship and Durable Worry free performance of your home appliance. We use superior technology and quality spares to make your appliances as good as new. <br /><br /> 
            Backed by over twenty years of repair &amp; service experience and a plethora of satisfied clients, we only exists for one reason to deliver unrivalled home appliances services that keep your electrical appliance at peak performance consistently. <br /><br /> 
            What’s more, we know the industry is ever-evolving. To keep our team on top of emerging the Best Home appliance services in Delhi NCR trends and innovations, we encourage our AC technicians to pursue further training and development through specialized in-house programs. That helps them enhance their skills and efficiency, allowing them to offer you nothing but the best Electrical appliances service in Delhi, Ghaziabad, Noida and NCR.
          </p>
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
                  <p>You can get your home electrical design, install, and maintainance of electrical done by a certified and licensed electrical contractor. All installation must be inspected by the city, district, area electrical inspector.  Contact your local government electricity board authorities for rules and regulations. It is best you a hire a licensed electrician.
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
            </div></div><div className="row text-left">
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
          </div></div><div className="row text-left">
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <div className="qa_box_one">
              <div className="question"><strong>Q.</strong>
                <h4>Why washing machine is not spinning?</h4>
              </div>
              <div className="answer"><strong>A.</strong>
                <p>It’s not uncommon for washing machines to stop spinning reasons Drain pump blockage, Imbalanced drum, Motor brushes worn out, most of which Snappy services can easily fix and have your machine up and running again in no time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <div className="qa_box_one">
              <div className="question"><strong>Q.</strong>
                <h4>Why did my TV all of a sudden go black?</h4>
              </div>
              <div className="answer"><strong>A.</strong>
                <p>TV black screens are commonly caused by cable connection issues, issues with input devices, or outdated firmware updates. Worst case scenario, the power supply board could have malfunctioned call a professional to fix it.
                </p>
              </div>
            </div>
          </div>
          <div className='row text-center'>
              <div className='col-md-12'>
                <h1 className='text-red'>Still Have Questions?</h1>
                <h2>Give us a call at <strong>+91-99997 94426</strong></h2>
                <p>Snappy is dedicated to providing you with the best service possible.<br></br> We look forward to working with you!</p>
              </div>
            </div></div>
        </div>
      </section>

    </>
      
    
  
}
export default  AirConditioner;
