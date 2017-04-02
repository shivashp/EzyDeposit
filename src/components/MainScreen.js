import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as global from '../style/global'
import TopBar from './TopBar'
import Keyboard from './Keyboard'
import { Actions } from 'react-native-router-flux'

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      placeholder: 'Enter Account Number'
    }
  }
  render() {
    const text = (this.state.text.trim() == '')?this.state.placeholder:this.state.text;
    return (
      <View style = {[global.COMMON.container, {paddingHorizontal: 0, paddingVertical: 0}]}>
        <StatusBar hidden = {true}/>
        <View style = {[global.COMMON.content, {flex: 1} ]}>
          <View style = {styles.inputContainer}>
            <Text style = {{color: "#666", fontSize: 25, textAlign: 'center'}}>
              {text}
            </Text>
            <TouchableOpacity style = {styles.button} activeOpacity = {0.7} onPress = {()=> Actions.SecondScreen()}>
              <Text style = {styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          <View style ={{flex: 1}}>
            <Keyboard onPress = {this.buttonPressed.bind(this)}/>
          </View>
        </View>
      </View>
    )
  }

  buttonPressed(input) {
    switch (typeof(input)) {
      case 'number':
        this.setState({text: this.state.text + input })
        break;

      case 'string':
        if(input == 'Del'){
          let newState = this.state.text;
          newState = newState.slice(0,-1);
          this.setState({text: newState})
        } else if (input == 'Ok') {
          Actions.SecondScreen();
        }
        break;

      default:
        console.log("Default");
    }
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    flex: 2,
    justifyContent: 'center',
    //alignItems: 'center'
  },
  button: {
    paddingVertical:10,
    backgroundColor: global.PRIMARY,
    alignItems: 'center',
    alignSelf: 'center',
    width: 310,
    marginTop: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 19
  }
})
