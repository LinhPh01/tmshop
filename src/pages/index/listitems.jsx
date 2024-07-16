import React from "react";
import demo from "../../../assets-src/demo.png";
import { Box, Text } from "zmp-ui";

const Listitems = () => {
  return (
    <Box className="bg-page-color" pb={4}>
      <Box>
        <div className="px-4">
          <Text bold>Danh Mục Sản Phẩm</Text>
          <div className=" bg-white grid grid-cols-4 justify-between gap-4 p-4 text-nowrap ">
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Sách Bán
              </Text>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Listitems;
