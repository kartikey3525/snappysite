import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";
import { Helmet } from "react-helmet";
import ServiceDetail from "./ServiceDetail";

function AirConditioner() {
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

  return (
    <>
      <Helmet>
        <title>
          Snappy: Air Conditioner Repair & Service in Ghaziabad, Noida
        </title>

        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta
          name="google-site-verification"
          content="zZ2rE2HaxXwuRJC8cgm91PMb8xYxDYsWwLkUIck7d8E"
        />
      </Helmet>
      <section id="What_offer">
        <div className="container text-center ">
          <div
            className="row text-center"
            style={{ marginTop: "15px", verticalAlign: "middle" }}
          >
            <div className="col-md-8 col-sm-6 col-xs-12">
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Expert HVAC Contracting Services: Your Solution for Optimal
                  Climate Control Welcome to our HVAC (Heating, Ventilation, and
                  Air Conditioning) contracting services! Whether you're looking
                  to install a new HVAC system, maintain your current system, or
                  need prompt repairs, our team is dedicated to providing
                  top-notch solutions to ensure your indoor climate remains
                  comfortable year-round.
                </p>

                <img
                  src="../assets/images/banner2.png"
                  // className="img-responsive"
                  style={{
                    borderRadius: "30px",
                    alignContent: "center",
                    width: "100%",
                  }}
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <img
                src="../assets/images/chiller installation.jpg"
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
            <div className="col-md-8">
              <p className="text-left" style={{ fontSize: "20px" }}>
                What is HVAC Contracting?
                <br />
                <br />
                HVAC Contracting involves the design, installation, maintenance,
                and repair of heating, ventilation, and air conditioning
                systems. These systems are crucial for maintaining a comfortable
                indoor environment by regulating temperature, humidity, and air
                quality. Our comprehensive HVAC contracting services are
                designed to meet all your climate control needs.
              </p>
              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Our HVAC Contracting Services :
              </h1>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                1. Installation
              </h1>

              <div style={{ overflow: "hidden" }}>
                <img
                  src="../assets/images/ac_filters.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "50%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                />
                <p className="text-left" style={{ fontSize: "20px" }}>
                  System Design: Our experts work with you to design an HVAC
                  system that suits your specific needs, taking into account
                  factors such as building size, insulation, and your preferred
                  comfort levels. Equipment Selection: We help you choose
                  high-quality, energy-efficient HVAC equipment that fits your
                  budget and performance requirements.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Professional Installation: Our certified technicians ensure
                  that your HVAC system is installed correctly and efficiently,
                  following all safety standards and manufacturer guidelines.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                2. Maintenance
              </h1>

              <div style={{ overflow: "hidden" }}>
                {/* <img
                  src="../assets/images/hvac_3.jpg"
                  style={{
                    borderRadius: "30px",
                    width: "25%",
                    height: "30%",
                    float: "right",
                    margin: " 15px 15px 0",
                  }}
                  alt=""
                /> */}
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Routine Inspections: Regular maintenance is key to extending
                  the lifespan of your HVAC system. We offer scheduled
                  inspections to check for any issues and perform necessary
                  adjustments.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Preventative Care: Our maintenance services include cleaning,
                  lubrication, and calibration of your HVAC system to prevent
                  potential breakdowns and ensure optimal performance. Filter
                  Replacement: We provide filter replacement services to
                  maintain indoor air quality and system efficiency.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                3. Repairs
              </h1>

              <div style={{ overflow: "hidden" }}>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Emergency Repairs: HVAC issues can arise unexpectedly. Our
                  team is available for emergency repairs to address any
                  problems quickly and restore comfort to your space. Diagnostic
                  Services: We use advanced diagnostic tools to identify the
                  root cause of HVAC issues and provide effective solutions to
                  resolve them.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Parts Replacement: If components of your HVAC system are
                  malfunctioning, we offer replacement parts and repair services
                  to get your system back to peak performance.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                4. System Upgrades
              </h1>

              <div style={{ overflow: "hidden" }}>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Efficiency Upgrades: If your HVAC system is outdated or
                  inefficient, we offer upgrade options to improve energy
                  efficiency and reduce operating costs.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Smart Thermostats: We can install and configure smart
                  thermostats that allow you to control your HVAC system
                  remotely and optimize energy usage.
                </p>
              </div>

              <h1
                className="service-heading"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                5. Commercial HVAC Services
              </h1>

              <div style={{ overflow: "hidden" }}>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Custom Solutions: For businesses, we provide customized HVAC
                  solutions tailored to commercial spaces, including office
                  buildings, retail stores, and industrial facilities.
                </p>
                <p className="text-left" style={{ fontSize: "20px" }}>
                  Maintenance Contracts: We offer maintenance contracts for
                  businesses to ensure their HVAC systems are consistently
                  monitored and maintained.
                </p>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: "20px" }}>
              <div
                className="row text-left  banner_content service_banner_layer"
                id="service_banner"
              >
                <div
                  className="col-md-12 col-sm-12 col-xs-12 "
                  style={{ padding: "20px" }}
                >
                  <h1 className="service-heading">
                    Book your AC Services Today
                  </h1>
                  <p>
                    {" "}
                    Our service technicians deliver quick and efficient air
                    conditioner repair and service. We are experts in all brands
                    and models of air conditioners.
                  </p>
                  <h2>Why Choose Us? </h2>
                  <br />
                  <ul className="featurs_list">
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                      Certified Technician
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                      Same Day Service
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                      Best Quality Service
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />{" "}
                      Best Pricing
                    </li>
                  </ul>
                </div>
                <QuickContact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="What_offer">
        <div className="container text-justify">
          <h1 className="panel-heading text-center">
            Why Snappy best choice for you?
          </h1>
          <p>
            Every home deserves best-in-class efficiency, peace of mind getting
            their appliances repaired or serviced. Given its critical role in
            your home, it’s imperative you only entrust it to a reputable home
            appliances repair &amp; service company like Snappy. <br />
            <br />
            Each service engineers on the Snappy team undergoes a rigorous
            background check to assess whether they have what it takes to meet
            and beat clientele expectations. They’re fully licensed, insured,
            and certified.
            <br />
            <br />
            Our efficient work helps you in saving energy cost, long lifespan
            through quality workmanship and Durable Worry free performance of
            your home appliance. We use superior technology and quality spares
            to make your appliances as good as new. <br />
            <br />
            Backed by over twenty years of repair &amp; service experience and a
            plethora of satisfied clients, we only exists for one reason to
            deliver unrivalled home appliances services that keep your
            electrical appliance at peak performance consistently. <br />
            <br />
            What’s more, we know the industry is ever-evolving. To keep our team
            on top of emerging the Best Home appliance services in Delhi NCR
            trends and innovations, we encourage our AC technicians to pursue
            further training and development through specialized in-house
            programs. That helps them enhance their skills and efficiency,
            allowing them to offer you nothing but the best Electrical
            appliances service in Delhi, Ghaziabad, Noida and NCR.
          </p>
        </div>
      </section> */}
      <section id="service-faq">
        <div className="container text-center">
          <h1 className="panel-heading">Frequently Asked Questions</h1>
          <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q.</strong>
                  <h4>When your AC needs servicing? </h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Go for AC servicing when cooling is not as per expectations
                    or AC is not serviced for last 3 months. Regular servicing
                    saves upto 25% on electricity bill and needless to say, it
                    increases the age of your AC.
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
                    to deliver cool air or may not provide effective cooling due
                    to reasons such as a gas leakage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q.</strong>
                  <h4>How long will AC servicing take?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    AC servicing take 20-45 minutes depending on the size of the
                    AC whereas Installation/Dismantle/gas charging of AC may
                    take 30-60 minutes. Time required to repair AC will depend
                    upon the real issue/problem identified by our champs.
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
                    Complete check up of the AC unit, Deep Cleaning clogged air
                    filter, coil etc, air distribution check Thermostat Test,
                    calibrate and level, Condenser Coil inspection, Refrigerant
                    operating pressures check, cooling temperature
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
export default AirConditioner;
