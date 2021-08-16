import * as React from 'react'
import { renderRoutes } from '@/utils/renderRoutes';

const Overview = (props) => {
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Overview
