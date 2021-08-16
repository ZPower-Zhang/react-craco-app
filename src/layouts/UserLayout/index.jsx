import React from 'react'
import './style.less'
import { renderRoutes } from '@/utils/renderRoutes';
// import Login from '../../views/Login'

const UserLayout = (props) => {
  return (
    <div className="user-layout-wrapper">
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default UserLayout

// export default class UserLayout extends Component {
//   state= {
//     videoUrl: "https://www.chinapex.com.cn/images/home/video.mp4"
//   }
//   render() {
//     return (
//       <div className="user-layout-wrapper">
//         <div className="user-container">
//           {/* <Login /> */}
//           <video className="bg-video" loop autoPlay>
//             <source src={this.state.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <Login />
//         </div>
//       </div>
//     )
//   }
// }
