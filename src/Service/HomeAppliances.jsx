import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuickContact from './QuickContact'
import {Helmet} from "react-helmet";

export default class HomeAppliances extends Component {
  render() {
    return <>
    <Helmet>
     <title> Snappy Services: Top Home Appliance Repair Service in Ghaziabad</title>

<meta name="description" content="Snappy Services Most Trusted Home Appliances repair service provider in Ghaziabad; We are one stop shop for repair and maintenance of AC, Fridge/Refrigerator, Washing Machine, Chimney etc."/>
<meta name="keywords" content="Best Ac Repair services in Ghaziabad, Washing machine repair in Ghaziabad, LCD/LED TV repair in Ghaziabad, Food Processor Repair Services, Chimney Repair Services in Ghaziabad, Ac Installation and Uninstallation, Microwave Repair Services, "/>
<link rel="canonical" href="https://www.snappyserv.com/home-appliances.html" />
    </Helmet>
    <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row " style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-12 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Home Appliances</h1>
              <ul className="services-list">
         <li> <Link to={`${process.env.PUBLIC_URL}/air-conditioner`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/7.png" alt="appliances" /><br />
            Air Conditioner</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/lcd-led-tv`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/8.png" alt="appliances" /><br />
             LCD/LED TV</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/washing-machine`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/9.png" alt="appliances" /><br />
            Washing Machine</Link></li>
            
             <li> <Link to={`${process.env.PUBLIC_URL}/refrigerator`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/10.png" alt="appliances" /><br />
            Refrigerator</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/microwave`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/11.png" alt="appliances" /><br />
            Microwave</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/chimney`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/12.png" alt="appliances" /><br />
            Chimney</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/geyser`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/13.png" alt="appliances" /><br />
            Geyser </Link></li>
            <li> <Link to={`${process.env.PUBLIC_URL}/mixer`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/14.png" alt="appliances" /><br />
            Mixer Grinder </Link></li>
            <li> <Link to={`${process.env.PUBLIC_URL}/food-processor`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/15.png" alt="appliances" /><br />
            Food Processor </Link></li>
            <li> <Link to={`${process.env.PUBLIC_URL}/hand-blender`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/16.png" alt="appliances" /><br />
            Hand Blender </Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/rice-cooker`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/17.png" alt="appliances" /><br />
            Rice Cooker </Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/fan`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/18.png" alt="appliances" /><br />
            Fan </Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/induction`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/19.png" alt="appliances" /><br />
            Induction </Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/air-cooler`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/20.png" alt="appliances" /><br />
            Air Cooler </Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/ro-services`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/ro.png" alt="more" /><br />
            RO Services</Link></li>
      </ul>
              </div>
          {/*   <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/home.png" className="img-responsive" style={{borderRadius: '30px'}} />
            </div>*/}
          </div>
        </div>
      </section>
     <section id="service_banner">
          <div className="container text-center service_banner_layer">
            <div className="banner_content">
              <div className="row text-left">
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <h1 className="service-heading">Easy, Reliable and Affordable Services for all Home Appliances</h1>
                  <p>We help you get trusted professionals for all your Home Appliance needs. We connect you to punctual and hardworking experts who work towards customer satisfaction and meet all your appliance needs.</p>
                  <h2>Why choose Snappy?</h2>
                  <ul className="featurs_list">
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Certified Technician</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Same Day Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Quality Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Pricing</li>
                  </ul>
                  {/*  <a className="btn btn-warning btn-booknow" href="booking.html"> Book now </a>*/} </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <QuickContact/>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section id="What_offer">
          <div className="container text-justify">
            <h1 className="panel-heading text-center">Why Snappy best choice for you?</h1>
            <p>Welcome to Snappy! India’s most trusted appliance service and repair solutions. With verified professionals who come to your doorstep across India, you can repair your Washing Machine, Fridge, Microwave Oven, Air Conditioner (AC) and more. Whether it’s a noisy AC, leaking fridge or a dead washing machine of any brand or model, we repair them smartly at your convenience.</p>
            <p>We guarantee that repair service specialists get the job done right each time. We are committed to provide fast & accurate solutions to home appliances repair .</p>
            <p>You can choose your preferred time and our expert will be at your door at the sharp instance. Every time you avail our services, you will experience a super quality, customer oriented and on time service.</p>
          </div>
        </section>
        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>How much will it cost to repair my appliance? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>We offer visit & diagnosis at Just Rs.99/- only. As per repairs; it is the most common question we are asked, for which there is never a specific answer. Depending on the size and extent of the repair job, you will be looking at a range of prices. If you give us a call or email us and describe the problem we can give you a more accurate estimate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                    <h4>What’s better, a appliance repair or replacement?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>In general, our technicians will never push you to repair an appliance after it’s past it’s prime. Each and every appliance has a lifespan, and maintenance past this age will take longer, cost more and be more difficult. If your appliance is failing every few months consider a replacement instead of a repair. Our technicians will gladly assist you in determining which option is more cost-effective.
                    </p>
                  </div>
                </div>
              </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>My appliance won’t turn on, what should i do?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Even new appliances are sometimes prone to failure. However, often appliances such as washers or dryers simply come unplugged from their power source over time as a result of shaking or vibration. Before you try anything, check your power cord and re-set buttons. You’d be surprised at how many issues we’ve resolved which simply involved plugging an appliance back in.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What kinds of appliances do you repair?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We repair most major household brands of washing machine, dryers, refrigerators, freezers, dishwashers, and ovens.
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
}
