import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    backgroundColor: '#FFDBA5',
    elevation: 0,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 20,
  },
  itemLabelStyle: {
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    fontSize: 16,
  },
  textInputStyle: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 12,
    marginTop: 0,
    borderColor: '#713D20',
    backgroundColor: '#FFDBA5',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  listItemIcon: {
    height: 24,
    width: 24,
    marginVertical: 10,
  },
  headerBackground: {
    backgroundColor: '#713D20',
    borderColor: '#713D20',
  },
  detailsContainer: {
    borderRadius: 18,
    backgroundColor: '#FFDBA5',
    elevation: 8,
    margin: 12,
    padding: 20,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  detailsIcon: {
    height: 25,
    width: 25,
    marginVertical: 0,
  },
  detailsLabel: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    fontSize: 18,
  },
  detailViewStyle: {
    flexDirection: 'row',
    margin: 10,
  },
});

export default styles;
