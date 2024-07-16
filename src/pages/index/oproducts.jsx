import React from "react";
import { Box, Text } from "zmp-ui";
import banner1 from "../../../assets-src/bannerbook1.jpg";

const Oproducts = () => {
  return (
    <Box className="bg-page-color" pb={4}>
      <div className="px-4">
        <Text bold className="pb-4">
          Sản Phẩm Bán Chạy
        </Text>
        <div className="grid grid-cols-2 gap-4 py-2 pb-10">
          <Box className=" bg-white rounded-lg shadow-md" pb={4}>
            <div className="px-2 pt-2 space-y-2">
              <Box className="aspect-square relative">
                <img
                  loading="lazy"
                  src={banner1}
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
                />
              </Box>
              <Text size="xSmall">Sách bán chạy nè</Text>
            </div>
          </Box>
          <Box className=" bg-white rounded-lg shadow-md" pb={4}>
            <div className="px-2 pt-2 space-y-2">
              <Box className="aspect-square relative">
                <img
                  loading="lazy"
                  src={banner1}
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
                />
              </Box>
              <Text size="xSmall">Sách bán chạy nè</Text>
            </div>
          </Box>
          <Box className=" bg-white rounded-lg shadow-md" pb={4}>
            <div className="px-2 pt-2 space-y-2">
              <Box className="aspect-square relative">
                <img
                  loading="lazy"
                  src={banner1}
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
                />
              </Box>
              <Text size="xSmall">Sách bán chạy nè</Text>
            </div>
          </Box>
          <Box className=" bg-white rounded-lg shadow-md" pb={4}>
            <div className="px-2 pt-2 space-y-2">
              <Box className="aspect-square relative">
                <img
                  loading="lazy"
                  src={banner1}
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
                />
              </Box>
              <Text size="xSmall">Sách bán chạy nè</Text>
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Oproducts;

//sản phẩm nổi bật
