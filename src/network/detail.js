import {request} from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
  }
  })
}

export class getDetailIntro {
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services


  }
}