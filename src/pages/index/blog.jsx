import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "zmp-ui";
import "swiper/css";

const Blog = () => {
  return (
    <Box className="bg-page-color" pb={4}>
      <div className="px-4">
        <Text bold className="pb-4">
          Bài Viết Gần Đây
        </Text>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: null,
          }}
          slidesPerView={1.25}
          spaceBetween={16}
          className="px-4"
          direction="horizontal"
        >
          <SwiperSlide>
            <Box
              className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
              style={{ backgroundColor: "#0ebeb8" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
              style={{ backgroundColor: "#0ebeb8" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
              style={{ backgroundColor: "#0ebeb8" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
              style={{ backgroundColor: "#0ebeb8" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Box>
  );
};

export default Blog;
