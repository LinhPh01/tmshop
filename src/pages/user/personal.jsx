import React from "react";
import { Box, Icon, Text } from "zmp-ui";

import { ListRenderer } from "../../components/listrender";

const Personal = () => {
  //   const onClick = useToBeImplemented();
  return (
    <Box className="m-4">
      <ListRenderer
        title="Cá Nhân"
        items={[
          //   {
          //     left: <Icon icon="zi-user" />,
          //     right: (
          //       <Box flex>
          //         <Text.Header className="flex-1 items-center font-normal">
          //           Thông tin tài khoản
          //         </Text.Header>
          //         <Icon icon="zi-chevron-right" />
          //       </Box>
          //     ),
          //   },
          {
            left: <Icon icon="zi-clock-2" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Lịch sử đơn hàng
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

export default Personal;
