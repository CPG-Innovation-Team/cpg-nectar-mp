<template>
  <view class="index-page">
    <image class="logo" src="/static/ico-logo.png" />
    <category-block />
    <member-exclusive />
  </view>
</template>

<script lang="ts">
import CategoryBlock from '@/components/categoryBlock.vue';
import MemberExclusive from '@/components/index/memberExclusive.vue';

export default {
  components: {
    CategoryBlock,
    MemberExclusive,
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80rpx;
  background-color: #E5E5E5;
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
