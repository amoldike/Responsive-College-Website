import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import whiteArrow from "../../assets/white-arrow.png"

const Campus = () => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src={gallery1} alt="gallery-img" />
                <img src={gallery2} alt="gallery-img" />
                <img src={gallery3} alt="gallery-img" />
                <img src={gallery4} alt="gallery-img" />
            </div>
            <button className="btn dark-btn"> See more here <img src={whiteArrow} alt="white-arrow" /> </button>
        </div>
    );
};

export default Campus;
