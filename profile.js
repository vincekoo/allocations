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
  ListView,
  TouchableNativeFeedback,
  NativeModules,
  requireNativeComponent,
} from 'react-native';

var person_icon = require('./img/person_icon.png')
var lock_icon = require('./img/lock_icon.png')
var styles = require('./style');
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {this.props.user.name} + " \n"+ {this.props.user.accessToken} + " \n " + {this.props.user.idToken}
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <View style={{marginTop: 40, alignSelf: 'center'}}>
          <TouchableNativeFeedback
              onPress={this.gotoLogin.bind(this)}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 40, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Text style={{textAlign: 'center', color: "#FFFFFF", fontSize: 15}}>Log Out</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  gotoLogin() {
    this.props.navigator.push({
      id: 'Login',
      name: 'Login',
    });
    // ToastAndroid.show('props is ' + this.props.navigator, ToastAndroid.LONG)
  }

  handleSignOut() {
    GoogleSignin.signOut()
    .then(() => {
      console.log('out');
      this.gotoLogin();
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

module.exports = ProfilePage;
