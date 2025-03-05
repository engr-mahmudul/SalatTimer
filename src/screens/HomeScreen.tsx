import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import useLocation from '../hooks/useLocation';
import usePrayerTimes from '../hooks/usePrayerTimes';

const HomeScreen = ({setSearching}) => {
  const { location, fetchLocation } = useLocation(setSearching);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  
  const prayerTimes = usePrayerTimes(latitude, longitude);

  const setCoordinates = () => {
    if (location) {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
      console.log('Latitude:', location.latitude, 'Longitude:', location.longitude);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {location ? (
          <Text style={styles.locationText}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
        ) : (
          <Text style={styles.locationText}>Press the button to get location</Text>
        )}
      </View>
      <Button title="Get Location" onPress={fetchLocation} />
      <Button title="Fetch Prayer Times" onPress={setCoordinates} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  locationText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});