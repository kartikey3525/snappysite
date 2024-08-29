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
function ElectricalContractor() {
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
      <title>Best Electrical Contractor Ghaziabad | Snappy Services</title>

<meta name="description" content="Snappy Services An Approved Electrical Contractor Located In Ghaziabad, Install Wiring Fittings In Personal Homes, Construction Sites And Commercial Buildings. +91-9999794426"/>
<link rel="canonical" href="https://www.snappyserv.com/electrical-contractor.aspx" />
    </Helmet>
      <section id="What_offer">
        <div className="container text-center ">
        
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
             <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Electrical Contractor</h1>
            <p>Established in year 1998 we take great pride in being recognised as one of the leading Electrical Contractors in Delhi & NCR. We have executed several prestigious turn-key electrification projects, in which, we have developed expertise by virtue of sincerity & dedication. We undertake projects which involves planning and implementation of lighting systems and power distribution of the Factory Premises, Process Plants, Commercial Complex and Residential Colonies.

<br></br><br></br>
Once a project is entrusted to us, you can be guaranteed, high degree of professional back-up & technical expertises. Snappy adhere to stringent electrical maintenance that ensures uninterrupted power supply and all electrification working perfectly and safely.   


<br></br><br></br></p>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/ec.png" className="img-responsive" style={{borderRadius: '30px'}} />
            </div>
          </div>
        </div>
      </section>
     <section id="service_banner">
          <div className="container text-center service_banner_layer">
            <div className="banner_content">
              <div className="row text-left">
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <h1 className="service-heading">Reputed Electrical Contractor in Delhi/NCR</h1>
                  <p>We have extensive experience in effectively dealing with corporate and private clients, and understands the diverse design solutions that each of these clients require.</p>
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
            
    <h1 className='panel-heading text-center'>Areas of Expertise</h1>
    
    <div className='row text-center'>
      <div className='col-md-3 mb-2'>
        <div className='boxstyle'>
        <h3>Engineering</h3>
         <ul>
                <li>High side and Low Side Electrical works</li>
                <li>Turnkey Contractors for:
                  <ul>
                <li>Housing/Township</li>
                <li>Malls/Commercial</li>
                <li>Offices</li>
                <li>Hospital</li>
                <li>Private Villas</li>
                <li>Individual Retail Spaces</li>
                </ul></li>
              </ul>
        </div>
      </div>
      <div className='col-md-3 mb-2'>
        <div className='boxstyle'>
        <h3>Consultancy</h3>
          <ul>
                <li>Electrical Consultants</li>
                <li>Design and Layout</li>
                <li>Artificial Intelligence</li>
                <li>Budget Estimation</li>
                <li>Costing and Auditing</li>
                <li>Quality Control</li>
              </ul>
        </div>
      </div>
      <div className='col-md-3 mb-2'>
        <div className='boxstyle'>
        <h3>Maintenance</h3>
         <ul>
                <li>Annual Maintenance Contracts</li>
                <li>Comprehensive / Non-comprehensive Maintenance Services</li>
                <li>Preventive Maintenance Services</li>
                <li>Breakdown Maintenance Services</li>
                
              </ul>
      </div></div>
       <div className='col-md-3 mb-2'>
        <div className='boxstyle'>
        <h3>Supply</h3>
         <ul>
                <li>LED Lights</li>
                <li>Street Lights</li>
                <li>Solar Panels</li>
                <li>Budget Estimation</li>
                <li>Wires and cables</li>
                <li>DG Sets</li>
                <li>Switchgears and Breakers</li>
              </ul>
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
                    <h4>Are you licensed? </h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Yes, We are licensed electrical contractor in Delhi/NCR for Commercial, Residential projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q. </strong>
                    <h4>Do you have any references?</h4>
                  </div>
                  <div className="answer"><strong>A.</strong>
                    <p>Yes, We have succefully completed projects for Supertech Limited, Wave Infra13 Private Limited, Yashoda Hospitals Pvt. Ltd. and many more..
                    </p>
                  </div>
                </div>
              </div></div><div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4>Who will perform the actual work?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Our licensed electrical engineers will perform the actual work.  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4> What are your service fees?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Serive fee depends on the project requirement. For more details call us on +91-9999794426.
                  </p>
                </div>
              </div>
            </div></div><div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4>What are your specialties?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We are specialist in both residential and commercial electrical works. Our completed and maintenance projects include Housing, Township, Malls, Commercial Offices, Hospital, Villas and Retail Spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q. </strong>
                  <h4>Can you handle large industrial jobs?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Yes, we are experts in every facet of electrical construction, maintenance, and service. We are equipped to handle a complete range of projects.

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
export default ElectricalContractor;
