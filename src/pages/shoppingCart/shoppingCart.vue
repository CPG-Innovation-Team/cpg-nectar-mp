<template>
  <view class="shopping-cart-page">
    <view class="cart-product-list">
      <cart-product-item name="青椒" image="/static/product/img-product1.png" price="18" />
      <cart-product-item name="鸡胸肉" image="/static/product/img-product2.png" price="688.88" />
    </view>
    <view class="cart-status-block">
      <view>
        <text class="cart-amount-text">共5件 总计</text>
        <text class="cart-price-text">￥70</text>
      </view>
      <button class="checkout-button">结账</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import cartProductItem from '@/components/shoppingCart/cartProductItem.vue';
</script>

<style lang="scss" scoped>
.shopping-cart-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .cart-status-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 40rpx;
    padding: 18rpx 32rpx;
    background: #ffffff;
    box-shadow: 0px -20rpx 40rpx rgba(0, 0, 0, 0.05);
    border-radius: 48rpx 48rpx 0px 0px;

    .cart-amount-text {
      font-size: 20rpx;
    }
    .cart-price-text {
      font-size: 48rpx;
    }

    .checkout-button {
      width: 200rpx;
      height: 96rpx;
      line-height: 96rpx;
      margin: 0;
      border: none;
      border-radius: 24rpx;
      background-color: #105b63;
      color: #ffffff;
      font-size: 34rpx;
    }
  }
}
</style>
