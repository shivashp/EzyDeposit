import React, { PureComponent } from 'react'
import { View } from 'react-native'
import InputButton from './InputButton'

const keys = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['Del', 0, 'Ok']
]


export default class Keyboard extends PureComponent {
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
            onPress = {this.props.onPress}
            />
        );
      }
      views.push(<View key ={"row" + r} style = {{flexDirection: 'row',flex: 1, justifyContent:'center'}}>{inputRow}</View>)
    }
    return views;
  }

  shouldComponentUpdate(nextProps, nextState){    
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render() {
    console.log("Rendering Keyboard");
    return(
      <View style= {{flex: 1}}>
        {this._renderInputButtons()}
      </View>
    )
  }
}
