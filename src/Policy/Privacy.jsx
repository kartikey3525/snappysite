import React, { Component } from 'react'
import Breadcrumb from '../Common/Breadcumb'
import {Helmet} from "react-helmet";

export default class Privacy extends Component {
  render() {
    return <>
    <Helmet>
      <title>Privacy Policy</title>
    </Helmet>
      <Breadcrumb pageTitle="Privacy" pageName="Privacy"/>
      <div id="about">
      <div className='container'>
        <div className='row'>
            <h2>Privacy Policy</h2>
            <p className='text-justify'>At Snappy Services, we maintain highest levels of security standards. Be it storing your personal information with us or helping you purchase our products online from our secure website. We request you to please read our privacy policy outlined herein. We shall be updating our privacy policy from time to time, without notice to all customers. We urge you to please check our policy from time to time to be updated.</p>

<h3>Securing your personal information</h3><p className='text-justify'>
We collect your personal information so that we can serve you better. We are fully committed to ensuring the privacy, confidentiality and integrity of any personal information we seek from you. We protect this information by maintaining lawful physical, electronic, and procedural security means. Besides, we train our employees in the proper handling of your personal information at all times.</p><p className='text-justify'>

If you book our services online, we'll collect personal information about you as you enter it on our website. We may retain such information whenever you provide us at any point on our website. We may use these details to contact you to assist with our services in future.</p><p className='text-justify'>

The ways in which we will use your data collected during the course of your booking are contained within the General and Service Terms & Conditions - we recommend you read these carefully; they are available online and will also be sent to you in your Welcome Kit.</p><p className='text-justify'> 

In addition to the above, we will collect information such as the IP address from which visitors login to their account. Besides, details about failed logon attempts for the purpose of possible investigation into misuse or abuse of the website may also be collected.</p>

<h3>Collection of certain demographic data</h3>
<p className='text-justify'>
We request you for certain demographic data such as your email id, mobile number, address to serve you better. We use these data to assure you of speedy and reliable services. We record your WAN IP address to administer our website and improve our security continuously.
</p>
<p className='text-justify'>We use web analytics software to show which pages on this website are visited most frequently and how long visitors spend on this website.</p>

<h3>Security Precautions on our website</h3>
<p className='text-justify'>
Your access to Snappy Services's secure website is based on your login ID and password. Logins to your account are audited in our systems and we maintain adequate checks and balances to ensure that only you have access to your account. AWS, the leader in data security has certified our website as secure.</p>
        </div>
      </div></div>
    </>
  }
}
