import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return  <footer>
        <div className="container-fluid footerbg">
          <div className="container">
            <div className="row">
              <div className="col-md-3"> <a href="#" className="footer-logo"> <img className="logo-dark" src="../assets/images/logo.png" width={100} alt="Hire A Helper" /> </a>
                <div className="about_info">
                  <p><i className="fa fa-map-marker" aria-hidden="true" /> G2/109 Panchsheel Park, Sahibabad Ghaziabad 201005</p>
                  <p><i className="fa fa-envelope" aria-hidden="true" /> sales@snappyserv.com</p>
                  <p><i className="fa fa-phone" aria-hidden="true" /> +91-9999794426</p>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Services</h4>
                <ul>
                  <li><Link to={`${process.env.PUBLIC_URL}/electrical-contractor`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Electrical Contractor</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/electrical-services`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Electrical Services</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/home-appliances`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Home Appliances</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/electrical-motors`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Electrical Motors</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/solar-appliances`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Solar Appliances</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/home-automation`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Home Automation</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/ro-services`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />RO Services</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>About Us</h4>
                <ul>
                  <li><Link to={`${process.env.PUBLIC_URL}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/aboutus`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About us</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/contactus`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/blog`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Blog</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Policy</h4>
                <ul>
                  <li><Link to={`${process.env.PUBLIC_URL}/terms-and-conditions`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Terms &amp; Conditions</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/privacy-policy`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Privacy Policy</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/refund-policy`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Refund Policy</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/disclaimer`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa fa-caret-right" aria-hidden="true" />Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <div className="top_awro pull-right" id="back-to-top"><i className="fa fa-chevron-up" aria-hidden="true" /> </div>
          </div>
        </div>
        {/*Boottom Footer*/}
        <div className="container-fluid bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="copyright pull-left">© 2023 Snappyserv.com All Right Reserved | Powered by <a href="https://www.meshamedia.in" target="_blank">Mesha Media</a></p>
                <ul className="footer-scoails pull-right">
                  <li><a href="https://www.facebook.com/onlysnappy"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="https://twitter.com/ServicesSnappy"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="https://www.instagram.com/onlysnappyserv/"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="https://www.linkedin.com/in/onlysnappy"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCxwbzhOhanFzfd5X5jyI5Vw"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </footer>;
}
export default Footer;