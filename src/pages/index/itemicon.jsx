import React from "react";
import { Box, Text } from "zmp-ui";
import demo from "../../../assets-src/demo.png";

const Itemicon = () => {
  return (
    <Box className="bg-page-color" pb={4}>
      <div className="px-4">
        <div className="rounded-lg shadow-lg bg-white">
          <div className="p-4">
            <div className="flex flex-cols items-center justify-between p-2">
              <div className="flex flex-auto flex-row items-center">
                <img className="w-12 h-12" src={demo} alt="" />
                <Text bold size="xxSmall">
                  Cộng tác bán hàng
                </Text>
              </div>
              <div className="border-l border-gray-500 h-12" />
              <div className="flex flex-auto flex-row-reverse items-center">
                <img className="w-12 h-12" src={demo} alt="" />
                <Text bold size="xxSmall">
                  Cộng tác bán hàng
                </Text>
              </div>
            </div>
            <div>
              <div className="border-t border-gray-500 w-full" />
            </div>
          </div>
          {/* 4 item dưới  */}
          <div className="grid grid-cols-2 justify-between gap-4 px-4 pb-4">
            <div className="rounded-lg shadow-lg gap-2 p-2 py-2 px-4 flex flex-row-reverse items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Cộng tác bán hàng
              </Text>
            </div>
            <div className="rounded-lg shadow-lg space-x-4 py-2 px-4 flex flex-row items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Cộng tác bán hàng
              </Text>
            </div>
            <div className="rounded-lg shadow-lg gap-2 p-2 py-2 px-4 flex flex-row-reverse items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Cộng tác bán hàng
              </Text>
            </div>
            <div className="rounded-lg shadow-lg space-x-4 py-2 px-4 flex flex-row items-center">
              <img className="w-12 h-12" src={demo} alt="" />
              <Text bold size="xxSmall">
                Cộng tác bán hàng
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Itemicon;
