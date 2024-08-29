import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import Hero from "../Home/Hero";
function Header() {
  const [query, setQuery] = useState("")
  const [show, setShow]=useState(false)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState([]);
  return <header id="header" data-offset-top={60} data-offset-bottom={60}>
        <div className="container">
          <div className="row">
            <div className="col-md-2  col-sm-12 col-xs-12 col-sm-12 text-center">
              <nav className="navbar"> 
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <Link to={`${process.env.PUBLIC_URL}`} onClick={window.scrollTo({top:0,behavior:"smooth"})}><img className="logo-dark hidden-xs" src="../assets/images/logo.png" alt="" width={80} /> <img className="logo-dark hidden-lg hidden-md hidden-sm" src="../assets/images/logo.png" alt="" width={100} /></Link> </div>
               
              </nav>
            </div>
           {/* <div className="col-md-5  col-sm-12 col-xs-12 col-sm-12 ">
           <Hero/></div>*/}
            <div className="col-md-10  col-sm-6 col-xs-12 col-sm-12">
              <ul className="right-contact">
                <li>
                  <div className="row"> 
                   
                    <div className="col-md-12 col-sm-12" style={{padding: 0, marginLeft: 0,  minWidth:'220px'}}>
                       <img src="../assets/images/call.png"  alt="" className="img-responsive" style={{float: 'left', height:'50px'}} />
                      <span style={{fontSize: '19px',marginRight:'20px', fontStyle: 'italic', color: 'red', fontWeight: 'bold'}}>At Your Service</span><br /><span style={{marginRight:'20px'}}>+91-9999794426</span>
                    </div>
                  </div>
                  </li>
                <li>
                  <div className="row"> 
                    <div className="col-md-12"><a href="#" className="btn btn-primary btn-skin">Login / Register</a></div></div></li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.container */} 
        <a href="https://wa.me/919999794426" class="float">
<i class="fa fa-whatsapp float"></i>
</a>
      </header>;
}
export default Header;