import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <header
      id="header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      {/* Logo Section */}
      <div className="text-left">
        <Link
          to={`${process.env.PUBLIC_URL}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="../assets/images/logo.png" alt="" width={80} />
        </Link>
      </div>

      <div
        style={{
          width: "36vw",
          height: "70px",
          backgroundColor: "#40a8e7",
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          position: "absolute",
          marginLeft: "17%",
          marginBottom: "1%",
        }}
      ></div>
      {/* Navigation Links */}
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link
              to={`${process.env.PUBLIC_URL}/`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link"
              style={{ textDecoration: "none", fontSize: "1.4vw" }}
            >
              Home
            </Link>
          </li>
          <li style={styles.navItem} className="dropdown">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link"
              style={{ textDecoration: "none", fontSize: "1.4vw" }}
            >
              Services
            </Link>
            {/* Dropdown Menu */}
            <div className="dropdown-content">
              <Link
                to="/mep-services"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                MEP Services
              </Link>
              <Link
                to="/hvac"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                HVAC/AC/VRV
              </Link>
              <Link
                to="/plumbing"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                Plumbing Services
              </Link>
              <Link
                to="/line-work"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                Sub-Station Work
              </Link>
              <Link
                to="/electrical-contractor"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                Electrical Contractor
              </Link>
              <Link
                to="/fire-fitting"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={{ textDecoration: "none", fontSize: "1vw" }}
              >
                Fire fighting
              </Link>
            </div>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/contactus"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link"
              style={{ textDecoration: "none", fontSize: "1.4vw" }}
            >
              Contact
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/blog"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link"
              style={{ textDecoration: "none", fontSize: "1.4vw" }}
            >
              Blog
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/aboutus"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link"
              style={{ textDecoration: "none", fontSize: "1.4vw" }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contact Details */}
      <div style={styles.contactContainer}>
        <div style={styles.contactText}>
          <h3 style={{ color: "grey", fontSize: "1vw" }}>Call support :</h3>
          <h3 style={styles.contactDetails}>+91-9999794426</h3>
        </div>
        <div style={styles.contactText}>
          <h3 style={{ color: "grey", fontSize: "1vw", marginLeft: "1rem" }}>
            Email support :
          </h3>
          <h3 style={styles.contactDetails}>sales@snappyserv.com</h3>
        </div>
      </div>

      {/* WhatsApp Link */}
      <a href="https://wa.me/919999794426" className="float">
        <i className="fa fa-whatsapp float"></i>
      </a>
    </header>
  );
}

const styles = {
  navList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginLeft: "4rem",
    marginBottom: "1rem",
    position: "relative", // Required for dropdown positioning
  },
  contactContainer: {
    display: "flex",
    marginBottom: "10px",
    alignItems: "center",
    justifyContent: "flex-end", // Align contact details to the right
  },
  contactText: {
    display: "flex",
    alignItems: "center", // Center text vertically
  },
  contactDetails: {
    color: "black",
    fontSize: "1vw",
    fontWeight: "800",
    marginLeft: "0.5rem", // Space between label and number
  },
};

export default Header;
