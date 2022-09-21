/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../styles/appStyles';

const ListItemView = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.listItemIcon} source={props.imgSrc} />
      <Text style={styles.itemLabelStyle}>{props.label}</Text>
    </View>
  );
};

export default ListItemView;
