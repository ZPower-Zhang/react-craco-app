import Mock from 'mockjs';

// 模拟延迟
Mock.setup({
  timeout: 500
})

// 生成随机数据
Mock.mock('/api/tenant/list', () => {
  return Mock.mock({
    code: '0',
    msg: '',
    data: [
      { 'id': 1, 'name': '苏炳添的组织', 'status': '0', 'delFlag': '0', 'createTime': '2021-07-02 10:09:44', 'updateTime': '2021-07-02 10:09:44' }, 
      { 'id': 2, 'name': '全红婵的组织', 'status': '0', 'delFlag': '0', 'createTime': '2021-07-02 10:39:30', 'updateTime': '2021-07-02 10:39:30' },
      { 'id': 3, 'name': '郭晶晶的组织', 'status': '1', 'delFlag': '0', 'createTime': '2021-07-02 10:39:30', 'updateTime': '2021-07-02 10:39:30' }
    ]
  })
})

Mock.mock('/api/lottery/list', () => {
  return Mock.mock({
    code: '0',
    msg: '',
    'data|105':[ {
      'id|+1': 1,
      'name|1':[ '哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者' ],
      'wxnickname|1': [ '你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘' ],
      'phone': /^1[385][1-9]\d{8}/
    } ]
  })
})

// import { isIE } from './util'

// // 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
// if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
//   if (isIE()) {
//     console.error('[antd-pro] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.')
//   }
//   // 使用同步加载依赖
//   // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
//   console.log('[antd-pro] mock mounting')
//   const Mock = require('mockjs')
//   require('./services/tenant')
//   // require('./services/user')
//   // require('./services/manage')
//   // require('./services/other')
//   // require('./services/tagCloud')
//   // require('./services/article')

//   Mock.setup({
//     timeout: 800 // setter delay time
//   })
//   console.log('[antd-pro] mock mounted')
// }
