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
 
    return (
      <>
        <Helmet>
          <title> Best Firefitting Services Ghaziabad</title>

          <meta
            name="description"
            content="Snappy Services one of the Best Firefitting service provider, offering their services in Ghaziabad, Noida. Call: +91-9999794426"
          />
          <meta
            name="keywords"
            content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Best Firefitting service, Firefitting service provider in Ghaziabad,Firefitting provider in Ghaziabad. "
          />
          <link
            rel="canonical"
            href="https://www.snappyserv.com/solar-appliances.html"
          />
        </Helmet>
        <section id="What_offer">
          <div className="container text-center ">
            <div
              className="row text-left text-justify"
              style={{ marginTop: "15px", verticalAlign: "middle" }}
            >
              <div className="col-md-8 col-sm-6 col-xs-12">
                <h1
                  className="text-left"
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    marginBottom: "55px",
                  }}
                >
                  Firefitting
                </h1>

                <p className="text-left" style={{ fontSize: "20px" }}>
                  Professional Firefitting Contracting Services: Safeguarding
                  Your Property with Expert Fire Protection Welcome to our
                  premier firefitting contracting services! Ensuring that your
                  property is equipped with effective fire protection systems is
                  essential for safety and peace of mind. Our team is dedicated
                  to providing comprehensive firefitting solutions to safeguard
                  your home, business, or industrial facility from fire hazards.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <img
                  src="../assets/images/firefitting2.jpg"
                  className="img-responsive"
                  style={{ borderRadius: "30px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section id="What_offer">
          <div className="container text-justify">
            <div className="row">
              {/* content  */}
              <p className="text-left" style={{ fontSize: "20px" }}>
                What is Firefitting Contracting? Firefitting Contracting
                involves the design, installation, maintenance, and repair of
                fire protection systems. These systems are critical for
                detecting, controlling, and extinguishing fires, helping to
                protect lives and property. Our expert services ensure that your
                fire protection systems are up-to-date, compliant with
                regulations, and ready to perform when needed.
              </p>
              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Our Firefitting Contracting Services :
              </h1>
              <br />
              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                1. System Design and Installation
              </h1>

              <div style={{ overflow: "hidden" }}>
                <img
                  src="../assets/images/firefitting1.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                />
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Fire Sprinkler Systems: We design and install fire sprinkler
                  systems tailored to your building's layout and fire risk
                  assessment. Our systems are designed to provide optimal
                  coverage and reliability.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Fire Alarm Systems: We offer installation of advanced fire
                  alarm systems that include smoke detectors, heat detectors,
                  and alarm panels to ensure early detection and prompt response
                  to fire incidents.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Fire Extinguishers: Our team installs and services various
                  types of fire extinguishers, including water, foam, CO2, and
                  dry powder extinguishers, based on the specific fire risks
                  present in your facility.
                </p>{" "}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Fire Hose Reels and Cabinets: We install fire hose reels and
                  cabinets to provide easy access to firefighting equipment in
                  emergency situations.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                2. Maintenance and Inspections
              </h1>

              <div style={{ overflow: "hidden" }}>
                {/* <img
                  src="../assets/images/ac_filters.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                /> */}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Routine Inspections: Regular inspections are essential to
                  ensure that fire protection systems are functioning correctly
                  and comply with safety regulations. We conduct thorough
                  inspections to identify and address any issues.
                </p>

                <p className="text-left" style={{ fontSize: "20px" }}>
                  Testing and Certification: Our team performs testing on fire
                  alarm systems, sprinkler systems, and other fire protection
                  equipment to ensure they are operational and meet legal
                  requirements.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Service and Repairs: We provide prompt repair services for any
                  issues identified during inspections or as reported by
                  facility staff, ensuring that your fire protection systems are
                  always in top working condition.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                3. System Upgrades
              </h1>

              <div style={{ overflow: "hidden" }}>
                {/* <img
                  src="../assets/images/ac_filters.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                /> */}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Modernization: We offer upgrading services to modernize
                  outdated fire protection systems, enhancing their
                  effectiveness and compliance with the latest safety standards.
                </p>

                <p className="text-left" style={{ fontSize: "20px" }}>
                  Integration: Our team can integrate new fire protection
                  technologies with existing systems to improve overall
                  functionality and response times.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                4. Emergency Services
              </h1>

              <div style={{ overflow: "hidden" }}>
                {/* <img
                  src="../assets/images/ac_filters.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                /> */}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  24/7 Support: Firefitting issues can arise unexpectedly. We
                  offer emergency services to address urgent repairs and
                  maintenance needs, ensuring that your fire protection systems
                  are always reliable.
                </p>

                <p className="text-left" style={{ fontSize: "20px" }}>
                  Rapid Response: Our team is trained to respond quickly to
                  emergency situations, minimizing downtime and ensuring that
                  your fire protection systems are restored to full
                  functionality as soon as possible.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                5. Compliance and Consultation
              </h1>

              <div style={{ overflow: "hidden" }}>
                {/* <img
                  src="../assets/images/ac_filters.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                /> */}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Regulatory Compliance: We ensure that all fire protection
                  systems meet local and national fire safety regulations,
                  providing you with peace of mind that your property is in
                  compliance.
                </p>

                <p className="text-left" style={{ fontSize: "20px" }}>
                  Consultation Services: Our experts offer consultation services
                  to help you assess your fire protection needs, design
                  appropriate systems, and implement effective fire safety
                  strategies.
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
                    Professional Firefitting Service in Ghaziabad, Noida, and
                    Delhi
                  </h1>
                  <p>
                    We have extensive experience in effectively dealing with
                    corporate and private clients, and understands the diverse
                    design solutions that each of these clients require.
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

        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question">
                    <strong>Q.</strong>
                    <h4>
                      Who can design, install, and maintain electrical systems
                      in my home?{" "}
                    </h4>
                  </div>
                  <div className="answer">
                    <strong>A.</strong>
                    <p>
                      You can get your home electrical design, install, and
                      maintain electrical done by a certified and licensed
                      electrical contractor. All installation must be inspected
                      by the city, district, area electrical inspector. Contact
                      your local government electricity board authorities for
                      rules and regulations. It is best you a hire a licensed
                      electrician.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question">
                    <strong>Q.</strong>
                    <h4>Why do I need AC service?</h4>
                  </div>
                  <div className="answer">
                    <strong>A.</strong>
                    <p>
                      All leading AC brands recommend seasonal cleaning and
                      periodic maintenance to remove impurities. AC servicing
                      helps to boost AC performance and reduce your home
                      electricity bill. A non-serviced AC may consume more power
                      to deliver cool air or may not provide effective cooling
                      due to reasons such as a gas leakage.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question">
                    <strong>Q.</strong>
                    <h4>
                      What is signs and possibility for Electric Motor not to
                      work?
                    </h4>
                  </div>
                  <div className="answer">
                    <strong>A.</strong>
                    <p>
                      Signs noise Overheating frosting of polished metal
                      surfaces premature grease darkening. Possible causes
                      Leakage current from the armature windings,
                      Non-symmetrical magnetic fields Induced voltage from a
                      VFD.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question">
                    <strong>Q.</strong>
                    <h4>How AC service is done?</h4>
                  </div>
                  <div className="answer">
                    <strong>A.</strong>
                    <p>
                      Complete check up of the AC unit, Deep Cleaning clogged
                      air filter, coil etc, air distribution check Thermostat
                      Test, calibrate and level, Condenser Coil inspection,
                      Refrigerant operating pressures check, cooling temperature
                      functionality, finally is it working as new AC.
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
export default SolarAppliances;
