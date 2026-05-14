import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import QuickContact from "./QuickContact";
import QuickLink from "./QuickLink";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";

import data from "../data/project";

SwiperCore.use([Navigation, Autoplay]);

function Mep() {
  const [items] = useState(data);

  const serviceSlider = useMemo(
    () => ({
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: true,
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
    }),
    []
  );

  const commitmentCards = [
    {
      title: "Mechanical Expertise",
      description:
        "Our mechanical solutions encompass HVAC systems, ventilation, machinery installations, and energy-efficient infrastructure that ensure reliability and operational excellence.",
      icon: "⚙️",
    },
    {
      title: "Electrical Mastery",
      description:
        "From power distribution to advanced electrical systems, we deliver safe, scalable, and high-performance electrical infrastructure solutions.",
      icon: "⚡",
    },
    {
      title: "Plumbing Prowess",
      description:
        "We provide sustainable and durable plumbing systems designed for efficiency, long-term reliability, and seamless project integration.",
      icon: "💧",
    },
  ];

  const faqData = [
    {
      question: "What is MEP in construction?",
      answer:
        "MEP stands for Mechanical, Electrical, and Plumbing. These services involve the design, installation, and maintenance of essential building systems while ensuring efficiency and safety compliance.",
    },
    {
      question: "What does Mechanical include in MEP services?",
      answer:
        "Mechanical services include HVAC systems, ventilation systems, elevators, escalators, and other mechanical infrastructure components.",
    },
    {
      question: "What falls under Electrical services in MEP?",
      answer:
        "Electrical services include lighting systems, power distribution, security systems, wiring infrastructure, and backup power solutions.",
    },
    {
      question:
        "How do you ensure compliance with safety standards in MEP services?",
      answer:
        "We follow local and international safety codes with rigorous inspections, testing, quality assurance, and compliance validation processes.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Top Mechanical, Electrical and Plumbing Contractor in India
        </title>

        <meta
          name="description"
          content="Discover excellence in construction services with our top-tier Mechanical, Electrical, and Plumbing (MEP) contracting expertise in India."
        />

        <link
          rel="canonical"
          href="https://www.snappyserv.com/line-work"
        />
      </Helmet>

      <style>
        {`
          .mep-page {
            background: #f7f9fc;
            overflow: hidden;
          }

          .mep-section {
            padding: 90px 0;
            position: relative;
          }

          .mep-container {
            width: 100%;
            max-width: 1240px;
            margin: auto;
            padding: 0 20px;
          }

          .section-tag {
            display: inline-flex;
            align-items: center;
            padding: 8px 18px;
            border-radius: 999px;
            background: rgba(0, 91, 234, 0.08);
            color: #005bea;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 18px;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
            gap: 50px;
          }

          .hero-title {
            font-size: 54px;
            line-height: 1.1;
            font-weight: 800;
            color: #101828;
            margin-bottom: 24px;
          }

          .hero-description {
            font-size: 17px;
            line-height: 1.9;
            color: #475467;
            margin-bottom: 22px;
          }

          .hero-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin-top: 34px;
          }

          .hero-stat-card {
            background: #fff;
            padding: 18px 22px;
            border-radius: 18px;
            min-width: 170px;
            box-shadow: 0 10px 35px rgba(16, 24, 40, 0.06);
            border: 1px solid rgba(16, 24, 40, 0.05);
          }

          .hero-stat-card h3 {
            margin: 0;
            font-size: 24px;
            color: #005bea;
            font-weight: 800;
          }

          .hero-stat-card p {
            margin: 6px 0 0;
            font-size: 14px;
            color: #667085;
          }

          .hero-image-wrapper {
            position: relative;
          }

          .hero-image {
            width: 100%;
            border-radius: 34px;
            object-fit: cover;
            box-shadow: 0 25px 60px rgba(16, 24, 40, 0.15);
          }

          .glass-card {
            position: absolute;
            bottom: 24px;
            left: -40px;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(10px);
            border-radius: 22px;
            padding: 20px;
            width: 260px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .glass-card h4 {
            margin: 0 0 10px;
            font-size: 18px;
            font-weight: 700;
            color: #101828;
          }

          .glass-card p {
            margin: 0;
            font-size: 14px;
            line-height: 1.7;
            color: #667085;
          }

          .content-section {
            background: #fff;
            border-radius: 36px;
            padding: 70px;
            box-shadow: 0 20px 60px rgba(16, 24, 40, 0.05);
          }

          .section-heading {
            font-size: 42px;
            line-height: 1.2;
            font-weight: 800;
            color: #101828;
            margin-bottom: 22px;
          }

          .section-description {
            font-size: 16px;
            line-height: 2;
            color: #475467;
          }

          .content-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 34px;
            margin-top: 40px;
          }

          .content-card {
            background: #f8fafc;
            border-radius: 24px;
            padding: 30px;
            border: 1px solid rgba(16,24,40,0.06);
          }

          .content-card h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 18px;
            color: #101828;
          }

          .content-card p {
            font-size: 15px;
            line-height: 1.9;
            color: #667085;
            margin: 0;
          }

          .commitment-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-top: 50px;
          }

          .commitment-card {
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            border-radius: 28px;
            padding: 36px 28px;
            border: 1px solid rgba(16,24,40,0.06);
            transition: 0.3s ease;
            height: 100%;
            box-shadow: 0 12px 30px rgba(16,24,40,0.04);
          }

          .commitment-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 22px 45px rgba(16,24,40,0.08);
          }

          .commitment-icon {
            width: 72px;
            height: 72px;
            border-radius: 20px;
            background: linear-gradient(135deg, #005bea, #00c6fb);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            margin-bottom: 24px;
          }

          .commitment-card h3 {
            font-size: 24px;
            font-weight: 700;
            color: #101828;
            margin-bottom: 16px;
          }

          .commitment-card p {
            font-size: 15px;
            line-height: 1.9;
            color: #667085;
            margin: 0;
          }

          .service-banner {
            background: linear-gradient(135deg, #005bea 0%, #00c6fb 100%);
            border-radius: 36px;
            overflow: hidden;
            position: relative;
          }

          .service-banner::before {
            content: "";
            position: absolute;
            top: -120px;
            right: -120px;
            width: 320px;
            height: 320px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
          }

          .banner-inner {
            padding: 70px;
            position: relative;
            z-index: 2;
          }

          .banner-grid {
            display: grid;
            grid-template-columns: 1fr 420px;
            gap: 40px;
            align-items: center;
          }

          .banner-heading {
            font-size: 42px;
            font-weight: 800;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .banner-text {
            color: rgba(255,255,255,0.92);
            font-size: 16px;
            line-height: 1.9;
            margin-bottom: 28px;
          }

          .feature-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #fff;
            font-weight: 600;
            font-size: 15px;
          }

          .feature-check {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(255,255,255,0.18);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-card-wrapper {
            background: #fff;
            border-radius: 28px;
            padding: 24px;
            box-shadow: 0 18px 40px rgba(0,0,0,0.12);
          }

          .faq-wrapper {
            margin-top: 55px;
          }

          .faq-card {
            background: #fff;
            border-radius: 22px;
            margin-bottom: 18px;
            overflow: hidden;
            border: 1px solid rgba(16,24,40,0.06);
            box-shadow: 0 8px 24px rgba(16,24,40,0.04);
          }

          .faq-question {
            width: 100%;
            border: none;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 28px;
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
            padding: 0 28px 26px;
            color: #667085;
            font-size: 15px;
            line-height: 1.9;
          }

          .faq-icon {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #f2f4f7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            color: #005bea;
            flex-shrink: 0;
          }

          .final-cta {
            text-align: center;
            background: #fff;
            border-radius: 32px;
            padding: 70px 30px;
            box-shadow: 0 20px 60px rgba(16,24,40,0.05);
          }

          .final-cta h2 {
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 18px;
            color: #101828;
          }

          .final-cta p {
            max-width: 720px;
            margin: auto;
            font-size: 16px;
            line-height: 1.9;
            color: #667085;
          }

          .contact-number {
            margin-top: 28px;
            font-size: 34px;
            font-weight: 800;
            color: #ff7a00;
          }

          .project-slider {
            margin-top: 60px;
          }

          .project-card {
            background: #fff;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(16,24,40,0.06);
            box-shadow: 0 10px 30px rgba(16,24,40,0.05);
          }

          .project-card img {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }

          .project-content {
            padding: 24px;
          }

          .project-content h3 {
            font-size: 22px;
            font-weight: 700;
            color: #101828;
            margin-bottom: 16px;
          }

          .project-content p {
            margin-bottom: 10px;
            color: #667085;
            font-size: 15px;
          }

          @media (max-width: 1100px) {
            .hero-grid,
            .banner-grid,
            .content-grid,
            .commitment-grid {
              grid-template-columns: 1fr;
            }

            .glass-card {
              left: 20px;
              bottom: 20px;
            }
          }

          @media (max-width: 768px) {
            .mep-section {
              padding: 70px 0;
            }

            .hero-title {
              font-size: 40px;
            }

            .section-heading,
            .banner-heading,
            .final-cta h2 {
              font-size: 32px;
            }

            .content-section,
            .banner-inner {
              padding: 40px 24px;
            }

            .hero-stats {
              flex-direction: column;
            }

            .feature-list {
              grid-template-columns: 1fr;
            }

            .glass-card {
              position: relative;
              left: 0;
              bottom: 0;
              width: 100%;
              margin-top: 20px;
            }
          }
        `}
      </style>

      <div className="mep-page">
        {/* HERO SECTION */}
        <section className="mep-section">
          <div className="mep-container">
            <div className="hero-grid">
              <div>
                <div className="section-tag">
                  TOP MEP CONTRACTOR IN INDIA
                </div>

                <h1 className="hero-title">
                  Trusted Mechanical, Electrical & Plumbing Solutions
                </h1>

                <p className="hero-description">
                  At Snappy, we redefine construction excellence with
                  innovative, reliable, and scalable MEP services tailored for
                  modern infrastructure projects across India.
                </p>

                <p className="hero-description">
                  Whether you are developing a commercial facility, residential
                  complex, industrial setup, or upgrading existing systems, our
                  team ensures efficiency, compliance, sustainability, and
                  long-term operational performance.
                </p>

                <div className="hero-stats">
                  <div className="hero-stat-card">
                    <h3>100%</h3>
                    <p>Quality Assurance</p>
                  </div>

                  <div className="hero-stat-card">
                    <h3>24/7</h3>
                    <p>Project Support</p>
                  </div>

                  <div className="hero-stat-card">
                    <h3>MEP</h3>
                    <p>Integrated Solutions</p>
                  </div>
                </div>
              </div>

              <div className="hero-image-wrapper">
                <img
                  src="../assets/images/service/meps.png"
                  alt="MEP Services"
                  className="hero-image"
                />

                <div className="glass-card">
                  <h4>Industry Grade Expertise</h4>

                  <p>
                    Delivering advanced MEP infrastructure with precision,
                    compliance, and sustainable engineering practices.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <QuickLink />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mep-section" style={{ paddingTop: 0 }}>
          <div className="mep-container">
            <div className="content-section">
              <div className="section-tag">ABOUT MEP SERVICES</div>

              <h2 className="section-heading">
                Engineering Modern Infrastructure with Smart MEP Systems
              </h2>

              <p className="section-description">
                MEP contractors play a critical role in modern construction by
                designing, installing, and maintaining mechanical, electrical,
                and plumbing systems that ensure buildings remain functional,
                efficient, safe, and comfortable.
              </p>

              <div className="content-grid">
                <div className="content-card">
                  <h3>Understanding MEP Contractors</h3>

                  <p>
                    MEP contractors specialize in HVAC systems, electrical
                    infrastructure, lighting systems, water supply, drainage,
                    fire protection, and energy-efficient building operations.
                    These systems form the backbone of modern buildings and
                    directly impact operational efficiency and occupant comfort.
                  </p>
                </div>

                <div className="content-card">
                  <h3>Why MEP Matters</h3>

                  <p>
                    From commercial offices and hospitals to educational
                    institutions and residential projects, MEP services ensure
                    safety, sustainability, reliability, and seamless building
                    performance while complying with industry regulations and
                    standards.
                  </p>
                </div>
              </div>

              {/* PROJECTS */}
              {items?.length > 0 && (
                <div className="project-slider">
                  <div className="section-tag">OUR PROJECTS</div>

                  <Swiper
                    modules={[Navigation, Autoplay]}
                    {...serviceSlider}
                  >
                    {items.map((element) => {
                      const {
                        id,
                        title,
                        image,
                        client,
                        location,
                        valuw,
                        status,
                      } = element;

                      return (
                        <SwiperSlide key={id}>
                          <div className="project-card">
                            <img src={image} alt={title} />

                            <div className="project-content">
                              <h3>{title}</h3>

                              <p>
                                <strong>Client:</strong> {client}
                              </p>

                              <p>
                                <strong>Location:</strong> {location}
                              </p>

                              <p>
                                <strong>Project Value:</strong> {valuw}
                              </p>

                              <p>
                                <strong>Status:</strong> {status}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* COMMITMENT SECTION */}
        <section className="mep-section">
          <div className="mep-container">
            <div className="section-tag">OUR EXPERTISE</div>

            <h2 className="section-heading text-center">
              Our Commitment to Excellence
            </h2>

            <div className="commitment-grid">
              {commitmentCards.map((item, index) => (
                <div className="commitment-card" key={index}>
                  <div className="commitment-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="mep-section" style={{ paddingTop: 0 }}>
          <div className="mep-container">
            <div className="service-banner">
              <div className="banner-inner">
                <div className="banner-grid">
                  <div>
                    <div className="section-tag" style={{ color: "white" }}>
                      WHY CHOOSE SNAPPY
                    </div>

                    <h2 className="banner-heading">
                      Trusted Mechanical, Electrical & Plumbing Contractor
                    </h2>

                    <p className="banner-text">
                      Discover comprehensive MEP solutions engineered for
                      efficiency, safety, and long-term operational excellence.
                    </p>

                    <ul className="feature-list">
                      <li className="feature-item">
                        <div className="feature-check">✓</div>
                        Qualified Experts
                      </li>

                      <li className="feature-item">
                        <div className="feature-check">✓</div>
                        Quality Workmanship
                      </li>

                      <li className="feature-item">
                        <div className="feature-check">✓</div>
                        Certified Professionals
                      </li>

                      <li className="feature-item">
                        <div className="feature-check">✓</div>
                        Affordable Packages
                      </li>
                    </ul>
                  </div>

                  {/* <div className="contact-card-wrapper"> */}
                    <QuickContact />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mep-section">
          <div className="mep-container">
            <div className="content-section">
              <div className="section-tag">FAQ</div>

              <h2 className="section-heading">
                Frequently Asked Questions
              </h2>

              <div className="faq-wrapper">
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
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="mep-section"
          style={{ paddingTop: 0 }}
        >
          <div className="mep-container">
            <div className="final-cta">
              <div className="">GET IN TOUCH</div>

              <h2>Still Have Questions?</h2>

              <p>
                Snappy is committed to delivering reliable and
                future-ready MEP solutions for projects of every scale.
                Our experts are ready to assist you with consultation,
                execution, and support.
              </p>

              <div className="contact-number">
                +91-99997 94426
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Mep;