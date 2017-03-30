import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class TopBar extends Component {
  render() {
    return(
      <View style = {styles.topbar}>
        <View style = {styles.topbar_left}>
          <Image
            style={{width: 90, height: 25}}
            resizeMode = "contain"
            source={{uri: 'http://nmbbanknepal.com/assets/upload/images/config/nmb2.png'}}
          />
        <Text style = {styles.caption}>Kathmandu Branch</Text>
        </View>
        <View style = {styles.topbar_right}>
          <Image
            style={{width: 75, height: 45, marginTop: -16}}
            resizeMode = "contain"
            source={{uri: 'http://drose.com.np/index/images/logo.png'}}
          />
        <Text style = {styles.right_caption}>EzyDeposit</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  topbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  caption: {
    fontSize: 10,
    marginTop: 5,
    color: '#079FB5',
    fontWeight: 'bold'
  },
  right_caption: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#0F449A'
  }
})
