<template>
  <view class="content">
    <image class="logo" src="/static/ico-logo.png" />
    <category-block />
  </view>
</template>

<script setup lang="ts">
import CategoryBlock from '@/components/categoryBlock.vue';
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

</style>
