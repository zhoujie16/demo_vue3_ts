// export default {
//   API_URL: "http://x.abczzz.cn",
// };

const createProductEnv = (env: any) => {
  const result = {
    env,
    envText: `当前工程环境：${env}`,
    serverUrl: process.env.VUE_APP_SERVER_URL,
  };
  console.log(window.location, "window.location");
  if (env === "development") {
    result.serverUrl = "/";
  } else {
    // const _origin = window.location.origin;
    // const hostName = window.location.host;
    // if (_origin === "http://210.13.111.26:10262") {
    //   result.serverUrl = process.env.VUE_APP_TEST_SERVER_URL;
    // }
    // if (_origin === "http://210.13.111.26:10432") {
    //   result.serverUrl = process.env.VUE_APP_UAT_SERVER_URL;
    // }
    // if (_origin === "https://aftersale-store-sit.immotors.com") {
    //   result.serverUrl = process.env.VUE_APP_ZHIJI_SIT_URL;
    // }
    // if (_origin === "https://dms-uat.immotors.com") {
    //   result.serverUrl = process.env.VUE_APP_ZHIJI_UAT_URL;
    // }
    // if (_origin === "https://dms.immotors.com") {
    //   result.serverUrl = process.env.VUE_APP_ZHIJI_PROD_URL;
    // }
  }
  return result;
};

export default createProductEnv(process.env.NODE_ENV);
