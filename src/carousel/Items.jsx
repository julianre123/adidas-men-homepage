import React from "react";
import "./Carousel.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Items = ({ price, category, title, image }) => {
  return (
    <div className="carousel__item">
      <div className="carousel__image">
        <img src={image} alt="" />
        <p>{price}</p>
      </div>
      <div className="carousel_text">
        <p>{title}</p>
        <p>{category}</p>
        <FavoriteBorderOutlinedIcon className="carousel__text__icon" />
      </div>
    </div>
  );
};

export default Items;
