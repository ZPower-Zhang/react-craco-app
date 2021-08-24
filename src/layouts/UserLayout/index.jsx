import React from 'react'
import './style.less'
import PropTypes from 'prop-types';
import { renderRoutes } from '@/utils/renderRoutes';

const UserLayout = (props) => {
  const { route: { routes = [] } } = props
  return (
    <div className="user-layout-wrapper">
      {renderRoutes(routes)}
    </div>
  )
}

UserLayout.propTypes = {
  route: PropTypes.object.isRequired
}
export default UserLayout
