<template>
  <div>
    <!-- <StatePoint ref="StatePoint" :dataList="modelData.dataList" :modelImage="modelData.modelImage"></StatePoint> -->
    <state-point ref="StatePoint" :dataList="modelData.dataList" :modelImage="modelData.modelImage"></state-point>
  </div>
</template>
<script lang="ts" setup>
import StatePoint from "@/components/StatePoint/StatePoint.vue";
import { ref, onBeforeMount, onMounted } from "vue";

const demoImg = (name: string) => {
  return new URL(`@/assets/image/appearance-in.png`, import.meta.url).href;
};
// let demoImg = require("@/assets/image/appearance-in.png");

const modelData: any = {
  // 车型图片
  modelImage: {
    url: demoImg,
    width: 1396,
    height: 736,
  },
  // 车型 - 位置 数据
  dataList: [
    {
      name: "左后门",
      rect: {
        left: -1266 / 2 + 600,
        top: -766 / 2 - 20,
      },
    },
    {
      name: "左前门",
      rect: {
        left: -1469 / 2 + 360,
        top: -766 / 2 - 20,
      },
    },
    {
      name: "内饰",
      rect: {
        left: -1439 / 2 + 340,
        top: -30,
      },
    },
    {
      name: "右前门",
      rect: {
        left: -1149 / 2 + 200,
        top: -766 / 2 - 20,
      },
    },

    {
      name: "右后门",
      rect: {
        left: -1499 / 2 + 30,
        top: -766 / 2 - 20,
      },
    },
  ],
};
onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});
</script> 

<style lang="scss" scoped>
</style>
