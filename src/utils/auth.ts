import Cookies from "@/utils/cookies";
// import Cookies from "@/common/cookies/index.js";
const TokenKey = "token";
const env = process.env.NODE_ENV;

import mock from "@/mock/user";

// 存储 token
export const getToken = () => {
  if (env === "development") {
    console.log("mock.token", mock.token);
    return mock.token;
  } else {
    // return Cookies.get(TokenKey);
    return null;
  }
};

export const setToken = (token: any) => Cookies.set(TokenKey, token, null);
export const removeToken = () => Cookies.remove(TokenKey);
