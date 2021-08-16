/**
 * @description: 路由权限
 * @param {*}
 * @return {*}
 */
import * as React from 'react'
// import { useSelector } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom'
import store from '@/store'

function _extends() {
  // eslint-disable-next-line no-func-assign
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  // eslint-disable-next-line no-unused-vars
  return _extends.apply(this, arguments);
}

const whiteList = ['/user', '/user/register', '/user/login', '/']

export const renderRoutes = (routes = null, extraProps = null, switchProps = {}) => {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? React.createElement(Switch, switchProps, routes.map(function (route, i) {
    return React.createElement(Route, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: (props) => {
        const isLogin = store.getState().getIn(['user', 'isLogin'])
        if (isLogin) {
          return route.render ? route.render(_extends({}, props, {}, extraProps, {
            route: route
          })) : React.createElement(route.component, _extends({}, props, extraProps, {
            route: route
          }));
        } else {
          if (whiteList.includes(route.path)) {
            return route.render ? route.render(_extends({}, props, {}, extraProps, {
              route: route
            })) : React.createElement(route.component, _extends({}, props, extraProps, {
              route: route
            }));
          } else {
            return <Redirect to={{path: '/user/login'}} />
          }
        }
      }
    });
  })) : null;
}
