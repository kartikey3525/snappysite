import { React } from "react";
import Hero1 from "./Hero1";
import ServiceWrap from "./ServiceWrap";
import Promo from "./Promo";
import HowtoBook from "./HowtoBook";
import Trust from "./Trust";
import WhyChoose from "./WhyChoose";
import Whyus from "./Whyus";
import Testimonial from "./Testimonial";
import {Helmet} from "react-helmet";
function Home() {
   return(
    <div id="wrapper">
      <Helmet>
         <title>Best Electrical Contractor in Ghaziabad | Electrical Supply Shops</title>
         <meta name="description" content="Snappy Services is an Electrical Supply Shop & electrical contractor In Ghaziabad Dealing Best Electrical Products and maintenance services In Ghaziabad. 
"/>
      <meta name="keywords" content="Snappy Services, Snappy Serv, Snappyserv, snappyserv.com, Electrical Contractor in Ghaziabad, Electrical Service Provider, Home Automation, Electrical Repair and services, Electrician in Ghaziabad
"/>
      <meta name="facebook-domain-verification" content="17j1kfpd4xx7hwp3pcigcca7rcygij" />
<link rel="canonical" href="https://snappyserv.com" />
<meta name="google-site-verification" content="zZ2rE2HaxXwuRJC8cgm91PMb8xYxDYsWwLkUIck7d8E" />
      </Helmet>
    <Hero1/>
    <ServiceWrap/>
    <Promo/>
    <HowtoBook/>
    <Trust/>
    <WhyChoose/>
    <Whyus/>
    <Testimonial/>
    </div>
   );
    
}
export default Home;