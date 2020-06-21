import { request } from './index';

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

//整理数据 封装成类
//商品信息
export class DetailInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.nowPrice = itemInfo.lowNowPrice,
    this.oldPrice = itemInfo.lowPrice,
    this.discount = itemInfo.discountDesc,
    this.columns = columns,
    this.services = services
  }
}

//店铺信息
export class ClassDetailShopInfo {
  constructor(shopInfo) {
    this.cFans = shopInfo.cFans,
    this.cGoods = shopInfo.cGoods,
    this.cSells = shopInfo.cSells,
    this.name = shopInfo.name,
    this.shopLogo = shopInfo.shopLogo,
    this.score = shopInfo.score
  }
} 
//参数数据
export class ClassDetailOption {
  constructor(itemParams) {
    this.size = itemParams.rule.tables[0],
    this.product = itemParams.info.set
  }
}
