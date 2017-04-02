import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import MainScreen from './components/MainScreen'
import SecondScreen from './components/SecondScreen'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Denomination from './components/Denomination'

export default  class Root extends Component {
  render() {
    return(
      <Router hideNavBar = {false} >
        <Scene key="root" navBar = {TopBar}>
          <Scene key = "MainScreen" component = {MainScreen} title = "Home"/>
          <Scene key = "SecondScreen" component = {SecondScreen} title = "SecondScreen"/>
          <Scene key = "Denomination" component = {Denomination} title = "Denomination"/>          
        </Scene>
      </Router>
    )
  }
}
