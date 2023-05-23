import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Translate2 from "./Translate2";

const Translate = ({ subtitle, listData }) => {
  const [translate2, setTranslate2] = useState(false);
  return (
    <div>
      <ul className="header__mobile__active__ul">
        <li onClick={() => setTranslate2(true)}>{subtitle}</li>
        <span>
          <KeyboardArrowRightIcon />
        </span>
      </ul>
      <div
        className={
          translate2 ? "header__mobile__active" : "header__mobile__disabled"
        }
      >
        <div
          className="header__mobile__subtitle__title"
          onClick={() => setTranslate2(false)}
        >
          <span>
            <KeyboardArrowLeftIcon />
          </span>
          <p>{subtitle}</p>
        </div>
        {translate2 &&
          listData &&
          listData.map((item) => <Translate2 data={item} />)}
      </div>
    </div>
  );
};

export default Translate;
