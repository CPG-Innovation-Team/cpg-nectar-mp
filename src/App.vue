<script lang="ts">
const globalData = {
  cartList: {
    '000000': {
      name: '青椒',
      image: '/static/product/img-product1.png',
      unitPrice: 18,
      amount: 1,
      checked: true,
    },
    '000001': {
      name: '鸡胸肉',
      image: '/static/product/img-product2.png',
      unitPrice: 688.88,
      amount: 1,
      checked: true,
    },
  },
};

export default {
  globalData,
};
</script>
<style>
button {
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
  background: #105b63;
  color: #ffffff;
}
</style>
