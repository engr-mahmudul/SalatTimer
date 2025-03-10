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
import usePrayerTimes from '../hooks/usePrayerTimes';
import {fetchLocation} from '../utils/locationFetching';

type LocationType = {latitude: number; longitude: number} | null;

const HomeScreen = ({setSearching}) => {
  const [currentLocation, setCurrentLocation] = useState<LocationType>(null);
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState(null);
  // const {newLocation, fetchLocation} = useLocation(
  //   setSearching,
  //   setCurrentLocation,
  // );

  const prayerTimes = usePrayerTimes(latitude, longitude);
  const fetchLocation2 = async () => {
    const location = await fetchLocation(setSearching);
    if (location) {
      console.log('From Button Handler Function', location);
      setLatitude(location);
    }
  };

  useEffect(() => {
    console.log('From Home Screen Current Location:', latitude);
  }, [latitude]);

  const setCoordinates = () => {
    if (currentLocation) {
      setLatitude(currentLocation.latitude);
      setLongitude(currentLocation.longitude);
      console.log(
        'Latitude:',
        currentLocation.latitude,
        'Longitude:',
        currentLocation.longitude,
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {currentLocation ? (
          <Text style={styles.locationText}>
            Latitude: {currentLocation.latitude}, Longitude:{' '}
            {currentLocation.longitude}
          </Text>
        ) : (
          <Text style={styles.locationText}>
            Press the button to get location
          </Text>
        )}
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Get Location" onPress={fetchLocation2} />
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
