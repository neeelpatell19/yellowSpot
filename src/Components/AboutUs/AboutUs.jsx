import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./about.css"
import hetgraphics from "./hetFinal.png"
import khushiLogo from "./khushiLogo.png"
import { Row, Col } from "antd";
import YelloSpot from "../AboutUs/yellowspotLogo.png"
import { Link } from "react-router-dom";
import billboard from "../Home/iconsImages/billboard.png"
import Footer from "../Footer/Footer";
import HomePageNavigation from "../Home/HomePageNavigation";
import MagicHeading from "../MagicHeading/MagicHeading";
import AnimatedCoverPage from "../animatedCoverPage/animatedCoverPage";
import { Image } from 'antd';
import GalleryImages from "./galleryImages/GalleryImagesData";
import SwiperHeadingIcon from "../SwiperHeadingIcon/SwiperHeadingIcon";
import AboutUsBanner from "./AboutUsBanner.png"
import Homepagefirst from "./aboutUsGraphicsfinal.png"
import Item from "antd/es/list/Item";
const AboutUS = () => {
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleExpand = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    const isExpanded = (index) => {
        return expandedIndexes.includes(index);
    };

    const foudersDetails = [
        {
            Founderimage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            FounderName: "Asit",
            FounderSecondName: "Shah",
            FounderDescription: [
                {
                    description: "Mr. Asit Shah, a luminary in the realm of Out-of-Home (OOH) media, whose unwavering dedication and forward-thinking approach have reshaped the landscape of OOH advertising in the city of Ahmedabad. With a profound vision for the industry, Mr. Shah stands as the driving force behind 'Het Graphics,' dominating Ahmedabad's OOH sector for over 25 years. Specializing in cutting-edge media solutions, Het Graphics under his stewardship has pioneered innovative media vehicles such as bus shelters and gantries in the city of Ahmedabad, elevating advertising possibilities. He is the co-founder of 'Yellow Spot,' an enterprise under the umbrella of 'Het Graphics' and 'Khushi Advertising', a product of two leading outdoor companies which is now changing the landscape of Gujarat's OOH industry."
                },
                {
                    description: "Mr. Shah works at the forefront alongside the municipal corporation and fellow OOH vendors for the betterment of the OOH industry in Ahmedabad. He is renowned within the industry and among clients as a trusted guide on campaign strategizing, media selection, campaign design, all aimed at maximizing ROI and boosting brand recognition. His voluntary participation as an advisor stems from his deep-seated passion and two-decade long experience of outdoor advertising."
                },
                {
                    description: "Mr. Shah's entrepreneurial spirit extends beyond media, branching into real estate, finance, and metal, solidifying his status as a multifaceted leader in both business and innovation. In addition to his remarkable achievements in business, Mr. Shah exemplifies a profound commitment to philanthropy, actively engaging with numerous NGOs, charitable trusts, and similar organizations, embodying his belief in giving back to society. His unwavering dedication to both commerce and social responsibility solidifies his legacy as a visionary leader making impactful strides in multiple walks of life."
                }
            ]



        },
        {
            Founderimage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            FounderName: "Pranay",
            Link: "https://www.linkedin.com/in/pranay-shah-852b4b5b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            FounderSecondName: "Shah",
            FounderDescription: [
                {
                    description: "Mr. Pranay Shah, a second-generation entrepreneur, joined his father's business in the then highly unorganized cinema advertising industry. Facing significant adversity, he encountered brands hesitant to experiment with this medium. However, with relentless perseverance, passion, and a vision to create a clutter-free, engaging platform for next-gen brands, he founded Khushi Advertising in 2004, starting with a small office in Ahmedabad. This vision led to a journey marked by unwavering dedication, team building, and total commitment to customers."
                },
                {
                    description: "He joined hands with Mr. Vishnu Telang in 2013 to scale Khushi Advertising to new height. Mr. Telang is a passionate man bringing in invaluable experience of nearly two decades in ambient media, He is credited with single-handedly building an ambient media agency into a market leader. He had been instrumental in building a team of more than 100+ professionals and establishing a pan India presence of this entity. He pioneered many path-breaking innovative concepts to create extraordinary campaigns which brands appreciated and cherished. He brings a wealth of marketing, organizational and innovative strengths to Khushi Advertising. He has brought in a long list of happy clients to Khushi Advertising and is constantly engaged in the endeavor of growing this business to reach higher pinnacles of success."
                },
                {
                    description: "Both Mr. Pranay Shah & Vishnu Telang, constant quest for growth and new horizons sparked his interest in the OOH industry. By joining hands with Mr. Asit Shah, the founder of Het Graphics, he co-founded Yellow Spot, leveraging their combined expertise and strengths to drive greater success. He has also been leading initiatives with the municipal corporation and fellow OOH vendors, and continues to work collaboratively to elevate the OOH industry in Ahmedabad."
                }
            ]

        },

    ]

    return (

        <>
            <Navbar />
            <HomePageNavigation />

            <section>

                <div id="AboutUSpage">
                    <AnimatedCoverPage backgroundImage={Homepagefirst} />
                </div>
                <br /><br />
                <div className="parent-poster-content container" id="parent-company" data-aos="fade-up">
                </div>
                {/* <br /><br /> */}
                <div className="parent-Company-info container" >
                    <Row>
                        <Col lg={16}>
                            <div className="parent-comapny-content second" data-aos="fade-up">
                                <h4><span>Yellow </span>Spot</h4>
                                {/* <br /> */}
                                <p>YellowSpot emerged as a collaborative effort between Het Graphics and Khushi Advertising. Our strategic alliance brings together two industry leaders, establishing one of the most formidable outdoor media houses in Gujarat.
                                    We offer over 680 premium outdoor media inventory throughout the city of Ahmedabad, 99% back-lit, located in high-traffic locations, strategically placed in every neighborhood.
                                    Our motivation is to provide comprehensive and holistic 360-degree marketing solutions to our local, national and international clients across diverse platforms.
                                </p>
                                <div className="small-slite-padding"></div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <img src={YelloSpot} alt="yellowspot_logo" className="yellowSpotImg" data-aos="fade-up" />
                        </Col>
                        <hr style={{ border: "1px solid white", opacity: "0.7", width: "100%" }} />
                        <Col lg={8} id="OnlyForPc">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/55.png" alt="het_graphics_logo" className="HET_IMG" data-aos="fade-up" />
                        </Col>

                        <Col lg={16}>
                            <div className="parent-comapny-content first" data-aos="fade-up">
                                <h4><span>HET </span>Graphics</h4>
                                {/* <br /> */}
                                <p>Het Graphics, known as the industry leader in Ahmedabad city for its innovative ideas and extensive coverage, has successfully provided clients with a one-stop solution for outdoor advertising. Their extensive network of hoardings, gantries and signages makes creating awareness for your brand/product/service easier. With HET by their side, many national and local brands have advertised throughout the state of Gujarat.
                                </p>

                                <div className="small-slite-padding"></div>
                                <div className="btn-container">
                                    <Link to="https://hetgraphics.com/" target="_blank"><button className="m-0" style={{ backgroundColor: "#FFED00" }}><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={8} id="onlyMobile">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/55.png" alt="het_graphics_logo" className="HET_IMG" data-aos="fade-up" />
                        </Col>
                        <hr style={{ border: "1px solid white", opacity: "0.7", width: "100%" }} />
                        <Col lg={16}>
                            <div className="parent-comapny-content second" data-aos="fade-up">
                                <h4><span>Khushi</span> Advertising</h4>
                                {/* <br /> */}
                                {/* <p>Khushi Advertising, India’s leading ambient media agency, leverages its expertise and consummate skills to present the most effective campaigns with a distinct and long-lasting impact. With a presence in 22 cities, we are your one-stop solution for advertising in India’s 2700+ multiplex screens, 350+ malls, and 30+ airports. Our wide-spread reach across India and 300+ professionals enable us to be present at the right avenue at the right time to reach out to the right audience.</p> */}
                                <p>Khushi Advertising is a specialist in providing integrated OOH solutions in India. With over 20 years of experience, Khushi Advertising leads in crafting innovative and effective campaigns, utilizing a diverse array of mediums to ensure a lasting impression. As the foremost aggregator of advertising revenues for major multiplex chains, Khushi offers comprehensive solutions for advertising across 3,000+ screens. Additionally, it serves as a premier agency for advertising and activations in 200+ malls and 50+ airports throughout India. Constantly evolving, Khushi’s latest services now encompass strategic avenues like OOH, movie marketing, and corporate parks. With a widespread presence in 30 cities, a dedicated team of 250+ professionals, and 70+ operations team members, Khushi Advertising excels in reaching the right audience at the right time across dynamic and competitive landscapes.</p>
                                <div className="small-slite-padding"></div>
                                <div className="btn-container d-block">
                                    <Link to="https://khushiadvertising.com/" target="_blank"><button className="m-0"><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <img style={{backgroundColor:"white"}} src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/56.png" alt="khushi_advertising_logo" className="KhushiImg" id="KhushiImg" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </div>

                <br /><br />
                <div className="co-founder-section container">
                    <SwiperHeadingIcon headingText="Visionaries Behind YELLOW SPOT OOH" />
                    <br /><br />
                    <div>
                        <Row>
                            {foudersDetails.map((founder, index) => (
                                <Col lg={12} key={index}>
                                    <div>
                                        <div className="founder-info">
                                            <div className="header-part">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <h4 style={{ fontSize: "40px" }}><span>{founder.FounderName}</span> {founder.FounderSecondName}</h4>
                                                </div>
                                                <div className="socials">
                                                    <a href={founder.Link} target="_blank" rel="noopener noreferrer">
                                                        <i className='bx bxl-linkedin-square'></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="description-container" style={{ maxHeight: isExpanded(index) ? 'none' : '40vh', overflow: 'hidden' }}>
                                {founder.FounderDescription && founder.FounderDescription.map((descriptionItem, descriptionIndex) => (
                                    <p key={descriptionIndex}>{descriptionItem.description}</p>
                                ))}
                            </div>
                            {founder.FounderDescription && founder.FounderDescription.length > 1 && (
                                <button onClick={() => toggleExpand(index)} className="readMoreBtn">
                                    {isExpanded(index) ? 'Read Less' : 'Read More'}...
                                </button>
                            )}
                                        </div>
                                    </div>
                                </Col>
                            ))}

                        </Row>

                    </div>
                </div>

                <br /><br />
            </section>
            <Footer />


        </>
    )
}

export default AboutUS;