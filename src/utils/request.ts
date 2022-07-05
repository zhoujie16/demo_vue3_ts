import axios from "axios";
import Config from "./../config";
import { Toast } from "vant";

// axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['area-code'] = 'CWHT'
// 创建 axios 实例
const request = axios.create({
  timeout: 60000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data;
    Toast(data.message);
  }
  return Promise.reject(error);
};

request.interceptors.request.use((config) => {
  // 自定义全局header
  config.headers = config.headers ? config.headers : {};
  config.headers["Content-Type"] = "application/json";
  return config;
}, errorHandler);

request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default request;
