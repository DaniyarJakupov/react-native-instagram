import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Header from './Header';
import ActionPanel from './ActionPanel';
import Meta from './Meta';

const uri =
  'https://freestocks.org/fs/wp-content/uploads/2018/01/holly_berries_4-1024x683.jpg';

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Header />

          <Image style={{ flex: 1 }} source={{ uri }} />

          <ActionPanel />

          <Meta caption="text" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
    paddingBottom: 10
  }
});

export default PhotoCard;
