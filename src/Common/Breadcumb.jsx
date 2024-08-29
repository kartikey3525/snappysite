import React, { Component } from 'react'
import { Link } from "react-router-dom";
function Breadcrumb(props) {
  
    return (
      <div id="page_title">
        <div className="container text-center">
          <div className="panel-heading">{props.pageTitle}</div>
          <ol className="breadcrumb">
            <li><Link to={`${process.env.PUBLIC_URL}/`} >Home</Link></li>
            <li className="active">{props.pageName}</li>
          </ol>
        </div>
      </div>
    )
  }
export default Breadcrumb;
