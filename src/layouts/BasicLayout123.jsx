import {Component} from 'react'
import { renderRoutes } from '@/utils/renderRoutes';
import { Layout } from 'antd';

import { Navbar, SiderMenu } from './components'


const {Content } = Layout;

// const BasicLayout = (props) => {

//   const { route } = props;

//   state = () {
//     collapsed: false
//   }
//   const { collapsed } = this.state
//   const siderProps = {
//     route,
//     collapsed: collapsed
//   }
//   this.callback = (msg) =>  {
//     this.setState({
//       collapsed: msg
//     })
//   }

//   return (
//     <Layout>
//       <SiderMenu {...siderProps}  />
//       <Layout className="site-layout">
//         <Navbar callback = { this.callback} />
//         <Content
//           className="site-layout-background" >
//             {renderRoutes(route.routes)}
//         </Content>
//       </Layout>
//     </Layout>
//   )
// }

class BasicLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  callback = (msg) =>  {
    this.setState({
      collapsed: msg
    })
  }
  render () {
    const { route } = this.props;
    const { collapsed } = this.state
    const siderProps = {
      route,
      collapsed: collapsed
    }
    return (
      <Layout>
        <SiderMenu {...siderProps}  />
        <Layout className="site-layout">
          <Navbar callback = { this.callback} />
          <Content
            className="site-layout-background" >
              {renderRoutes(route.routes)}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
