import React, { useState } from "react";
import "./HeaderTop.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HeaderTop = () => {
  const [text, setText] = useState("NEW SALE ITEMS UP TO 40% OFF");
  /* setInterval(() => {
    if (text === "NEW SALE ITEMS UP TO 40% OFF") {
      setText("FREE STANDARD SHIPPING & RETURNS");
    } else if (text === "FREE STANDARD SHIPPING & RETURNS") {
      setText("NEW SALE ITEMS UP TO 40% OFF");
    }
  }, 5000); */
  return (
    <div className="headertop">
      <p className="headertop__text">
        {text}
        <span className="headertop__icon">
          <KeyboardArrowDownIcon />
        </span>
      </p>
    </div>
  );
};

export default HeaderTop;
