import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/component/Main';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}


