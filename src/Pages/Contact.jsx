import React, { Component } from 'react'
import Breadcrumb from '../Common/Breadcumb'
import {Helmet} from "react-helmet";
export default class Contact extends Component {
  render() {
    return<>
    <Helmet>
      <title>Snappy Services - Best Electrician in Ghaziabad | CALL: +91-9999794426 </title>

<meta name="description" content="Snappy services  is the best service provider for Electrical Service, Electrical Motor Service, Solar Services and Home Appliances and Home Automation Services.  Call on 9999794426 for installation, repairs maintenance and other support services to delight our customers."/>
<meta name="keywords" content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Book Electrical Service, Book Home Automation Service, Book Home Appliances Repair and services, Home Appliances company in Ghaziabad, Book Solar Repair and service, Kitchen chimney repair in Ghaziabad, "/>
<link rel="canonical" href="https://www.snappyserv.com/contactus.html" />
    </Helmet>
      <Breadcrumb pageTitle="Contact Us" pageName="Contact Us"/>
      <section id="Contact_form">
        
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="booking_form">
                <div className="container-fluid">
                  <div className="row">
                    <form method="post">
                      <h2>Send your query</h2>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input className="form-control" id="name" name="name" placeholder="Full Name" type="text" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input className="form-control" id="Email" name="Email" placeholder="Email" type="text" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input className="form-control" id="Subject" name="Subject" placeholder="Subject*" type="text" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input className="form-control" id="Phone_number" name="Phone_number" placeholder="Phone Number" type="text" />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="input-group">
                          <textarea className="form-control" rows={6} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <button className="btn btn-primary btn-skin" name="submit" type="submit"> Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about_info">
                <h2>Contact info</h2>
                <p><i className="fa fa-map-marker" aria-hidden="true" /> G2/109 Panchsheel Park, Sahibabad, Ghaziabad 201005</p>
                <p><i className="fa fa-envelope" aria-hidden="true" /> sales@snappyserv.com</p>
                <p><i className="fa fa-phone" aria-hidden="true" /> +91-9999794426</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts_mape">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.472260401768!2d77.3612946!3d28.6786345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6cf9dfd21a6a369!2sSnappy%20Services!5e0!3m2!1sen!2sin!4v1669640638606!5m2!1sen!2sin" width={1600} height={490} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </> 
  }
}
