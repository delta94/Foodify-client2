import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Font } from 'expo'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from './selection.json'
export const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import AppNav from './Components/AppNavigator'

class App extends Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'icomoon': require('./resources/fonts/icomoon.ttf'),
      'montserratMedium': require('./resources/fonts/montserratMedium.ttf'),
      'montserratRegular': require('./resources/fonts/montserratRegular.ttf'),
    })
    this.setState({fontLoaded: true})
  }

  render() {
    if(!this.state.fontLoaded) return null
    return <AppNav />
  }
}

export default App