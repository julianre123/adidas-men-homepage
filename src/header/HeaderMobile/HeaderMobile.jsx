import React, { useState } from "react";
import "../Header.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Translate from "./Translate";
const HeaderMobile = ({ title, listItem }) => {
  const [translate, setTranslate] = useState(false);

  return (
    <div className="header__mobile">
      <ul>
        <li onClick={() => setTranslate(true)}>{title} </li>
        <span>
          <KeyboardArrowRightIcon />
        </span>
      </ul>
      <div
        className={
          translate ? "header__mobile__active" : "header__mobile__disabled"
        }
      >
        <div
          className="header__mobile__subtitle__title"
          onClick={() => setTranslate(false)}
        >
          <span>
            <KeyboardArrowLeftIcon />
          </span>
          <p>{title}</p>
        </div>
        {translate &&
          listItem.map((item) => (
            <Translate
              subtitle={item.subtitle}
              key={item._id}
              listData={item.listData}
              title={title}
            />
          ))}
      </div>
    </div>
  );
};

export default HeaderMobile;
