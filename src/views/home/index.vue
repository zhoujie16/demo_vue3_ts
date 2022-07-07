
<template>
  <div>
    <VNavBar title="首页" @click-left="clickLeft"> </VNavBar>
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">
        <van-cell-group>
          <van-cell title="Button 按钮" @click="test_fn_01" />
          <van-cell title="Cell 单元格" @click="test_fn_02" />
          <van-cell title="请求API" @click="test_fn_03" />
          <van-cell title="环检demo" @click="test_fn_04" />
        </van-cell-group>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import VNavBar from "@/components/VNavBar/index.vue";
import { useRouter } from "vue-router";
import { testReq } from "@/api/demo";
import { ref } from "vue";

const active = ref(0);
const router = useRouter();

const test_fn_01 = () => {
  router.push("/button");
};

const test_fn_02 = () => {
  router.push("/demo2");
};

const test_fn_03 = async () => {
  let res = await testReq();
  console.log("res", res);
};
const test_fn_04 = () => {
  router.push("/car");
};

const clickLeft = () => {
  alert("返回");
};
</script>


<style lang="scss" scoped>
</style>
 
