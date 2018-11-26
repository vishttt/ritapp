import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './screens/login_screen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ForgotPassword from './screens/ForgotPasswordScreen/ForgotPasswordScreen';
import FPConfirmation from './screens/FPConfirmationScreen/FPConfirmationScreen';
import demoscreen from './screens/DemoScreen/demoscreen';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Demo:{
      screen: demoscreen
    },
    Welcome: {
      screen: WelcomeScreen
    },
    Login:  {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    },
    ForgotPassword:{
      screen: ForgotPassword
    },
    FPConfirmation:{
      screen: FPConfirmation
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Demo',
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
