import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from "../data/project";
import 'swiper/css/pagination';
import {Helmet} from "react-helmet";

import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
import QuickContact from './QuickContact';
SwiperCore.use([Navigation, Autoplay]);
function Mep() {
  const [items, setItem] = useState(data);
   const serviceSlider= {
    loop: true,
    speed: 1000,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
  }
    return <>
    <Helmet>
      <title>Top Mechanical, Electrical and Plumbing Contractor in India</title>

<meta name="description" content="Discover excellence in construction services with our top-tier Mechanical, Electrical, and Plumbing (MEP) contracting expertise in India. "/>
<link rel="canonical" href="https://www.snappyserv.com/line-work" />
    </Helmet>
      <section id="What_offer">
        <div className="container text-center ">
        
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
             <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>MEP Services</h1>
            <p>At Snappy, we redefine excellence in construction services, standing as a trusted name synonymous with innovation, precision, and reliability. As a top-tier MEP contractor in India, we take pride in delivering comprehensive solutions that set new benchmarks for quality and efficiency in the industry.

<br></br><br></br>
Whether you're embarking on a new construction project or seeking to upgrade existing systems, Snappy is your partner of choice. Discover the difference that expertise, innovation, and reliability can make in your MEP solutions. Contact us today to begin a journey of excellence in construction services.</p>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/meps.png" className="img-responsive" style={{borderRadius: '30px'}} />
            </div>
          </div>
        </div>
      </section>
     <section id="service_banner">
          <div className="container text-center service_banner_layer">
            <div className="banner_content">
              <div className="row text-left">
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <h1 className="service-heading">Trusted Mechanical, Electrical and Plumbing Contractor</h1>
                  <p>Discover Snappy's comprehensive Mechanical, Electrical and Plumbing Services. Contact us today!</p>
                  <h2>Why choose Snappy?</h2>
                  <ul className="featurs_list">
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Qualified Expert</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Workmanship Quality</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Quality Professionals</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Affordable Package</li>
                  </ul>
                 {/*  <a className="btn btn-warning btn-booknow" href="booking.html"> Book now </a> */}</div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                 <QuickContact/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="What_offer">
          <div className="container text-justify">
            
    <h1 className='panel-heading text-center'>Our Commitment to Excellence</h1>
    
    <div className='row text-center'>
      <div className='col-md-4 mb-2'>
        <div className='boxstyle'>
        <h3>Mechanical Expertise:</h3>
         <p>Our mechanical solutions encompass a wide spectrum, from HVAC systems to intricate machinery installations. We bring a wealth of experience to optimize mechanical systems, ensuring efficiency, sustainability, and seamless integration.</p>
        </div>
      </div>
      <div className='col-md-4 mb-2'>
        <div className='boxstyle'>
        <h3>Electrical Mastery:</h3>
        <p>Energize your projects with our electrical contracting expertise. From high-voltage installations to intricate wiring, our team is adept at delivering solutions that meet the highest safety standards while ensuring uninterrupted power supply.

</p>
        </div>
      </div>
      <div className='col-md-4 mb-2'>
        <div className='boxstyle'>
        <h3>Plumbing Prowess:</h3>
         <p>Our plumbing services go beyond conventional expectations. Whether it's designing efficient water systems, implementing sustainable practices, or executing large-scale plumbing projects, we excel in delivering solutions that stand the test of time.



</p>
      </div></div>
       
    </div>
{/*<h1 className='panel-heading text-center'>Our Projects</h1>
     <Swiper
     {...serviceSlider}
    >
      <div className='row'>
       
        {items.map((element) => {
          const { id,title, image, client, location,valuw,status } = element;
          return (
          
             <SwiperSlide>
               <div className='col-md-12 text-center boxstyle'>
              <img src={image} className="img-responsive"  alt=''/>
              <h3>{title}</h3>
              <p><strong>Client:</strong> {client} </p>
              <p><strong>Location:</strong> {location} </p>
              <p><strong>Project Value:</strong> {valuw} </p>
              <p><strong>Status:</strong> {status} </p>
              </div> 
              </SwiperSlide>
           );})}
         
      </div>
          </Swiper>*/}
          </div>
        </section>
        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q. </strong>
                    <h4>What is MEP in construction?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>MEP stands for Mechanical, Electrical, and Plumbing. MEP services encompass the design, installation, and maintenance of these critical systems in buildings, ensuring they operate efficiently and in compliance with safety standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q. </strong>
                    <h4>What does Mechanical include in MEP services?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Mechanical services involve the installation and maintenance of heating, ventilation, and air conditioning (HVAC) systems, as well as other mechanical components like elevators and escalators.
                    </p>
                  </div>
                </div>
              </div></div><div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4>What falls under Electrical services in MEP?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Electrical services cover the design and installation of electrical systems, including lighting, power distribution, security systems, and other electrical components necessary for a building's operation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4> How do you ensure compliance with safety standards in MEP services?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Compliance with safety standards is a top priority. Our MEP services adhere to local and international safety codes. Regular inspections, rigorous testing, and quality assurance processes are in place to guarantee safety.

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
export default Mep;
