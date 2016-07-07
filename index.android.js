/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
  Navigator,
  TouchableNativeFeedback,
  NativeModules,
  requireNativeComponent,
} from 'react-native';

var person_icon = require('./img/person_icon.png')
var lock_icon = require('./img/lock_icon.png')
var Login = require('./login');
var ProfilePage = require('./profile');


class allocations extends Component {
  render() {
    GoogleSignin.configure({
      // iosClientId: config.google.iosClientId,
    })

    return (
        <Navigator
          style={{ flex: 1}}
          initialRoute={{ name: 'Login', index: 0, component: Login}}
          renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'Login') {
       return <Login navigator={navigator} {...route.passProps}/>
     }
     if(route.name == 'ProfilePage') {
       console.log('GOING TO ProfilePage');
       return <ProfilePage navigator={navigator} {...route.passProps} />
     }
  }
}


AppRegistry.registerComponent('allocations', () => allocations);
