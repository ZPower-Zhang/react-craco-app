import React, { Component } from 'react'
import { RightOutlined } from '@ant-design/icons';

export default class LoginVerifySlide extends Component {
  render() {
    return (
      <div className="verify-body-slide">
        <span class="slide-msg">向右滑动完成验证</span>
        <div className="slide-block">
          <div className="slide-icon">
            <RightOutlined />
          </div>
          <div className="slide-sub-block">
            <img src={this.props.blockBackImgBase} alt="" srcset="" />
          </div>
        </div>
      </div>
    )
  }
}
