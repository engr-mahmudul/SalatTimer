import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchingLayout from '../components/SearchingLayout';

const SearchingScreen = () => {
  return (
    <View style={styles.container}>
      <SearchingLayout />
    </View>
  );
};

export default SearchingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});
