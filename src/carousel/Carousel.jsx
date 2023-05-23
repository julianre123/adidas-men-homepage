import React from "react";
import { CarouselItems } from "./CarouselItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Items from "./Items";
const Third = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.8,
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
    <div className="carousel">
      <h1>TOP PICKS FOR YOU</h1>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {CarouselItems.map((item) => (
          <Items
            key={item.id}
            price={item.price}
            category={item.category}
            title={item.description}
            image={item.image}
          />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Third;
