import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={style.mainConainer}>
      <Text style={style.welcome}>Welcome To My MusicPlayer!</Text>
    </View>
  );
};

export default Welcome;

const style = StyleSheet.create({
  mainConainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  welcome: {
    color: '#888888',
    fontWeight: '600',
    fontSize: 25,
  },
});
