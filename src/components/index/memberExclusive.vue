<template>
  <view class="member-exclusive-block">
    <view v-for="(item, key) in memberProduct" :key="key" class="product-item">
      <image mode="aspectFit" class="product-image" :src="item.image" />
      <view class="product-detail">
        <text class="price-label">会员价</text>
        <text class="price-text">￥{{ item.price.toFixed(2) }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { memberProduct } from '../../data/data';
</script>

<style lang="scss" scoped>
.member-exclusive-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16rpx;
  width: 686rpx;

  .product-item {
    width: 140rpx;
    height: 166rpx;
    padding: 12rpx;
    border-radius: 16rpx;
    box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    text-align: center;
  }

  .product-image {
    width: 132rpx;
    height: 102rpx;
  }

  .product-detail {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-top: 28rpx;

    .price-label {
      width: 38rpx;
      height: 18rpx;
      padding: 5rpx 10rpx;
      border-radius: 16rpx;
      background-color: #1a2632;
      color: #ffffff;
      font-size: 13rpx;
    }
    .price-text {
      color: #fc3d54;
      font-size: 18rpx;
      font-weight: bold;
    }
  }
}
</style>
