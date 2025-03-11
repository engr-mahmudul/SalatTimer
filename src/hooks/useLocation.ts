import {useState} from 'react';
import GetLocation from 'react-native-get-location';

type LocationType = {latitude: number; longitude: number} | null;

const useLocation = dispatch => {
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
      dispatch(setLocation(loc));
    } catch (error) {
      console.warn('Error fetching location:', error.message);
    }
    setSearching(false);
  };

  return {newLocation, fetchLocation};
};

export default useLocation;
