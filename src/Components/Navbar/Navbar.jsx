import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  const handleLeftHover = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = 'translateX(-20px)';
    document.querySelector('.left-side-ul .line > div').style.width = '15px';
    document.querySelector('.left-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.left-side-ul .line > div').style.opacity = '1';
  };

  const handleRightHover = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = 'translateX(20px)';
    document.querySelector('.left-side-ul .line > div').style.width = '15px';
    document.querySelector('.left-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.left-side-ul .line > div').style.opacity = '1';
  };
  const handletwoLeftHover = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = 'translateX(-20px)';
    document.querySelector('.right-side-ul .line > div').style.width = '15px';
    document.querySelector('.right-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.right-side-ul .line > div').style.opacity = '1';
  };

  const handletwoRightHover = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = 'translateX(20px)';
    document.querySelector('.right-side-ul .line > div').style.width = '15px';
    document.querySelector('.right-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.right-side-ul .line > div').style.opacity = '1';
  };

  const handleHoverOut = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = '';
    document.querySelector('.left-side-ul .line > div').style.width = '';
    document.querySelector('.left-side-ul .line > div').style.opacity = '0.2';
  };
  const handletwoHoverOut = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = '';
    document.querySelector('.right-side-ul .line > div').style.width = '';
    document.querySelector('.right-side-ul .line > div').style.opacity = '0.2';
  };
  return (
    <>
      <header className="header" id="header">
        <div className="main-nav-container">
          <div style={{ display: "flex" }}>
            <div className="left-side-links">
              <div className="container">
                <div className="left-side-ul">
                  <div className="d-flex animation-class" style={{ alignItems: "center" }}>
                    <div className="left-side" data-aos="fade-left"
                      data-aos-duration="1000" onMouseEnter={handleLeftHover} onMouseLeave={handleHoverOut}><span><Link to="/AboutUS">About Us</Link> </span></div>
                    <div className="line"><div></div></div>
                    <div className="right-side" data-aos="fade-right"
                      data-aos-duration="1000" onMouseEnter={handleRightHover} onMouseLeave={handleHoverOut}><span><Link to="/OurOfferings">Our Inventories</Link></span></div>
                  </div>

                </div>
              </div>
            </div>

            <div className="right-side-links">
              <div className="container">
                <div className="right-side-ul">
                  <div className="d-flex animation-class" style={{ alignItems: "center" }}>
                    <div className="right-side" data-aos="fade-right"
                      data-aos-duration="1000" onMouseEnter={handletwoLeftHover} onMouseLeave={handletwoHoverOut}><span><Link to="/OurClientele">Our clientele</Link></span></div>
                    <div className="line"><div></div></div>
                    <div className="left-side" data-aos="fade-left"
                      data-aos-duration="1000" onMouseEnter={handletwoRightHover} onMouseLeave={handletwoHoverOut}><span><Link to="/ContactUs">Contact Us</Link></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
