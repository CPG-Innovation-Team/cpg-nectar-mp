<template>
  <view class="index-page">
    <view v-if="popupVisible" class="popup-layer">
      <image class="popup-image" src="/static/img-new-year-popup.svg" />
      <view class="popup-close-button" @click="popopClose" />
    </view>
    <view class="background-layer" />
    <video id="intro-video" src="https://static.cpgroup.top/video-intro.mp4" />
    <swiper class="swiper" indicator-dots autoplay>
      <swiper-item @click="playVideo">
        <image class="swiper-image" src="/static/img-banner1.jpg" />
      </swiper-item>
      <swiper-item>
        <image class="swiper-image" src="/static/img-banner2.jpg" />
      </swiper-item>
      <swiper-item>
        <image class="swiper-image" src="/static/img-banner3.jpg" />
      </swiper-item>
    </swiper>
    <category-block :data="categoryList" :on-category-item-click="onCategoryItemClick" />
    <view class="title-text">会员专区</view>
    <member-exclusive />
    <product-preview />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CategoryBlock from '../../components/categoryBlock.vue';
import MemberExclusive from '../../components/index/memberExclusive.vue';
import ProductPreview from '../../components/index/productPreview.vue';
import { categoryList } from '../../data/data';

const popupVisible = ref(true);
const popopClose = (): void => {
  popupVisible.value = false;
};

const playVideo = (): void => {
  const videoContext = uni.createVideoContext('intro-video');
  videoContext.requestFullScreen();
  videoContext.play();
};

const onCategoryItemClick = (id: string): void => {
  uni.switchTab({ url: '/pages/category/category' });
  getApp().globalData.categorySelectedId = id;
};
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80rpx;
  background-color: #faf9ff;

  .popup-layer {
    position: absolute;
    top: calc(50vh - 401rpx);
    z-index: 1000;

    .popup-image {
      width: 498rpx;
      height: 802rpx;
    }

    .popup-close-button {
      position: absolute;
      top: 40rpx;
      right: 40rpx;
      width: 80rpx;
      height: 80rpx;
    }
  }

  .background-layer {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 336rpx;
    background-color: #105b63;
  }

  .swiper {
    margin-top: 16rpx;
    width: 688rpx;
    height: 396rpx;
    border-radius: 32rpx;

    .swiper-image {
      width: 688rpx;
      height: 396rpx;
      border-radius: 32rpx;
    }
  }

  .title-text {
    align-self: start;
    margin: 32rpx 0 0 32rpx;
    font-weight: 600;
    font-size: 48rpx;
  }

  #intro-video {
    display: none;
  }
}
</style>
