<template>
  <view class="category-block">
    <view class="category-item" v-for="item in categoryList" :key="item.id">
      <image class="category-icon" :src="item.image"></image>
      <text class="category-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { categoryList } from '@/data/data.js';
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
    line-height: 28rpx;
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
