const productList = {
  p000001: {
    name: '森蜂园-蜂王浆',
    image: '/static/product/img-product1.png',
    detail: '多元微量元素 营养丰富',
    price: 258,
    available: true,
  },
  p000002: {
    name: '蜂胶银杏软胶囊',
    image: '/static/product/img-product2.png',
    detail: '天然纯净',
    price: 88,
    available: false,
  },
  p000003: {
    name: '茶花蜂花粉',
    image: '/static/product/img-product3.png',
    detail: '我们只做蜂蜜的搬运工',
    price: 66.8,
    available: true,
  },
  p000004: {
    name: '长白山椴树原蜜',
    image: '/static/product/img-product4.png',
    detail: '源自长白山原始森林',
    price: 74,
    available: true,
  },
  p000005: {
    name: '长白山椴树蜂蜜',
    image: '/static/product/img-product5.png',
    detail: '自然结晶 清甜不腻',
    price: 88.8,
    available: true,
  },
  p000006: {
    name: '多花蜂蜜 （勺蜜）',
    image: '/static/product/img-product6.png',
    detail: '严选多花种蜜源',
    price: 128.8,
    available: true,
  },
  p000007: {
    name: '长白山紫椴蜂蜜（勺蜜）',
    image: '/static/product/img-product7.png',
    detail: '一勺时光 甜蜜随享',
    price: 99,
    available: true,
  },
  p000008: {
    name: '寻蜜蜂蜜礼盒',
    image: '/static/product/img-product8.png',
    detail: '简约礼盒，体面礼赠',
    price: 168.8,
    available: true,
  },
  p000009: {
    name: '长白山椴树蜂蜜礼盒',
    image: '/static/product/img-product9.png',
    detail: '送礼送健康 好蜜人情足',
    price: 699,
    available: false,
  },
  p000010: {
    name: '麦卢卡蜂蜜礼盒',
    image: '/static/product/img-product10.png',
    detail: 'UMF独麦素活性成分',
    price: 898.88,
    available: true,
  },
};

const categoryList = [
  {
    id: '000000',
    name: '麦卢卡蜂蜜',
    image: '/static/category/ico-manuka.png',
    product: {
      p000010: productList['p000010'],
      p000001: productList['p000001'],
    },
  },
  {
    id: '000001',
    name: '森林蜜',
    image: '/static/category/ico-forest-honey.png',
    product: {
      p000004: productList['p000004'],
      p000005: productList['p000005'],
      p000006: productList['p000006'],
      p000007: productList['p000007'],
      p000008: productList['p000008'],
    },
  },
  {
    id: '000002',
    name: '花粉',
    image: '/static/category/ico-pollen.png',
    product: {
      p000003: productList['p000003'],
    },
  },
  {
    id: '000003',
    name: '蜂王浆',
    image: '/static/category/ico-royal-jelly.png',
    product: {
      p000001: productList['p000001'],
      p000009: productList['p000009'],
    },
  },
  {
    id: '000004',
    name: '礼盒',
    image: '/static/category/ico-gift-box.png',
    product: {
      p000001: productList['p000008'],
      p000002: productList['p000009'],
      p000010: productList['p000010'],
    },
  },
];

const productPreview = [
  {
    id: '000000',
    name: '精选好物',
    detail: '热卖推荐',
    product: {
      p000001: productList['p000001'],
      p000002: productList['p000002'],
      p000010: productList['p000010'],
    },
  },
  {
    id: '000001',
    name: '精品抢购',
    detail: '每月惊爆单品',
    product: {
      p000003: productList['p000003'],
      p000005: productList['p000005'],
      p000006: productList['p000006'],
      p000008: productList['p000008'],
    },
  },
  {
    id: '000002',
    name: '多买优惠',
    detail: '两瓶12元/买一送一',
    product: {
      p000004: productList['p000004'],
      p000007: productList['p000007'],
      p000006: productList['p000006'],
    },
  },
  {
    id: '000003',
    name: '正大百年',
    detail: '独家商品',
    product: {
      p000008: productList['p000008'],
      p000009: productList['p000009'],
      p000010: productList['p000010'],
    },
  },
];

const memberProduct = {
  p000004: productList['p000004'],
  p000008: productList['p000008'],
  p000006: productList['p000006'],
  p000003: productList['p000003'],
};

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
  '000007': {
    image: '/static/collection/img-nft7.png',
    name: 'Collection Name #7',
    subtitle: '#7',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC727',
    assetContract: '0x123456789876543333339',
  },
  '000008': {
    image: '/static/collection/img-nft8.png',
    name: 'Collection Name #8',
    subtitle: '#8',
    description:
      'Ultricies sed tincidunt purus porta ornare eget cras vestibulum dui. Est non at integer nam laoreet ullamcorper ut. Etiam urna semper mi aliquam. Blandit viverra dolor viverra ut aliquam.',
    token: 'ERC728',
    assetContract: '0x123456789876543333340',
  },
};

export { categoryList, memberProduct, productPreview, collectionList };
