import React, { Component } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import ImageCode from './ImageCode';

export default class LoginVerify extends Component {
  state = {
    url: '',
  };

  getImage = () => {
    return 'https://t7.baidu.com/it/u=364226397,1757963013&fm=193&f=GIF';
  };

  componentDidMount() {
    this.setState({ url: this.getImage() });
  }

  onReload = () => {
    this.setState({ url: this.getImage() });
  };

  closeBox = (evt) => {
    this.props.onChangeVerify(false)
  }

  onMatch = val => {
    this.props.onChangeVerify(true)
  }

  render() {
    return (
      <div className="verify-mask">
        <div className="verify-box">
          <div className="verifybox-top">
            请完成安全验证
            <CloseOutlined
              className="verifybox-close"
              onClick={this.closeBox}
            />
          </div>
          <div className="verifybox-body">
            <ImageCode
              imageUrl={this.state.url}
              onReload={this.onReload}
              onMatch={this.onMatch}
            />
          </div>
        </div>
      </div>
    );
  }
}
