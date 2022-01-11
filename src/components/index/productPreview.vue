<template>
  <view class="product-preview">
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product1.png" />
      <view class="product-name">森蜂园-蜂王浆</view>
      <view class="product-detail">特别特别好的蜂王浆</view>
      <view class="product-price-block">
        <text class="price-label">会员价</text>
        <text class="price-text">￥5.22</text>
      </view>
      <view class="add-cart-button">+</view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product2.png" />
      <view class="product-name">蜂胶银杏软胶囊</view>
      <view class="product-detail">超级补</view>
      <view class="product-price-block">
        <text class="price-label">会员价</text>
        <text class="price-text">￥36.88</text>
      </view>
      <view class="add-cart-button">+</view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product3.png" />
      <view class="product-name">茶花蜂花粉</view>
      <view class="product-detail">可能是最好的花粉</view>
      <view class="product-price-block">
        <text class="price-label">会员价</text>
        <text class="price-text">￥998.00</text>
      </view>
      <view class="add-cart-button">+</view>
    </view>
    <view class="product-item">
      <image class="product-image" src="/static/product/img-product1.png" />
      <view class="product-name">长白山椴树原蜜</view>
      <view class="product-detail">特别特别好的蜂王浆</view>
      <view class="product-price-block">
        <text class="price-label">会员价</text>
        <text class="price-text">￥15.22</text>
      </view>
      <view class="add-cart-button">+</view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
.product-preview {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 24rpx;

  .product-item {
    position: relative;
    width: 334rpx;
    height: 410rpx;
    margin-bottom: 20rpx;
    border-radius: 32rpx;
    background-color: #FFFFFF;
    box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.08);
    
    .product-image {
      margin: 16rpx;
      width: 302rpx;
      height: 212rpx;
    }
    .product-name {
      margin-left: 24rpx;
      height: 32rpx;
      font-size: 28rpx;
    }
    .product-detail {
      margin: 16rpx 0 0 24rpx;
      height: 28rpx;
      font-size: 24rpx;
      
    }
    .product-price-block {
      display: inline-flex;
      align-items: center;
      margin: 24rpx 0 0 24rpx;
      padding-right: 12rpx;
      height: 38rpx;
      border-radius: 16rpx;
      background-color: #F3EDDF;
      
      .price-label {
        width: 38rpx;
        height: 18rpx;
        padding: 10rpx;
        border-radius: 16rpx;
        background-color: #1A2632;
        color: #FFFFFF;
        font-size: 13rpx;
      }
      .price-text {
        margin-left: 10rpx;
        color: #FC3D54;
        font-size: 18rpx;
        font-weight: bold;
      }  
    }
    .add-cart-button {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-top-left-radius: 32rpx;
      border-bottom-right-radius: 32rpx;
      background-color: #105B63;
      color: #FFFFFF;
      font-size: 64rpx;
      text-align: center;
    }
  }
}
</style>
