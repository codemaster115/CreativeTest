import React from 'react';
import { View } from 'react-native';
import COLORS from '../themes/colors';

export default BaseScreen = (props) => (
  <View style={{ flex: 1, backgroundColor: 'COLORS.white2' }}>
    {props.children}
  </View>
);
