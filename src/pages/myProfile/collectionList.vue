<template>
  <view class="collection-list-page">
    <view class="collection-tab" @click="listSwitch">
      <image class="arrow-icon" :class="{ rotate: !listVisible }" src="/static/ico-arrow-down.svg" />
      <text>Collection Name</text>
    </view>
    <view class="collection-content-list" :class="{ hide: !listVisible }">
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft1.png" />
      </navigator>
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft2.png" />
      </navigator>
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft3.png" />
      </navigator>
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft4.png" />
      </navigator>
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft5.png" />
      </navigator>
      <navigator url="/pages/myProfile/collectionDetail">
        <image class="nft-image" src="/static/collection/img-nft6.png" />
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const listVisible = ref(true);
const listSwitch = () => {
  listVisible.value = !listVisible.value;
};
</script>

<style lang="scss" scoped>
.collection-list-page {
  padding: 32rpx;

  .collection-tab {
    display: flex;
    align-items: center;
    height: 40rpx;
    line-height: 40rpx;
    color: #105b63;
    font-size: 28rpx;
    font-weight: 600;

    .arrow-icon {
      width: 32rpx;
      height: 32rpx;
      margin-right: 8rpx;
      transition: transform 0.5s ease;

      &.rotate {
        transform: rotate(-90deg);
      }
    }
  }
  .collection-content-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-height: 100vh;
    margin-top: 16rpx;
    overflow: hidden;
    transition: max-height 0.5s ease;

    &.hide {
      max-height: 0;
    }

    .nft-image {
      width: 336rpx;
      height: 336rpx;
      margin-bottom: 16rpx;
    }
  }
}
</style>
