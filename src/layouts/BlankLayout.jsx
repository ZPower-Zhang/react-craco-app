import React from 'react'
import { Layout } from 'antd';

const BlankLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Layout>
      { children }
      </Layout>
    </React.Fragment>
  )
}

export default BlankLayout
