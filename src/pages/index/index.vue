<template>
  <view class="index-page">
    <view class="background-layer" />
    <video id="intro-video" src="https://static.cpgroup.top/video-intro.mp4" />
    <swiper class="swiper" indicator-dots autoplay>
      <swiper-item @click="playVideo">
        <image class="swiper-image" src="/static/img-banner1.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image class="swiper-image" src="/static/img-banner2.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image class="swiper-image" src="/static/img-banner3.jpg"></image>
      </swiper-item>
    </swiper>
    <category-block />
    <view class="title-text">会员专区</view>
    <member-exclusive />
    <product-preview />
  </view>
</template>

<script lang="ts" setup>
import CategoryBlock from '@/components/categoryBlock.vue';
import MemberExclusive from '@/components/index/memberExclusive.vue';
import ProductPreview from '@/components/index/productPreview.vue';

const playVideo = () => {
  const videoContext = uni.createVideoContext('intro-video');
  videoContext.requestFullScreen();
  videoContext.play();
};
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80rpx;
  background-color: #FAF9FF;
}

.background-layer {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 336rpx;
  background-color: #105B63;
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
</style>
