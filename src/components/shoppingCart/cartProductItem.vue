<template>
  <view class="cart-item">
    <image
      class="cart-checkbox"
      :src="props.checked ? checkedImage : noCheckedImage"
      @click="onCheckedClick(props.id)"
    />
    <image class="product-image" :src="props.image" />
    <view class="product-content-block">
      <view class="product-content-row">
        <text class="product-name">{{ props.name }}</text>
        <image class="remove-icon" src="/static/ico-trash.svg" @click="onItemRemove(props.id)" />
      </view>
      <view class="product-content-row">
        <view class="product-amount-block">
          <button class="amount-single-box amount-adjust-button" @click="onAmountChange(props.id, -1)">-</button>
          <text class="amount-single-box amount-number">{{ props.amount }}</text>
          <button class="amount-single-box amount-adjust-button" @click="onAmountChange(props.id, 1)">+</button>
        </view>
        <text class="price-text">￥{{ props.price }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface IProps {
  id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
  checked: boolean;
  onCheckedClick: () => void;
  onAmountChange: () => void;
  onItemRemove: () => void;
}
const props = defineProps<IProps>();

const checkedImage = '/static/ico-checkbox-checked.svg';
const noCheckedImage = '/static/ico-checkbox.svg';
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 160rpx;
  margin: 0 32rpx;
  padding: 16rpx;
  border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);

  .cart-checkbox {
    width: 48rpx;
    height: 48rpx;
    padding: 20rpx;
  }

  .product-image {
    display: block;
    width: 160rpx;
    height: 160rpx;
  }
  .product-content-block {
    display: flex;
    flex-direction: column;
    width: 400rpx;
    height: 160rpx;

    .product-content-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      width: 400rpx;
    }

    .product-name {
      height: 60rpx;
      line-height: 60rpx;
      margin-top: 10rpx;
      font-size: 28rpx;
    }

    .remove-icon {
      width: 32rpx;
      height: 32rpx;
      margin: -10rpx -10rpx 0 0;
      padding: 10rpx;
    }

    .product-amount-block {
      display: flex;
      flex-direction: row;

      .amount-single-box {
        width: 48rpx;
        height: 48rpx;
        line-height: 48rpx;
        margin: 0 8rpx 0 0;
        padding: 0;
        border-radius: 18rpx;
        text-align: center;

        &.amount-adjust-button {
          font-size: 32rpx;
        }
        &.amount-number {
          background-color: #ebeaef;
          color: #000000;
          font-size: 20rpx;
        }
      }
    }

    .price-text {
      font-size: 32rpx;
    }
  }
}
</style>
