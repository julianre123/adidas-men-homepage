import { useState } from "react";

import "./App.css";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Sneakers from "./sneakers/Sneakers";
import Second from "./2nd Row/Second";
import Carousel from "./carousel/Carousel";
import Third from "./carousel/Carousel";
import Fourth from "./4th Row/Fourth";
import Footer from "./footer/Footer";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
function App() {
  return (
    <div className="page">
      <Header />
      <Banner />
      <Sneakers />
      <Second />
      <Third />
      <Fourth />
      <div className="text">
        <h2>MEN'S CLOTHING & SHOES</h2>
        <div className="text__text">
          As a creator, you look for ways to excel and express yourself when and
          where you can, from reaching for that last rep to evolving your
          streetwear style. Log miles or tear down the baseline in men's shoes
          with responsive cushioning. Rep an athletic style off the field in
          lifestyle apparel born of sport heritage. From athletes to streetwear
          enthusiasts, adidas men’s clothing and shoes exist to let you go
          harder, dig deeper, and get the most out of yourself, from the pitch
          to the street to the road less traveled.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
