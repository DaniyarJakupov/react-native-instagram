import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { PhotoCard } from '../components';

class FeedScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <PhotoCard />
      </View>
    );
  }
}

export default FeedScreen;
