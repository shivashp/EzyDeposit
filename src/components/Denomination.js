import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, ListView, Animated, TouchableOpacity, ScrollView } from 'react-native'
import InputButton from './InputButton'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const keys = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['Del', 0, 'Ok']
]
const deValues = [
  {
    id: 0,
    size: 1000,
    count: 0,
    value: 0
  },
  {
    id: 1,
    size: 500,
    count: 0,
    value: 0
  },
  {
    id: 2,
    size: 100,
    count: 0,
    value: 0
  },
  {
    id: 3,
    size: 50,
    count: 0,
    value: 0
  },
  {
    id: 4,
    size: 20,
    count: 0,
    value: 0
  },
  {
    id: 5,
    size: 10,
    count: 0,
    value: 0
  },
  {
    id: 6,
    size: 5,
    count: 0,
    value: 0
  },
  {
    id: 7,
    size: 2,
    count: 0,
    value: 0
  },
  {
    id: 8,
    size: 1,
    count: 0,
    value: 0
  }
]

export default class Denomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values : deValues,
      // dataSource: ds.cloneWithRows(this.props.values),
      scaleValue: new Animated.Value(0),
      selected: 0,
      intial: true
    };
  }
  render() {
    let length = Array(100).fill().map((e,i)=>i+1);
    const smallBox = length.map((i) => <SingleBox size = "small" key = {i} value = {i}/>)
    return (
      <View style = {styles.container}>
        <View style = {{flex:3}}>

        </View>
        <View style = {{flex: 1.5, paddingHorizontal: 10}}>
          <ScrollView showsHorizontalScrollIndicator = {false} horizontal = {true} style ={{flexDirection: 'row'}}>
            <SingleBox value = "1000"/>
            <SingleBox value = "500"/>
            <SingleBox value = "100"/>
            <SingleBox value = "50"/>
            <SingleBox value = "20"/>
            <SingleBox value = "10"/>
            <SingleBox value = "5"/>
            <SingleBox value = "2"/>
            <SingleBox value = "1"/>
          </ScrollView>
        </View>
        <View style = {{flex: 2.2}}>
          <Keyboard />
        </View>
      </View>
    )
  }

}

class SingleBox extends Component {
  render() {
    const text = (this.props.size == "small")?(<Text style = {[styles.boxText, styles.smallText]}>{this.props.value}</Text>): (<Text style = {styles.boxText}>{this.props.value} X</Text>)
    return(
      <TouchableOpacity style = {[styles.box, (this.props.size == "small")?styles.smallBox: styles.bigBox]} activeOpacity = {0.5}>
        {text}
      </TouchableOpacity>
    )
  }
}

class Keyboard extends Component {
  _renderInputButtons() {
    let views = [];
    for(var r = 0; r < keys.length; r++){
      let row = keys[r];
      let inputRow = [];
      for (var i = 0; i < row.length; i++ ) {
        let input = row[i];
        inputRow.push(
          <InputButton
            value = {input}
            key ={ r + "-" + i}
            onPress = {() => console.log("pressed")}
            />
        );
      }
      console.log(inputRow);
      views.push(<View key ={"row" + r} style = {{flexDirection: 'row',flex: 1, justifyContent:'center'}}>{inputRow}</View>)
    }
    return views;
  }

  render() {
    return(
      <View style= {{flex: 1}}>
        {this._renderInputButtons()}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1
  },
  box:{
    backgroundColor: "#efefef",
    width: 120,
    height: 100,
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 4
  },
  boxText: {
    fontSize: 22,
    color: '#0185EA',
    fontFamily: 'Nunito-Regular'
  },
  smallText: {
    fontSize: 15
  },
  smallBox: {
    width: 60,
    height: 60
  },
  bigBox: {

  }
})
