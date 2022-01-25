<template>
  <view>
    <view class="product-preview-tab">
      <view
        v-for="(item, key) in productPreviewTab"
        :key="item.id"
        :class="{ active: item.selected }"
        class="tab-item"
        @click="switchTab(key)"
      >
        <view class="tab-title">{{ item.name }}</view>
        <view class="tab-detail">{{ item.detail }}</view>
      </view>
    </view>

    <view class="product-preview-block">
      <view v-for="(item, key) in productListData" :key="key" class="product-item">
        <image class="product-image" :src="item.image" />
        <view class="product-name">{{ item.name }}</view>
        <view class="product-detail">{{ item.detail }}</view>
        <price-label :price="item.price.toFixed(2)" />
        <add-cart-button
          :id="key"
          :available="item.available"
          :amount-in-cart="item.amount"
          :on-add-cart-click="onAddCartClick"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import priceLabel from '../priceLabel.vue';
import addCartButton from '../addCartButton.vue';
import { productPreview } from '../../data/data';

const productPreviewTab = reactive(productPreview);
productPreviewTab[0].selected = true;
const productListData = reactive({ ...productPreviewTab[0].product });
const { cartList } = reactive(getApp().globalData);

const switchTab = (tabKey: number): void => {
  productPreviewTab.forEach((item) => {
    item.selected = false;
  });
  productPreviewTab[tabKey].selected = true;

  const productDataInActiveTab = productPreviewTab[tabKey].product;

  Object.keys(productListData).forEach((productKey) => {
    delete productListData[productKey];
  });

  Object.keys(productDataInActiveTab).forEach((productKey) => {
    productListData[productKey] = productDataInActiveTab[productKey];
  });
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
        color: $uni-color-primary;
      }

      .tab-detail {
        border-radius: 10rpx;
        background-color: $uni-color-primary;
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
  justify-content: space-between;
  width: 688rpx;
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
  }
}
</style>
