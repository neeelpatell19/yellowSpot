import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HomePageNavigation from "../Home/HomePageNavigation";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";
import MagicHeading from "../MagicHeading/MagicHeading";
import { ClientDataLogos, DirectClient } from "../OurClients/ContactUsClientData";
import AnimatedCoverPage from "../animatedCoverPage/animatedCoverPage";
import "./OurClients.css"
import SwiperHeadingIcon from "../SwiperHeadingIcon/SwiperHeadingIcon";
import client from "../Home/Banners/clienteleHomeFinal.png"
const capitalizeEachWord = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

const OurClientele = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Get unique categories
    const categories = [...new Set(DirectClient.map(item => item.Category).filter(Boolean))];
    console.log("categories", categories)
    // Filter clients based on selected category
    const filteredClientData = selectedCategory
        ? DirectClient.filter(item => item.Category === selectedCategory)
        : DirectClient;

    // Get unique client data
    const uniqueClientData = [...new Map(filteredClientData.map(item => [item.ClientName, item])).values()];
    // const cardColors = ["#ff6347", "#6495ed", "#32cd32", "#ffa500", "#9370db"];
    return (
        <>
            <Navbar />
            <HomePageNavigation />

            <section>
                <div id="ClientImage">
                    <AnimatedCoverPage backgroundImage={client} />
                </div>
                <br /><br />
                <div className="container">

                    <SwiperHeadingIcon headingText="OUR AGENCY CLIENTELE" />
                </div>

                <br /><br />
                <div className="container AgencyLogo">
                    <div>
                        <Row>
                            {ClientDataLogos.map((item, index) => (
                                <Col lg={6} md={8} sm={12} key={index} id="ColSet">
                                    <div className="card-link">
                                        <div className="maincard">
                                            <div className="flip-card">
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front" style={{ backgroundColor: `${item.Backcolor}` }}>
                                                        <div className="clientImgContainer">
                                                            <img src={item.clientImg} alt={item.ClientName} />
                                                        </div>
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                            <i className='bx bx-link'></i>
                                                            <div style={{ width: "100%", marginLeft: "10px", textAlign: "center" }}>
                                                                <p>{item.ClientName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <br /><br />
                <div className="container" style={{ position: "sticky", top: "0%", zIndex: "2", paddingTop: "20px", paddingBottom: "5px", backgroundColor: "black" }}>
                    <SwiperHeadingIcon headingText="OUR CONSUMER CLIENTELE" />
                    <br />
                    <div className="categoryFilter">
                        <select onChange={handleCategoryChange} value={selectedCategory}>
                            <option value="">All</option>
                            {categories
                                .sort((a, b) => a.localeCompare(b))
                                .map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                        </select>
                    </div>

                </div>

                <br />
                <div className="container DirectLogo" >

                    <br />
                    <br />
                    <div >
                        <Row style={{ zIndex: "1" }}>
                            {uniqueClientData
                                .sort((a, b) => a.ClientName.localeCompare(b.ClientName)) // Sort the array alphabetically by ClientName
                                .map((item, index) => (
                                    <Col lg={4} md={8} sm={12} key={index} id="DirectClients">
                                        <div className="card-link">
                                            <div className="maincard">
                                                <div className="flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front" style={{ backgroundColor: `${item.Backcolor}` }}>
                                                            <div className="clientImgContainer">
                                                                <img src={item.clientImg} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="flip-card-back">
                                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                                <i className='bx bx-link'></i>
                                                                <div className="client-name" style={{ width: "100%", marginLeft: "10px", textAlign: "center" }}>
                                                                    <p>{capitalizeEachWord(item.ClientName)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}



                        </Row>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default OurClientele;