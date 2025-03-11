import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import useLocation from '../hooks/useLocation';
import {useSelector} from 'react-redux';

type LocationType = {latitude: number; longitude: number} | null;

const HomeScreen = () => {
  const location = useSelector(state => state.location);

  const {fetchLocation} = useLocation();

  // const prayerTimes = usePrayerTimes(latitude, longitude);
  // const fetchLocation2 = async () => {
  //   const location = await fetchLocation(setSearching);
  //   if (location) {
  //     console.log('From Button Handler Function', location);
  //     setLatitude(location);
  //   }
  // };

  useEffect(() => {
    console.log('From Home Screen Current Location:', location);
  }, [location]);

  const setCoordinates = () => {
    if (location) {
      // setLatitude(location.latitude);
      // setLongitude(location.longitude);
      console.log(
        'Latitude:',
        location.latitude,
        'Longitude:',
        location.longitude,
      );
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
          <Text style={styles.locationText}>
            Press the button to get location
          </Text>
        )}
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Get Location" onPress={fetchLocation} />
      </View>
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
  buttonStyle: {
    padding: 10,
  },
});
