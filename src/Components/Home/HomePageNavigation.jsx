import React, { useState } from "react";
import "./HomePageNavigation.css"
import logo from "../Navbar/logo1.svg"
import { Button, Drawer, Radio, Space } from 'antd';
import { Link } from "react-router-dom";
import Logo from "../Navbar/logo1.svg"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
// import instagram from "../Home/iconsImages/instagram.svg"
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
const HomePageNavigation = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const [drawerVisible, setDrawerVisible] = useState(false);
    const showDrawer = () => {
        setDrawerVisible(!drawerVisible); // Toggle the state
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    }; return (
        <>
            <section id="home-page-header">
                <Link to="/"> <img src={CombineLogo} alt="Yellow-Spot Logo" className="logo-home" /></Link>
                <button className="menu-btn" onClick={showDrawer}>
                    <span className={`icon-transition ${drawerVisible ? 'rotate-180' : ''}`}>
                        {drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
                    </span>

                </button>

                <Drawer
                    title={null}
                    placement={placement}
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
                                <li className="flip-animate"><img src={vector8} alt="" /></li>
                                <li className="flip-animate"><a href="https://www.linkedin.com/company/yellowspotindia/about/"><img src={LinkdinImg} alt="" /></a></li>
                                <li className="flip-animate"><a href="https://www.facebook.com/p/Yellow-Spot-100083305608740/" target="_blank"><img src={vector2} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </Drawer>
            </section>
        </>
    )
}

export default HomePageNavigation;