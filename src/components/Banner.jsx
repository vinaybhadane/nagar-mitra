import React from "react";
import "../Styles/banner.css";
import bannerImg from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Banner" className="banner-img" />
    </div>
  );
}

export default Banner;
