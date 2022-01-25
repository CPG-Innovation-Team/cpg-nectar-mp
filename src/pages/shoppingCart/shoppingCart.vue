<template>
  <view class="shopping-cart-page">
    <view v-show="!Object.keys(cartList).length" class="cart-empty-block">购物车空空如也</view>
    <view v-show="Object.keys(cartList).length" class="cart-product-list">
      <cart-product-item
        v-for="(item, key) in cartList"
        :id="key"
        :key="key"
        :name="item.name"
        :image="item.image"
        :price="item.unitPrice * item.amount"
        :amount="item.amount"
        :checked="item.checked"
        :on-checked-click="onCheckedClick"
        :on-amount-change="onAmountChange"
        :on-item-remove="onItemRemove"
      />
    </view>
    <view class="cart-status-block">
      <view>
        <text class="cart-amount-text">共{{ totalAmount }}件 总计</text>
        <text class="cart-price-text">￥{{ totalPrice }}</text>
      </view>
      <button class="checkout-button">结账</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue';
import cartProductItem from '../../components/shoppingCart/cartProductItem.vue';

const { cartList } = reactive(getApp().globalData);
const totalAmount = ref(0);
const totalPrice = ref(0);

const calcAmountPrice = () => {
  let amountAccumulator = 0;
  let priceAccumulator = 0;
  Object.values(cartList).forEach((item) => {
    if (item.checked) {
      amountAccumulator += item.amount;
      priceAccumulator += item.unitPrice * item.amount;
    }
  });

  totalAmount.value = amountAccumulator;
  totalPrice.value = priceAccumulator;
};

onMounted(calcAmountPrice);
watch(cartList, () => {
  calcAmountPrice();
});

const onCheckedClick = (id: string): void => {
  cartList[id].checked = !cartList[id].checked;
};

const onAmountChange = (id: string, amountNumber: number): void => {
  if (cartList[id].amount + amountNumber > 0) {
    cartList[id].amount += amountNumber;
  }
};

const onItemRemove = (id: string): void => {
  delete cartList[id];
};
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
      border-radius: 24rpx;
      font-size: 34rpx;
    }
  }

  .cart-empty-block {
    margin-top: 80rpx;
    color: #666666;
    font-size: 32rpx;
    text-align: center;
  }
}
</style>
