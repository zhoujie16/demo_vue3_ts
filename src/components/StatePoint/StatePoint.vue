<template>
  <view class="state-point-wrap">
    <view class="btn-group" v-if="typeModel == 1">
      <view class="edit-btn" :class="{ 'edit-btn--active': item.active }" v-for="(item, i) in editBtnList" :key="i" @click="editBtnClick(item)">
        <image class="edit-btn-img" :src="item.png" mode="scaleToFill" style="width: 32rpx;height: 32rpx;"></image>
        <view class="edit-btn-text">{{ item.title }}</view>
      </view>
    </view>
    <view class="btn-group" v-if="typeModel == 2">
      <view class="edit-btn" :class="{ 'edit-btn--active': item.active }" v-for="(item, i) in editBtnList_in" :key="i" @click="editBtnClick_in(item)">
        <image class="edit-btn-img" :src="item.png" mode="scaleToFill" style="width: 32rpx;height: 32rpx;"></image>
        <view class="edit-btn-text">{{ item.title }}</view>
      </view>
    </view>
    <view class="panel-view">
      <canvas class="panel-canvas" :style="{
          width: modelImage.width + 'rpx',
          height: modelImage.height + 'rpx',
          left: modelActive.rect.left + 'rpx',
          top: modelActive.rect.top + 'rpx'
        }" canvas-id="firstCanvas" id="firstCanvas" @error="canvasIdErrorCallback" @touchstart="canvasClick"></canvas>
    </view>
    <view class="panel-name">
      <view v-for="(item, i) in dataList" :key="i" class="panel-name__name" :class="{
          'panel-name__name--active': i === activeIndex,
          'panel-name__name--pd1': typeModel == 1,
          'panel-name__name--pd2': typeModel == 2
        }" @click="nameClick(i)">
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<script>
// const p_1 = require("./p-1.png");
// new URL('../../assets/img/applyList.png', import.meta.url).href
const p_1 = new URL("./p-1.png", import.meta.url).href;
const p0 = new URL("./p0.png", import.meta.url).href;
const p1 = new URL("./p1.png", import.meta.url).href;
const p2 = new URL("./p2.png", import.meta.url).href;
const p3 = new URL("./p3.png", import.meta.url).href;
const p4 = new URL("./p4.png", import.meta.url).href;
const p5 = new URL("./p5.png", import.meta.url).href;

export default {
  mounted() {
    this.createCanvas();
  },
  computed: {
    modelActive() {
      const modelActive = this.dataList[this.activeIndex];
      console.log("computed modelActive", modelActive);
      return modelActive;
    },
  },
  data() {
    return {
      activeIndex: 0,
      editBtnList: [
        {
          title: "凹陷",
          key: 1,
          png: p1,
          active: false,
          contentCode: "2000",
        },
        {
          title: "划痕",
          key: 2,
          png: p2,
          active: false,
          contentCode: "2001",
        },
        {
          title: "破损",
          key: 3,
          png: p3,
          active: false,
          contentCode: "2002",
        },
        {
          title: "擦除",
          key: -1,
          png: p_1,
          active: false,
        },
        {
          title: "还原",
          key: 0,
          png: p0,
          active: false,
        },
      ],
      editBtnList_in: [
        {
          title: "污渍",
          key: 1,
          png: p5,
          active: false,
          contentCode: "2100",
        },
        {
          title: "破损",
          key: 2,
          png: p3,
          active: false,
          contentCode: "2101",
        },
        {
          title: "变形",
          key: 3,
          png: p4,
          active: false,
          contentCode: "2102",
        },
        {
          title: "",
          key: -1,
          png: p_1,
          active: false,
        },
        {
          title: "还原",
          key: 0,
          png: p0,
          active: false,
        },
      ],
      pointList: [],
    };
  },
  props: {
    dataList: {
      type: Array,
    },
    modelImage: {
      type: Object,
    },
    typeModel: {
      type: Number,
      default: 1, //1代表外饰，2代表内饰
    },
  },
  methods: {
    createCanvas() {
      console.log("createCanvas", this.modelImage.url);
      // var ctx = uni.createCanvasContext("firstCanvas");
      var ctx = document.getElementById("firstCanvas");
      ctx.drawImage(
        this.modelImage.url,
        0,
        0,
        this.$util.rpxToPx(this.modelImage.width),
        this.$util.rpxToPx(this.modelImage.height)
      );
      ctx.draw();
      this.pointList.forEach(x => {
        ctx.drawImage(x.type.png, x.x, x.y, x.w, x.h);
        ctx.draw(true);
      });
    },
    canvasIdErrorCallback(e) {
      console.log("canvasIdErrorCallback");
      console.error(e.detail.errMsg);
    },
    canvasClick(e, contentCode, isAutoFill = false) {
      console.log(e);
      const { x, y } = e.touches[0];
      let p;
      if (isAutoFill) {
        p =
          this.typeModel == 1
            ? this.editBtnList.find(x => x.contentCode == contentCode)
            : this.editBtnList_in.find(x => x.contentCode == contentCode);
      } else {
        p =
          this.typeModel == 1
            ? this.editBtnList.find(x => x.active)
            : this.editBtnList_in.find(x => x.active);
      }
      console.log("p", p, "this.typeModel", this.typeModel);
      if (!p) return;

      if (p.key === -1) {
        // 删除
        const index = this.pointList.findIndex(
          po => po.x < x && po.x + po.w > x && po.y < y && po.y + po.h > y
        );
        if (index != -1) {
          this.pointList.splice(index, 1);
          this.createCanvas();
        }
        return;
      }
      const a = this.dataList[this.activeIndex];
      this.pointList.push({ x: x - 8, y: y - 8, w: 16, h: 16, type: p });
      console.log("this.pointList111", this.pointList);
      this.createCanvas();
    },
    nameClick(i) {
      console.log("点击");
      this.activeIndex = i;
    },
    creatPoint({ x, y }) {},
    editBtnClick(item) {
      if (item.key === 0) {
        this.editBtnList.forEach(x => (x.active = false));
        this.pointList = [];
        this.createCanvas();
        return;
      }
      console.log("editBtnClick", item);
      if (item.active) {
        this.editBtnList.find(x => x.title === item.title).active = false;
      } else {
        this.editBtnList.forEach(x => (x.active = false));
        this.editBtnList.find(x => x.title === item.title).active = true;
      }
    },
    editBtnClick_in(item) {
      if (item.key === 0) {
        this.editBtnList_in.forEach(x => (x.active = false));
        this.pointList = [];
        this.createCanvas();
        return;
      }
      console.log("editBtnClick", item);
      if (item.active) {
        this.editBtnList_in.find(x => x.title === item.title).active = false;
      } else {
        this.editBtnList_in.forEach(x => (x.active = false));
        this.editBtnList_in.find(x => x.title === item.title).active = true;
      }
    },
    // async exportImg() {
    //   const [err, res] = await uni.canvasToTempFilePath({
    //     canvasId: "firstCanvas",
    //     quality: 0.8,
    //   });
    //   console.log(err, res);
    //   return [err, res];
    // },
  },
  // watch: {
  //   modelImage: {
  //     handler(newVal) {
  //       if(newVal) {
  //         this.createCanvas();
  //       }
  //     },
  //     deep: true,
  //   }
  // }
};
</script>

<style lang="scss">
.state-point-wrap {
  margin: 0 20rpx;
  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88rpx;
    // border-bottom: solid 2px #eee;
    margin-bottom: 20rpx;
    .edit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70rpx;
      padding: 0 10rpx;
      .edit-btn-img {
        margin-right: 10rpx;
      }
      .edit-btn-text {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: solid 6rpx rgba(0, 0, 0, 0);
      }
      &.edit-btn.edit-btn--active .edit-btn-text {
        color: #e97e51;
        border-bottom: solid 6rpx #e97e51;
      }
    }
  }
  .panel-view {
    height: 310rpx;
    position: relative;
    overflow: hidden;
    margin-bottom: 30rpx;
    .panel-canvas {
      position: absolute;
      transition: all 0.3s;
    }
  }
  .panel-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60rpx;
    padding: 10rpx 0;
    .panel-name__name {
      font-size: 28rpx;
      width: 100rpx;
      text-align: center;
      color: #808080;
      transition: all 0.3s;
      &.panel-name__name--active {
        box-sizing: border-box;
        color: #101010;
        font-weight: 600;
        border: 2px solid #e2e5ee;
        border-radius: 30rpx;
      }
      &.panel-name__name--pd1 {
        padding: 8rpx 18rpx;
      }
      &.panel-name__name--pd2 {
        padding: 8rpx 4rpx;
      }
    }
  }
}
</style>
