import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default class NavBar extends Component {
  render() {
    return (
      <View style = {{height: 50, backgroundColor: "red", position: 'absolute', top: 0, left: 0, width: width}}>
        <Text>Top Nav Bar</Text>
      </View>
    )
  }
}
