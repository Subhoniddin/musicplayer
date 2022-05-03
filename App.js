/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import MusicPlayer from './screens/MusicPlayer';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const App = () => {
  return (
    <View style={style.container}>
      <StatusBar hidden />
      <MusicPlayer />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
