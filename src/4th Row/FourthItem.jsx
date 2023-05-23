import React from "react";
import "./Fourth.css";
const FourthItem = ({ image, title, description, learn }) => {
  return (
    <div className="fourth__item">
      <img src={image} alt="" />
      <div className="fourth__item__text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <p>{learn}</p>
    </div>
  );
};

export default FourthItem;
