import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link
              to={`${process.env.PUBLIC_URL}/`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="nav-link"
              style={styles.navitemText}
            >
              Home
            </Link>
          </li>
          <li style={styles.navItem} className="dropdown">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="nav-link"
              style={styles.navitemText}
            >
              Services
            </Link>
            {/* Dropdown Menu */}
            <div className="dropdown-content">
              <Link
                to="/mep-services"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="dropdown-item"
                style={styles.navitemText}
              >
                MEP Services
              </Link>
              <Link
                to="/hvac"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={styles.navitemText}
              >
                HVAC/AC/VRV
              </Link>
              <Link
                to="/plumbing"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={styles.navitemText}
              >
                Plumbing Services
              </Link>
              <Link
                to="/line-work"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={styles.navitemText}
              >
                Sub-Station Work
              </Link>
              <Link
                to="/electrical-contractor"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={styles.navitemText}
              >
                Electrical Contractor
              </Link>
              <Link
                to="/fire-fitting"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dropdown-item"
                style={styles.navitemText}
              >
                Fire fighting
              </Link>
            </div>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/contactus"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="nav-link"
              style={styles.navitemText}
            >
              Contact
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/blog"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="nav-link"
              style={styles.navitemText}
            >
              Blog
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/aboutus"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="nav-link"
              style={styles.navitemText}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contact Details (Hidden on mobile) */}
      <div className="contact-container">
        <div className="contact-text">
          <h3 style={{ color: "grey", fontSize: "1vw" }}>Call support :</h3>
          <h3 style={styles.contactDetails}>+91-9999794426</h3>
        </div>
        <div className="contact-text">
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
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: "1.2rem",
    justifyContent: "center",
    position: "relative",
  },
  navitemText: {
    fontSize: "2vw",
    textDecoration: "none",
  },

  contactDetails: {
    color: "black",
    fontSize: "1vw",
    fontWeight: "800",
    marginLeft: "0.5rem", // Space between label and number
  },
};

export default Header;
