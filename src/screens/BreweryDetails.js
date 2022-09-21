/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import DetailView from '../components/DetailView';
import styles from '../styles/appStyles';

import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

const BreweryDetails = props => {
  const [brewery, setBrewery] = useState([]);
  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    setBrewery(props.route.params);
  };

  const getBreweryAddress = () => {
    return brewery.street + '\n' + brewery.city + ', ' + brewery.country;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#713D20" barStyle="light-content" />
      <ImageBackground
        source={require('../assets/images/wooden-table.jpg')}
        style={styles.bgImage}>
        <TouchableOpacity style={styles.detailsContainer}>
          <View>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.titleStyle, {fontSize: 26}]}>
                {brewery.name}
              </Text>
              <Text style={[styles.titleStyle, {fontSize: 16}]}>
                (Type : {brewery.brewery_type})
              </Text>
            </View>
            <DetailView
              customMargin={10}
              imgSrc={require('../assets/images/location.png')}
              label={getBreweryAddress()}
            />
            <DetailView
              imgSrc={require('../assets/images/mail.png')}
              label={brewery.postal_code}
            />
            <DetailView
              imgSrc={require('../assets/images/telephone.png')}
              label={brewery.phone}
            />
            <DetailView
              imgSrc={require('../assets/images/link.png')}
              label={brewery.website_url}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BreweryDetails;
