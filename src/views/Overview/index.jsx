import * as React from 'react'
import { renderRoutes } from '@/utils/renderRoutes';

const Overview = (props) => {
  // console.info('props', props)
  // console.info('props.route', props.route)
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Overview
