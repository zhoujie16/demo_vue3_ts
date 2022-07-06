<template>
  <div>
    <div>{{ test_txt }}</div>
    <van-button type="primary" @click="test_fn_01">更新数据</van-button>
    <van-button type="primary" @click="test_fn_02">异步更新数据</van-button>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useDemo2Store } from "./../../stores/demo2";
import { storeToRefs } from "pinia";

export default {
  setup() {
    let demo2Store = useDemo2Store();
    let { test_txt } = storeToRefs(demo2Store);

    onMounted(() => {
      console.log("demo2 mounted", demo2Store);
    });

    let test_fn_01 = () => {
      console.log("同步更新数据");
      let txt = `hello ${new Date().getTime()}`;
      demo2Store.updateTestTxt(txt);
    };

    let test_fn_02 = () => {
      console.log("异步更新数据");
      let txt = `hello ${new Date().getTime()}`;
      demo2Store.updateTestTxtAsync(txt);
    };

    return {
      test_txt,
      test_fn_01,
      test_fn_02,
    };
  },
};
</script>

 
