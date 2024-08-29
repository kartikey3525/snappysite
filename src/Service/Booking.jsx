import React, { useRef, useState} from 'react'
import Breadcrumb from '../Common/Breadcumb'
import { useParams,Link } from "react-router-dom";
import data from "../data/services";
import emailjs from "@emailjs/browser";
import {Helmet} from "react-helmet";

function Booking() {
   const form =useRef();
  
  let params = useParams()
  const service=params.id
     const [items, setItem] = useState(data);
    const sendEmail=(e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_kdy0536','template_i3pxwm8',form.current,'iqbPzOfU2iVNkyY7H')
      .then((result) => {
      
         // console.log(result.text);
          alert('Booking Confirmed!! We will contact you soon.');
           e.target.reset();
            // this.context.router.push('/');
      }, (error) => {
          console.log(error.text);
      });
  };
    return <>
      <Breadcrumb pageTitle="Booking" pageName="Booking"/>
    <section id="contact_information">
        <div className="container">
          <div className="row"> 
            {/*Left Form Part*/}
            <div className="col-md-8 col-sm-8 col-xs-12"> 
              {/*Contact Information*/}
              <div className="contact_information_left "> 
                {/* HTML Form (wrapped in a .bootstrap-iso div) */}
                <div className="booking_form">
                  <div className="container-fluid">
                    <div className="row">
                     
                           {items.map((element) => {
                           
                            return<>
                            {element.id === parseInt(service) && <>
                             <div className="booking_summary ">
                          <h1>Summary</h1>
                          <ul>
                            <li><h2>{element.title}</h2></li>
                            
                          </ul>
                          <div className="price_totle">
                            <div className="subtotal">
                              <div className="heading text-left">SUB TOTAL</div>
                              <div className="price text-right"> {element.price}</div>
                            </div>
                            <div className="subtotal">
                              <div className="heading text-left">DISCOUNT</div>
                              <div className="price text-right">0.00</div>
                            </div>
                            <div className="subtotal">
                              <div className="heading text-left">TOTAL:</div>
                              <div className="price text-right">{element.price}</div>
                            </div>
                          </div>
                          <form ref={form} onSubmit={sendEmail}> 
                        <h2>Contact Information </h2> 
                        <p>This information will be used to contact you about your service</p>
                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                          <input className="form-control" id="name" name="name" placeholder=" Name" type="text" required/>
                        </div>
                        
                       <div className="form-group col-md-12 col-sm-6 col-xs-12">
                          <input className="form-control" id="email" name="email" placeholder="Email*" type="text" required/>
                        </div>
                        <div className="form-group col-md-12 col-sm-6 col-xs-12 ">
                          <input className="form-control" id="tel" name="phone" placeholder="Phone Number*" type="text" required/>
                        </div>
                        <div className="clearfix" />
                        <hr />
                        {/*Service Address*/}
                        <h2>Service Address</h2>
                        <p>Where would you like us to visit?</p>
                        <div className="form-group col-md-12 col-sm-8 col-xs-12 ">
                          <input className="form-control" id="address" name="address" placeholder="Address*" type="text" required />
                        </div>
                       
                        <div className="form-group col-md-6 col-sm-4 col-xs-12">
                          <input className="form-control" id="city" name="city" placeholder="City*" type="text" required/>
                        </div>
                        
                        <div className="form-group col-md-6 col-sm-4 col-xs-12 padding-r">
                          <input className="form-control" id="postcode" name="postcode" placeholder="Postcode*" type="text" required/>
                        </div>
                        <div className="clearfix" />
                        <hr />
                        {/*Choose Service*/}
                        {/*Select Date Time*
                        <h2>When would you like us to come?</h2>
                        <p />
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="input-group date" id="datetimepicker1">
                            <input type="text" className="form-control" />
                            <span className="input-group-addon"> <span className="glyphicon glyphicon-calendar" /> </span> </div>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 padding-r">
                          <div className="input-group date" id="datetimepicker3">
                            <input type="text" className="form-control" />
                            <span className="input-group-addon"> <span className="glyphicon glyphicon-time" /> </span> </div>
                        </div>
                        <div className="clearfix" />
                        <hr />/}
                        {/*Promo Code*/}
                        <div className="form-group col-md-8 col-sm-8 col-xs-12">
                          <input className="form-control" id="Promo_code" name="Promo_code" placeholder="Promo code (optional)" type="text" />
                        </div>
                        <div className="form-group col-md-4 col-sm-4 col-xs-12 padding-r">
                          <button className="btn btn-primary promo_apply" name="Apply" > Apply </button>
                        </div>
                        <div className="clearfix" />
                        <hr />
                        {/*BOOK NOW*/}
                        
                        <p>By clicking the Book Now button you are agreeing to our <Link to={`${process.env.PUBLIC_URL}/terms-and-conditions`}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Terms of Service</Link> and <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Privacy Policy</Link>.</p>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <input type="hidden" value={element.title} name="service"/>
                           <input type="hidden" value={element.price} name="amount"/>
                          <button className="btn btn-primary btn-skin" name="submit" type="submit"> BOOK NOW</button>
                        </div>
                      </form></div>
                          </>}
                      </>})}
                        
                      
                    </div>
                  </div>
                </div>
              </div>
              {/*Contact Information*/} 
            </div>
            {/*/Left Form Part*/}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="contact_information_right text-center">
                <div className="booking_summary">
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/time3.png" alt="time3" /></div>
                    <div className="box_content">
                      <h4>SAVES YOU TIME</h4>
                      <p>Scheduele your services through website, call and whatsapp. </p>
                    </div>
                  </div>
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/Safety3.png" alt="Safety3" /></div>
                    <div className="box_content">
                      <h4>For Your Safety</h4>
                      <p>All of our engineers undergo rigorous identity checks and personal interviews. Your safety is even our concern.</p>
                    </div>
                  </div>
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/best3.png" alt="best3" /></div>
                    <div className="box_content">
                      <h4>Best-Rated Professionals</h4>
                      <p>Our experienced engineers perform their work with dedication and perfection. We appreciate your reviews about the service.</p>
                    </div>
                  </div>
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/Equipped3.png" alt="Equipped3" /></div>
                    <div className="box_content">
                      <h4>We Are Well Equipped</h4>
                      <p>Let us know if you have any specific requirement, our professionals are well equipped with all the tools and spare-parts. </p>
                    </div>
                  </div>
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/touch3.png" alt="touch3" /></div>
                    <div className="box_content">
                      <h4>Always In Touch</h4>
                      <p>Book your service online on one tap, keep a track of your service status and also keep in touch with your technician.</p>
                    </div>
                  </div>
                  <div className="icon_box_one">
                    <div className="icons"><img src="../assets/images/booking/cash3.png" alt="cash3" /></div>
                    <div className="box_content">
                      <h4>Cash-Free Facility</h4>
                      <p>Pay through secure online mode only after your job is done.</p>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  }
export default Booking
