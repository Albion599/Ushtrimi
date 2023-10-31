import React from "react";
import "./SneakPeak.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/SneakersComponents/Home/Home";
import AboutUs from "../../Components/SneakersComponents/AboutUs/AboutUs";
import Collection from "../../Components/SneakersComponents/Collection/Collection";
import Men from "../../Components/SneakersComponents/Men/Men";
import Women from "../../Components/SneakersComponents/Women/Women";

const SneakPeak = () => {
  return (
    <div className="bg-color">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="men">
        <Men />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="women">
        <Women />
      </div>
      <Footer />
    </div>
  );
};

export default SneakPeak;
