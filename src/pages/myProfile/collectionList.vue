<template>
  <view class="collection-list-page">
    <view class="collection-tab">
      <image class="arrow-icon" src="/static/ico-arrow-down.svg" />
      <text>Collection Name</text>
    </view>
    <view class="collection-content-list">
      <image class="nft-image" src="/static/collection/img-nft1.png" />
      <image class="nft-image" src="/static/collection/img-nft2.png" />
      <image class="nft-image" src="/static/collection/img-nft3.png" />
      <image class="nft-image" src="/static/collection/img-nft4.png" />
      <image class="nft-image" src="/static/collection/img-nft5.png" />
      <image class="nft-image" src="/static/collection/img-nft6.png" />
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.collection-list-page {
  padding: 32rpx;

  .collection-tab {
    display: flex;
    align-items: center;
    height: 40rpx;
    line-height: 40rpx;
    color: #105B63;
    font-size: 28rpx;
    font-weight: 600;

    .arrow-icon {
      width: 32rpx;
      height: 32rpx;
      margin-right: 8rpx;
    }
  }
  .collection-content-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16rpx;

    .nft-image {
      width: 336rpx;
      height: 336rpx;
      margin-bottom: 16rpx;
    }
  }
}
</style>
