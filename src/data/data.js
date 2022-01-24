const categoryList = [
  { id: '000000', name: '麦卢卡蜂蜜', image: '/static/category/ico-manuka.png' },
  { id: '000001', name: '森林蜜', image: '/static/category/ico-forest-honey.png' },
  { id: '000002', name: '花粉', image: '/static/category/ico-pollen.png' },
  { id: '000003', name: '蜂王浆', image: '/static/category/ico-royal-jelly.png' },
  { id: '000004', name: '礼盒', image: '/static/category/ico-gift-box.png' },
];

const productPreviewTab = [
  { id: '000000', name: '精选好物', detail: '热卖推荐' },
  { id: '000001', name: '精品抢购', detail: '每月惊爆单品' },
  { id: '000002', name: '多买优惠', detail: '两瓶12元/买一送一' },
  { id: '000003', name: '正大百年', detail: '独家商品' },
];

const memberProduct = [
  { id: 0, image: '/static/product/img-product1.png', price: 5.22 },
  { id: 1, image: '/static/product/img-product2.png', price: 3.22 },
  { id: 2, image: '/static/product/img-product3.png', price: 65.22 },
  { id: 3, image: '/static/product/img-product4.png', price: 35.22 },
];

const collectionList = {
  '000001': {
    image: '/static/collection/img-nft1.png',
    name: 'Collection Name #1',
    subtitle: '#1',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC721',
    assetContract: '0x123456789876543333333',
  },
  '000002': {
    image: '/static/collection/img-nft2.png',
    name: 'Collection Name #2',
    subtitle: '#2',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC722',
    assetContract: '0x123456789876543333334',
  },
  '000003': {
    image: '/static/collection/img-nft3.png',
    name: 'Collection Name #3',
    subtitle: '#3',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC723',
    assetContract: '0x123456789876543333335',
  },
  '000004': {
    image: '/static/collection/img-nft4.png',
    name: 'Collection Name #4',
    subtitle: '#4',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC724',
    assetContract: '0x123456789876543333336',
  },
  '000005': {
    image: '/static/collection/img-nft5.png',
    name: 'Collection Name #5',
    subtitle: '#5',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC725',
    assetContract: '0x123456789876543333337',
  },
  '000006': {
    image: '/static/collection/img-nft6.png',
    name: 'Collection Name #6',
    subtitle: '#6',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC726',
    assetContract: '0x123456789876543333338',
  },
};

export { categoryList, memberProduct, productPreviewTab, collectionList };
