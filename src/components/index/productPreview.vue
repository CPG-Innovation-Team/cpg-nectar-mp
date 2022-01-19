<template>
  <view>
    <view class="product-preview-tab">
      <view class="tab-item active">
        <view class="tab-title">精选好物</view>
        <view class="tab-detail">热卖推荐</view>
      </view>
      <view class="tab-item">
        <view class="tab-title">精品抢购</view>
        <view class="tab-detail">每月惊爆单品</view>
      </view>
      <view class="tab-item">
        <view class="tab-title">多买优惠</view>
        <view class="tab-detail">两瓶12元/买一送一</view>
      </view>
      <view class="tab-item">
        <view class="tab-title">正大百年</view>
        <view class="tab-detail">独家商品</view>
      </view>
    </view>

    <view class="product-preview-block">
      <view class="product-item">
        <image class="product-image" src="/static/product/img-product1.png" />
        <view class="product-name">森蜂园-蜂王浆</view>
        <view class="product-detail">特别特别好的蜂王浆</view>
        <price-label price="5.22" />
        <view class="add-cart-button">+</view>
      </view>
      <view class="product-item">
        <image class="product-image" src="/static/product/img-product2.png" />
        <view class="product-name">蜂胶银杏软胶囊</view>
        <view class="product-detail">超级补</view>
        <price-label price="36.88" />
        <view class="add-cart-button">+</view>
      </view>
      <view class="product-item">
        <image class="product-image" src="/static/product/img-product3.png" />
        <view class="product-name">茶花蜂花粉</view>
        <view class="product-detail">可能是最好的花粉</view>
        <price-label price="998.00" />
        <view class="add-cart-button">+</view>
      </view>
      <view class="product-item">
        <image class="product-image" src="/static/product/img-product1.png" />
        <view class="product-name">长白山椴树原蜜</view>
        <view class="product-detail">特别特别好的蜂王浆</view>
        <price-label price="15.22" />
        <view class="add-cart-button">+</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import priceLabel from '../priceLabel.vue';
</script>

<style lang="scss" scoped>
.product-preview-tab {
  display: flex;
  justify-content: space-around;
  width: 688rpx;
  margin: 40rpx auto 0 auto;

  .tab-item {
    text-align: center;
    color: #1a2632;

    .tab-title {
      font-size: 30rpx;
      font-weight: bold;
    }

    .tab-detail {
      display: inline-flex;
      padding: 2rpx 10rpx;
      font-size: 18rpx;
    }

    &.active {
      .tab-title {
        color: #105b63;
      }

      .tab-detail {
        border-radius: 10rpx;
        background-color: #105b63;
        color: #ffffff;
      }
    }
  }
}

.product-preview-block {
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
    background-color: #ffffff;
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

    .add-cart-button {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-top-left-radius: 32rpx;
      border-bottom-right-radius: 32rpx;
      background-color: #105b63;
      color: #ffffff;
      font-size: 64rpx;
      text-align: center;
    }
  }
}
</style>
