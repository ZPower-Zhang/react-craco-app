import { axios } from '@/utils/request'

export function getTenantList (params) {
  return axios({
    url: '/tenant/list',
    method: 'get',
    params: params
  })
}

export function getLotteryList (params) {
  return axios({
    url: '/lottery/list',
    method: 'get',
    params: params
  })
}
