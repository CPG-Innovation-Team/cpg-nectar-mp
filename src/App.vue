<script lang="ts">
const globalData = {
  cartList: {},
};

export default {
  globalData,
  onLaunch() {
    globalData.cartList = uni.getStorageSync('cartList') || {};   
  },
};
</script>
<style lang="scss">
button {
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
  background-color: $uni-color-primary;
  color: #ffffff;
}
</style>
