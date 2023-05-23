import "./Header.css";
import HeaderTop from "./headerTop/HeaderTop";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { HeaderInfoMen } from "./indes";
import HeaderList from "./headerInfo/HeaderList";
import { HeaderInfoWomen } from "./indes";
import { HeaderInfoKids } from "./indes";
import { HeaderInfoSale } from "./indes";
import { HeaderInfo3StripeLife } from "./indes";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderInfo } from "./HeaderMobile/HeaderMobileInfo";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [showMen, setShowMen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [showSale, setShowSale] = useState(false);
  const [showStripe, setShowStripe] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("mousewheel", (e) => {
      setTimeout(() => {
        if (e.deltaY >= 0) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      }, 500);
    });
  }, []);
  return (
    <div className={showHeader ? "header" : "header__hidden"}>
      <HeaderTop />

      {mobile ? (
        <nav className="nav">
          <div>
            <MenuIcon
              onClick={() => setMenuOpened(!menuOpened)}
              className="menu__icon"
            />
            <FavoriteBorderOutlinedIcon />
          </div>
          <div
            className={
              menuOpened
                ? "header__mobile__container active"
                : "header__mobile__container"
            }
          >
            <div className="nav__logo__mobile">
              <svg
                className="nav__logo"
                viewBox="100 100 50 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                  fill="black"
                ></path>
              </svg>
              <CloseIcon
                onClick={() => setMenuOpened(false)}
                className="header__mobile__icon"
              />
            </div>
            {HeaderInfo.map((item) => (
              <HeaderMobile
                title={item.title}
                key={item.id}
                listItem={item.listItem}
              />
            ))}
            <ul>
              <li>My Account</li>
              <li>Exchanges & Returns</li>
              <li>Order Tracker</li>
              <li>adiClub</li>
              <li>Gift Cards</li>
              <li>Store Locator</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          <svg
            className="nav__logo"
            viewBox="100 100 50 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              fill="black"
            ></path>
          </svg>
          <div>
            <PersonOutlineIcon />
            <SearchIcon className="search__icon" />
            <ShoppingBagOutlinedIcon className="bag__icon" />
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <svg
            className="nav__logo"
            viewBox="100 100 50 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              fill="black"
            ></path>
          </svg>
          <ul className="nav__text">
            <li
              onMouseEnter={() => setShowMen(true)}
              onMouseLeave={() => setShowMen(false)}
            >
              <div>
                <p className="nav__title bold">MEN</p>
                <div className="header__flex">
                  <div className="header__grid">
                    {showMen &&
                      HeaderInfoMen.map((item) => (
                        <HeaderList
                          showMen={setShowMen}
                          key={item.id}
                          title={item.title}
                          listItem={item.listItem}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </li>
            <li
              onMouseEnter={() => setShowWomen(true)}
              onMouseLeave={() => setShowWomen(false)}
            >
              <div>
                <p className="nav__title bold"> WOMEN</p>
                <div className="header__flex">
                  <div className="header__grid">
                    {showWomen &&
                      HeaderInfoWomen.map((item) => (
                        <HeaderList
                          showMen={setShowMen}
                          key={item.id}
                          title={item.title}
                          listItem={item.listItem}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </li>
            <li
              onMouseEnter={() => setShowKids(true)}
              onMouseLeave={() => setShowKids(false)}
            >
              <div>
                <p className="nav__title bold"> KID</p>
                <div className="header__flex">
                  <div className="header__grid">
                    {showKids &&
                      HeaderInfoKids.map((item) => (
                        <HeaderList
                          showMen={setShowMen}
                          key={item.id}
                          title={item.title}
                          listItem={item.listItem}
                        />
                      ))}
                  </div>
                </div>{" "}
              </div>
            </li>
            <li
              onMouseEnter={() => setShowSale(true)}
              onMouseLeave={() => setShowSale(false)}
            >
              <div>
                <p className="nav__title"> SALE</p>
                <div className="header__flex">
                  <div className="header__grid sale">
                    {showSale &&
                      HeaderInfoSale.map((item) => (
                        <HeaderList
                          showMen={setShowMen}
                          key={item.id}
                          title={item.title}
                          listItem={item.listItem}
                        />
                      ))}
                  </div>
                </div>{" "}
              </div>
            </li>
            <li
              onMouseEnter={() => setShowStripe(true)}
              onMouseLeave={() => setShowStripe(false)}
            >
              <div>
                <p className="nav__title"> 3 STRIPE LIFE</p>
                <div className="header__flex">
                  <div className="header__grid stripe__grid">
                    {showStripe &&
                      HeaderInfo3StripeLife.map((item) => (
                        <HeaderList
                          showMen={setShowMen}
                          key={item.id}
                          title={item.title}
                          listItem={item.listItem}
                          image={item.image}
                        />
                      ))}
                  </div>
                </div>{" "}
              </div>
            </li>
          </ul>

          <div className="nav__search">
            <input type="search" />
            <SearchIcon />
          </div>

          <PersonOutlineIcon className="nav__icon first" />
          <FavoriteBorderOutlinedIcon className="nav__icon" />
          <ShoppingBagOutlinedIcon className="nav__icon" />
        </nav>
      )}
    </div>
  );
};

export default Header;
