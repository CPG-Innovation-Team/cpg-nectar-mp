<template>
  <view class="category-block">
    <view
      v-for="(item, key) in props.data"
      :key="item.id"
      class="category-item"
      :class="{ active: item.selected }"
      @click="onCategoryItemClick(key)"
    >
      <image class="category-icon" :src="item.image" />
      <text class="category-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface IProps {
  data: object;
  onCategoryItemClick: () => void;
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.category-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 686rpx;
  height: 134rpx;
  margin-top: 32rpx;

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 28rpx;
    text-align: center;

    .category-icon {
      width: 100rpx;
      height: 100rpx;
    }
    .category-text {
      height: 22rpx;
      line-height: 22rpx;
      margin-top: 8rpx;
      padding: 4rpx 8rpx;
      border-radius: 20rpx;
      font-size: 22rpx;
    }

    &.active {
      .category-icon {
        border-radius: 32rpx;
        box-shadow: 0 0 12rpx #105b63;
      }
      .category-text {
        background-color: #105b63;
        color: #ffffff;
      }
    }
  }
}
</style>
