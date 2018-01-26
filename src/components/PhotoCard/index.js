import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Header';

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
        <Text>hey</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 800,
    backgroundColor: 'lightblue',
    paddingBottom: 10
  }
});

export default PhotoCard;
