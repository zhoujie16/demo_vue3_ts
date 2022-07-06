<template>
  <div class="bar-content">
    <van-nav-bar :title="title" fixed :left-arrow="leftArrow" @click-left="onClickLeft">
      <template #right>
        <van-icon v-if="rightIcon" :name="rightIcon" size="22" @click="rightIconClick" />
        <van-image v-if="rightImage" :src="rightImage" @click="rightImgClick" />
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    VanIcon: Icon,
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    rightImage: {
      type: String,
      default: "",
    },
    rightIcon: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const onClickLeft = () => {
      console.log("click-left");
      emit("click-left");
    };
    const rightIconClick = () => {
      console.log("right-icon-clickt");
      emit("right-icon-clickt");
    };
    const rightImgClick = () => {
      console.log("right-img-click");
      emit("right-img-click");
    };
    return {
      onClickLeft,
      rightIconClick,
      rightImgClick,
    };
  },
};
</script>

<style scoped lang="scss">
.bar-content {
  height: 44px;
}
::v-deep .van-nav-bar .van-icon {
  color: #010101;
}
::v-deep .van-nav-bar--fixed {
  background-color: #f5f6fa;
}
</style>
