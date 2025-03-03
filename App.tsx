import { Alert, Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import GetLocation from 'react-native-get-location'

const App = () => {
  const [location, setLocation] = useState(null)
  const [latitude,setLatitude] = useState(null)
  const [longitude,setLongitude] = useState(null)
  
  const buttonActivity = ():void =>{
        setLatitude (location.latitude)
        setLongitude (location.longitude);
        console.log(latitude, longitude)
       
        
        

  }
  // Salat Time Fecting
  useEffect(()=>{
    if(latitude && longitude){
      const method = 3;
    const apiUrl = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=${method}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("Fectched Data is -->", data?.data?.timings);
      // You can now access and display the prayer times from `data`
    })
    .catch(error => {``
      console.error("Error fetching prayer times:", error);
    });
    }
  },[latitude,location])
// Location Fecting 
  useEffect(() => {
    console.log('useEffect triggered'); 
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
    .then(location => {
      console.log('Fetched Location:', location); // Console log the data
      setLocation(location)// Store the location in state if needed
    })
    .catch(error => {
      console.warn('Error fetching location:', error.message);
    });
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>App</Text>
        {location && (
          <Text style={styles.locationText}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
        )}
      </View>
      <Button title="Press Here" onPress={buttonActivity} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  locationText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  }
});
