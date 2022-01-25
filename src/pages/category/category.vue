<template>
  <view class="category-page">
    <category-block :data="categoryListData" :on-category-item-click="onCategoryItemClick" />
    <view class="product-container">
      <view class="sub-category-list">
        <view class="sub-category-item active">
          <text class="sub-category-text">全部</text>
        </view>
        <view class="sub-category-item">
          <text class="sub-category-text">苹果/梨</text>
        </view>
        <view class="sub-category-item">
          <text class="sub-category-text">葡提类</text>
        </view>
        <view class="sub-category-item">
          <text class="sub-category-text">核果类</text>
        </view>
      </view>
      <scroll-view scroll-y class="product-list">
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">森蜂园-蜂王浆</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="5.22" />
          </view>
          <add-cart-button />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product2.png" />
          <view class="product-content">
            <view class="product-name">蜂胶银杏软胶囊</view>
            <view class="product-detail">超级补</view>
            <price-label price="36.88" />
          </view>
          <add-cart-button :available="false" />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product3.png" />
          <view class="product-content">
            <view class="product-name">茶花蜂花粉</view>
            <view class="product-detail">可能是最好的花粉</view>
            <price-label price="998.00" />
          </view>
          <add-cart-button :available="false" />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">长白山椴树原蜜</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="15.22" />
          </view>
          <add-cart-button :amount-in-cart="1" />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">长白山椴树原蜜</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="15.22" />
          </view>
          <add-cart-button />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">长白山椴树原蜜</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="15.22" />
          </view>
          <add-cart-button />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">长白山椴树原蜜</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="15.22" />
          </view>
          <add-cart-button />
        </view>
        <view class="product-item">
          <image class="product-image" src="/static/product/img-product1.png" />
          <view class="product-content">
            <view class="product-name">长白山椴树原蜜</view>
            <view class="product-detail">特别特别好的蜂王浆</view>
            <price-label price="15.22" />
          </view>
          <add-cart-button />
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import CategoryBlock from '../../components/categoryBlock.vue';
import priceLabel from '../../components/priceLabel.vue';
import addCartButton from '../../components/addCartButton.vue';
import { categoryList } from '../../data/data';

const categoryListData = reactive(categoryList);

const switchCategoryTab = (key: string): void => {
  categoryListData.forEach((item) => {
    item.selected = false;
  });
  categoryListData[key].selected = true;
};

onShow((): void => {
  const { categorySelectedId } = getApp().globalData;
  if (categorySelectedId) {
    switchCategoryTab(categorySelectedId);
  }
});

const onCategoryItemClick = (id: string): void => {
  getApp().globalData.categorySelectedId = id;
  switchCategoryTab(id);
};
</script>

<style lang="scss" scoped>
.category-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #faf9ff;

  .product-container {
    display: flex;
    flex-direction: row;
    margin-top: 40rpx;

    .sub-category-list {
      width: 152rpx;

      .sub-category-item {
        height: 46rpx;
        line-height: 46rpx;
        padding: 14rpx 0 14rpx 44rpx;
        font-size: 20rpx;

        .sub-category-text {
          padding: 2rpx 4rpx;
        }

        &.active {
          background-color: #ffffff;
          font-size: 24rpx;
          .sub-category-text {
            border-bottom: 6rpx solid $uni-color-primary;
          }
        }
      }
    }

    .product-list {
      width: 574rpx;
      height: calc(100vh - 206rpx);
      background-color: #ffffff;
    }
  }

  .product-item {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 522rpx;
    height: 212rpx;
    margin: 24rpx 0 0 24rpx;
    border-radius: 32rpx;
    background-color: #ffffff;
    box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.08);

    .product-image {
      margin: 16rpx;
      width: 156rpx;
      height: 156rpx;
    }
    .product-content {
      justify-content: space-between;
      margin: 20rpx 20rpx 20rpx 0;
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
  }
}
</style>
