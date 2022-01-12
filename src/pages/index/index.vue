<template>
  <view class="index-page">
    <view class="background-layer" />
    <swiper class="swiper" indicator-dots autoplay>
      <swiper-item>
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

<script lang="ts">
import CategoryBlock from '@/components/categoryBlock.vue';
import MemberExclusive from '@/components/index/memberExclusive.vue';
import ProductPreview from '@/components/index/productPreview.vue';

export default {
  components: {
    CategoryBlock,
    MemberExclusive,
    ProductPreview,
  }
}
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
</style>
