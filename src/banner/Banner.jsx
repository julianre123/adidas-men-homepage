import React from "react";
import "./Banner.css";
import adidasIcon from "../assets/adidas-images/banner/adidas_Rich-Mnisi_BOS_Wht_tcm221-1013710.webp";
import adidasBanner from "../assets/adidas-images/banner/banner-img.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import bannerMobile from "../assets/adidas-images/banner/banner-mobile.webp";
const Banner = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="banner">
      <img src={mobile ? bannerMobile : adidasBanner} alt="" />
      <div className="banner__text">
        <img src={adidasIcon} alt="" />
        <h1>LET LOVE BE YOUR LEGACY</h1>
        <p>
          Show your love. Wear your pride. The adidas x Rich Mnisi <br />{" "}
          collection
        </p>
        <button>
          <p>SHOP COLLECTION</p>

          <span className="header__button__icon">
            <ArrowRightAltIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
