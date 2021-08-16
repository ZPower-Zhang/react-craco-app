import React, { Component } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import LoginVerifyImg from './LoginVerifyImg'
import LoginVerifySlide from './LoginVerifySlide'
import { reqGet } from '@/api/login'

export default class LoginVerify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointBackImgBase: 'data:image/png;base64,',
      blockBackImgBase: ''
    }
  }
  closeBox = (evt) => {
    this.props.onChangeVerify(false)
  }
  componentDidMount() {
    reqGet().then(res => {
      if (res) {
        this.setState({
          pointBackImgBase: 'data:image/png;base64,' + res.data['repData'].originalImageBase64,
          blockBackImgBase: 'data:image/png;base64,' + res.data['repData'].jigsawImageBase64
        })
      }
    })
  }
  render() {
    return (
      <div className="verify-mask">
        <div className="verify-box">
          <div className="verifybox-top">
            请完成安全验证
            <CloseOutlined className="verifybox-close" onClick={this.closeBox} />
          </div>
        
          <div className="verifybox-body">
            <LoginVerifyImg blockBackImgBase="this.state.blockBackImgBase" />
            <LoginVerifySlide pointBackImgBase={this.state.pointBackImgBase} />
          </div>
        </div>
      </div>
    )
  }
}
