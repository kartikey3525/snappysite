import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class QuickLink extends Component {
  render() {
    return <>
    <div className="row text-left">
               <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:'20px', backgroundColor:'#f5f5f5', marginTop:'40px'}}>
               <h1 className="service-heading">Services</h1>
               <ul className="featurs_list">
                    <li><Link to={`${process.env.PUBLIC_URL}/air-conditioner`}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{color:'#000', fontSize:'20px', fontWeight:'700' }}> Air Conditioner</Link></li>
                     <li><Link to={`${process.env.PUBLIC_URL}/lcd-led-tv`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> LCD/LED TV</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/washing-machine`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Washing Machine</Link></li>
                       <li><Link to={`${process.env.PUBLIC_URL}/refrigerator`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Refrigerator</Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/microwave`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Microwave</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/chimney`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Chimney</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/geyser`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Geyser</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/mixer`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Mixer Grinder</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/food-processor`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Food Processor</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/hand-blender`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Hand Blender</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/rice-cooker`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Rice Cooker</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/fan`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Fan</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/induction`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Induction</Link></li>
                         <li><Link to={`${process.env.PUBLIC_URL}/air-cooler`}  style={{color:'#000', fontSize:'20px', fontWeight:'700' }}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Air Cooler</Link></li>
                  
                  </ul>
               </div>
             </div>
    </>
  }
}
