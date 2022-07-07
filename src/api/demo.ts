// demo2 页面 相关接口
import request from "@/utils/request";
import SERVER from "./server";
//
export const testReq = () => {
  return request.get(`${SERVER.demo}/demo`);
};
