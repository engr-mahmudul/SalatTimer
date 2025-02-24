import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GetLocation from 'react-native-get-location'


const App = () => {

  
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
  .then(location => {
    console.log('output', location);
    alert(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
  })
  .catch(error => {
    console.warn(error.code, error.message);
    alert(`Error: ${error.message}`);
  });
  
  return (
    <SafeAreaView  style={styles.container}>
      <View >

      <Text style={styles.text}>App</Text>
   
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  // Fix for Android
  },
  text:{
    fontSize:30,
    textAlign:'center',
    fontWeight:700
  }
  
})