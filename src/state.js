import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";
import { authorize } from "zmp-sdk/apis";

const authorize = async () => {
  try {
    const data = await authorize({
      scopes: ["scope.userLocation", "scope.userPhonenumber"],
    });
    console.log(data);
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};

export const authorizedState = selector({
  key: "authorized",
  get: async () => {
    const { authSetting } = await getSetting({});
    if (!authSetting["scope.userInfo"]) {
      await authorize({ scopes: [] });
    }
  },
});

export const userState = selector({
  key: "user",
  get: async ({ get }) => {
    get(authorizedState);
    const { userInfo } = await getUserInfo({ avatarType: "small" });
    return userInfo;
  },
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});
