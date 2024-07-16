import React from "react";
import { Box, List, Text, Icon } from "zmp-ui";
import car from "../../../assets-src/car.png";
import man from "../../../assets-src/delivery-man.png";

const Address = () => {
  return (
    <Box pb={4}>
      <div className="px-4">
        <Box flex alignItems="center">
          <img className="w-8 h-8 rounded-lg border-inset " src={car} alt="" />
          <Text.Title className="px-2">Sản phẩm đặt mua</Text.Title>
        </Box>
        <Box className="bg-slate-100 rounded-xl" mt={4}>
          <List>
            <List.Item suffix={<Icon icon="zi-arrow-right" />}>
              <div>Địa chỉ và SĐT</div>
            </List.Item>
            <List.Item suffix={<Icon icon="zi-arrow-right" />}>
              <div>Ngày và giờ</div>
            </List.Item>
            <List.Item suffix={<Icon icon="zi-arrow-right" />}>
              <div>Ghi chú</div>
            </List.Item>
          </List>
        </Box>
        <Box>
          <div className=" absolute bottom-10 p-4 left-0 right-0 bg-slate-100 flex items-center justify-between">
            <Box>
              <Text.Title size="large ">Tổng thanh toán</Text.Title>
              <Text size="xxSmall ">0 sản phẩm </Text>
              <Text size="xxSmall ">0đ </Text>
            </Box>
            <div className="bg-white rounded-3xl px-4 py-2 flex items-center">
              <img
                className="w-8 h-8 rounded-lg border-inset "
                src={man}
                alt=""
              />
              <Text className="text-custom-teal px-2">Đặt Hàng</Text>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Address;
