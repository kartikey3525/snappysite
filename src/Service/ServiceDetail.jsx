import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

import data from "../data/services";
function ServiceDetail(props) {
    
    const [items, setItem] = useState(data);
    const [show, setShow] = useState(false);
   
    return <>
        <div className="row" ref={props.type}>
           
              <h2>{props.heading}</h2> <hr></hr>
         {items.map((element) => {
              
           const { service,category,title,desc, image, id, details,rating,reviewcount,price } = element;
           if (element.service === props.service &&  element.category === props.category) {
               
              
          return (
              
             <div key={id} className="col-md-12">
              <div className="row">
                  <div className="col-md-3"><img src={image} alt="" style={{borderRadius:'10px'}}/></div>
                <div className="col-md-6">
                  <h4><strong>{title}</strong></h4>
                  <i className="fa fa-star" /> {rating} ({reviewcount})
                  <h4><i className="fa fa-inr" /><strong> {price}</strong></h4>
                  <p>{desc}</p>
                 {
                  show && <p><div dangerouslySetInnerHTML={{__html:element.details}}></div></p>
                  } 
                 
                  <Link onClick={()=>setShow(!show) } key={id}>
                    <h4>{show === true ? "Hide Details" : "View Details"}</h4></Link>
                </div>
                <div className="col-md-3">
                  
                  <Link to={`${process.env.PUBLIC_URL}/booking/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><button className="btn btn-primary">Book</button></Link>
                </div>
              </div>
               <hr />
                {/*<ModalBody key={id} title={title} data={items} show={show} handleClose={handleClose} />*/}
              </div>
            
           
           );}
          })}
           </div>
    </>
  }

export default  ServiceDetail; 