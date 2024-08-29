import React, {useRef}from 'react'
import emailjs from "@emailjs/browser";

function QuickContact(){
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_5p2tgz3','template_s3eusl2',form.current,'hv8RKgUgWsLCWkGaP')
      .then((result) => {
          console.log(result.text);
          alert('Thank You for showing interest in our services!! We will contact you soon.');
           e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
   
    return <>
     <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="quick_contact">
                  <p>We Are Here To Help <br />
                    You!!!</p>
                  <form className="form-horizontal" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-user" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleName" placeholder="Name" name="user_name" required/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="exampleemail" placeholder="Email" name="user_email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-mobile" aria-hidden="true" /></div>
                        <input type="text" className="form-control" id="examplePhone" placeholder="Phone" name="user_phone" required />
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
    </>
  }

export default QuickContact