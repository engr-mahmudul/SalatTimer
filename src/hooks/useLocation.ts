import { useState } from 'react';
import GetLocation from 'react-native-get-location';

const useLocation = (setSearching: (searching: boolean) => void) => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
 

  const fetchLocation = async () => {
    setSearching(true);
    try {
      const loc = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });
      console.log('Fetched Location:', loc);
      setLocation({ latitude: loc.latitude, longitude: loc.longitude });
    } catch (error) {
      console.warn('Error fetching location:', error.message);
    }
    setSearching(false);
  };

  return { location, fetchLocation };
};

export default useLocation;