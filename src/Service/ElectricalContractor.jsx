import React, { useState } from "react";
import { Helmet } from "react-helmet";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

function ElectricalContractor() {
  const faqData = [
    {
      question: "Are you licensed?",
      answer:
        "Yes, we are licensed electrical contractors in Delhi/NCR for commercial and residential projects.",
    },
    {
      question: "Do you have any references?",
      answer:
        "Yes, we have successfully completed projects for Supertech Limited, Wave Infra13 Private Limited, Yashoda Hospitals Pvt. Ltd., and many more.",
    },
    {
      question: "Who will perform the actual work?",
      answer:
        "Our licensed electrical engineers and certified technicians perform all electrical installations, maintenance, and repair work.",
    },
    {
      question: "What are your service fees?",
      answer:
        "Service fees depend on the project scope and requirements. Contact us directly for detailed quotations and consultation.",
    },
    {
      question: "What are your specialties?",
      answer:
        "We specialize in residential, commercial, industrial, township, hospital, retail, office, and infrastructure electrical projects.",
    },
    {
      question: "Can you handle large industrial jobs?",
      answer:
        "Yes, we are fully equipped to handle industrial electrical construction, maintenance, and large-scale infrastructure projects.",
    },
  ];

  const expertiseData = [
    {
      title: "Engineering",
      items: [
        "High Side & Low Side Electrical Works",
        "Housing & Township Projects",
        "Commercial & Retail Spaces",
        "Hospital & Office Infrastructure",
        "Private Villas",
      ],
    },
    {
      title: "Consultancy",
      items: [
        "Electrical Consultancy",
        "Design & Layout Planning",
        "Budget Estimation",
        "Costing & Auditing",
        "Quality Control",
      ],
    },
    {
      title: "Maintenance",
      items: [
        "Annual Maintenance Contracts",
        "Preventive Maintenance",
        "Breakdown Services",
        "Comprehensive Maintenance",
        "Electrical Monitoring",
      ],
    },
    {
      title: "Supply",
      items: [
        "LED Lights",
        "Street Lights",
        "Fire Fittings",
        "Wires & Cables",
        "DG Sets & Breakers",
      ],
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Best Electrical Contractor Ghaziabad | Snappy Services
        </title>

        <meta
          name="description"
          content="Snappy Services is an approved electrical contractor located in Ghaziabad providing electrical installation, maintenance, and repair services."
        />

        <link
          rel="canonical"
          href="https://www.snappyserv.com/electrical-contractor.aspx"
        />
      </Helmet>

      <style>
        {`
          .electrical-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .electrical-section {
            padding: 90px 0;
          }

          .electrical-container {
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

          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 60px;
          }

          .expertise-card {
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            border-radius: 28px;
            padding: 34px;
            border: 1px solid rgba(16,24,40,0.05);
            box-shadow: 0 8px 30px rgba(16,24,40,0.04);
          }

          .expertise-card h3 {
            font-size: 24px;
            font-weight: 700;
            color: #101828;
            margin-bottom: 20px;
          }

          .expertise-card ul {
            padding-left: 18px;
            margin: 0;
          }

          .expertise-card li {
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
            .expertise-grid {
              grid-template-columns: 1fr;
            }

            .sticky-sidebar {
              position: relative;
              top: 0;
            }
          }

          @media (max-width: 768px) {
            .electrical-section {
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
            .expertise-card {
              padding: 24px;
            }
          }
        `}
      </style>

      <div className="electrical-page">
        {/* HERO */}
        <section className="electrical-section">
          <div className="electrical-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">
                  Expert Electrical Contracting Services
                </h1>

                <p className="hero-text">
                  Professional electrical contracting services for
                  residential, commercial, and industrial projects with
                  a focus on safety, efficiency, reliability, and
                  long-term performance.
                </p>

                <p className="hero-text" style={{ marginTop: 20 }}>
                  From installations and maintenance to emergency
                  repairs and energy-efficient upgrades, we deliver
                  modern electrical infrastructure solutions tailored to
                  your project requirements.
                </p>
              </div>

              <div>
                <img
                  src="../assets/images/service/ec.png"
                  alt="Electrical Contractor"
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
          className="electrical-section"
          style={{ paddingTop: 0 }}
        >
          <div className="electrical-container">
            <div className="section-card">
              <h2 className="section-title">
                Our Electrical Contracting Services
              </h2>

              <div className="service-layout">
                <div>
                  <div className="service-block">
                    <h3>1. Installation</h3>

                    <img
                      src="../assets/images/electrical_cont.jpg"
                      alt="Electrical Installation"
                      className="service-image"
                    />

                    <p>
                      We design and install complete electrical
                      systems, lighting solutions, electrical panels,
                      smart home integrations, and energy-efficient
                      infrastructure for residential and commercial
                      projects.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>2. Maintenance</h3>

                    <p>
                      Our maintenance services include inspections,
                      diagnostics, troubleshooting, upgrades, and
                      preventive electrical maintenance to ensure safety
                      and uninterrupted performance.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>3. Repairs</h3>

                    <p>
                      We provide emergency electrical repairs, wiring
                      repairs, circuit breaker replacements, and
                      electrical fault resolution with rapid response
                      support.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>4. Energy Efficiency Solutions</h3>

                    <p>
                      Improve energy efficiency with LED retrofits,
                      smart systems, energy audits, and modern
                      electrical optimization solutions.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>5. Commercial Electrical Services</h3>

                    <p>
                      Customized commercial electrical solutions for
                      office buildings, retail spaces, hospitals,
                      industries, and infrastructure projects with full
                      maintenance support.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="sticky-sidebar">
                  <div className="cta-card">
                    <h2>
                      Reputed Electrical Contractor in Delhi/NCR
                    </h2>

                    <p>
                      Trusted electrical infrastructure partner with
                      certified professionals, quality workmanship, and
                      reliable project execution.
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

              {/* EXPERTISE */}
              <div style={{ marginTop: 70 }}>
                <h2 className="section-title text-center">
                  Areas of Expertise
                </h2>

                <div className="expertise-grid">
                  {expertiseData.map((item, index) => (
                    <div className="expertise-card" key={index}>
                      <h3>{item.title}</h3>

                      <ul>
                        {item.items.map((point, idx) => (
                          <li key={idx}>{point}</li>
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
                  Snappy is committed to delivering professional
                  electrical contracting services with reliability,
                  safety, and industry-grade project execution.
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

export default ElectricalContractor;