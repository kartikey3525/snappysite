import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../data/project";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";

import SwiperCore, { Autoplay, Navigation } from "swiper";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";
SwiperCore.use([Navigation, Autoplay]);
function LineWork() {
  const [items, setItem] = useState(data);
  const serviceSlider = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>
          Expert Electrical HT Line Work Contractor in Ghaziabad, India
        </title>

        <meta
          name="description"
          content="Choose a trusted electrical line work contractor for all your electrical needs. Our certified experts provide top-tier services, from installations and maintenance to motor repairs. Contact us for quality electrical solutions."
        />
        <link rel="canonical" href="https://www.snappyserv.com/line-work" />
      </Helmet>
      <section id="What_offer">
        <div className="container text-center ">
          <div
            className="row text-left text-justify"
            style={{ marginTop: "15px", verticalAlign: "middle" }}
          >
            <div className="col-md-8 col-sm-6 col-xs-12">
              <h1
                className="service-heading"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "55px",
                }}
              >
                HT Line Work
              </h1>
              <p>
                High Tension (HT) and Low Tension (LT) Line Work: Ensuring
                Reliable Electrical Distribution Welcome to our comprehensive
                guide on HT (High Tension) and LT (Low Tension) line work.
                Whether you are a property owner, a business manager, or simply
                interested in the technical aspects of electrical distribution,
                understanding the nuances of HT and LT lines is crucial for
                ensuring a stable and reliable power supply.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img
                src="../assets/images/service/linework.png"
                className="img-responsive"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="What_offer">
        <div className="container text-justify">
          <div className="row">
            {/* content place */}

            <p className="text-left" style={{ fontSize: "20px" }}>
              What Are HT and LT Lines? <br />
              <br /> High Tension (HT) Lines: Definition: HT lines are used to
              transmit electricity over long distances at high voltages. These
              voltages typically range from 11kV to 400kV. Purpose: They are
              designed to carry large amounts of electricity from power plants
              to substations, where the voltage is then reduced for local
              distribution. Features: HT lines are usually supported by tall,
              robust transmission towers. The conductors are spaced apart to
              avoid electrical arcing and to handle the high voltages safely.
            </p>

            <p className="text-left" style={{ fontSize: "20px" }}>
              Low Tension (LT) Lines: Definition: LT lines are used for
              distributing electricity at lower voltages, generally below 1kV.
              Purpose: They deliver electricity from substations to residential,
              commercial, and industrial users. Features: LT lines are typically
              supported by shorter, less sturdy poles compared to HT lines. They
              are found in neighborhoods and commercial areas, where the demand
              is lower and the voltage requirements are reduced.
            </p>

            <h1
              className="service-heading"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                textDecorationLine: "underline",
                marginBottom: "4%",
              }}
            >
              Our HT and LT Line Services :
            </h1>
            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              1. Installation
            </h1>
            <div style={{ overflow: "hidden" }}>
              <img
                src="../assets/images/A_technician_1.jpg"
                style={{
                  borderRadius: "30px",
                  width: "20%",
                  float: "right",
                }}
                alt=""
              />
              <p className="text-left" style={{ fontSize: "20px" }}>
                HT Lines: Our team of certified professionals is skilled in
                installing high-tension lines with precision. We use
                state-of-the-art equipment and follow industry best practices to
                ensure safe and efficient installation.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                LT Lines: We offer comprehensive services for the installation
                of low-tension lines, including designing layouts and setting up
                necessary infrastructure.
              </p>
            </div>
            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              2. Maintenance
            </h1>
            <div style={{ overflow: "hidden" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Routine Checks: Regular inspections of both HT and LT lines help
                identify potential issues before they become serious problems.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Our experienced technicians are equipped to handle repairs on
                both HT and LT lines, ensuring that any faults are addressed
                quickly to minimize disruption.
              </p>
            </div>
            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              3. Upgrades:
            </h1>
            <div style={{ overflow: "hidden" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                HT Line Upgrades: We provide solutions for upgrading
                high-tension lines to meet increased demand or to replace
                outdated infrastructure.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                LT Line Enhancements: Our services include upgrading low-tension
                lines to improve efficiency and reliability.
              </p>
            </div>
            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              4. Emergency Services
            </h1>
            <div style={{ overflow: "hidden" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                24/7 Support: We offer round-the-clock emergency services to
                address urgent issues with HT and LT lines, ensuring that your
                power supply is restored as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service_banner">
        <div className="container text-center service_banner_layer">
          <div className="banner_content">
            <div className="row text-left">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <h1 className="service-heading">
                  Trusted Electrical Line Work Contractor in Delhi/NCR
                </h1>
                <p>
                  Discover Snappy's comprehensive electrical line work
                  solutions. Contact us today!
                </p>
                <h2>Why choose Snappy?</h2>
                <ul className="featurs_list">
                  <li>
                    <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                    Qualified Expert
                  </li>
                  <li>
                    <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                    Workmanship Quality
                  </li>
                  <li>
                    <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                    Quality Professionals
                  </li>
                  <li>
                    <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                    Affordable Package
                  </li>
                </ul>
                {/*  <a className="btn btn-warning btn-booknow" href="booking.html"> Book now </a> */}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <QuickContact />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="What_offer">
        <div className="container text-justify">
          <h1 className="panel-heading text-center">Our Services</h1>

          <div className="row text-center">
            <div className="col-md-4 mb-2">
              <div className="boxstyle">
                <h3>Electrical Substation Services</h3>
                <ul>
                  <li>Electrical Turnkey Projects</li>
                  <li>Turnkey Contract for Substation</li>

                  <li>Substation Erection Service</li>
                  <li>Electrical Substations Services</li>
                  <li>HT Transformer Substation</li>

                  <li>Electrical Substation Contractor Services</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="boxstyle">
                <h3>Electrification Services</h3>
                <ul>
                  <li>LT/HT Panel Installation</li>
                  <li>33 /11 kv line fault Repair and maintenance </li>
                  <li>33/11 cable joint Replacement </li>
                  <li>33/11kv Transformer Installation </li>
                  <li>33/11kv Dehydration and Filtration Services</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="boxstyle">
                <h3>Cable Laying Services</h3>
                <ul>
                  <li>HT Cable Laying Services</li>
                  <li>LT Cable Laying Services</li>
                  <li>Cable Installation Services</li>
                </ul>
              </div>
            </div>
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
                <div className="question">
                  <strong>Q. </strong>
                  <h4>
                    What does an high tension electrical line work contractor
                    do?{" "}
                  </h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    An electrical line work contractor specializes in various
                    electrical services. This includes installation,
                    maintenance, and repair of electrical systems in
                    residential, commercial, and industrial settings. They
                    manage everything from wiring and lighting to panel upgrades
                    and motor repairs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4>
                    What services do you provide for commercial customers?
                  </h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Our commercial services cover electrical maintenance to
                    prevent downtime, wiring solutions for new and existing
                    businesses, and 24/7 emergency services to ensure your
                    operations run smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4>How do you ensure safety during your services?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Safety is our top priority. We strictly adhere to safety
                    protocols, and our technicians are highly trained to work
                    safely. We also perform thorough inspections to identify
                    potential hazards before starting any project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4>
                    {" "}
                    What sets your electrical line work contractor services
                    apart from others?
                  </h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    We prioritize safety, reliability, and timely delivery. Our
                    team's experience, commitment to quality, and wide range of
                    services make us the go-to choice for electrical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="text-red">Still Have Questions?</h1>
              <h2>
                Give us a call at <strong>+91-99997 94426</strong>
              </h2>
              <p>
                Snappy is dedicated to providing you with the best service
                possible.<br></br> We look forward to working with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LineWork;
