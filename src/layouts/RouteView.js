// import React, { useEffect} from 'react';
// import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { renderRoutes } from '@/utils/renderRoutes'

const RouteView = (props) => {
  const { route: { routes = [] } } = props
  return (
    <div>
      { renderRoutes(routes)}
    </div>
  )
}

RouteView.propTypes = {
  route: PropTypes.object.isRequired
}

export default RouteView
