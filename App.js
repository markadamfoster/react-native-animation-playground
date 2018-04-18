import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import Navigator from './src/Navigator'

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true)

    return <Navigator />
  }
}
