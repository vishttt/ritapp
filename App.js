/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './screens/login_screen';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Login: {
    screen: LoginScreen
  },
});