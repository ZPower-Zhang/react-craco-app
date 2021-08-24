import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from '@/utils/renderRoutes';
import { Layout } from 'antd';

import { Navbar, SiderMenu } from './../components';

const BasicLayout = (props) => {
  const [ collapsed, setCollapsed ] = useState(false);
  const { route: { routes = [] } } = props

  const callback = (msg) => {
    setCollapsed(msg);
  };

  return (
    <Layout>
      <SiderMenu collapsed={ collapsed } { ...props } />
      <Layout className="site-layout">
        <Navbar callback={ callback } { ...props } />
        <Layout.Content className="site-layout-background">
          {renderRoutes(routes)}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
// console.info('BasicLayout', BasicLayout)
BasicLayout.propTypes = {
  route: PropTypes.object.isRequired
}

export default memo(BasicLayout)
