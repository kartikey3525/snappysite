import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

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

  const faqData = [
    {
      question: "When your AC needs servicing?",
      answer:
        "Go for AC servicing when cooling is not as per expectations or AC is not serviced for last 3 months. Regular servicing saves upto 25% on electricity bill and increases the age of your AC.",
    },
    {
      question: "Why do I need AC service?",
      answer:
        "AC servicing boosts cooling performance, improves efficiency, reduces electricity bills, and prevents issues like gas leakage or ineffective cooling.",
    },
    {
      question: "How long will AC servicing take?",
      answer:
        "AC servicing usually takes 20-45 minutes depending on the size of the AC. Installation, dismantling, or gas charging may take 30-60 minutes.",
    },
    {
      question: "How AC service is done?",
      answer:
        "The process includes deep cleaning, air filter cleaning, thermostat testing, condenser inspection, refrigerant pressure checks, and cooling efficiency testing.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

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

      <style>
        {`
          .ac-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .ac-section {
            padding: 90px 0;
          }

          .ac-container {
            width: 100%;
            max-width: 1240px;
            margin: auto;
            padding: 0 20px;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 40px;
            align-items: center;
          }

          .hero-title {
            font-size: 52px;
            line-height: 1.1;
            font-weight: 800;
            color: #101828;
            margin-bottom: 24px;
          }

          .hero-text {
            font-size: 17px;
            line-height: 1.9;
            color: #667085;
          }

          .hero-image {
            width: 100%;
            border-radius: 32px;
            object-fit: cover;
            box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          }

          .floating-card {
            margin-top: 24px;
            background: #fff;
            padding: 24px;
            border-radius: 24px;
            box-shadow: 0 12px 30px rgba(16,24,40,0.08);
          }

          .section-card {
            background: #fff;
            border-radius: 32px;
            padding: 60px;
            box-shadow: 0 12px 40px rgba(16,24,40,0.05);
          }

          .section-title {
            font-size: 42px;
            font-weight: 800;
            color: #101828;
            margin-bottom: 22px;
          }

          .service-layout {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 40px;
            margin-top: 60px;
          }

          .service-content h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 24px;
            color: #101828;
          }

          .service-content h3 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 40px;
            color: #005bea;
          }

          .service-content p {
            font-size: 16px;
            line-height: 2;
            color: #667085;
          }

          .service-block {
            background: #f8fafc;
            border-radius: 28px;
            padding: 36px;
            margin-bottom: 28px;
            border: 1px solid rgba(16,24,40,0.05);
          }

          .service-image {
            width: 100%;
            border-radius: 24px;
            margin: 22px 0;
          }

          .sticky-sidebar {
            position: sticky;
            top: 30px;
          }

          .cta-card {
            background: linear-gradient(135deg, #005bea 0%, #00c6fb 100%);
            border-radius: 32px;
            padding: 34px;
            color: #fff;
            overflow: hidden;
            position: relative;
          }

          .cta-card::before {
            content: "";
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: rgba(255,255,255,0.08);
            top: -100px;
            right: -80px;
          }

          .cta-card h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 18px;
            position: relative;
            z-index: 2;
          }

          .cta-card p {
            font-size: 15px;
            line-height: 1.9;
            color: rgba(255,255,255,0.92);
            position: relative;
            z-index: 2;
          }

          .feature-list {
            list-style: none;
            padding: 0;
            margin-top: 24px;
            position: relative;
            z-index: 2;
          }

          .feature-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 15px;
            font-weight: 600;
          }

          .feature-icon {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(255,255,255,0.18);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-wrapper {
            margin-top: 28px;
            background: #fff;
            border-radius: 24px;
            padding: 20px;
            position: relative;
            z-index: 2;
          }

          .faq-section {
            margin-top: 70px;
          }

          .faq-card {
            background: #fff;
            border-radius: 24px;
            overflow: hidden;
            margin-bottom: 18px;
            border: 1px solid rgba(16,24,40,0.05);
            box-shadow: 0 8px 24px rgba(16,24,40,0.04);
          }

          .faq-question {
            width: 100%;
            border: none;
            background: transparent;
            padding: 24px 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            text-align: left;
          }

          .faq-question h4 {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            color: #101828;
          }

          .faq-answer {
            padding: 0 28px 24px;
            font-size: 15px;
            line-height: 1.9;
            color: #667085;
          }

          .faq-icon {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #f2f4f7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #005bea;
            flex-shrink: 0;
          }

          .bottom-cta {
            text-align: center;
            margin-top: 70px;
            background: #fff;
            padding: 60px 30px;
            border-radius: 32px;
            box-shadow: 0 12px 40px rgba(16,24,40,0.05);
          }

          .bottom-cta h2 {
            font-size: 40px;
            font-weight: 800;
            margin-bottom: 18px;
            color: #101828;
          }

          .bottom-cta p {
            font-size: 16px;
            line-height: 1.9;
            color: #667085;
          }

          .phone {
            margin-top: 24px;
            font-size: 34px;
            font-weight: 800;
            color: #ff7a00;
          }

          @media (max-width: 1100px) {
            .hero-grid,
            .service-layout {
              grid-template-columns: 1fr;
            }

            .sticky-sidebar {
              position: relative;
              top: 0;
            }
          }

          @media (max-width: 768px) {
            .ac-section {
              padding: 70px 0;
            }

            .hero-title {
              font-size: 38px;
            }

            .section-title,
            .bottom-cta h2 {
              font-size: 30px;
            }

            .section-card {
              padding: 32px 24px;
            }

            .service-block {
              padding: 24px;
            }
          }
        `}
      </style>

      <div className="ac-page">
        {/* HERO */}
        <section className="ac-section">
          <div className="ac-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">
                  Expert HVAC Contracting Services
                </h1>

                <p className="hero-text">
                  Your trusted solution for heating, ventilation, and air
                  conditioning services. Whether you need installation,
                  maintenance, repairs, or upgrades, our certified team delivers
                  reliable climate control solutions for homes and businesses.
                </p>

                <div className="floating-card">
                  <img
                    src="../assets/images/banner2.png"
                    alt="HVAC Services"
                    className="hero-image"
                  />
                </div>
              </div>

              <div>
                <img
                  src="../assets/images/chiller installation.jpg"
                  alt="Chiller Installation"
                  className="hero-image"
                />
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <QuickLink />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="ac-section" style={{ paddingTop: 0 }}>
          <div className="ac-container">
            <div className="section-card">
              <h2 className="section-title">
                Professional HVAC Contracting Services
              </h2>

              <div className="service-layout">
                <div className="service-content">
                  <div className="service-block">
                    <p>
                      HVAC contracting involves the design, installation,
                      maintenance, and repair of heating, ventilation, and air
                      conditioning systems to maintain comfortable indoor
                      environments with optimal air quality and energy
                      efficiency.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>1. Installation</h3>

                    <img
                      src="../assets/images/ac_filters.jpg"
                      alt="Installation"
                      className="service-image"
                    />

                    <p>
                      Our experts design customized HVAC systems tailored to
                      your building size, insulation, and comfort requirements.
                      We help select energy-efficient equipment and ensure safe,
                      professional installation with maximum performance.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>2. Maintenance</h3>

                    <p>
                      Routine maintenance extends the lifespan of your HVAC
                      system. We perform inspections, cleaning, lubrication,
                      calibration, and filter replacements to improve efficiency
                      and prevent breakdowns.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>3. Repairs</h3>

                    <p>
                      Our technicians provide emergency HVAC repairs using
                      advanced diagnostic tools to quickly identify and resolve
                      system issues while restoring comfort and operational
                      performance.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>4. System Upgrades</h3>

                    <p>
                      Upgrade outdated systems with energy-efficient solutions
                      and smart thermostats for better control, reduced energy
                      consumption, and improved operational efficiency.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>5. Commercial HVAC Services</h3>

                    <p>
                      We provide customized HVAC systems and maintenance
                      contracts for commercial buildings, industrial facilities,
                      offices, and retail spaces.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="sticky-sidebar">
                  <div className="cta-card">
                    <h2>Book Your AC Services Today</h2>

                    <p>
                      Our technicians deliver fast and efficient air conditioner
                      services for all major brands and models.
                    </p>

                    <ul className="feature-list">
                      <li>
                        <div className="feature-icon">✓</div>
                        Certified Technician
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                      Trusted Service
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Best Quality Service
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Best Pricing
                      </li>
                    </ul>

                    {/* <div className="contact-wrapper"> */}
                      <QuickContact />
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="faq-section">
                <h2 className="section-title text-center">
                  Frequently Asked Questions
                </h2>

                {faqData.map((faq, index) => {
                  const isActive = activeFaq === index;

                  return (
                    <div className="faq-card" key={index}>
                      <button
                        className="faq-question"
                        onClick={() =>
                          setActiveFaq(isActive ? null : index)
                        }
                      >
                        <h4>{faq.question}</h4>

                        <div className="faq-icon">
                          {isActive ? "-" : "+"}
                        </div>
                      </button>

                      {isActive && (
                        <div className="faq-answer">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="bottom-cta">
                <h2>Still Have Questions?</h2>

                <p>
                  Snappy is dedicated to delivering reliable HVAC and AC
                  solutions with professional technicians and quality service.
                </p>

                <div className="phone">
                  +91-99997 94426
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AirConditioner;