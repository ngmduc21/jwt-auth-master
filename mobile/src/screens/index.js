import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator,
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
