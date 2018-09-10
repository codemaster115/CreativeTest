import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BaseScreen from '../../components/BaseScreen';

class ReEntry extends React.Component {
  render() {
    return(
      <BaseScreen>
        <LinearGradient colors={[colors.tealish, colors.robin_s_egg_blue]} start={{ x: 0, y: 0.3 }} style={{ flex: 1 }} >
        </LinearGradient>
      </BaseScreen>
    )
  }
}

export default ReEntry