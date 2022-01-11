<template>
  <view class="category-block">
  	<view class="category-item">
      <image class="category-icon" src="/static/category/ico-manuka.png"></image>
      <text class="category-text">麦卢卡蜂蜜</text>
    </view>
    <view class="category-item">
      <image class="category-icon" src="/static/category/ico-forest-honey.png"></image>
      <text class="category-text">森林蜜</text>
    </view>
    <view class="category-item">
      <image class="category-icon" src="/static/category/ico-pollen.png"></image>
      <text class="category-text">花粉</text>
    </view>
    <view class="category-item">
      <image class="category-icon" src="/static/category/ico-royal-jelly.png"></image>
      <text class="category-text">蜂王浆</text>
    </view>
    <view class="category-item">
      <image class="category-icon" src="/static/category/ico-gift-box.png"></image>
      <text class="category-text">礼盒</text>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .category-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16rpx;
    width: 686rpx;
    
    .category-item {
      width: 120rpx;
      text-align: center;
  
      .category-icon {
        width: 100rpx;
        height: 100rpx;
      }
      .category-text {
        font-size: 22rpx;
      }
    }
  }
</style>
