import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as global from '../style/global'

const deValues = [
  {
    value: 1000
  },
  {
    value: 500
  },
  {
    value: 100
  },
  {
    value: 50
  },
  {
    value: 20
  },
  {
    value: 10
  },
  {
    value: 5
  },
  {
    value: 2
  },
  {
    value: 1
  }
]

export default class Denomination extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(deValues),
    };
  }
  render() {
    return (
      <View style = {styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data, id) => <Single_item value = {data.value} key = {id}/>}
        />
      </View>
    )
  }
}

const Single_item = (props) => (
  <View style = {styles.single_item}>
    <View style = {styles.sub_child}>
      <Text style = {styles.text}>{props.value} X </Text>
    </View>
    <View style = {styles.sub_child}>
      <TextInput
        style={{height: 40, color: "#333", fontSize: 18,  width: 65, textAlign: 'center', marginTop: -7}}
        onChangeText={(text) => console.log(text)}
        keyboardType="phone-pad"
      />
    </View>
    <View style = {styles.sub_child}>
      <Text style = {styles.output}> {props.value * 10}</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20
  },
  single_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    paddingVertical: 5,
    marginBottom:0
  },
  text: {
    fontSize: 20
  },
  sub_child: {
    flex: 1
  },
  output: {
    fontSize: 18
  }
})
