import React, { useState } from "react";

const FooterTop = ({ title, listItem }) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>
      {mobile ? (
        <div className="footer__top__item">
          <h3 onClick={() => setMobileOpen(!mobileOpen)}>{title}</h3>
          <div className="footer__top__text">
            {mobileOpen && (
              <ul>
                {listItem.map((item) => item.listData.map((i) => <li>{i}</li>))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="footer__top__item">
          <h3>{title}</h3>
          <div className="footer__top__text">
            <ul>
              {listItem.map((item) => item.listData.map((i) => <li>{i}</li>))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterTop;
