import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Touchable from '@appandflow/touchable';
import { human, iOSColors } from 'react-native-typography';
import { graphql } from 'react-apollo';

import Header from './Header';
import ActionPanel from './ActionPanel';
import Meta from './Meta';
import Comments from '../Comments';

import { likePhoto } from '../../graphql/mutation';

const uri = 'https://nerdist.com/wp-content/uploads/2017/09/robert-baratheon-970x545.jpg';

class PhotoCard extends Component {
  state = {};

  onLikePress = async () => {
    try {
      const res = await this.props.likePhotoMutation({
        variables: { photoId: this.props.id }
      });
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { imageUrl, caption } = this.props;

    return (
      <View style={styles.wrapper}>
        <Header />

        <Image style={{ flex: 1 }} source={{ uri: imageUrl }} />

        <ActionPanel onLikePress={this.onLikePress} />

        <Meta caption={caption} />

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

export default graphql(likePhoto, { name: 'likePhotoMutation' })(PhotoCard);
