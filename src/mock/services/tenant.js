import Mock from 'mockjs';
import { builder, getBody } from '../util'

Mock.mock('/tenant/list', 'get', (options) => {
  return builder({
    code: '0',
    msg: '',
    'data|5':[{
      'id|+1': 1,
      'name|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
      'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
      'mockAction|1': ['下载', '试听', '喜欢']
    }]
  })
})