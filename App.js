import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './screens/LoginScreen/login_screen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ForgotPassword from './screens/ForgotPasswordScreen/ForgotPasswordScreen';
import FPConfirmation from './screens/FPConfirmationScreen/FPConfirmationScreen';
import demoscreen from './screens/DemoScreen/demoscreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Friends from './screens/Friends/Friends';
import FriendDetails from './screens/FriendDetails/FriendDetails';
import AddInvite from './screens/AddInvite/AddInvite';
import AddComment from './screens/AddComment/AddComment';
import AddTopicExist from './screens/AddTopicExist/AddTopicExist';
import TopicAddOk from './screens/TopicAddOk/TopicAddOk';
import Compare from './screens/CompareScreen/Compare';
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
    },
    Home:{
      screen: HomeScreen
    },
    Friends:{
      screen: Friends
    },
    AddInvite: {
      screen: AddInvite
    },
    AddComment:{
      screen: AddComment
    },
    FriendDetails:{
      screen: FriendDetails
    },
    AddTopicExist:{
      screen: AddTopicExist
    },
    TopicAddOk:{
      screen: TopicAddOk
    },
    Compare:{
      screen: Compare
    },
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

global.baseApiUrl = "http://82.196.0.238/rit/api/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
