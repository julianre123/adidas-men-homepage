import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Translate2 = ({ data }) => {
  return (
    <ul className="header__mobile__active__ul">
      <li>{data}</li>

      <span>
        <KeyboardArrowRightIcon />
      </span>
    </ul>
  );
};

export default Translate2;
