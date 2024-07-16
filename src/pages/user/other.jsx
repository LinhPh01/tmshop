import React from "react";
import { Box, Icon, Text } from "zmp-ui";
import { ListRenderer } from "../../components/listrender";

const Other = () => {
  //   const onClick = useToBeImplemented();
  return (
    <Box className="m-4">
      <ListRenderer
        title="Khác"
        // onClick={onClick}
        items={[
          //   {
          //     left: <Icon icon="zi-star" />,
          //     right: (
          //       <Box flex>
          //         <Text.Header className="flex-1 items-center font-normal">
          //           Đánh giá đơn hàng
          //         </Text.Header>
          //         <Icon icon="zi-chevron-right" />
          //       </Box>
          //     ),
          //   },
          {
            left: <Icon icon="zi-call" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Liên hệ và hỗ trợ qu Zalo OA
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

export default Other;
