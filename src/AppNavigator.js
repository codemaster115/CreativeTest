import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './screens/Login';
import Chat from './screens/Chat';
import ReEntry from './screens/ReEntry';

export default main = createStackNavigator({
  Login: {
    screen: Login
  },
  Chat: {
    screen: Chat
  }
}, {
  initialRouteName: "Chat",
  navigationOptions: {
    header: null
  }
});