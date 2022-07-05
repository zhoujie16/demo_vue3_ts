// demo2 页面 相关接口
import request from "@/utils/request";
import Config from "@/config";

//
export const testReq = () => {
  return request.get(`${Config.API_URL}/demo`);
};
