import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default class TopBar extends PureComponent {
  render() {
    return(
      <View style = {{height: 60, position: 'absolute',padding: 20, width: width}}>
        <View style = {styles.topbar}>
          <View style = {styles.topbar_left}>
            <Image
              style={{width: 90, height: 25}}
              resizeMode = "contain"
              source={require('../images/nmb.png')}
            />
          <Text style = {styles.caption}>Kathmandu Branch</Text>
          </View>
          <View style = {styles.topbar_right}>
            <Image
              style={{width: 75, height: 45, marginTop: -16}}
              resizeMode = "contain"
              source={require('../images/drose.png')}
            />
          <Text style = {styles.right_caption}>EzyDeposit</Text>
          </View>
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
