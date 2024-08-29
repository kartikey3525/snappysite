import React, { Component } from 'react'
import Breadcrumb from '../Common/Breadcumb'
import {Helmet} from "react-helmet";

export default class Refund extends Component {
  render() {
    return <>
    <Helmet>
      <title>Refund and Cancellation Policy</title>
    </Helmet>
      <Breadcrumb pageTitle="Refund Policy" pageName="Refund Policy"/>
     <div id="about"> <div className='container'>
        <div className='row'>
            <h2>Refund Policy</h2>
            <p className='text-justify'>Thanks for allowing us to serve you via www.snappyserv.com
</p>
<p className='text-justify'>
If you are not entirely satisfied with our repair service, we're here to help.
</p>
<h3>Returns | Replacement of spares</h3>
<p className='text-justify'>
If the spares used in repairing your appliance is not functioning correctly, You are eligible to ask for the Replacement of that spares, which are used to improve your device by service clap's service provider as per the warranty period mentioned on repair invoice by the service provider from the date of its first use.
</p>
<p className='text-justify'>
Return or Replacement of defective spares is strictly according to the warranty terms of the manufacturer of the spare.</p>
<p className='text-justify'>
Your claim of refund /return/replacement needs to have the receipt or proof of purchase of our service.
</p>
<h3>Refunds</h3>
<p className='text-justify'>
Once our service provider will inspect the unit repaired by him and if he found that your claim is valid.
</p><p className='text-justify'>
We will repair it once again and if the same happens again.
</p>
<p className='text-justify'>
We will accept your claim of refund.</p>
<p className='text-justify'>
We will immediately notify you on the status of your full or partial refund after inspecting the item.
</p><p className='text-justify'>
Once your return is approved, we will initiate a full or partial refund.
</p><p className='text-justify'>
You will receive the credit within seven days.</p>

<h3>Contact Us</h3>
<p className='text-justify'>
If you have any questions on how to get a refund against your payment made to us,
</p>
<p className='text-justify'>

sales@snappyserv.com</p>
        </div>
      </div></div>
    </>
  }
}
