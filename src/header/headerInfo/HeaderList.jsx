import React from "react";
import "../Header.css";
const HeaderList = ({ id, title, listItem, image }) => {
  return (
    <div className="header__men">
      <h3 className="header__men__title stripe">{title}</h3>
      <img src={image} alt="" className="header__image" />
      <ul className="header__men__ul">
        {listItem.map((item) =>
          item.listData.map((data, i) => (
            <li className="header__men__li">{data}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default HeaderList;
