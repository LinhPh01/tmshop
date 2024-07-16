import React from "react";
import { Box, Text } from "zmp-ui";
import shopping from "../../../assets-src/shopping-cart.png";

const Cartitems = () => {
  return (
    <Box pb={4}>
      <div className="px-4">
        <Box flex alignItems="center">
          <img
            className="w-8 h-8 rounded-lg border-inset "
            src={shopping}
            alt=""
          />
          <Text.Title className="px-2">Sản phẩm đặt mua</Text.Title>
        </Box>
        <Box mt={4}>
          <Text
            className=" bg-slate-100 rounded-xl py-8 px-4 text-center text-gray"
            size="xxSmall"
          >
            Không có sản phẩm trong giỏ hàng
          </Text>
        </Box>
      </div>
    </Box>
  );
};

export default Cartitems;
