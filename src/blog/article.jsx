import React, { useRef, useState} from 'react'
import Breadcrumb from '../Common/Breadcumb'
import { useParams,Link } from "react-router-dom";
import data from "../data/blog";
import emailjs from "@emailjs/browser";
import {Helmet} from "react-helmet";

function Article() {
   const form =useRef();
  
  let params = useParams()
  const service=params.id
     const [items, setItem] = useState(data);
   
    return <>
       {items.map((element) => {
                           
                           return<>
                           {element.id === parseInt(service) && <>
                            <Helmet>
         <title>{element.metaTitle}</title>
         <meta name="description" content={element.metaDescription}/>
      <meta name="keywords" content={element.metaKeywords}/>
      
      </Helmet>
                           <Breadcrumb pageTitle={element.title} pageName={element.title}/>
    <section id="contact_information">
        <div className="container">
          <div className="row"> 
            {/*Left Form Part*/}
            <div className="col-md-12 col-sm-12 col-xs-12"> 
             <h2>{element.title}</h2>
             <img src={element.image} className="img-responsive" style={{borderRadius: '30px',padding:'0 0 20px 20px', float:'right'}} alt=""/>
             <div dangerouslySetInnerHTML={{__html:element.description}}></div>
             <br/><br/><br/><br/>
            </div>
            {/*/Left Form Part*/}
            
          </div>
        </div>
      </section> </>}
      </>})}
    </>
  }
export default Article
