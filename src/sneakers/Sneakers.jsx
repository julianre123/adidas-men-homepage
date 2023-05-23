import React from "react";
import "./Sneakers.css";
import first from "../assets/adidas-images/1st row/first.webp";
import second from "../assets/adidas-images/1st row/second.webp";
import third from "../assets/adidas-images/1st row/third.webp";
import fourth from "../assets/adidas-images/1st row/fourth.webp";
const Sneakers = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="sneakers">
      {mobile ? (
        <div className="sneakers__div">
          <div className="sneaker">
            <p>MEN'S SNEAKERS</p>
            <img src={first} alt="" />
          </div>
          <div className="sneaker">
            <p>TOPS</p>
            <img src={second} alt="" />
          </div>
          <div className="sneaker">
            <p>HOODIES & SWEATSHIRTS</p>
            <img src={third} alt="" />
          </div>
          <div className="sneaker">
            <p>PANTS</p>
            <img src={fourth} alt="" />
          </div>
        </div>
      ) : (
        <div className="sneakers__div">
          <div className="sneaker">
            <img src={first} alt="" />
            <p>MEN'S SNEAKERS</p>
          </div>
          <div className="sneaker">
            <img src={second} alt="" />
            <p>TOPS</p>
          </div>
          <div className="sneaker">
            <img src={third} alt="" />
            <p>HOODIES & SWEATSHIRTS</p>
          </div>
          <div className="sneaker">
            <img src={fourth} alt="" />
            <p>PANTS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sneakers;
