import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Touchable from '@appandflow/touchable';
import { human, iOSColors } from 'react-native-typography';

import Header from './Header';
import ActionPanel from './ActionPanel';
import Meta from './Meta';
import Comments from '../Comments';

const uri = 'https://nerdist.com/wp-content/uploads/2017/09/robert-baratheon-970x545.jpg';

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Header />

          <Image style={{ flex: 1 }} source={{ uri }} />

          <ActionPanel />

          <Meta caption="GODS I WAS STRONG THEN!" />

          <View style={styles.commentsWrapper}>
            <Touchable feedback="opacity">
              <Text style={styles.commentViewAll}>View all 13 comments </Text>
            </Touchable>
            <Comments />
          </View>
          <View style={styles.timeAgoWrapper}>
            <Text style={styles.timeAgo}>6 HOURS AGO </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 700,
    paddingBottom: 10
  },
  img: {
    flex: 1
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16
  },
  commentViewAll: {
    ...human.calloutObject,
    color: iOSColors.midGray
  },
  timeAgoWrapper: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16
  },
  timeAgo: {
    ...human.footnoteObject,
    color: iOSColors.midGray
  }
});

export default PhotoCard;
