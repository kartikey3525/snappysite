import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

function FireFitting() {
  const repair = useRef();
  const install = useRef();

  function handleRepair() {
    repair.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleInstall() {
    install.current.scrollIntoView({ behavior: "smooth" });
  }

  const faqData = [
    {
      question:
        "Who can design, install, and maintain electrical systems in my home?",
      answer:
        "You should always hire certified and licensed electrical contractors for electrical installations and maintenance. All installations should comply with local electrical inspection and safety regulations.",
    },
    {
      question: "Why do I need AC service?",
      answer:
        "Regular AC servicing improves cooling performance, reduces electricity consumption, and helps prevent gas leakage and operational inefficiencies.",
    },
    {
      question:
        "What are signs and possibilities for electric motors not working?",
      answer:
        "Common signs include overheating, unusual noise, frosting, or grease darkening. Possible causes include leakage currents, non-symmetrical magnetic fields, or induced voltage issues.",
    },
    {
      question: "How AC service is done?",
      answer:
        "AC servicing includes deep cleaning, thermostat testing, condenser inspection, refrigerant pressure checks, and overall cooling efficiency testing.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Best Firefitting Services Ghaziabad</title>

        <meta
          name="description"
          content="Snappy Services provides professional firefitting solutions in Ghaziabad, Noida, and Delhi including fire protection system installation, maintenance, and upgrades."
        />

        <meta
          name="keywords"
          content="Firefitting services Ghaziabad, fire protection systems, firefitting contractor, fire alarm installation"
        />

        <link
          rel="canonical"
          href="https://www.snappyserv.com/fire-fitting.html"
        />
      </Helmet>

      <style>
        {`
          .fire-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .fire-section {
            padding: 90px 0;
          }

          .fire-container {
            width: 100%;
            max-width: 1240px;
            margin: auto;
            padding: 0 20px;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 50px;
            align-items: center;
          }

          .hero-title {
            font-size: 54px;
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

          .section-card {
            background: #fff;
            border-radius: 36px;
            padding: 70px;
            box-shadow: 0 12px 50px rgba(16,24,40,0.05);
          }

          .section-title {
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 22px;
            color: #101828;
          }

          .service-layout {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 40px;
            margin-top: 60px;
          }

          .service-block {
            background: #f8fafc;
            border-radius: 28px;
            padding: 36px;
            margin-bottom: 28px;
            border: 1px solid rgba(16,24,40,0.05);
          }

          .service-block h3 {
            font-size: 30px;
            font-weight: 700;
            color: #005bea;
            margin-bottom: 20px;
          }

          .service-block p {
            font-size: 16px;
            line-height: 2;
            color: #667085;
          }

          .service-image {
            width: 100%;
            border-radius: 24px;
            margin: 24px 0;
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
            width: 240px;
            height: 240px;
            border-radius: 50%;
            background: rgba(255,255,255,0.08);
            top: -120px;
            right: -100px;
          }

          .cta-card h2 {
            font-size: 34px;
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
            font-size: 42px;
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
            .fire-section {
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

      <div className="fire-page">
        {/* HERO */}
        <section className="fire-section">
          <div className="fire-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">
                  Professional Firefitting Contracting Services
                </h1>

                <p className="hero-text">
                  Safeguard your residential, commercial, and
                  industrial properties with modern firefitting
                  solutions designed for maximum safety, compliance,
                  and operational reliability.
                </p>

                <p className="hero-text" style={{ marginTop: 20 }}>
                  Our firefitting experts provide complete fire
                  protection system design, installation, maintenance,
                  upgrades, and emergency support tailored to your
                  facility requirements.
                </p>
              </div>

              <div>
                <img
                  src="../assets/images/firefitting2.jpg"
                  alt="Firefitting Services"
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
        <section
          className="fire-section"
          style={{ paddingTop: 0 }}
        >
          <div className="fire-container">
            <div className="section-card">
              <h2 className="section-title">
                Our Firefitting Contracting Services
              </h2>

              <div className="service-layout">
                <div>
                  <div className="service-block">
                    <h3>1. System Design & Installation</h3>

                    <img
                      src="../assets/images/firefitting1.jpg"
                      alt="Firefitting Installation"
                      className="service-image"
                    />

                    <p>
                      We design and install fire sprinkler systems,
                      fire alarm systems, extinguishers, hose reels,
                      and emergency firefighting infrastructure tailored
                      to your building layout and fire safety
                      requirements.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>2. Maintenance & Inspections</h3>

                    <p>
                      Regular inspections, testing, certification, and
                      preventative maintenance ensure your fire
                      protection systems remain compliant, operational,
                      and ready during emergencies.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>3. System Upgrades</h3>

                    <p>
                      Upgrade outdated firefitting systems with modern
                      fire protection technologies and integrated safety
                      infrastructure for improved performance and
                      compliance.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>4. Emergency Services</h3>

                    <p>
                      Our emergency firefitting support team provides
                      rapid response maintenance and repairs to ensure
                      your systems remain fully functional when needed
                      most.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>5. Compliance & Consultation</h3>

                    <p>
                      We help ensure compliance with fire safety
                      regulations while providing expert consultation
                      for fire risk assessment, system planning, and
                      fire safety strategies.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="sticky-sidebar">
                  <div className="cta-card">
                    <h2>
                      Professional Firefitting Service in Delhi/NCR
                    </h2>

                    <p>
                      Reliable firefitting solutions with certified
                      experts, quality workmanship, and modern fire
                      safety systems.
                    </p>

                    <ul className="feature-list">
                      <li>
                        <div className="feature-icon">✓</div>
                        Qualified Experts
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Quality Workmanship
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Professional Team
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Affordable Packages
                      </li>
                    </ul>

                      <QuickContact />
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
                  Snappy is committed to delivering professional
                  firefitting solutions with safety, compliance, and
                  long-term reliability.
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

export default FireFitting;