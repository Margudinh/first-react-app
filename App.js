import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppContainer from './AppContainer';
import Home from './components/Home';

export default class App extends React.Component {

  state = {
    trees: 0
  }

  render = () => (
    <AppContainer />
  )
}
