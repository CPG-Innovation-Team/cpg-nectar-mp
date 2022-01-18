<template>
  <view class="profile-page">
    <view class="user-info">
      <image class="user-avatar" src="/static/ico-avatar.png" />
      <text class="user-name-text">John Doe</text>
      <text class="user-mobile-text">188******99</text>
    </view>
    <view class="profile-list">
      <profile-item itemName="订单" />
      <profile-item itemName="账户设置" />
      <profile-item itemName="纪念品" />
      <profile-item itemName="优惠券" />
      <profile-item itemName="分享" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import profileItem from '@/components/myProfile/profileItem.vue';
</script>

<style lang="scss" scoped>
.profile-page {
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48rpx;

    .user-avatar {
      width: 144rpx;
      height: 144rpx;
      margin-top: 8rpx;
    }
    .user-name-text {
      height: 72rpx;
      line-height: 72rpx;
      margin-top: 16rpx;
      font-size: 48rpx;
      font-weight: 600;
    }
    .user-mobile-text {
      height: 32rpx;
      line-height: 32rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 24rpx;
    }
  }

  .profile-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
