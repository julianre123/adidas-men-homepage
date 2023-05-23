import React from "react";
import "./Fourth.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FourthInfo } from "./FourthInfo";
import FourthItem from "./FourthItem";
const Fourth = () => {
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
    <div className="fourth">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {FourthInfo.map((item, idx) => (
          <FourthItem
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
            learn={item.learn}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Fourth;
