import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
import { FooterTopInfo } from "./FooterInfo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";
import { FooterBottomInfo } from "./FooterInfo";
const Footer = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div>
      <div className="footer__top">
        {FooterTopInfo.map((item) => (
          <FooterTop
            key={item.id}
            title={item.title}
            listItem={item.listItem}
          />
        ))}
      </div>
      <FooterMiddle />
      <div>
        {mobile ? (
          <div className="footer__bottom__mobile">
            <ul>
              <li>Help</li>
              <li>Returns & Exchanges</li>
              <li>Order Tracker</li>
              <li>Shipping</li>
              <li>Promotions</li>
              <li>Country Selector</li>
              <li>adiClub</li>
              <li>Store Finder</li>
              <li>Gift Cards</li>
              <li>adidas Apps</li>
              <li>Size Charts</li>
            </ul>
          </div>
        ) : (
          <div className="footer__bottom">
            {FooterBottomInfo.map((item) => (
              <FooterBottom
                key={item.id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
            <div className="footer__bottom__item">
              <h3>FOLLOW US</h3>
              <div className="footer__bottom__text">
                <ul>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <TwitterIcon />
                  </li>
                  <li>
                    <PinterestIcon />
                  </li>
                  <li>
                    <YouTubeIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer__end">
        <ul>
          <li>Cookie Settings</li>
          <li>Data Settings</li>
          <li>Do not sell my personal information</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
        <div className="footer__end__text">
          <span>© 2023 adidas America, Inc. Created by Julian Re</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
