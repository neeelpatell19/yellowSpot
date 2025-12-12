import React from "react";
import "./Footer.css";
import FooterLogo from "../Navbar/CombineLogo2.jpg"
import { Row, Col } from "antd";
import instgramImg from "../Home/iconsImages/Vector4.svg"
import twitterImg from "../Home/iconsImages/Vector8.svg"
import LinkedinImg from "../Home/iconsImages/Vector.svg"
import faceBookImage from "../Home/iconsImages/Vector2.svg"
import { Link } from "react-router-dom";
import FooterAnimatedCarousal from "../FooterCarousal/FooterCarousal";

const Footer = () => {

    return (
        <>
            <div className="slite-padding"></div>
            <div className="slite-padding"></div>

            <section className="footer">
                <div className=" slite-padding container">
                    <div className="topHeadingStyle">
                        <div className="ContactusHeading container">
                            <div className="GetInTouch">
                                <p style={{ textAlign: "start" }}>Ready to work together?</p>
                                <h1>Get In Touch </h1>
                            </div>
                            <div className="Footer_Logo">
                                <Link to="/"><img src={FooterLogo} alt="Yellow-Spot Logo" /></Link>
                            </div>
                        </div>
                        <div className="infiniteCarousal">
                            <FooterAnimatedCarousal />
                        </div>
                        {/* <div className="Footer_Logo">
                            <Link to="/"><img src={FooterLogo} alt="Yellow-Spot Logo" /></Link>
                        </div> */}
                    </div>
                    <div className="slite-padding"></div>
                    {/* <hr style={{ opacity: "1" }} /> */}
                    <Row className="w-100">
                        {/* <Col lg={12}>
                        </Col> */}
                        <Col lg={24}>
                            <div className="middleOnceContainer">
                                <div className="ContactContent">
                                    <ul>
                                        <li><span>Phone:</span> <a href="tel:+91 93242 44444">+91 93242 44444</a></li>
                                        <li><span>Email:</span> <a href="mailto:sales@yellowspot.on">sales@yellowspot.in</a></li>
                                        {/* <li><span>Website:</span> https:yellow-spot.vercel.app/</li> */}
                                        <li><a href="https://maps.app.goo.gl/MGmfKMWcejLVDw9F6" target="blank"><span>Address:</span> 4th floor, 12, Magnet Corporate Park, Thaltej,<br /> <span className="spacing text-white">Ahmedabad, Gujarat, India, 380054</span></a></li>
                                    </ul>
                                </div>
                                <div className="logo-set-and-social">

                                    <div className="social-content">
                                        <a href="https://www.instagram.com/yellowspot.in/" target="_blank"><img src={instgramImg} alt="" /></a>
                                        {/* <img src={twitterImg} alt="" /> */}

                                        <a href="https://www.linkedin.com/company/yellowspotindia/about/" target="_blank"><img src={LinkedinImg} alt="" /></a>
                                        <a href="https://www.facebook.com/p/Yellow-Spot-100083305608740/" target="_blank"><img src={faceBookImage} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <br />
                    {/* <hr style={{ opacity: "1" }} /> */}
                    <p>@2024 <a href="https://www.outleadsolutions.com/" target="_blank" style={{ color: "#FFED00" }}>Outlead solutions.</a> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer;