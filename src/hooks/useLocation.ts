import {useState} from 'react';
import GetLocation from 'react-native-get-location';

type LocationType = {latitude: number; longitude: number} | null;

const useLocation = (setSearching: (searching: boolean) => void) => {
  const [currentLocation, setCurrentLocation] = useState<LocationType>(null);

  const fetchLocation = async () => {
    setSearching(true);
    try {
      const loc = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });
      console.log('Fetched Location:', loc);
      setCurrentLocation({latitude: loc.latitude, longitude: loc.longitude});
    } catch (error) {
      console.warn('Error fetching location:', error.message);
    }
    setSearching(false);
  };

  return {currentLocation, fetchLocation};
};

export default useLocation;
