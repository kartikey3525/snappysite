import React, {useState} from 'react'
import Breadcrumb from '../Common/Breadcumb'
import { Link } from 'react-router-dom'

import {Helmet} from "react-helmet";
import data from "../data/blog";
function Blog() {
    const [items, setItem] = useState(data);
    const [show, setShow] = useState(false);
 
    return <>
    <Helmet>
      <title>Blog</title>
    </Helmet>
      <Breadcrumb pageTitle="Blog" pageName="Blog"/>
      <div id="about">
      <div className='container'>
        <div className='row'>
        {items.map((element) => {
              
              const { title, image, id, short, uri } = element;
            
                  
                 
             return (
               <div
                 className="row"
                 style={{
                   margin: "40px 0px 40px 0px",
                   padding: "15px",
                   display: "flex",
                 }}
               >
                 <img
                   src={image}
                   className="img-responsive"
                   style={{
                     borderRadius: "30px",
                     width: "50rem",
                     height: "30rem",
                   }}
                   alt=""
                 />
                 <div
                   style={{
                     padding: "15px",
                     alignContent: "start",
                   }}
                 >
                   <h3>{title}</h3>
                   {short}
                   <br />
                   <br />
                   <br />
                   <br />
                   <Link
                     to={`${process.env.PUBLIC_URL}/article/${id}/${uri}`}
                     onClick={() =>
                       window.scrollTo({ top: 0, behavior: "smooth" })
                     }
                   >
                     <button className="btn btn-primary">Read more</button>
                   </Link>
                 </div>
               </div>
             );
             })}
           
        </div>
      </div></div>
    </>
  }

export default Blog;
