import React, { Component } from 'react'

export default class LoginVerifyImg extends Component {
  constructor (props){
    super(props)
    this.state = {
      pointBackImgBase: 'data:image/png;base64,'
    }
  }
  render () {
    return (
      <div className="verify-body-img">
        <div className="verify-body-img-wrap">
          <img src={ this.props.pointBackImgBase } ref="canvas" alt="" />
        </div>
      </div>
    )
  }
}
