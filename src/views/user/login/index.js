// import React, { memo, useState, useEffect } from 'react'
// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
// import { Tabs } from 'antd';
// import './style.less'
// import LoginForm from './components/LoginForm'
// import LoginVerify from './components/LoginVerify'

// import { setUser } from '@/store/user/action'

// const { TabPane } = Tabs;

// const Login = (props) => {
//   const [curKey, setCurKey] = useState(1)
//   const [verifyFlag, setVerifyFlag] = useState(false)

//   const callback = (key) => {
//     setCurKey(key)
//   }

//   const dispatch = useDispatch();
//   const { userInfo } = useSelector(
//     state => ({
//       userInfo: state.getIn(['user', 'userInfo']),
//     }),
//     shallowEqual
//   )
//   const verifyLogin = (value) => {
//     onChangeVerify(true)
//   }
//   const onChangeVerify = (value) => {
//     setVerifyFlag(value)
//   }
//   useEffect(() => {
//     dispatch(setUser({name: 'nzhang123'}))
//     console.info('userInfo', userInfo)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <div className="login-layout-wrapper">
//       <video className="bg-video" autoPlay muted loop>
//         <source src="https://www.chinapex.com.cn/images/home/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="login-window">
//         <p className="title"> Hello 后台系统{userInfo.name}</p>
//         <Tabs centered defaultActiveKey={curKey} onChange={callback}>
//           <TabPane tab="账号密码登录" key="1">
//             <LoginForm {...props} verifyLogin={verifyLogin} curKey={curKey} />
//           </TabPane>
//           <TabPane tab="手机号登录" key="2">
//             Content of Tab Pane 2
//           </TabPane>
//         </Tabs>
//       </div>
//       {
//         verifyFlag ? <LoginVerify onChangeVerify={onChangeVerify} /> : null
//       }
//     </div>
//   )
// }
// export default memo(Login)


import React, { memo, Component} from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import './style.less'
import LoginForm from './components/LoginForm'
import LoginVerify from './components/LoginVerify'
import { setUser, setUserStatus } from '@/store/user/action'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verifyFlag: false,
      curKey: 1
    }
  }

  onChangeVerify = value => {
    if (value) {
      this.setState({
        verifyFlag: false,
      })
      this.props.setUserStatus(true)
      this.props.history.push('/authorized/overview/analysis')
    }
  }
  verifyLogin = (value) => {
    this.props.setUserInfo({name: value.username})
    if (value) {
      this.setState({
        verifyFlag: true
      })
    }
  }
  callback = key => {
    this.setState({
      curKey: key
    })
  }

  componentDidMount() {
    this.props.setUserInfo({name: '1234567890'})
  }

  render() {
    // const { userInfo } = this.props
    const { verifyFlag, curKey } = this.state
    return (
      <div className="login-layout-wrapper">
        <video className="bg-video" autoPlay muted loop>
          <source src="//video.699pic.com/videos/80/62/39/a_qmbxMqNvK9jr1583806239.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="login-window">
          <p className="title"> Hello 后台系统</p>
          <Tabs centered defaultActiveKey={curKey} onChange={this.callback}>
            <Tabs.TabPane tab="账号密码登录" key="1">
              <LoginForm {...this.props} verifyLogin={this.verifyLogin} curKey={curKey} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="手机号登录" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
          </Tabs>
        </div>
        {
          verifyFlag ? <LoginVerify onChangeVerify={this.onChangeVerify} /> : null
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userInfo: state.get('user').get('userInfo'),
})

const mapDispatchToProps = dispatch =>({
  setUserInfo(data) {
    dispatch(setUser(data))
  },
  setUserStatus(data) {
    dispatch(setUserStatus(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login))