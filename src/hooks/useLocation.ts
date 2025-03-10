import {useState} from 'react';
import GetLocation from 'react-native-get-location';

type LocationType = {latitude: number; longitude: number} | null;

const useLocation = (
  setSearching: (searching: boolean) => void,
  setCurrentLocation: (location: LocationType) => void,
) => {
  const [newLocation, setNewLocation] = useState({});
  const fetchLocation = async () => {
    console.log(' Fetch Location is called..!');
    setSearching(true);
    try {
      const loc = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });
      console.log('Fetched Location:', loc);
      setNewLocation(loc);
      setCurrentLocation({latitude: loc.latitude, longitude: loc.longitude});
    } catch (error) {
      console.warn('Error fetching location:', error.message);
    }
    setSearching(false);
  };

  return {newLocation, fetchLocation};
};

export default useLocation;
