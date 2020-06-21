import { request } from './index';

export function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeListData(type,page) {
  return request({
    // url:/home/data?type=pop(sell|new)&page=1
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}