
import React, {memo, Component } from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class UserInfo extends Component{
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const {userInfo } = this.props;
    return (
      <div className="user-info-wrap">
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {userInfo.name} <DownOutlined />
          </span>
        </Dropdown>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.getIn(['user', 'userInfo'])
})

export default connect(mapStateToProps)(memo(UserInfo))