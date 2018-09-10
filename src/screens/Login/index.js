import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BaseScreen from '../../components/BaseScreen';
import colors from '../../themes/colors';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visiblePassword: false
    }
  }

  render() {
    return (
      <BaseScreen>
        <LinearGradient colors={[colors.tealish, colors.robin_s_egg_blue]} start={{ x: 0, y: 0.3}} style={{ flex: 1 }} >
          <View style={{ marginTop: 128 }}>
            <Image source={require("../../assets/logo.png")} style={{ left: -94 }}/>
          </View>
          <View style={{ marginTop: 94, marginHorizontal: 30 }}>
            <View style={{ flexDirection: "row", height: 44, borderRadius: 22, borderWidth: 1, padding: 10, borderColor: colors.gray, backgroundColor: "white", alignItems: "center"}}>
              <TextInput style={{ flex: 1, height: 44, textAlign: "center", letterSpacing: 10 }} secureTextEntry={!this.state.visiblePassword} keyboardType="number-pad" maxLength={4}/>
              <View style={{ width: 1, height: 33, backgroundColor: colors.gray}}/>
              <TouchableOpacity style={{ marginVertical: 15, marginLeft: 8 }} onPress={() => this.setState(prevState => ({ visiblePassword: !prevState.visiblePassword}))}>
                <Image source={require("../../assets/open_eye.png")}/>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </BaseScreen>
    )
  }
}

export default Login
