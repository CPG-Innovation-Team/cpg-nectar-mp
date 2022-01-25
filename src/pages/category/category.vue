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
        <view v-for="(item, key) in productListData" :key="key" class="product-item">
          <image mode="aspectFit" class="product-image" :src="item.image" />
          <view class="product-content">
            <view class="product-name">{{ item.name }}</view>
            <view class="product-detail">{{ item.detail }}</view>
            <price-label :price="item.price.toFixed(2)" />
          </view>
          <add-cart-button
            :id="key"
            :available="item.available"
            :amount-in-cart="item.amount"
            :on-add-cart-click="onAddCartClick"
          />
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import CategoryBlock from '../../components/categoryBlock.vue';
import priceLabel from '../../components/priceLabel.vue';
import addCartButton from '../../components/addCartButton.vue';
import { categoryList } from '../../data/data';

const categoryListData = reactive(categoryList);
categoryListData[0].selected = true;
const productListData = reactive({ ...categoryListData[0].product });
const { cartList } = reactive(getApp().globalData);

const switchCategoryTab = (tabKey: string): void => {
  categoryListData.forEach((item) => {
    item.selected = false;
  });
  categoryListData[tabKey].selected = true;

  const productDataInActiveTab = categoryListData[tabKey].product;

  Object.keys(productListData).forEach((productKey) => {
    delete productListData[productKey];
  });

  Object.keys(productDataInActiveTab).forEach((productKey) => {
    productListData[productKey] = productDataInActiveTab[productKey];
  });
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

watch(cartList, () => {
  Object.keys(cartList).forEach((key) => {
    if (productListData.hasOwnProperty(key)) {
      productListData[key].amount = cartList[key].amount;
    }
  });
});

const onAddCartClick = (id: string): void => {
  if (cartList.hasOwnProperty(id)) {
    cartList[id].amount += 1;
  } else {
    cartList[id] = {
      name: productListData[id].name,
      image: productListData[id].image,
      unitPrice: productListData[id].price,
      amount: 1,
      checked: true,
    };
  }
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
