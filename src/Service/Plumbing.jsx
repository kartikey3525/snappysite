import React, { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

function Plumbing() {
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
          Professional Plumbing Service in Ghaziabad, Noida, and Delhi | Expert
          Plumbers at Your Doorstep
        </title>

        <meta
          name="description"
          content="Looking for professional plumbing services in Ghaziabad, Noida, and Delhi? Our expert plumbers are ready to tackle all your plumbing needs. From repairs to installations, trust us for reliable and efficient solutions. Contact us now for top-notch plumbing services in Ghaziabad, Noida, and Delhi. Get your plumbing issues resolved quickly and effectively with our trusted team of plumbers."
        />
        <link rel="canonical" href="https://www.snappyserv.com/plumbing" />
      </Helmet>
      <section id="What_offer">
        <div className="container text-center ">
          <div
            className="row text-center"
            style={{ marginTop: "15px", verticalAlign: "middle" }}
          >
            {/* <div className="col-md-8 col-sm-6 col-xs-12"> */}
            {/* content heading and intro */}
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Reliable Plumbing Contracting Services: Your Trusted Partner for
                All Plumbing Needs Welcome to our plumbing contracting services!
                Whether you're facing a plumbing emergency, planning a
                renovation, or need routine maintenance, our team is dedicated
                to delivering expert solutions that ensure your plumbing systems
                operate smoothly and efficiently.
              </p>

              <p className="text-left" style={{ fontSize: "20px" }}>
                What is Plumbing Contracting? Plumbing Contracting involves the
                installation, maintenance, and repair of plumbing systems in
                residential, commercial, and industrial settings. From fixing
                leaks and unclogging drains to designing and installing new
                plumbing systems, our comprehensive services are tailored to
                meet your specific needs and ensure the reliable operation of
                your plumbing infrastructure.
              </p>

              {/* <img
                src={"../assets/images/plumbing1.jpg"}
                // className="img-responsive"
                style={{
                  borderRadius: "30px",
                  alignContent: "center",
                  width: "60%",
                }}
                alt=""
              /> */}
            </div>
            {/* </div> */}

            {/* <div className="col-md-4 col-sm-6 col-xs-12">
              <img
                src="../assets/images/service/plumber.png"
                className="img-responsive"
                style={{ borderRadius: "30px" }}
              />
            </div> */}
          </div>
        </div>
      </section>

      <section id="What_offer">
        <div className="container text-justify">
          <div className="row">
            {/* content place */}
            <h1
              className="service-heading"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                textDecorationLine: "underline",
                marginBottom: "4%",
              }}
            >
              Our Plumbing Contracting Services :
            </h1>

            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              1. Installation
            </h1>

            <div style={{ overflow: "hidden" }}>
              <img
                src="../assets/images/plumbing1.jpg"
                style={{
                  borderRadius: "30px",
                  width: "40%",
                  float: "right",
                  margin: " 10px 10px 0",
                }}
                alt=""
              />
              <p className="text-left" style={{ fontSize: "20px" }}>
                New Construction: We provide expert plumbing installation for
                new construction projects, ensuring that all systems are
                designed and installed according to the highest standards.
                Remodeling Projects: Whether you’re renovating your kitchen,
                bathroom, or entire home, we offer custom plumbing solutions to
                match your design and functionality requirements.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Fixtures and Appliances: Our team installs a wide range of
                plumbing fixtures and appliances, including sinks, faucets,
                toilets, water heaters, and more.
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
                Routine Inspections: Regular inspections help identify potential
                issues before they become major problems. We offer scheduled
                maintenance to keep your plumbing systems in top condition.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Preventative Care: Our maintenance services include cleaning
                drains, checking for leaks, and ensuring that all components are
                functioning properly to prevent future issues. Water Quality
                Testing: We test your water for contaminants and provide
                solutions to improve water quality, including filter
                installations and water softening systems.
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
                Leak Detection and Repair: We use advanced technology to detect
                leaks and provide prompt repairs to prevent water damage and
                reduce waste. Clog Removal: From minor clogs to severe
                blockages, our team has the tools and expertise to clear drains
                and restore proper flow.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Pipe Repairs and Replacements: We handle pipe repairs and
                replacements for both residential and commercial properties,
                including addressing issues such as corrosion, burst pipes, and
                damaged sections.
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
                24/7 Availability: Plumbing emergencies can occur at any time.
                Our team is available around the clock to address urgent issues
                and minimize damage to your property. Rapid Response: We
                prioritize quick response times to ensure that emergency
                plumbing problems are resolved efficiently and effectively.
              </p>
            </div>

            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              5. System Upgrades
            </h1>

            <div style={{ overflow: "hidden" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Water Heater Upgrades: We offer installation and replacement
                services for water heaters, including traditional tank systems
                and modern tankless models.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Pipe Upgrades: If your plumbing system is outdated, we can
                upgrade pipes to improve performance and prevent issues related
                to aging infrastructure.
              </p>
            </div>

            <h1
              className="service-heading"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              6. Commercial Plumbing Services
            </h1>

            <div style={{ overflow: "hidden" }}>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Custom Solutions: For businesses, we provide specialized
                plumbing solutions tailored to commercial spaces, including
                office buildings, restaurants, and retail stores.
              </p>
              <p className="text-left" style={{ fontSize: "20px" }}>
                Maintenance Contracts: We offer maintenance contracts for
                commercial properties to ensure ongoing care and prompt response
                to any plumbing issues.
              </p>
            </div>

            {/* <div className="col-md-4" style={{ padding: "20px" }}>
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
              <QuickLink />
            </div> */}
          </div>
        </div>
      </section>
      <section id="service_banner">
        <div className="container text-center service_banner_layer">
          <div className="banner_content">
            <div className="row text-left">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <h1 className="service-heading">
                  Professional Plumbing Service in Ghaziabad, Noida, and Delhi
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

      <section id="What_offer">
        <div className="container text-center ">
          <div
            className="row text-left text-justify"
            style={{ marginTop: "15px", verticalAlign: "middle" }}
          >
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p>
                Snappy Services is a leading provider of plumbing repairs in
                Ghaziabad and NCR. We wouldn’t be the company we are today if it
                wasn’t for our fantastic plumbers! We are proud to call
                ourselves plumbing industry experts. If you need a plumbing job
                done right, call the certified plumbers here at snappy!
                <br></br>
                <br></br>
                When you ignore a minor plumbing problem, it can easily turn
                into an issue requiring a serious and expensive repair. Even
                something as small as a dripping faucet can end up damaging your
                home if it’s not taken care. That’s why it’s so important to
                have a plumbing repair company you can trust when repairs are
                needed.
                <br></br>
                <br></br>
                Diagnosing plumbing problems can involve some trial and error,
                but the better trained a technician is, the less error will be
                involved. At snappy, we have confidence in our team and stand
                behind all our work with a warranty. This means we fix problems
                right the first time and complete lasting repairs to the highest
                possible standards of quality.
                <br></br>
                <br></br>
                As a professional company, we treat our customers like friends
                and neighbours, because that’s what they are!
                <br></br>
                <br></br>
                Whatever you need us for, our promise is simple: High-quality
                service at a reasonable price. Before our plumbers start any
                job, they’ll explain the repairs you need and the total cost of
                the services. Get in touch with us today to schedule a plumbing
                service.
              </p>
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
                  <strong>Q. </strong>
                  <h4>Are you licensed? </h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Yes, We are licensed electrical contractor in Delhi/NCR for
                    Commercial, Residential projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4>What areas do you provide plumbing services in?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    We provide plumbing services in Ghaziabad, Noida, and Delhi.
                    We cover a wide range of locations in these areas to serve
                    our customers efficiently.
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
                  <h4>What types of plumbing services do you offer??</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    We offer a comprehensive range of plumbing services,
                    including leak repairs, pipe installations, drain cleaning,
                    fixture replacements, water heater installations, bathroom
                    and kitchen plumbing, and more. Our expert plumbers are
                    equipped to handle both residential and commercial plumbing
                    needs.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4> How quickly can you respond to plumbing emergencies?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    We understand the urgency of plumbing emergencies, and we
                    strive to respond promptly. Our team is available 24/7, and
                    we make every effort to reach your location as quickly as
                    possible to address emergency plumbing situations.
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
                  <h4>Are your plumbers licensed and insured?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Yes, all our plumbers are licensed professionals with
                    extensive experience in the field. They are well-trained,
                    fully insured, and adhere to industry standards to provide
                    high-quality plumbing services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question">
                  <strong>Q. </strong>
                  <h4>How do I schedule a plumbing service appointment?</h4>
                </div>
                <div className="answer">
                  <strong>A.</strong>
                  <p>
                    Scheduling a plumbing service appointment is simple. You can
                    give us a call, and our friendly customer service
                    representatives will assist you in booking an appointment at
                    your convenience. You can also request an appointment
                    through our website by filling out a quick form.
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
export default Plumbing;
