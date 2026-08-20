import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Services from "./Components/Services/Services";
import Inventory from "./Components/InventryManagement/Inventory";
import AboutUS from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import OurOfferings from "./Components/OurOfferings/OurOfferings";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackTotop";
import DynamicCreateShape from "./Components/DynamicCreateShape/DynamicCreateShape";
import OurClientele from "./Components/OurClients/OurClientele";
import "../src/index.css"
import AnimatedCoverPage from "./Components/animatedCoverPage/animatedCoverPage";
import MetaPixelTracker from "./Components/MetaPixelTracker/MetaPixelTracker";
function App() {
  return (
    <BrowserRouter>
      <MetaPixelTracker />
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/OurOfferings" element={<OurOfferings />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/DynamicCreateShape" element={<DynamicCreateShape />} />
          <Route path="/OurClientele" element={<OurClientele />} />
          <Route path="/AnimatedCoverPage" element={<AnimatedCoverPage />} />
        </Routes>
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
