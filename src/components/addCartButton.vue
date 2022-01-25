<template>
  <view class="add-cart-block">
    <view v-if="props.available" class="add-cart-button">+</view>
    <view v-if="!props.available" class="out-of-stock-text">已售完</view>
    <view v-if="props.amountInCart" class="amount-in-cart">{{ props.amountInCart }}</view>
  </view>
</template>

<script lang="ts" setup>
interface IProps {
  amountInCart: number;
  available: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  amountInCart: 0,
  available: true,
});
</script>

<style lang="scss" scoped>
.add-cart-block {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;

  .add-cart-button {
    width: 80rpx;
    height: 80rpx;
    line-height: 70rpx;
    border-top-left-radius: 32rpx;
    border-bottom-right-radius: 32rpx;
    background-color: $uni-color-primary;
    color: #ffffff;
    font-size: 64rpx;
  }

  .out-of-stock-text {
    width: 80rpx;
    height: 80rpx;
    line-height: 80rpx;
    margin-right: 20rpx;
    font-size: 24rpx;
  }

  .amount-in-cart {
    position: absolute;
    left: -24rpx;
    top: -24rpx;
    width: 48rpx;
    height: 48rpx;
    line-height: 48rpx;
    border-radius: 30rpx 30rpx 6rpx 30rpx;
    background: #fc3d54;
    color: #ffffff;
    font-size: 20rpx;
  }
}
</style>
