<template>
  <div>
    <VNavBar title="按钮" @click-left="clickLeft"> </VNavBar>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

  </div>
</template>
<script lang="ts" setup>
import VNavBar from "@/components/VNavBar/index.vue";

import { ref, onBeforeMount, onMounted } from "vue";

onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});

const clickLeft = () => {
  window.history.back();
};
</script> 

<style lang="scss" scoped>
</style>
