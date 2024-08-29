import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import data from "../data/acservice";
import data1 from "../data/acrepair";

import data2 from "../data/acinstallation";

import ModalBody from './ModalBody';
import ServiceDetail from './ServiceDetail';
function ElectricalServices() {
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

    return <>
     <section id="What_offer">
        <div className="container text-center ">
         
          <div className="row text-left text-justify" style={{marginTop: '15px', verticalAlign: 'middle'}}>
            <div className="col-md-8 col-sm-6 col-xs-12" >
              <h1 className="text-left" style={{fontSize: '35px', fontWeight: 'bold', marginBottom: '55px'}}>Electrical Services</h1>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ec-1.png" alt="Kitchen" /></div>
                  <div className="box_content">
                    <Link onClick={handleClick}> <h4>Service</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ec-1.png" alt="Bathroom" /></div>
                  <div className="box_content">
                     <Link onClick={handleRepair}> <h4>Repair</h4></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 mb-2">
                <div className="icon_box_one">
                  <div className="icons"><img style={{borderRadius: '10px'}} src="../assets/images/service_detail/ec-1.png" alt="cleaning" /></div>
                  <div className="box_content">
                    <Link onClick={handleInstall}><h4>Installation / Uninstallation</h4></Link>
                  </div>
                </div>
              </div>
              </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <img src="../assets/images/service/electrician.png" className="img-responsive" style={{borderRadius: '30px'}} alt=''/>
            </div>
          </div>
        </div>
      </section>
<section id="What_offer">
        <div className="container text-justify">
        
          <div className="row">
        <div className="col-md-8">
           <ServiceDetail data={data} type={service} heading={'Service'}/>
          <ServiceDetail data={data1} type={repair} heading={'Repair'}/>
          <ServiceDetail data={data2} type={install} heading={'Installation/ Uninstallation'}/>
          
          
        </div>
         <div className="col-md-4 banner_content service_banner_layer"  id='service_banner' style={{padding:'20px'}} >
           
            <div className="row text-left">
              <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px'}}>
                 <h1 className="service-heading">Fast & Reliable Electrical Services</h1>
                  <p>We provide 24hr electrical services that are perfect for emergencies. We are also licensed to provide all electrical services necessary for your needs.</p>
                  <h2>Why choose Snappy?</h2>
                  <ul className="featurs_list">
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Certified Technician</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Same Day Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Quality Service</li>
                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Best Pricing</li>
                  </ul>
               
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="quick_contact">
                  <p>We Are Here To Help <br />
                    You!!!</p>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-user" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleName" placeholder="Name" name="name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleemail" placeholder="Email" name="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="examplePhone" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="quick_btn">
                        <button type="submit" className="btn btn-default btn-skin">SUBMIT</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          
        
          </div>
      </div>
        </div>
      </section>
   
        
        <section id="What_offer">
          <div className="container text-justify">
            <h1 className="panel-heading text-center">Best Electrical Services Ghaziabad</h1>
            <p>Excellence in the work of electricians is of utmost importance. One should be perfect in handling the wires and electricity with his senses that it should not result in any misshapen latter on and so are in this field. The personnel department of our company has appointed a professional team to work with electricity that do not fear any of the work assigned to them without the constraint of the time limit as they feel free to work overtime to serve the people who are in their need. This is the hospitality that is been served to the client as we are available to you when you contact us. The reputation of the firm, as well as the electrician, goes hand in hand. If the worker will be good only then the firm will earn goodwill and this is the main aspect taken into consideration when appointing the workers for the Best Electrical Services Ghaziabad in which they have to perform all the tasks that will be assigned to them.</p><p>

Electricians have to work either in the offices, schools, restaurants, or at homes they have to mold their dealings according to the person they are confronting with. If they are working in the school so they have to tackle the situation to communicate with the staff members so this is the proficiency that our employees possess as they can easily communicate with every kind of person they are meeting with on daily basis. Hard work always repays and that is true the hard-working of the staff of the company is appreciated as they work day and night to build the reputation of the company which has repaid us as the Best Electrical Services Ghaziabad. They are independent intake the decisions as they have been delegated the power to take decisions instantly because of the training being given to them on what to do and where to do the work that is required and good for the customer. Installing lights or repairing the fused lights all the matters will be easily sorted by the staff members independently. In today’s scenario what makes a company of the leading companies. We believe that the firm that values time is the best among all. The prominent reason is that they save the time of the client as time is money in itself as well as the time of the company which is the crucial factor these days. Time management is a skill that has been taught to the employees appointed in the company while they were under the training section. This assists the people to get rid of their problem of faults in wires easily and instantly because we serve them our assistance expeditiously and never delay our works. Best Electrical Services Ghaziabad is serving you the quickest services in the area you just need to place a call and an electrician will reach your mentioned address within the required period. Then what are you waiting for pick up your mobile and give us information about the work to take place at your premises.</p>
          </div>
        </section>
        <section id="service-faq">
          <div className="container text-center">
            <h1 className="panel-heading">Frequently Asked Questions</h1>
            <div className="row text-left">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                  <h4>What electrical services do you provide?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>All electrical equipment and appliances need adjusting, maintenance, or replacing at some point. Our skilled electricians can assist with any residential, retail, or commercial electrical job
                  </p>
                </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="qa_box_one">
                  <div className="question"><strong>Q.</strong>
                  <h4>Do I need to be present when your team is working?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We know that you are busy. So once we assess the problem together, you will not need to be present as we do our work. We will take care of your valuable items and property while we work to ensure that everything is in order after we are finished. </p>
                </div>
                </div>
              </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Can I do electrical wiring myself?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>No. Always consult professional electrical service provider in your area for any wiring, re-wiring related work. We do not recommend to do it yourself. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What areas do you cover?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We cover entire Delhi/NCR region.
                  </p>
                </div>
              </div>
            </div></div> <div className="row text-left">
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>Will I have to wait in all day for an electrician to attend?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>We always try our absolute best to inconvenience you as little as possible. We aim to book a pre-arranged date and time with you, although sometimes, we may have to offer you a morning or afternoon slot. If your job is urgent, we may be able to call you at short notice.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-left">
              <div className="qa_box_one">
                <div className="question"><strong>Q.</strong>
                  <h4>What are your hours?</h4>
                </div>
                <div className="answer"><strong>A.</strong>
                  <p>Our standard working hours are 8.00am – 4.30pm Monday to Friday.
                  </p>
                </div>
              </div>
            </div></div>
            <div className='row text-center'>
              <div className='col-md-12'>
                <h1 className='text-red'>Still Have Questions?</h1>
                <h2>Give us a call at <strong>+91-99997 94426</strong></h2>
                <p>Snappy is dedicated to providing you with the best service possible.<br></br> We look forward to working with you!</p>
              </div>
            </div>
          </div>
        </section>
    </>
  }
export default ElectricalServices;
