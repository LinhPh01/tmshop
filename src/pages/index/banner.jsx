import React from "react";
import { Box, Swiper } from "zmp-ui";
import banner1 from "../../../assets-src/bannerbook1.jpg";
import banner2 from "../../../assets-src/bannerbook2.jpg";

// baner dạng slide
const Swiperbanner = () => {
  return (
    <Box className="bg-page-color">
      <Box>
        <Swiper autoplay duration={2000} loop className="no-rounded">
          <Swiper.Slide>
            <img
              className="slide-img w-full h-full"
              src={banner1}
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img w-full h-full"
              src={banner2}
              alt="slide-2"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Swiperbanner;
