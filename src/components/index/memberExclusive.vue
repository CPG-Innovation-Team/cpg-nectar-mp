<template>
  <view class="member-exclusive-block">
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product1.png"></image>
      <view class="product-detail">
        <text class="price-label">会员价</text>
        <text class="price-text">￥5.22</text>
      </view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product2.png"></image>
      <view class="product-detail">
        <text class="price-label">会员价</text>
        <text class="price-text">￥3.22</text>
      </view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product3.png"></image>
      <view class="product-detail">
        <text class="price-label">会员价</text>
        <text class="price-text">￥65.22</text>
      </view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product4.png"></image>
      <view class="product-detail">
        <text class="price-label">会员价</text>
        <text class="price-text">￥35.22</text>
      </view>
    </view>
  </view>
</template>

<script>
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
    background-color: #FFFFFF;
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
      background-color: #1A2632;
      color: #FFFFFF;
      font-size: 13rpx;
    }
    .price-text {
      color: #FC3D54;
      font-size: 18rpx;
      font-weight: bold;
    }
  }
}
</style>
