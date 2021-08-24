import React, { Component } from 'react'

export default class ModuleVue extends Component {
  render () {
    return (
      <div>
        <micro-app name='app1' url='http://localhost:3000/' baseurl='/my-page'></micro-app>
      </div>
    )
  }
}
