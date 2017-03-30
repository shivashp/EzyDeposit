import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as global from '../style/global'
import TopBar from './TopBar'
import { Actions } from 'react-native-router-flux'

export default class SecondScreen extends Component {
  render() {
    return(
      <View style = {global.COMMON.container}>
        <StatusBar hidden = {true}/>
        <TopBar />
        <View style = {global.COMMON.content}>
          <View style = {styles.ac_details}>
            <Text style = {global.COMMON.heading}>ACCOUNT NAME</Text>
            <Text style = {{fontSize: 22, color: '#333', paddingTop: 15}}>SHIVA PANDEY SHIVA PANDEY</Text>
          </View>
          <View style = {styles.ac_details}>
            <Text style = {global.COMMON.heading}>ACCOUNT NO</Text>
            <Text style = {{fontSize: 22, color: '#333', paddingTop: 15}}>125474584577</Text>
          </View>
          <View style = {styles.buttonSection}>
            <TouchableOpacity style = {[styles.button, {backgroundColor: global.ACCENT}]} activeOpacity = {0.6} onPress = {() => Actions.pop()}>
                <Text style = {styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} activeOpacity = {0.6}>
                <Text style = {styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ac_details: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    paddingVertical:10,
    backgroundColor: global.PRIMARY,
    alignItems: 'center',
    width: 150,
    marginTop: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 19
  }
})
