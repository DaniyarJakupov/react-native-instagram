import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human } from 'react-native-typography';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftSide}>
        <View style={styles.avatar}>
          <Image
            source={{
              uri: 'https://i.imgur.com/zpI6gTZl.jpg'
            }}
            style={styles.avatarImg}
          />
        </View>
        <View style={styles.user}>
          <Text style={human.subheadObject}> Bobby B </Text>
          <Text style={human.footnoteObject}> Kingslanding, Westeros </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Touchable feedback="opacity">
          <MaterialCommunityIcons name="dots-horizontal" size={25} />
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  leftSide: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightSide: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  user: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10
  }
});

export default Header;
