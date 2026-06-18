import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import "./ouroffering.css";
import SwiperHeadingIcon from "../SwiperHeadingIcon/SwiperHeadingIcon";
import Inventory from "../InventryManagement/Inventory";
import Footer from "../Footer/Footer";
import HomePageNavigation from "../Home/HomePageNavigation";
import AnimatedCards from "../AnimationScrollingCard/AnimationCards";
import AnimatedCoverPage from "../animatedCoverPage/animatedCoverPage";
import offering from "./OurOfferingYellowSpot.png";

const OurOfferings = () => {
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.hash) {
                const sectionId = location.hash.substring(1); // Remove the '#' character
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    setTimeout(() => {
                        sectionElement.scrollIntoView({ behavior: 'smooth' });
                    }, 100); // Slightly longer delay to ensure the component is fully rendered
                }
            }
        };

        handleScroll();

        window.addEventListener('resize', handleScroll); // Listen for resize events

        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, [location]);

    return (
        <>
            <Navbar />
            <HomePageNavigation />
            <AnimatedCoverPage backgroundImage={offering} />
            <br /><br />

            <section id="OurProducts" className="container">
                <SwiperHeadingIcon headingText="OUR INVENTORIES" />
                <Inventory />
            </section>
            <br /><br />
            <section id="serviceCard" className="container">
                <SwiperHeadingIcon headingText="OUR SERVICES" />
                <br />
                <div className="container p-0">
                    <div>
                        <AnimatedCards />
                    </div>
                </div>
            </section>
            <br /><br />
           
            <Footer />
        </>
    );
};

export default OurOfferings;
