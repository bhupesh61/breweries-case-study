import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BreweriesList from './BreweriesList';
import BreweryDetails from './BreweryDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#713D20'},
          headerTitleStyle: {color: '#FFDBA5'},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Breweries" component={BreweriesList} />
        <Stack.Screen
          name="BreweryDetails"
          component={BreweryDetails}
          options={{
            title: 'Brewery Details',
            headerTintColor: '#FFDBA5',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
