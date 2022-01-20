<template>
  <view class="collection-detail-page">
    <image class="nft-image" src="/static/collection/img-nft1.png" />
    <view class="collection-title">Collection Name#19</view>
    <view class="collection-subtitle">#19</view>
    <view class="collection-description-block">
      <text class="description-title">Description</text>
      <text class="description-content">
        Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper
        ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.
      </text>
    </view>
    <view class="collection-description-block">
      <text class="description-title">Token Standard</text>
      <text class="description-content">ERC721</text>
    </view>
    <view class="collection-description-block">
      <text class="description-title">Asset contract</text>
      <text class="description-content">0x123456789876543333333</text>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.collection-detail-page {
  padding: 32rpx;
  color: #105b63;

  .nft-image {
    width: 688rpx;
    height: 688rpx;
  }
  .collection-title {
    height: 40rpx;
    line-height: 40rpx;
    margin-top: 20rpx;
    font-size: 34rpx;
    font-weight: bold;
  }
  .collection-subtitle {
    line-height: 40rpx;
    font-size: 26rpx;
  }
  .collection-description-block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20rpx;

    .description-title {
      line-height: 40rpx;
      font-size: 24rpx;
      font-weight: 600;
    }
    .description-content {
      line-height: 32rpx;
      font-size: 22rpx;
    }
  }
}
</style>
