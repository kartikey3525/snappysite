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

  const faqData = [
    {
      question: "Are you licensed?",
      answer:
        "Yes, we are licensed plumbing contractors in Delhi/NCR for commercial and residential projects.",
    },
    {
      question: "What areas do you provide plumbing services in?",
      answer:
        "We provide plumbing services in Ghaziabad, Noida, Delhi, and surrounding NCR regions.",
    },
    {
      question: "What types of plumbing services do you offer?",
      answer:
        "We provide leak repairs, pipe installations, drain cleaning, fixture replacements, water heater services, bathroom and kitchen plumbing, and commercial plumbing solutions.",
    },
    {
      question: "How quickly can you respond to plumbing emergencies?",
      answer:
        "Our emergency plumbing team is available 24/7 and responds quickly to minimize downtime and property damage.",
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer:
        "Yes, all our plumbers are licensed, insured, experienced, and trained to deliver high-quality plumbing solutions.",
    },
    {
      question: "How do I schedule a plumbing service appointment?",
      answer:
        "You can schedule a service appointment by calling our support team or submitting a request through our website.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Professional Plumbing Service in Ghaziabad, Noida, and Delhi
        </title>

        <meta
          name="description"
          content="Looking for professional plumbing services in Ghaziabad, Noida, and Delhi? Our expert plumbers are ready to tackle all your plumbing needs."
        />

        <link
          rel="canonical"
          href="https://www.snappyserv.com/plumbing"
        />
      </Helmet>

      <style>
        {`
          .plumbing-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .plumbing-section {
            padding: 90px 0;
          }

          .plumbing-container {
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

          .why-card {
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            border-radius: 30px;
            padding: 50px;
            margin-top: 60px;
            border: 1px solid rgba(16,24,40,0.05);
          }

          .why-card p {
            font-size: 16px;
            line-height: 2;
            color: #667085;
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
            .plumbing-section {
              padding: 70px 0;
            }

            .hero-title {
              font-size: 38px;
            }

            .section-title,
            .bottom-cta h2 {
              font-size: 30px;
            }

            .section-card,
            .why-card {
              padding: 32px 24px;
            }

            .service-block {
              padding: 24px;
            }
          }
        `}
      </style>

      <div className="plumbing-page">
        {/* HERO */}
        <section className="plumbing-section">
          <div className="plumbing-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">
                  Reliable Plumbing Contracting Services
                </h1>

                <p className="hero-text">
                  Your trusted partner for plumbing installation,
                  maintenance, repairs, and emergency plumbing
                  solutions across residential, commercial, and
                  industrial projects.
                </p>

                <p className="hero-text" style={{ marginTop: 20 }}>
                  Our expert plumbers ensure smooth and efficient
                  plumbing operations with professional workmanship,
                  transparent pricing, and long-term reliability.
                </p>
              </div>

              <div>
                <img
                  src="../assets/images/plumbing1.jpg"
                  alt="Plumbing Services"
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
          className="plumbing-section"
          style={{ paddingTop: 0 }}
        >
          <div className="plumbing-container">
            <div className="section-card">
              <h2 className="section-title">
                Our Plumbing Contracting Services
              </h2>

              <div className="service-layout">
                <div>
                  <div className="service-block">
                    <h3>1. Installation</h3>

                    <p>
                      We provide professional plumbing installations
                      for new construction and renovation projects,
                      including sinks, faucets, toilets, water heaters,
                      and complete plumbing systems.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>2. Maintenance</h3>

                    <p>
                      Our maintenance services include inspections,
                      leak detection, drain cleaning, water quality
                      testing, and preventative care to keep plumbing
                      systems operating efficiently.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>3. Repairs</h3>

                    <p>
                      We handle leak repairs, clog removals, pipe
                      repairs, pipe replacements, and drainage issues
                      using advanced tools and professional expertise.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>4. Emergency Services</h3>

                    <p>
                      Our emergency plumbing team is available 24/7 for
                      urgent plumbing issues, minimizing operational
                      disruption and preventing further damage.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>5. System Upgrades</h3>

                    <p>
                      Upgrade aging plumbing infrastructure with modern
                      water heaters, pipe systems, and high-efficiency
                      plumbing solutions.
                    </p>
                  </div>

                  <div className="service-block">
                    <h3>6. Commercial Plumbing Services</h3>

                    <p>
                      We deliver customized commercial plumbing
                      solutions for offices, restaurants, retail
                      stores, industrial facilities, and commercial
                      buildings.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="sticky-sidebar">
                  <div className="cta-card">
                    <h2>Professional Plumbing Services</h2>

                    <p>
                      Reliable plumbing solutions with certified
                      technicians, fast response times, and quality
                      workmanship.
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
                        Fast Support
                      </li>

                      <li>
                        <div className="feature-icon">✓</div>
                        Affordable Pricing
                      </li>
                    </ul>

                      <QuickContact />
                  </div>
                </div>
              </div>

              {/* WHY SNAPPY */}
              <div className="why-card">
                <h2 className="section-title">
                  Why Snappy Best Choice For You?
                </h2>

                <p>
                  At Snappy Services, we provide dependable plumbing
                  solutions for commercial and residential properties
                  across Ghaziabad and NCR. Our certified plumbers
                  specialize in efficient repairs, preventative
                  maintenance, emergency services, and long-lasting
                  plumbing infrastructure solutions.
                </p>

                <p style={{ marginTop: 20 }}>
                  We understand that plumbing issues can disrupt
                  operations and daily life. That’s why we focus on
                  quick response times, accurate diagnostics, quality
                  workmanship, transparent pricing, and reliable
                  support backed by professional expertise.
                </p>
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
                  plumbing services with reliability, transparency,
                  and long-term customer satisfaction.
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

export default Plumbing;