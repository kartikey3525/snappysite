import { React } from "react";
import { Link } from "react-router-dom";
function ServiceWrap() {
  return (
    <section id="services">
      <div className="container text-center">
        <h1 className="panel-heading">Choose Your Services</h1>
        <ul className="services-list">
          <li>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/air-conditioner`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="../assets/images/services-icons/7.png"
                alt="appliances"
              />
              <br />
              HVAC/AC/VRV
            </Link>
          </li>

          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/plumbing`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="../assets/images/services-icons/plumbing.png"
                alt="more"
              />
              <br />
              Plumbing Services
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/line-work`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="../assets/images/services-icons/line.png"
                alt="plumbing"
              />
              <br />
              HT Line Work
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/mechanical-electrical-plumbing-contractor`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="../assets/images/services-icons/mep.png"
                alt="plumbing"
              />
              <br />
              MEP Services
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/electrical-contractor`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="../assets/images/services-icons/1.png"
                alt="electrical"
              />
              <br />
              Electrical Contractor
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/solar-appliances`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                style={{ width: "40px", height: "40px", margin: 10 }}
                src="../assets/images/services-icons/fire-extinguisher.png"
                alt="extinguisher"
              />
              <br />
              Fire fighting
            </Link>
          </li>

          {/* <li> <Link to={`${process.env.PUBLIC_URL}/microwave`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/11.png" alt="appliances" /><br />
            Microwave</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/chimney`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/12.png" alt="appliances" /><br />
            Chimney</Link></li>
             <li> <Link to={`${process.env.PUBLIC_URL}/geyser`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/13.png" alt="appliances" /><br />
            Geyser </Link></li>
        
        <li> <Link to={`${process.env.PUBLIC_URL}/home-appliances`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/3.png" alt="appliances" /><br />
            Home Appliances</Link></li>
  
        <li> <Link to={`${process.env.PUBLIC_URL}/electrical-motors`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/4.png" alt="geyser" /><br />
            Electrical Motors</Link></li>

    <li> <Link to={`${process.env.PUBLIC_URL}/washing-machine`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/9.png" alt="appliances" /><br />
            Washing Machine</Link></li>
  
    <li> <Link to={`${process.env.PUBLIC_URL}/lcd-led-tv`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/8.png" alt="appliances" /><br />
                        LCD/LED TV</Link></li>

                         <li> <Link to={`${process.env.PUBLIC_URL}/refrigerator`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/10.png" alt="appliances" /><br />
                        Refrigerator</Link></li>

        <li> <Link to={`${process.env.PUBLIC_URL}/solar-appliances`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/5.png" alt="more" /><br />
            Solar Appliances</Link></li>
        <li> <Link to={`${process.env.PUBLIC_URL}/home-automation`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="../assets/images/services-icons/6.png" alt="more" /><br />
            Home Automation</Link></li>
      
      
        
          
             */}
        </ul>
      </div>
    </section>
  );
}
export default ServiceWrap;
