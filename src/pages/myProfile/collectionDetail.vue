<template>
  <view class="collection-detail-page">
    <image class="nft-image" :src="collectionData.image" />
    <view class="collection-title">{{ collectionData.name }}</view>
    <view class="collection-subtitle">{{ collectionData.subtitle }}</view>
    <view class="collection-description-block">
      <text class="description-title">Description</text>
      <text class="description-content">{{ collectionData.description }}</text>
    </view>
    <view class="collection-description-block">
      <text class="description-title">Token Standard</text>
      <text class="description-content">{{ collectionData.token }}</text>
    </view>
    <view class="collection-description-block">
      <text class="description-title">Asset contract</text>
      <text class="description-content">{{ collectionData.assetContract }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { collectionList } from '../../data/data';

interface CollectionData {
  image: string;
  name: string;
  subtitle: string;
  description: string;
  token: string;
  assetContract: string;
}

const pages = getCurrentPages();
const collectionData: CollectionData = reactive({
  image: '',
  name: '',
  subtitle: '',
  description: '',
  token: '',
  assetContract: '',
});

onMounted(() => {
  const { options } = pages[pages.length - 1];
  Object.keys(collectionList[options.id]).forEach((key) => {
    collectionData[key] = collectionList[options.id][key];
  });
});
</script>

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
