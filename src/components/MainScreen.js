import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as global from '../style/global'
import TopBar from './TopBar'
import { Actions } from 'react-native-router-flux'

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <View style = {global.COMMON.container}>
        <StatusBar hidden = {true}/>
        <View style = {global.COMMON.content}>
          <View style = {styles.inputContainer}>
            <TextInput
              style={{height: 60, color: "#666", fontSize: 25, textAlign: 'center'}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder = {"Enter Account Number"}
              placeholderTextColor = "#ccc"
              keyboardType = "numeric"
            />
          </View>
          <View style ={{alignItems:'center'}}>
            <TouchableOpacity style = {styles.button} activeOpacity = {0.7} onPress = {()=> Actions.SecondScreen()}>
              <Text style = {styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({    
  inputContainer: {
    borderBottomWidth: 0,
    borderColor: "#ccc"
  },
  button: {
    paddingVertical:10,
    backgroundColor: global.PRIMARY,
    alignItems: 'center',
    width: 310,
    marginTop: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 19
  }
})
