import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png"

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure Better Education For Better World</h1>
                <p>
                    Our cutting-edge curriculum is design to empower students with the
                    knowledge,skill and experiences needed to excel in the dynamic field
                    of education
                </p>
                <button className="btn">Explore More <img src={darkArrow} alt="arrow"  /> </button>
            </div>
        </div>
    );
};

export default Hero;
