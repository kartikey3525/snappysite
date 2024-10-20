import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Tiles.css"; // Import the CSS file

function Tiles() {
  return (
    <section id="services">
      <div className="container text-center">
        <h1 className="panel-heading">Choose Your Services</h1>
        <ul className="tiles-list">
          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/mep-services`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img src="../assets/images/MEPcom4.jpg" alt="mep-services" />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                MEP Services
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                At Snappy, we redefine excellence in construction services,
                standing as a trusted name synonymous with innovation,
                precision, and reliability. As a top-tier MEP contractor in
                India.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/hvac`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img src="../assets/images/ac_3.jpg" alt="appliances" />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                HVAC/AC/VRV
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                We provide complete HVAC solutions, from design and installation
                to maintenance, ensuring optimal climate control and energy
                efficiency for your projects.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/plumbing`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img
                  src="../assets/images/plumbing.jpg"
                  alt="plumbing-services"
                />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Plumbing Services
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                From installation to maintenance, we handle all your plumbing
                needs with precision, ensuring efficient water systems and
                long-term durability.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/line-work`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img src="../assets/images/substation.jpg" alt="line-work" />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Sub-Station Work
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                We offer comprehensive substation design, installation, and
                maintenance services, providing your facility with the necessary
                power distribution and control.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/electrical-contractor`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img
                  src="../assets/images/electrical.jpg"
                  alt="electrical-contractor"
                />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Electrical Contractor
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Our electrical services cover everything from wiring to complex
                installations, ensuring safe, reliable, and energy-efficient
                power systems for your building.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/fire-fitting`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="img-container">
                <img
                  src="../assets/images/firefitting2.jpg"
                  alt="fire-fitting"
                />
              </div>
              <h2
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Fire Fighting
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Our expert team designs and installs state-of-the-art
                firefighting systems to protect your buildings, ensuring
                compliance with safety standards.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tiles;
