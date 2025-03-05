import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const SearchingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Searching for Location...</Text>
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