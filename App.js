
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Navigator from './navigation/Navigation'

export default class App extends Component {
  render (){
    return (
       <Navigator />
    )
  }
}
