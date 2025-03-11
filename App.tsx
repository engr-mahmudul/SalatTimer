import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchingScreen from './src/screens/SearchingScreen';
import {Provider} from 'react-redux';
import store from './src/reduxStore/store';

const Stack = createStackNavigator();

const App = () => {
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    console.log(searching);
  }, [searching]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {searching ? (
            <Stack.Screen name="Searching" component={SearchingScreen} />
          ) : (
            <Stack.Screen name="Home">
              {() => <HomeScreen setSearching={setSearching} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
