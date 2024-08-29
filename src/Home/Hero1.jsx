import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from "../data/search";

function Hero() {
  const [query, setQuery] = useState("")
  const [show, setShow]=useState(false)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState([]);
    return  <section id="banner" className="home-one">
        <div className="container text-center parallax-section">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="panel-heading" style={{color: '#ff0054'}}>Why change when we repair?</h1>
              <p className="caption" style={{color: '#3ea4d6'}}>Connect with experts to make life easier<br />
              </p>
              <form className="form-inline book-now-home">
                {/*<div className="form-group">
                  <div className="input-group">
                    <div className="dropdown category-dropdown text-left"> 
                    <a data-toggle="dropdown" href="#"><i className="fa fa-map-marker" aria-hidden="true" /> <span className="change-text">Select Location</span> <i className="fa fa-caret-down pull-right" aria-hidden="true" /> </a>
                      <ul className="dropdown-menu category-change">
                        <li><p>AC REPAIR</p></li>
                      <li><p>AC REPAIR</p></li>
                       <li><p>AC REPAIR</p></li>
                      <li><p>AC REPAIR</p></li>
                      </ul>
                    </div>
                  </div>
</div>*/}
                <div className="form-group">
                  <div className="input-group ">
                    <input type="text" className="form-control zipcode" id="zipcode" placeholder="Search Services" onChange={event => setQuery(event.target.value)} onClick={()=>setShow(true) }/>
                    <ul className='search'>
                    {
                        data.filter(post => {
                        if (query === '') {
                          return post;
                        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                          return post;
                        }
                      }).slice(0,10).map((post, index) => (
                        
                        
                          show && <Link to={post.link}><li style={{color:'#000'}}>{post.title}</li></Link>
                        
                      ))}
                    </ul>
                  </div>
                </div>
               {/* <button type="submit" className="btn btn-primary booknow btn-skin">Search</button> */}
              </form>
            </div>
          </div>
        </div>
      </section>;
    
}
export default Hero;