import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import MainScreen from './components/MainScreen'
import SecondScreen from './components/SecondScreen'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'

export default  class Root extends Component {
  render() {
    return(
      <Router hideNavBar = {true} >
        <Scene key="root">
          <Scene key = "MainScreen" component = {MainScreen} title = "Home"/>
          <Scene key = "SecondScreen" component = {SecondScreen} title = "SecondScreen"/>
        </Scene>
      </Router>
    )
  }
}
