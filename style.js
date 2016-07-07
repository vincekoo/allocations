'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F323B',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  title: {
    width: 200,
    textAlign: 'left',
    color: '#949598',
  },
  inputText: {
    height: 40,
    width: 200,
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  inputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  }
});
