// 工具库
export const testFn = () => {
  console.log("测试");
};

// px 单位转 rpx
export const pxTpRpx = (px: any) => {
  px = Number(px);
  const windowWidth = uni.getSystemInfoSync().windowWidth;
  return (px / windowWidth) * 750;
};
// pxTpRpx(px) {
//   px = Number(px);
//   const windowWidth = uni.getSystemInfoSync().windowWidth;
//   return (px / windowWidth) * 750;
// }
// // rpx 单位转 px
// rpxToPx(rpx) {
//   rpx = Number(rpx);
//   const windowWidth = uni.getSystemInfoSync().windowWidth;
//   return (rpx / 750) * windowWidth;
// }
