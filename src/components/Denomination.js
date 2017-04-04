import React, { Component, PureComponent } from 'react'
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
      list: [],
      dataSource: ds.cloneWithRows([])
    };
  }
  render() {
    const keyboard = this.state.active?(<Keyboard onPress = {this.buttonPressed.bind(this)} />): null;
    const boxes = deValues.map((data)=><SingleBox onPress = {this.selected.bind(this)} selected = {this.state.selected == data.id} size ={data.size} value = {data.value} count = {data.count} id ={data.id} key = {data.id}/>)
    const current = (this.state.current !=null)?(<Text style = {styles.tempText}>{this.state.current.size} X {this.state.current.count} = {this.state.current.value}</Text>):null;
    return (
      <View style = {styles.container}>
        <View style = {{flex:3, marginTop: 13}}>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={(data, id) => <Single_item size = {data.size} count = {data.count} value = {data.value} key = {id}/>}
          />
          <Total list = {this.state.list}/>
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
    let currentValue = this.state.values[id]
    this.setState({active: true, selected: id, current: currentValue})
  }
  buttonPressed(input) {
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
          let list = this.state.list;
          let current = this.state.current;
          let contains = false;
          let current_id = null;
          for (var i = 0; i < list.length; i++) {
            if(list[i].id == current.id){
              contains = true;
              current_id = i;
            }
          }
          if(contains){
            list[current_id] = current;
          } else {
              list.push(current);
          }
          this.setState({current: null, list: list, dataSource: ds.cloneWithRows(list), active: false, selected: null})
        }
        break;
    }
  }

}

class SingleBox extends PureComponent {
  render() {
    console.log("Rendered");
    return(
      <TouchableOpacity style = {[styles.box]} activeOpacity = {0.5} onPress = {() => this.props.onPress(this.props.id)}>
        <Image
          source = {require('../images/blurred-bg.jpg')}
          style = {[styles.box,{opacity: (this.props.selected)?0.6:1}]}
          >
          <Text style = {styles.boxText}>{this.props.size} X</Text>
        </Image>
      </TouchableOpacity>
    )
  }
}

const Single_item = (props) => (
  <View style = {styles.single_item}>
    <View style = {{flex: 2}}>
      <Text style = {styles.single_item_text}>{props.size}</Text>
    </View>
    <View style = {{flex: 1}}>
      <Text style = {styles.single_item_text}> X </Text>
    </View>
    <View style = {{flex: 2}}>
      <Text style = {styles.single_item_text}>{props.count}</Text>
    </View>
    <View style = {{flex: 1}}>
      <Text style = {styles.single_item_text}> = </Text>
    </View>
    <View style = {{flex: 2, alignItems: 'flex-end'}}>
      <Text style = {styles.single_item_text}>{props.value}</Text>
    </View>
  </View>
)

class Total extends Component {
  render() {
    let total = this.props.list.reduce((total, num) => {
      return total + num.value;
    }, 0);
    return(
      <View style = {styles.single_item}>
        <View style = {{flex: 3}}>

        </View>
        <View style = {{flex: 2}}>
          <Text style = {styles.single_item_text}>Total</Text>
        </View>
        <View style = {{flex: 1}}>
          <Text style = {styles.single_item_text}> = </Text>
        </View>
        <View style = {{flex: 2, alignItems: 'flex-end'}}>
          <Text style = {styles.single_item_text}> {total} </Text>
        </View>
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
  },
  single_item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    flexDirection: 'row'
  },
  single_item_text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18
  }

})
