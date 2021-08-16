import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from '@/utils/renderRoutes';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import routes from '@/router';
import store from '@/store';

export default React.memo(function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router basename={window.__MICRO_APP_BASE_URL__ || '/'}>{renderRoutes(routes, store)}</Router>
      </Layout>
    </Provider>
  )
})
