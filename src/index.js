import React from 'react';
import ReactDOM from 'react-dom';
import microApp from '@micro-zoe/micro-app'
import { ConfigProvider } from 'antd'
import './assets/less/index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './mock'

moment.locale('zh-cn');

microApp.start()

// const authed = false // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
// const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置


ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      getPopupContainer={node => {
        if (node) {
          return node.parentNode;
        }
        return document.body;
      }}
      locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
