import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact';
import QuickLink from './QuickLink';
import ServiceDetail from './ServiceDetail';
import {Helmet} from "react-helmet";

function HandBlender() {
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
    <title>Snappy: Hand Blender Repair in Ghaziabad, Noida</title>

<meta name="description" content=""/>
<meta name="keywords" content=""/>


<meta name="google-site-verification" content="zZ2rE2HaxXwuRJC8cgm91PMb8xYxDYsWwLkUIck7d8E" />
    </Helmet>
    <section id="What_offer">
          <div className="container text-center ">
            <div className="row text-center" style={{marginTop: '15px', verticalAlign: 'middle'}}>
              <div className="col-md-8 col-xs-12" style={{verticalAlign: 'middle'}}>
                <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Hand Blender</h1>
                <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                  <div className="icon_box_one">
                    <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/hb-1.png" alt="Kitchen" /></div>
                    <div className="box_content">
                       <Link onClick={handleRepair}> <h4>Repair</h4></Link>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-md-4 col-xs-12">
                <img src="../assets/images/service_detail/blender.png" className="img-responsive" style={{borderRadius: '30px'}} alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
            <ServiceDetail service={"Hand Blender"} category={"repair"} type={repair} heading={'Repair'} />
           
          
          
          
        </div>
        <div className="col-md-4"   style={{padding:'20px'}} >
           
            <div className="row text-left  banner_content service_banner_layer" id='service_banner'>
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
               <h1 className="service-heading">Book Your Geyser Repair and Service Today </h1>
                  <p> Keep your cool with fast on site Refrigerator - Fridge repair services from our professional technicians. Genuine spare parts used make a lasting and reliable repair that allows you to enjoy the best performance from your refrigerator.</p>
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
                    <h4>Can hand blenders be repaired? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Hand blenders have problems which can be easily repaired, always contact a professional for blender not working or other problems. Reach out to snappy for all such services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>What are the tips to repair a hand blender?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Most common problems with this appliance are related to the switch so test the switch first. Open and clean the motor body, check the fuse and blade shaft.


                    </p>
                  </div>
                </div>
              </div></div><div className='row'>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What causes a blender motor Burnout?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>A blender when processing frozen foods, hard nuts, thick butters, flax seeds,  glow sticks  will be working harder and may eventually burnout or stop.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What is the first thing to do before cleaning the blender?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Before you clean the blender, unplug the appliance and detach all the accessories. Use a damp cloth to clean the outer area of the blender base.</p>
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
export default HandBlender;
