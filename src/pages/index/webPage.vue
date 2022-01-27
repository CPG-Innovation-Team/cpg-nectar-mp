<template>
  <web-view v-if="url" :src="url" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';

const pages = getCurrentPages();
const url = ref(null);

onShow((): void => {
  const { options } = pages[pages.length - 1];
  url.value = decodeURIComponent(options.url);
});
</script>

<style lang="scss" scoped></style>
