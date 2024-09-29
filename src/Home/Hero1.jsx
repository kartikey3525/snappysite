import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../data/search";

function Hero() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const searchRef = useRef(null); // To reference the search input and dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShow(false); // Close dropdown if clicking outside the search input
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <section id="banner" className="home-one">
      <div className="container text-center parallax-section">
        <div className="row text-center">
          <div className="col-md-12" style={{ marginTop: "250px" }}>
            <h1 className="panel-heading" style={{ color: "#ff0054" }}>
              Why change when we repair?
            </h1>
            <p className="caption" style={{ color: "#3ea4d6" }}>
              Connect with experts to make life easier
              <br />
            </p>
            <form className="form-inline book-now-home" ref={searchRef}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    style={{ alignSelf: "flex-start" }}
                    type="text"
                    className="form-control zipcode"
                    id="zipcode"
                    placeholder="Search Services"
                    onChange={(event) => setQuery(event.target.value)}
                    onClick={() => setShow(true)} // Show dropdown on click
                  />
                  <ul className="search">
                    {data
                      .filter((post) => {
                        if (query === "") {
                          return post;
                        } else if (
                          post.title.toLowerCase().includes(query.toLowerCase())
                        ) {
                          return post;
                        }
                      })
                      .slice(0, 10)
                      .map(
                        (post, index) =>
                          show && (
                            <Link to={post.link} key={index}>
                              <li style={{ color: "#000" }}>{post.title}</li>
                            </Link>
                          )
                      )}
                  </ul>
                </div>
              </div>
              {/* <button type="submit" className="btn btn-primary booknow btn-skin">Search</button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
