import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from "../data/search";

function Hero() {
  const [query, setQuery] = useState("")
  const [show, setShow]=useState(false)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState([]);
    return  <form className="form-inline book-now-home">
                
                <div className="form-group">
                  <div className="input-group" >
                  
                    <input type="text" className="form-control zipcode" id="zipcode" placeholder="Search Services" onChange={event => setQuery(event.target.value)} onClick={()=>setShow(true) } style={{border:'2px solid #42b1e7', borderRadius:'10px', background:'transparent'}}/>
                    <i class="fa fa-search">
              </i>
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
            ;
    
}
export default Hero;