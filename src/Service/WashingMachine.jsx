import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import {Helmet} from "react-helmet";

import ServiceDetail from './ServiceDetail';
function WashingMachine (){
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
    <title>Snappy: Washing Machine Repair in Ghaziabad, Noida</title>

<meta name="description" content=""/>
<meta name="keywords" content=""/>


<meta name="google-site-verification" content="zZ2rE2HaxXwuRJC8cgm91PMb8xYxDYsWwLkUIck7d8E" />
    </Helmet>
     <section id="What_offer">
        <div className="container text-center ">
          <div className="row text-center" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" style={{verticalAlign: 'middle'}}>
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Washing Machine</h1>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/w-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleClick}> <h4>Installation</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/w-2.png" alt="Bathroom" /></div>
                  <div className="box_content">
                    <Link onClick={handleRepair}> <h4>Repair</h4></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/washing.png" className="img-responsive" style={{borderRadius: '30px'}} alt='' />
            </div>
          </div>
        </div>
      </section>
        <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
           <ServiceDetail service={"Washing Machine"} category={"install"} type={service} heading={'Installation/Uninstallation'} />
          <ServiceDetail service={"Washing Machine"} category={"repair"} type={repair} heading={'Repair'} />
           
         
          
          
        </div>
         <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
               <h1 className="service-heading">Book Your Washing Machine Repair Today </h1>
                <p> Our service technicians deliver quick and efficient air conditioner repair and service. We are experts in all brands and models of air conditioners.</p>
                <h2>Why Choose Us? </h2><br />
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
                  <h4>Do you charge for service by the hour? </h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Service charge is determined based on the job that needs to be performed, not by the hour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Which Brands Do You Service?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Snappy repair and services most of the major brands. We are factory certified to service some of the largest brands.
                  </p></div>
              </div>
            </div></div><div className='row'>
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <div className="qa_box_one">
              <div className="question"><strong>Q.</strong>
                <h4>Who do you call when your washing machine breaks?</h4>
              </div>
              <div className="answer"><strong>A.</strong>
                <p>In the case of a washing machine malfunction there are several people you can call: An electrician, a plumber, or an appliance repair technician.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <div className="qa_box_one">
              <div className="question"><strong>Q.</strong>
                <h4>What is the maintenance of washing machine?</h4>
              </div>
              <div className="answer"><strong>A.</strong>
                <p>Keep it clean to help your washer run efficiently. Wash the washing machine. Rinse away soap residue and build up by running store-bought washing machine cleaner, or a solution of hot water, vinegar and baking soda through an empty load. Prevent musty odours and mildew.
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

export default WashingMachine;