import * as React from 'react'
import {  Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import routes from '@/router';
import { HomeOutlined } from '@ant-design/icons';

const flattenRoutes = (arr, routesMap) => {
  arr.map(cur => {
    if (!routesMap[cur['path']]) {
      routesMap[cur['path']] = cur['name'] || ''
    }
    Array.isArray(cur.routes) && flattenRoutes(cur.routes, routesMap)
    return cur
  })
  return routesMap
}

const breadcrumbNameMap = flattenRoutes(routes, {})

const Navigation = (props) => {
  const { location: { pathname = '' }} = props;
  const pathSnippets = pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, idx) => {
    const url = `/${pathSnippets.slice(0, idx + 1).join('/')}`;
    if (!idx) return ''
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home"><Link to="/"><HomeOutlined />首页</Link></Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default withRouter(Navigation)

