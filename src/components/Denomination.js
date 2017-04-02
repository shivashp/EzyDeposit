import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, ListView, TouchableOpacity, ScrollView, Image } from 'react-native'
import Keyboard from './Keyboard'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
      active: false,
      selected: null,
      current: null,
      dataSource: ds.cloneWithRows([]);
    };
  }
  render() {
    const keyboard = this.state.active?(<Keyboard onPress = {this.buttonPressed.bind(this)} />): null;
    const boxes = deValues.map((data)=><SingleBox onPress = {this.selected.bind(this)} selected = {this.state.selected == data.id} size ={data.size} value = {data.value} count = {data.count} id ={data.id} key = {data.id}/>)
    const current = (this.state.current !=null)?(<Text style = {styles.tempText}>{this.state.current.size} X {this.state.current.count} = {this.state.current.value}</Text>):null;
    return (
      <View style = {styles.container}>
        <View style = {{flex:3}}>
          
        </View>
        <View style = {{flex: 1.5,backgroundColor: '#F0F0F0'}}>
          <View style = {{ backgroundColor: '#F0F0F0', height: 40, paddingVertical:8,  alignItems: 'center'}}>
            {current}
          </View>
          <ScrollView showsHorizontalScrollIndicator = {false} horizontal = {true} style ={{flexDirection: 'row',paddingHorizontal: 10}}>
            {boxes}
          </ScrollView>
        </View>
        <View style = {{flex: 2.2}}>
          {keyboard}
        </View>
      </View>
    )
  }
  selected(id) {
    let currentValue = this.state.values[id];
    this.setState({active: true, selected: id, current: currentValue})
  }
  buttonPressed(input) {
    console.log(input);
    switch (typeof(input)) {
      case 'number':
        let currentValue = this.state.current;
        currentValue.count = currentValue.count * 10 + input;
        currentValue.value = currentValue.size * currentValue.count;
        this.setState({current: currentValue })
        break;

      case 'string':
        if(input == 'Del'){
          let newState = this.state.current;
          newState.count = Math.floor(newState.count / 10);
          newState.value = newState.size * newState.count;
          this.setState({current: newState})
        } else if (input == 'Ok') {
          //Actions.SecondScreen();
        }
        break;
    }
  }

}

class SingleBox extends Component {
  render() {
    return(
      <TouchableOpacity style = {[styles.box]} activeOpacity = {0.5} onPress = {() => this.props.onPress(this.props.id)}>
        <Image
          source = {{ uri: 'http://www.freebiesgallery.com/wp-content/uploads/2014/02/blurred-background-2.jpg'}}
          style = {[styles.box,{opacity: (this.props.selected)?0.6:1}]}
          >
          <Text style = {styles.boxText}>{this.props.size} X</Text>
        </Image>
      </TouchableOpacity>
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
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontFamily: 'Nunito-Regular'
  },
  smallText: {
    fontSize: 15
  },
  tempText: {
    fontSize: 19,
    color: '#0185EA',
  }

})
