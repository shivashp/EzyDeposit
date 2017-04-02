const backup = (
  <TextInput
    style={{height: 60, color: "#666", fontSize: 25, textAlign: 'center'}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
    placeholder = {"Enter Account Number"}
    placeholderTextColor = "#ccc"
    keyboardType = "numeric"
  />

)
