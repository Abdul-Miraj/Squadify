import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import PlayerLayout from './src/components/PlayerLayout/PlayerLayout';

 class App extends Component {

  render() {
    return (
      <PlayerLayout />
    );
  }
}

const styles = StyleSheet.create({

});

export default App;