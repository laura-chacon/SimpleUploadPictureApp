import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNav           from './src/components/appNav';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';
import reducers         from './src/reducers'

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <AppNav/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
