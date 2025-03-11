import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchingScreen from './src/screens/SearchingScreen';
import {Provider} from 'react-redux';
import store from './src/reduxStore/store';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const searching = useSelector(state => state.searching);
  useEffect(() => {
    console.log('searching sate', searching);
  }, [searching]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {searching ? (
          <Stack.Screen name="Searching" component={SearchingScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
