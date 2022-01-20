<template>
  <navigator class="profile-item" :url="props.navigateTo">
    <text class="item-content-text">{{ props.itemName }}</text>
    <image class="profile-icon" src="/static/ico-entry.svg" />
  </navigator>
</template>

<script lang="ts" setup>
interface IProps {
  itemName: string;
  navigateTo: string;
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.profile-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 686rpx;
  height: 64rpx;
  margin-top: 16rpx;
  padding: 16rpx;
  border-radius: 24rpx;
  background: #ffffff;
  box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.08);

  .item-content-text {
    margin-left: 16rpx;
    font-size: 24rpx;
    font-weight: 600;
  }

  .profile-icon {
    width: 64rpx;
    height: 64rpx;
  }
}
</style>
