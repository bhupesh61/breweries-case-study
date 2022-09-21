/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import ListItemView from '../components/ListItemView';
import styles from '../styles/appStyles';

import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';

const BreweriesList = props => {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
    getBreweriesList();
  }, []);

  const BASE_URL =
    'https://api.openbrewerydb.org/breweries?by_city=new_york&per_page=10';

  const getBreweriesList = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(responseJson => {
        setFilteredList(responseJson);
        setMasterList(responseJson);
        setModalVisible(false);
      })
      .catch(error => {
        setModalVisible(false);
        console.error(error);
      });
  };

  const searchInList = text => {
    if (text) {
      const newListData = masterList.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredList(newListData);
      setSearch(text);
    } else {
      setFilteredList(masterList);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        key={item.key}
        testID={'itemTestId'}
        onPress={() => props.navigation.navigate('BreweryDetails', item)}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.95}}>
            <ListItemView
              imgSrc={require('../assets/images/cap.png')}
              label={item.name.toUpperCase()}
            />
            <ListItemView
              imgSrc={require('../assets/images/telephone.png')}
              label={item.phone}
            />
          </View>
          <Image
            style={[styles.listItemIcon, {marginVertical: 30}]}
            source={require('../assets/images/right-arrow.png')}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#713D20" barStyle="light-content" />
      <ImageBackground
        source={require('../assets/images/wooden-table.jpg')}
        style={styles.bgImage}>
        <View style={styles.headerBackground}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => searchInList(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
        <FlatList
          keyboardShouldPersistTaps={'handled'}
          data={filteredList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
        <Modal transparent={false} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="small" color="#0000ff" />
              <Text style={styles.titleStyle}>Please wait...</Text>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BreweriesList;
