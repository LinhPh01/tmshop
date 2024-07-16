import React from "react";
import { Box, Text } from "zmp-ui";
import subscriptionDecor from "../../static/icons/subscription-decor.svg";
// import axios from "axios";
// import { authorize } from "zmp-sdk/apis";

// authorize({
//   scopes: ['scope.userLocation', 'scope.userPhonenumber'],
//   success: (data) => {
//     // Xử lý khi gọi api thành công
//     console.log(data);
//     // Sử dụng token từ data để thực hiện yêu cầu API với Axios
//     const token = data.accessToken; // Giả sử accessToken là một phần của data trả về
//     axios.get('YOUR_API_ENDPOINT', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       // Xử lý dữ liệu trả về từ API
//       console.log(response.data);
//     })
//     .catch(error => {
//       // Xử lý lỗi khi gọi API
//       console.error(error);
//     });
//   },
//   fail: (error) => {
//     // Xử lý khi gọi api thất bại
//     console.log(error);
//   }
// });

// import { useToBeImplemented } from "../../hooks";

const Subscription = () => {
  //   const onClick = useToBeImplemented();
  return (
    <Box pb={4}>
      <div className="px-4">
        <div
          className=" bg-green-600 text-white rounded-xl p-4 space-y-2 px-4"
          style={{
            backgroundImage: `url(${subscriptionDecor})`,
            backgroundPosition: "right 8px center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Text.Title className="font-bold">Đăng ký thành viên</Text.Title>
          <Text size="xxSmall">
            Hãy đăng ký để trở thành viên của TM Library
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default Subscription;
