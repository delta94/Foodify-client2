import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, AsyncStorage } from 'react-native'
import { Font } from 'expo'

import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from './selection.json'
export const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import AppNav from './Components/AppNavigator'
import LoginContainer from './Containers/LoginContainer'

class App extends Component {

  state = {
    fontLoaded: false,
    token: ''
  }

  setToken = token => this.setState({ token })

  async componentWillMount() {
    const token = await AsyncStorage.getItem('token')
    this.setToken(token)
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
    return(
      <ApolloProvider client={client}>
        { this.state.token ? <AppNav /> : <LoginContainer setToken={this.setToken} /> }
      </ApolloProvider>
    )
  }
}

export default App
