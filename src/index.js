import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Common/Header';
import Footer from './Common/Footer';
import Terms from './Policy/Terms';
import Privacy from './Policy/Privacy';
import Refund from './Policy/Refund';
import Disclaimer from './Policy/Disclaimer';
import About from './Pages/About';
import Testimonials from './Pages/ClientTestimonials';
import Contact from './Pages/Contact';
import ElectricalContractor from './Service/ElectricalContractor';
import LineWork from './Service/LineWork';
import ElectricalServices from './Service/ElectricalServices';
import HomeAppliances from './Service/HomeAppliances';
import ElectricalMotors from './Service/ElectricalMotors';
import SolarAppliances from './Service/SolarAppliances';
import HomeAutomation from './Service/HomeAutomation';
import RoService from './Service/RoService';
import AirConditioner from './Service/AirConditioner';
import Tv from './Service/Tv';
import WashingMachine from './Service/WashingMachine';
import Refrigerator from './Service/Refrigerator';
import Microwave from './Service/Microwave';
import Chimney from './Service/Chimney';
import Geyser from './Service/Geyser';
import Booking from './Service/Booking';
import Mixer from './Service/Mixer';
import FoodProcessor from './Service/FoodProcessor';
import HandBlender from './Service/HandBlender';
import RiceCooker from './Service/RiceCooker';
import Fan from './Service/Fan';
import Induction from './Service/Induction';
import AirCooler from './Service/AirCooler';
import Plumbing from './Service/Plumbing';

import Blog from './blog/blog';
import Article from './blog/article';
import Mep from './Service/Mep';
function Root() {
  
  return <>
<BrowserRouter >
<Header/>
<Routes>
 <Route exact path="/" element={<App/>} />
 <Route exact path="/terms-and-conditions" element={<Terms/>} />
  <Route exact path="/privacy-policy" element={<Privacy/>} />
  <Route exact path="/refund-policy" element={<Refund/>} />
  <Route exact path="/disclaimer" element={<Disclaimer/>} />
  <Route exact path="/aboutus" element={<About/>} />
  <Route exact path="/aboutus.html" element={<About/>} />
   <Route exact path="/aboutus.aspx" element={<About/>} />
  <Route exact path="/contactus" element={<Contact/>} />
  <Route exact path="/contactus.html" element={<Contact/>} />
  <Route exact path="/electrical-contractor" element={<ElectricalContractor/>} />
  <Route exact path="/line-work" element={<LineWork/>} />
  <Route exact path="/mechanical-electrical-plumbing-contractor" element={<Mep/>} />
        <Route exact path="/electrical-contractor.aspx" element={<ElectricalContractor />} />
  <Route exact path="/electrical-services" element={<ElectricalServices/>} />
  <Route exact path="/electrical-services.html" element={<ElectricalServices/>} />
  
  <Route exact path="/home-appliances" element={<HomeAppliances/>} />
  <Route exact path="/home-appliances.html" element={<HomeAppliances/>} />
  <Route exact path="/electrical-motors" element={<ElectricalMotors/>} />
  <Route exact path="/electrical-motors.html" element={<ElectricalMotors/>} />
  <Route exact path="/solar-appliances" element={<SolarAppliances/>} />
  <Route exact path="/solar-appliances.html" element={<SolarAppliances/>} />
  <Route exact path="/home-automation" element={<HomeAutomation/>} />
  <Route exact path="/home-automation.html" element={<HomeAutomation/>} />
  <Route exact path="/ro-services" element={<RoService/>} />
  <Route exact path="/ro-services.aspx" element={<RoService/>} />
  <Route exact path="/air-conditioner" element={<AirConditioner/>} />
  <Route exact path="/lcd-led-tv" element={<Tv/>} />
  <Route exact path="/washing-machine" element={<WashingMachine/>} />
  <Route exact path="/refrigerator" element={<Refrigerator/>} />
  <Route exact path="/microwave" element={<Microwave/>} />
  <Route exact path="/chimney" element={<Chimney/>} />
  <Route exact path="/geyser" element={<Geyser/>} />
  <Route exact path="/booking/:id" element={<Booking/>} />
   <Route exact path="/mixer" element={<Mixer/>} />
    <Route exact path="/food-processor" element={<FoodProcessor/>} />
     <Route exact path="/hand-blender" element={<HandBlender/>} />
      <Route exact path="/rice-cooker" element={<RiceCooker/>} />
       <Route exact path="/fan" element={<Fan/>} />
         <Route exact path="/induction" element={<Induction/>} />
          <Route exact path="/air-cooler" element={<AirCooler/>} />
          <Route exact path="/plumbing" element={<Plumbing/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/testimonials" element={<Testimonials/>} />
          <Route exact path="/article/:id/:uri" element={<Article/>} />
          

</Routes>
<Footer/>
</BrowserRouter>
</>
}

export default Root;
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Root/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
