<script lang="ts" setup>
import { useRouter } from "vue-router";
import { testReq } from "@/api/demo";

const router = useRouter();

const test_fn_01 = () => {
  router.push("/demo1");
};

const test_fn_02 = () => {
  router.push("/demo2");
};

const test_fn_03 = async () => {
  let res = await testReq();
  console.log("res", res);
};
</script>

<template>
  <div>
    <van-button type="primary" @click="test_fn_01">跳转demo1</van-button>
    <van-button type="primary" @click="test_fn_02">跳转demo2</van-button>
    <van-button type="primary" @click="test_fn_03">请求测试</van-button>
  </div>
</template>

<style lang="scss" scoped>
</style>
 
