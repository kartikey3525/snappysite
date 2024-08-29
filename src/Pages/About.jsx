import React, { Component } from 'react'
import Breadcrumb from '../Common/Breadcumb'
import {Helmet} from "react-helmet";

export default class About extends Component {
  render() {
    return <>
    <Helmet>
      <title>Snappy Services - Best Electrical Service Provider | snappyserv.com</title>

<meta name="description" content="Snappy Services is the best service provider for Electrical Service, Electrical Motor Service, Solar Services and Home Appliances and Home Automation Services.  We offer various services such as installation, repairs maintenance and other support services to delight our customers."/>
<meta name="keywords" content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Electrical Service Provider, Home Automation, Electrical Repair and services, Home Appliances Repair and services, Home Appliances company in Ghaziabad, Solar Repair and service, Solar service provider, Solar appliances services in Ghaziabad"/>
<link rel="canonical" href="https://www.snappyserv.com/aboutus.aspx" />
    </Helmet>
      <Breadcrumb pageTitle="About Us" pageName="About Us"/>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 about_l"> <img src="../assets/images/qualit_work.png" alt="desk"  className='img-responsive'/> </div>
            <div className="col-md-8 col-sm-6 text-justify">
              <h1>Expect the Best with
                Our Service</h1>
                <p>Snappy established in 1998, under the able guidance of Mr. Brij Mohan Arora, is a multi-disciplinary electrical contracting company with a highly qualified and professional team of 20+ staff including Project managers, engineers and staffs from diversified fields.</p>

<p>Over the years, we have grown into one of the larger engineering firms in India with an enviable track record. And we believe, our best work is still ahead of us. Our knowledge sectors are geared up to work qualitatively on a strict time- schedule basis, which has enabled our clients to keep coming back to us repeatedly.</p><p>

We have extensive experience in effectively dealing with corporate and private clients, and understands the diverse design solutions that each of these clients require.</p>
              <p>Our goal is to provide our customers with highly professional services. We pride ourselves on our reliable and friendly
                service that customers can trust. Our expert team are on call 24/7 for any emergency.</p>
              <ul className="list-star">
                <li>Experienced Team</li>
                <li>Friendly Experts</li>
                <li>Fully Licensed</li>
                <li>Quality Every Time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
 
    
     </>
  }
}
