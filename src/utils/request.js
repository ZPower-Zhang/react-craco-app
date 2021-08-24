import axios from 'axios'
// import { Map } from 'immutable'

const instance =  axios.create({
  baseURL: '/api',
  timeout: 1000 * 30 // 请求超时时间
})

const err = error => {
  if (error.response) {

  }
  return Promise.reject(error)
}

instance.interceptors.request.use(config => {
  return config
}, err)

instance.interceptors.response.use(response => {
  if (response)
  return response.data
}, err)

export {
  instance as axios
}
