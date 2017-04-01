import React, { Component } from 'react';
import {
    Text, TouchableHighlight, Dimensions, StyleSheet
} from 'react-native';

var {height, WIDTH} = Dimensions.get('window');
export default class InputButton extends Component {

    render() {
      console.log();
        return (
            <TouchableHighlight style ={[styles.button]} activeOpacity ={0.6} onPress = {() => console.log('')} underlayColor = "#E8E8E8">
                <Text style ={{color: (this.props.value == "Ok")?"green":"#333", fontSize: 22}}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
  button: {
    flex:1,
    backgroundColor: "#efefef",
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 0.5,
    borderColor: '#efefef',
  },
  delete: {
    backgroundColor:'#F77162',
  },
  ok: {
    backgroundColor: '#0185EA',
    backgroundColor: '#78C9BA'
  }
})
