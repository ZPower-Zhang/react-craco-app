import qs from 'qs'
import { axios } from '@/utils/request'

const scope = 'server'

export const loginByUsername = (username, password, code, randomStr) => {
  let grant_type = 'password'
  let dataObj = qs.stringify({ username: username, password: password })

  return axios({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic bmV4dXM6bmV4dXM='
    },
    method: 'post',
    params: { randomStr, code, grant_type },
    data: dataObj
  })
}

export const refreshToken = refresh_token => {
  const grant_type = 'refresh_token'
  return axios({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic bmV4dXM6bmV4dXM='
    },
    method: 'post',
    params: { refresh_token, grant_type, scope }
  })
}

export const loginByMobile = (mobile, code) => {
  const grant_type = 'mobile'
  return axios({
    url: '/auth/mobile/token/sms',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic bmV4dXM6bmV4dXM='
    },
    method: 'post',
    params: { mobile: 'SMS@' + mobile, code: code, grant_type }
  })
}

export const loginBySocial = (state, code) => {
  const grant_type = 'mobile'
  return axios({
    url: '/auth/mobile/token/social',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic bmV4dXM6bmV4dXM='
    },
    method: 'post',
    params: { mobile: state + '@' + code, grant_type }
  })
}

export const logout = () => {
  return axios({
    url: '/auth/token/logout',
    method: 'delete'
  })
}

// 获取验证图片  以及token
export function reqGet(data) {
  return axios({
    url: '/code',
    method: 'get',
    data
  })
}

// 滑动或者点选验证
export function reqCheck(data) {
  return axios({
    url: '/code/check',
    method: 'post',
    params: data
  })
}

// 获取头像
export function getAvatar(url) {
  return axios({
    url: url,
    method: 'get',
    responseType: 'blob'
  })
}

// 修改个人信息
export function modifyUserInfo(parameter) {
  return axios({
    url: '/admin/user/edit',
    method: 'put',
    data: parameter
  })
}

/**
 * 获取国际化语言包
 * @param {*} project nexus
 * @param {*} lang  zh
 */
export function getSysmsgBylang (project, lang) {
  return axios({
    url: '/i18n/sysmsg/' + project + '/' + lang,
    method: 'get'
  })
}
