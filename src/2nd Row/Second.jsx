import React from "react";
import "./Second.css";
import first from "../assets/adidas-images/2nd row/1st.webp";
import second from "../assets/adidas-images/2nd row/2nd.webp";
import third from "../assets/adidas-images/2nd row/3rd.webp";
import fourth from "../assets/adidas-images/2nd row/4th.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Second = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {mobile ? (
        <div>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div className="second__item">
              <img src={first} alt="" />
              <div className="second__item__text">
                <h4>FORUM</h4>
                <p>
                  Your Forum, your way: the Forum build momentum beyond the
                  court
                </p>
              </div>
              <p>SHOP NOW</p>
            </div>
            <div className="second__item">
              <img src={second} alt="" />
              <div className="second__item__text">
                <h4>SHOW DAD LOVE</h4>
                <p>
                  This Father's Day, make memories with dad and gift iconic
                  styles he'll love
                </p>
              </div>
              <p>SHOP NOW</p>
            </div>
            <div className="second__item">
              <img src={third} alt="" />
              <div className="second__item__text">
                <h4>DISCOVER THE TERREX FREE HIKER 2.0</h4>
                <p>
                  Long distance hiking just got more fun and more comfortable
                </p>
              </div>
              <p>SHOP NOW</p>
            </div>
            <div className="second__item">
              <img src={fourth} alt="" />
              <div className="second__item__text">
                <h4>NEW ARRIVALS</h4>
                <p>
                  Tailor-made for trailblazers. Explore Campus 00s sneakers and
                  more.
                </p>
              </div>
              <p>SHOP NOW</p>
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="second">
          <div className="second__item">
            <img src={first} alt="" />
            <div className="second__item__text">
              <h4>FORUM</h4>
              <p>
                Your Forum, your way: the Forum build momentum beyond the court
              </p>
            </div>
            <p>SHOP NOW</p>
          </div>
          <div className="second__item">
            <img src={second} alt="" />
            <div className="second__item__text">
              <h4>SHOW DAD LOVE</h4>
              <p>
                This Father's Day, make memories with dad and gift iconic styles
                he'll love
              </p>
            </div>
            <p>SHOP NOW</p>
          </div>
          <div className="second__item">
            <img src={third} alt="" />
            <div className="second__item__text">
              <h4>DISCOVER THE TERREX FREE HIKER 2.0</h4>
              <p>Long distance hiking just got more fun and more comfortable</p>
            </div>
            <p>SHOP NOW</p>
          </div>
          <div className="second__item">
            <img src={fourth} alt="" />
            <div className="second__item__text">
              <h4>NEW ARRIVALS</h4>
              <p>
                Tailor-made for trailblazers. Explore Campus 00s sneakers and
                more.
              </p>
            </div>
            <p>SHOP NOW</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Second;
