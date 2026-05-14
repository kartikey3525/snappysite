import React, { useState } from "react";
import { Helmet } from "react-helmet";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

function LineWork() {
  const faqData = [
    {
      question:
        "What does a high tension electrical line work contractor do?",
      answer:
        "An electrical line work contractor handles installation, maintenance, upgrades, and repairs of HT and LT electrical distribution systems for residential, commercial, and industrial projects.",
    },
    {
      question:
        "What services do you provide for commercial customers?",
      answer:
        "We provide electrical maintenance, HT/LT line installation, substation work, transformer installation, emergency support, and cable laying solutions for commercial infrastructure.",
    },
    {
      question:
        "How do you ensure safety during your services?",
      answer:
        "Safety is our top priority. We follow strict electrical safety standards, perform inspections, and use certified equipment and trained technicians.",
    },
    {
      question:
        "What sets your electrical line work services apart?",
      answer:
        "Our services stand out due to our experienced team, quality workmanship, rapid response support, reliable project execution, and safety-focused operations.",
    },
  ];

  const serviceCards = [
    {
      title: "Electrical Substation Services",
      items: [
        "Electrical Turnkey Projects",
        "Substation Erection Services",
        "HT Transformer Substations",
        "Electrical Substation Contractor Services",
        "Turnkey Contracts for Substations",
      ],
    },
    {
      title: "Electrification Services",
      items: [
        "LT/HT Panel Installation",
        "33/11kV Line Fault Repairs",
        "Cable Joint Replacement",
        "Transformer Installation",
        "Dehydration & Filtration Services",
      ],
    },
    {
      title: "Cable Laying Services",
      items: [
        "HT Cable Laying",
        "LT Cable Laying",
        "Cable Installation Services",
        "Industrial Cable Routing",
        "Underground Cabling Solutions",
      ],
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Expert Electrical HT Line Work Contractor in Ghaziabad
        </title>

        <meta
          name="description"
          content="Trusted electrical HT/LT line work contractor for substation, cable laying, transformer installation, and electrical infrastructure solutions."
        />

        <link
          rel="canonical"
          href="https://www.snappyserv.com/line-work"
        />
      </Helmet>

      <style>
        {`
          .linework-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .linework-section {
            padding: 90px 0;
          }

          .linework-container {
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

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 70px;
          }

          .service-card {
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            border-radius: 28px;
            padding: 34px;
            border: 1px solid rgba(16,24,40,0.05);
            box-shadow: 0 8px 30px rgba(16,24,40,0.04);
          }

          .service-card h3 {
            font-size: 24px;
            font-weight: 700;
            color: #101828;
            margin-bottom: 20px;
          }

          .service-card ul {
            padding-left: 18px;
            margin: 0;
          }

          .service-card li {
            margin-bottom: 14px;
            color: #667085;
            line-height: 1.8;
            font-size: 15px;
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
            .service-layout,
            .services-grid {
              grid-template-columns: 1fr;
            }

            .sticky-sidebar {
              position: relative;
              top: 0;
            }
          }

          @media (max-width: 768px) {
            .linework-section {
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

            .service-block,
            .service-card {
              padding: 24px;
            }
          }
        `}
      </style>

      <div className="linework-page">
        {/* HERO */}
        <section className="linework-section">
          <div className="linework-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">
                  HT & LT Electrical Line Work Solutions
                </h1>

                <p className="hero-text">
                  Professional high tension and low tension electrical
                  infrastructure solutions for substations,
                  electrification, cable laying, transformer systems,
                  and industrial electrical distribution.
                </p>

                <p className="hero-text" style={{ marginTop: 20 }}>
                  Our certified experts deliver safe, reliable, and
                  scalable HT/LT electrical systems with modern
                  installation practices, maintenance support, and
                  emergency response services.
                </p>
              </div>

              <div>
                <img
                  src="../assets/images/service/linework.png"
                  alt="HT LT Line Work"
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
          className="linework-section"
          style={{ paddingTop: 0 }}
        >
          <div className="linework-container">
            <div className="section-card">
              <h2 className="section-title">
                Our HT & LT Line Services
              </h2>

              <div className="service-layout">
                <div>
                  <div className="service-block">
                    <h3>1. Installation</h3>

                    <img
                      src="../assets/images/A_technician_1.jpg"
                      alt="HT LT Installation"
                      className="service-image"
                    />

                    <p>
                      We provide professional HT and LT line
                      installation services including infrastructure
                      setup, electrical distribution layouts,
                      substations, and industrial electrification
                      systems.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>2. Maintenance</h3>

                    <p>
                      Our maintenance services include routine
                      inspections, diagnostics, fault identification,
                      preventive maintenance, and repair support for HT
                      and LT electrical systems.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>3. Upgrades</h3>

                    <p>
                      Upgrade aging HT/LT infrastructure with modern
                      electrical systems designed for improved
                      reliability, performance, safety, and increased
                      electrical demand.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>4. Emergency Services</h3>

                    <p>
                      Our emergency response team provides 24/7 support
                      for electrical faults, power restoration, and
                      urgent HT/LT infrastructure repairs.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="sticky-sidebar">
                  <div className="cta-card">
                    <h2>
                      Trusted Electrical Line Work Contractor
                    </h2>

                    <p>
                      Reliable HT/LT electrical solutions with
                      certified professionals, safety-focused
                      operations, and industry-grade project execution.
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

              {/* SERVICES GRID */}
              <div style={{ marginTop: 70 }}>
                <h2 className="section-title text-center">
                  Our Services
                </h2>

                <div className="services-grid">
                  {serviceCards.map((service, index) => (
                    <div className="service-card" key={index}>
                      <h3>{service.title}</h3>

                      <ul>
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                  Snappy is committed to delivering reliable HT/LT
                  electrical infrastructure solutions with safety,
                  precision, and long-term operational excellence.
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

export default LineWork;