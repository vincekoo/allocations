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
var styles = require('./style');
var ImageView = require('./imageView');


class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = { username:"q" , password:"b", user:""};
  }

  renderLoginButton() {
    return (
      <TouchableNativeFeedback
          onPress={this.loginEvent.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{width: 150, height: 40, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
          <Text style={{textAlign: 'center', color: "#FFFFFF", fontSize: 15}}>Log In</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  loginEvent(event) {
    // ToastAndroid.show('username is ' + this.state.username + ' and password is ' + this.state.password, ToastAndroid.LONG)
    ToastAndroid.show('changedSignedIn is ' + this.state.user.name, ToastAndroid.LONG)
  }

  handleGoogleSignIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
      this.gotoNext(this.state.user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  gotoNext() {
    console.log('gotoNext');
    this.props.navigator.push({
      id: 'ProfilePage',
      name: 'ProfilePage',
      passProps: {
        user: this.state.user
      }
    });
  }

  render() {
      return (
        <View style={styles.container}>
        <ImageView src={'http://facebook.github.io/react/img/logo_og.png'} borderRadius={1} resizeMode={'cover'} width={100} height={100}/>
          <Text style={styles.welcome}>
            Welcome to Allocations!
          </Text>
          <Text style={styles.instructions}>
            Please log in to continue:
          </Text>
          <View style={{height: 50}} />
            <View style={styles.inputTextContainer}>
              <Image style={{alignSelf: 'center', marginRight: 5}} source={person_icon} />
              <TextInput style={styles.inputText}
                          placeholder = "User Name"
                          placeholderTextColor = '#A3A4A5'
                          underlineColorAndroid='#A3A4A5'
                          onChangeText={(text) => this.setState({username: text})} />
            </View>

            <View style={styles.inputTextContainer}>
              <Image style={{alignSelf: 'center', marginRight: 5}} source={lock_icon} />
              <TextInput style={styles.inputText}
                          password={true}
                          placeholder = "Password"
                          placeholderTextColor = '#A3A4A5'
                          underlineColorAndroid='#A3A4A5'
                          onChangeText={(text) => this.setState({password: text})} />
            </View>

          <View style={{marginTop: 40, alignSelf: 'center'}}>
            {this.renderLoginButton()}
          </View>

          <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.handleGoogleSignIn.bind(this)}/>
        </View>
      );
  }
}

module.exports = Login;
