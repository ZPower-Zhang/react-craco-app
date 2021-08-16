import * as React from 'react';
import { Redirect } from 'react-router-dom';

const SuspenseComponent = (Component) => (props) => {
  return (
    <React.Suspense fallback={null}>
      <Component {...props}></Component>
    </React.Suspense>
  );
};

// const BlankLayout = React.lazy(() => import('layouts/BlankLayout'))
const UserLayout = React.lazy(() => import('layouts/UserLayout'))
const Login = React.lazy(() => import('views/user/login'))
const Register = React.lazy(() => import('views/user/register'))
const BasicLayout = React.lazy(() => import('layouts/BasicLayout'));
// const Home = React.lazy(() => import('views/home'))

// const Overview = React.lazy(() => import('views/overview'))
const Analysis = React.lazy(() => import('views/overview/Analysis'))
const Workplace = React.lazy(() => import('views/overview/Workplace'))
// const ModuleVue = React.lazy(() => import('views/module/ModuleVue'))

const RouteView = React.lazy(() => import('layouts/RouteView'))
const Lottery = React.lazy(() => import('views/marketing/lottery/index'))

const routes = [
  { path: '/', exact: true, name: '/', render: () => <Redirect to="/user/login" /> },
  {
    path: '/user',
    exact: false,
    name: 'user',
    component: SuspenseComponent(UserLayout),
    routes: [
      {
        path: '/user/login',
        exact: false,
        name: 'login',
        component: SuspenseComponent(Login)
      },
      {
        path: '/user/register',
        exact: false,
        name: 'register',
        component: SuspenseComponent(Register)
      }
    ]
  },
  {
    path: '/authorized',
    name: 'authorized',
    component: SuspenseComponent(BasicLayout),
    routes: [
      {
        path: '/authorized/overview',
        exact: false,
        name: '概览',
        component: SuspenseComponent(RouteView),
        // render: () => <Redirect to="/authorized/overview/analysis" />,
        meta: { name: '概览', icon: 'HomeOutlined' },
        routes: [
          { 
            path: '/authorized/overview', 
            exact: true, 
            hidden: true, 
            name: '概览', 
            render: () => <Redirect to="/authorized/overview/analysis" /> ,
            meta: { name: '概览', icon: 'UserOutlined' },
          },
          {
            path: '/authorized/overview/analysis',
            exact: false,
            name: '分析',
            component: SuspenseComponent(Analysis),
            meta: { name: '分析', icon: 'UserOutlined' },
          },
          {
            path: '/authorized/overview/workplace',
            exact: false,
            name: '工作台',
            component: SuspenseComponent(Workplace),
            meta: { name: '工作台', icon: 'UserOutlined' },
          }
        ]
      },
      {
        path: '/authorized/marketing',
        exact: false,
        name: '营销工具',
        component: SuspenseComponent(RouteView),
        redirect: '/authorized/marketing/lottery',
        meta: { name: '营销工具', icon: 'UserOutlined' },
        routes: [
          { 
            path: '/authorized/marketing', 
            exact: true, 
            hidden: true, 
            name: 'marketing', 
            render: () => <Redirect to="/authorized/marketing/lottery" /> ,
            meta: { name: 'marketing', icon: 'UserOutlined' },
          },
          {
            path: '/authorized/marketing/lottery',
            exact: false,
            name: '抽奖',
            component: SuspenseComponent(Lottery),
            meta: { name: '抽奖', icon: 'UserOutlined' },
          }
        ]
      }
    ]
  }
];

export default routes;
