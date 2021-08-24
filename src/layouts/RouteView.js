// import React, { useEffect} from 'react';
// import { renderRoutes } from 'react-router-config';
import { renderRoutes } from '@/utils/renderRoutes'

const RouteView = (props) => {
  const { route: {routes = []} } = props
  return (
    <div>
      { renderRoutes(routes)}
    </div>
  )
}

export default RouteView
