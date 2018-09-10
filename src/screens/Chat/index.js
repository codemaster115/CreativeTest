import React from 'react';
import { View, FlatList, Image, TextInput, TouchableOpacity, findNodeHandle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BaseScreen from '../../components/BaseScreen';
import MessageItem from '../../components/MessageItem';
import colors from '../../themes/colors';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { addMessageRequest, removeMessageRequest } from '../../actions/message';

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ""
    }
  }

  onPressSend = () => {
    const data = {
      uid: uuid(),
      msg: this.state.message
    }
    this.props.addMessageRequest(data);
    this.setState({
      message: ""
    })
  }

  render() {
    const { list } = this.props.message
    console.log(list)
    return (
      <BaseScreen>
        <View style={{ flex: 1, marginHorizontal: 21, marginVertical: 15}}>
          <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}
            innerRef={ref => {this.scroll = ref;}}
            keyboardShouldPersistTaps="handled"
          >
            <FlatList
              extraData={this.state}
              data={list}
              keyExtractor={(item) => item.uid}
              renderItem={({item}) => <MessageItem msg={item.msg} onPress={() => this.props.removeMessageRequest(item.uid)}/>}
              ItemSeparatorComponent={() => <View style={{ height: 5 }}/>}
            />
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Image source={require("../../assets/avatar.png")} style={{ borderRadius: 22 }}/>
              <View style={{ flex: 1, flexDirection: "row", marginLeft: 16, borderRadius: 22, borderWidth: 1, borderColor: colors.gray, backgroundColor: "white" }}>
                <TextInput
                  style={{ flex: 1, maxHeight: 150, fontSize: 15, marginLeft: 17, marginTop: 15, marginBottom: 13, marginRight: 25, paddingTop: 0 }}
                  multiline
                  placeholder="Напишите что-то..."
                  placeholderTextColor={colors.steel}
                  onFocus={(event) => this.scroll.props.scrollToFocusedInput(findNodeHandle(event.target), 30)}
                  value={this.state.message}
                  onChangeText={value => this.setState({ message: value })}
                />
      
                <View style={{ width: 1, marginVertical: 5, backgroundColor: colors.gray }}/>
                <View style={{ justifyContent: 'flex-end' }}>
                  <TouchableOpacity style={{ marginBottom: 11, marginHorizontal: 7 }} onPress={this.onPressSend.bind(this)}>
                    <Image source={require("../../assets/send.png")} style={{ tintColor: colors.tealish}}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </BaseScreen>
    )
  }
}

const mapStateToProps = state => ({
  message: state.msg
})

const mapDispatchToProps = {
  addMessageRequest,
  removeMessageRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)