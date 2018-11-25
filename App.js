import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './screens/login_screen';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    Login:  {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
  }
);

export default class App extends Component {
  render() {
    return (
        <AppNavigator style={styles.container} />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
