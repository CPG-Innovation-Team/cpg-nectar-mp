<template>
  <view class="price-label-block">
    <text class="price-label">会员价</text>
    <text class="price-text">￥{{ price }}</text>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'priceLabel',
  props: {
    price: String,
  },
});
</script>

<style lang="scss" scoped>
.price-label-block {
  display: inline-flex;
  align-items: center;
  margin: 24rpx 0 0 24rpx;
  padding-right: 12rpx;
  height: 38rpx;
  border-radius: 16rpx;
  background-color: #f3eddf;

  .price-label {
    width: 38rpx;
    height: 18rpx;
    padding: 10rpx;
    border-radius: 16rpx;
    background-color: #1a2632;
    color: #ffffff;
    font-size: 13rpx;
  }
  .price-text {
    margin-left: 10rpx;
    color: #fc3d54;
    font-size: 18rpx;
    font-weight: bold;
  }
}
</style>
