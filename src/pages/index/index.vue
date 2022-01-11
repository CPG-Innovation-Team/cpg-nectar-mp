<template>
  <view class="index-page">
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
    <member-exclusive />
  </view>
</template>

<script lang="ts">
import CategoryBlock from '@/components/categoryBlock.vue';
import MemberExclusive from '@/components/index/memberExclusive.vue';

export default {
  components: {
    CategoryBlock,
    MemberExclusive,
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
  background-color: #E5E5E5;
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
</style>
