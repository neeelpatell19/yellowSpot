import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./Home.css";
import HomePageNavigation from "./HomePageNavigation";
import billboard from "../Home/iconsImages/billboard.png"
import logo from "../Navbar/logo1.svg"
import { TypeAnimation } from 'react-type-animation';
import { Row, Col, Drawer } from "antd";
import ClientLogos from './ClientLogosData';
import Homepagefirst from "../AboutUs/aboutUsGraphicsfinal.png"
import Industy from "../Home/Banners/OurEgency.png"
import offering from "../Home/Banners/OfferingHome.png"
import client from "../Home/Banners/checkClientsChockImage.png"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import Combinelogo from "../Navbar/CombineLogo.jpg"
import LinkdinImg from "../Home/iconsImages/Vector.svg"
import vector1 from "../Home/iconsImages/Vector1.svg"
import vector2 from "../Home/iconsImages/Vector2.svg"
import vector3 from "../Home/iconsImages/Vector3.svg"
import vector4 from "../Home/iconsImages/Vector4.svg"
import vector5 from "../Home/iconsImages/Vector5.svg"
import vector6 from "../Home/iconsImages/Vector6.svg"
import vector7 from "../Home/iconsImages/Vector7.svg"
import vector8 from "../Home/iconsImages/Vector8.svg"
import CombineLogo from "../Navbar/CombineLogo.jpg"
import Contact from "../Home/iconsImages/ContactUs.svg"
import img1 from "../Home/Banners/Final1.png"
import img2 from "../Home/Banners/Final2.png"
import OutDoor from "./icons/outDoor.png"
import Impressions from "./icons/DailyImpressions.png"
import Clients from "./icons/Clients.png"
import Experience from "./icons/experience.png"
import Media from "./icons/media.png"
import BackLightMedia from "./icons/graphicsNew.png"
import MobileHero from '../MobileHome/MobileHero';
import countersBack from "../Home/CountersBackFinal.png"
import OurOfficetry from "./ouroffering.png"
import AnimatedClientsScroll from '../AnimatedClientsScroll/AnimatedClientsScroll';
const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(!drawerVisible); // Toggle the state
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div id="HomePage">
        <section id="home-page-header">
          <Link to="/"> <img src={CombineLogo} alt="Yellow-Spot Logo" className="logo-home" style={{ opacity: "0" }} /></Link>
          <button className="menu-btn" onClick={showDrawer} style={{ backgroundColor: "black" }}>
            <span className={`icon-transition ${drawerVisible ? 'rotate-180' : ''}`}>
              {drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
            </span>
          </button>

          <Drawer
            title={null}
            placement="right"
            width={400}
            onClose={onCloseDrawer}
            visible={drawerVisible}
            footer={null}
          >
            <div>
              <div className="container-heading">
                <h5>Menu</h5>
                <hr style={{ margin: "8px 0px", border: "1px solid #FFED00", opacity: "1" }} />
                <ul className="home-menu-ul">
                  <Link to="/AboutUs"><li className="flip-animate" ><img src={vector5} alt="" />About&nbsp;Us <span></span></li></Link>
                  <Link to="/OurOfferings"><li className="flip-animate" ><img src={vector7} alt="" />Our Inventories<span></span></li></Link>
                  <Link to="/OurClientele"><li className="flip-animate" ><img src={vector1} alt="" />Our Clientele<span></span></li></Link>
                  <Link to="/ContactUs"><li className="flip-animate" ><img src={Contact} alt="" />Contact&nbsp;Us<span></span></li></Link>
                </ul>
              </div>
              <div className="slite-padding"></div>
              <div className="container-heading social-container">
                <h5>Social</h5>
                <hr style={{ margin: "8px 0px", border: "1px solid #FFED00", opacity: "1" }} />
                <ul className=" social">
                  <li className="flip-animate"><a href="https://www.instagram.com/yellowspot.in/" target="_blank"><img src={vector4} alt="" /></a></li>
                  <li className="flip-animate"><a href="https://www.linkedin.com/company/yellowspotindia/about/" target='_blank'><img src={LinkdinImg} alt="" /></a></li>
                  <li className="flip-animate"><a href="https://www.facebook.com/people/Yellow-Spot/100083305608740/" target="_blank"><img src={vector2} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </Drawer>
        </section>
      </div>
      <div className="home-page-slider">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0} // Ensure there is no space between slides
          mousewheel={{ forceToAxis: true, sensitivity: 1, thresholdDelta: 50, thresholdTime: 100 }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          speed={500}
        // direction="vertical"
        // slidesPerView={1}
        // spaceBetween={0} // Ensure there is no space between slides
        // mousewheel={{ forceToAxis: true, sensitivity: 0.5, thresholdDelta: 50, thresholdTime: 100 }}
        // pagination={{ clickable: true }}
        // modules={[Mousewheel, Pagination]}
        // speed={200} // Transition speed in milliseconds
        // cssMode={true} // Enable CSS scroll snap
        >
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={Homepagefirst} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/AboutUs"><button><span>About Us</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={countersBack} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "rgb(0 0 0 / 65%)" }}></div>
            <div className="text-container-set four" id='textContainerset'>
              <div className="text-container" id='textContainer'>
                <div className="main-content-container">
                  <div className="content-container">
                    <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "center" }}>
                      <Col lg={12} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={Experience} alt="" />
                          </div>
                          <CountUp
                            end={25}
                            duration={10}
                            suffix="+"
                          />
                          <h3>Years of Industry <br /> Experience </h3>
                        </div>
                      </Col>
                      <Col lg={12} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={OutDoor} alt="" />
                          </div>
                          <CountUp
                            end={400}
                            duration={10}
                            suffix="+"
                          />
                          <h3>Premium Outdoor Sites <br /> in Ahmedabad</h3>
                        </div>
                      </Col>
                      {/* <Col lg={8} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={Impressions} alt="" />
                          </div>
                          <h3 style={{ fontSize: "40px", fontWeight: "200" }}>xyz</h3>
                          <h3>Daily Impressions</h3>
                        </div>
                      </Col> */}
                      <Col lg={12} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={Clients} alt="" />
                          </div>
                          <CountUp
                            end={500}
                            duration={10}
                            suffix="+"
                          />
                          <h3>Clients</h3>
                        </div>
                      </Col>
                      <Col lg={12} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={BackLightMedia} alt="" />
                          </div>
                          <CountUp
                            end={99}
                            duration={10}
                            suffix="%"
                          />
                          <h3>Backlit Media</h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="our-products">
              <div className="animated-hover-boxes">
                {/* <div className='topTwoBoxes'>  */}
                <div className="animated-boxes-five">
                  <div className='doubleImageContainer'>
                    <div style={{
                      display: "flex",
                      zIndex: "-1",
                      width: "100%"
                    }}>
                      <img src={img1} alt="" style={{ border: "2px solid black", borderBottom: "none" }} />
                      <img src={img2} alt="" style={{ border: "2px solid black", borderBottom: "none" }} />
                    </div>
                  </div>
                  <div className='writeUpContent'>
                    <div >
                      <p>Our gantries represent the latest and most premium innovation in Ahmedabad's outdoor advertising industry.</p>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <ul>
                          <li>Premium, large-format, high-impact, overhead billboards</li>
                          <li>Advertise to both sides of the traffic </li>
                          <li>Placed in the centre of high-traffic roads</li>
                          <li>Direct eye-level visibility </li>
                          <li>Captures commuter’s attention from a great distance</li>
                          <li>Reach masses with maximum visibility </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>Gan</span>try</h4>
                    <div className="small-slite-padding"></div>
                  </div>
                </div>
                <div className='animated-boxes-six'>
                  <div className='writeUpContent'>
                    <ul>
                      <li>Placed in the centre of high-traffic roads </li>
                      <li>Captures commuter’s attention from a great distance</li>
                      <li>Positioned at eye-level</li>
                    </ul>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>Cant</span>ilever</h4>
                    <div className="small-slite-padding"></div>
                  </div>
                </div>
                <div className="animated-boxes-one">
                  <div className='writeUpContent'>
                    <ul>
                      <li>High aesthetic value</li>
                      <li>Conveys elevated brand image</li>
                      <li>Stands on a single pole</li>
                      <li>Positioned in high-traffic areas at direct eye-level</li>
                    </ul>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>Uni</span>pole</h4>
                    <div className="small-slite-padding"></div>

                  </div>
                </div>
                <div className="animated-boxes-two">
                  <div className='writeUpContent'>
                    <ul>
                      <li>Medium-to-large size billboards</li>
                      <li>Supported by multiple poles</li>
                      <li>Direct visibility for moving traffic</li>
                      <li>Avoids clusters with other advertisements</li>
                    </ul>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>Hoar</span>ding</h4>
                    <div className="small-slite-padding"></div>

                  </div>
                </div>
                <div className="animated-boxes-three">
                  <div className='writeUpContent'>
                    <ul>
                      <li>Small-format billboards</li>
                      <li>Branding within a budget</li>
                      <li>Reach a broader audience</li>
                    </ul>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>Pole </span>Kiosk</h4>
                    <div className="small-slite-padding"></div>

                  </div>
                </div>
                <div className="animated-boxes-four">
                  <div className='writeUpContent'>
                    <ul>
                      <li>Digital billboards</li>
                      <li>Available in top 2 premium malls</li>
                      <li>Available in top 3 clubs</li>
                      <li>Access to premium and large audience</li>
                    </ul>
                  </div>
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4><span>L</span>ED</h4>
                    <div className="small-slite-padding"></div>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={OurOfficetry} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "rgb(0 0 0 / 57%)" }}></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1><span style={{ color: "#FFED00" }}>Our</span> Offerings</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/OurOfferings#OurProducts"><button><span>Our Inventories</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                  <Link to="/OurOfferings#serviceCard"><button><span>Our Services</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className='ClientPageContainer'>
              <div className='AnimatedClientScrollSection'>
                <AnimatedClientsScroll />
              </div>
            </div>
            <div className="image-container">
              <img src={client} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "rgb(0 0 0 / 39%)" }}></div>
            {/* <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1><span style={{ color: "#FFED00" }}>Our Key</span> Clients</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="clients-logo-home-container">
                  <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      // Define breakpoints for different screen sizes
                      1100: {
                        slidesPerView: 6
                      },
                      768: {
                        slidesPerView: 3// For tablets
                      },
                      300: {
                        slidesPerView: 2 // For mobile devices
                      },
                    }}
                    style={{ height: "20vh", padding: "10px 10px" }}
                    modules={[FreeMode, Autoplay, Pagination]}
                    className="mySwiper"
                  >
                    {sortedClientLogos.map((item, index) => (
                      <SwiperSlide key={index} style={{ display: "flex" }}>
                        <div className='home-page-client-logo'>
                          <img src={item.img} alt={item.Title} style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }} />
                        </div>
                      </SwiperSlide>
                    ))}

                  </Swiper>
                </div>
                <br />
                <div className="btn-container">
                  <Link to="/OurClientele"><button><span>Show all Clients</span><span><img src={billboard} alt="Yellow-Spot poster" style={{ width: "30px" }} /></span></button></Link>
                </div>
              </div>
            </div> */}
          </SwiperSlide>
        </Swiper>

      </div>
      <div id='MobileOnly'>
        <MobileHero />
      </div>
    </>
  );
}

export default Home;
