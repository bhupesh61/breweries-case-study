import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../styles/appStyles';

const DetailView = props => {
  return (
    <View style={styles.detailViewStyle}>
      <Image
        style={[styles.detailsIcon, {marginVertical: props.customMargin}]}
        source={props.imgSrc}
      />
      <Text style={styles.detailsLabel}>{props.label}</Text>
    </View>
  );
};

export default DetailView;
