import React from "react";

const FooterBottom = ({ title, listItem }) => {
  return (
    <div>
      <div className="footer__bottom__item">
        <h3>{title}</h3>
        <div className="footer__bottom__text">
          <ul>
            {listItem.map((item) => item.listData.map((i) => <li>{i}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
