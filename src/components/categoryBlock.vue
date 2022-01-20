<template>
  <view class="category-block">
    <view v-for="item in categoryList" :key="item.id" class="category-item">
      <image class="category-icon" :src="item.image" />
      <text class="category-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { categoryList } from '../data/data';
</script>

<style lang="scss" scoped>
.category-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 686rpx;
  height: 134rpx;
  margin-top: 32rpx;

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
