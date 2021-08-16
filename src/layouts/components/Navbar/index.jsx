import React, { memo, Component } from 'react'

import { Layout } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import UserInfo from './UserInfo'
import Navigation from '../Navigation'

import './index.less'

const { Header } = Layout;


class Navbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    });
    this.props.callback(!collapsed)
  }
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}
        <Navigation {...this.props}/>
        <UserInfo />
      </Header>
    )
  }
}

export default memo(Navbar)