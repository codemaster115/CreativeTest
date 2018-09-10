import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import colors from '../themes/colors';

export default MessageItem = (props) => (
  <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
    <Image source={require("../assets/avatar.png")} style={{ borderRadius: 22 }}/>
    <View style={{ flex: 1, flexDirection: "row", marginLeft: 16, borderRadius: 22, borderWidth: 1, borderColor: colors.gray, backgroundColor: "white" }}>
      <TextInput
        style={{ flex: 1, maxHeight: 150, fontSize: 15, marginLeft: 17, marginTop: 15, marginBottom: 13, marginRight: 25, paddingTop: 0 }}
        multiline
        placeholder="Напишите что-то..."
        placeholderTextColor={colors.steel}
        value={props.msg}
      />
      <View style={{ width: 1, marginVertical: 5, backgroundColor: colors.gray }}/>
      <View style={{ justifyContent: 'flex-start' }}>
        <TouchableOpacity style={{ margin: 11 }} {...props}>
          <Image source={require("../assets/trash_can.png")} style={{ tintColor: colors.tealish}}/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);