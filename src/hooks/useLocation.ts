import GetLocation from 'react-native-get-location';
import {setLocation} from '../features/location/locationSlice';
import {setSearching} from '../features/searching/searchingSlice';
import {useDispatch} from 'react-redux';

const useLocation = () => {
  const dispatch = useDispatch(); // ✅ One dispatch for multiple actions

  const fetchLocation = async () => {
    console.log('Fetch Location is called..!');

    // ✅ Start searching
    dispatch(setSearching(true));

    try {
      const loc = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });

      console.log('Fetched Location:', loc);

      // ✅ Update location in Redux store
      dispatch(setLocation({latitude: loc.latitude, longitude: loc.longitude}));
    } catch (error) {
      console.warn('Error fetching location:', error.message);
    }

    // ✅ Stop searching, regardless of success or failure
    dispatch(setSearching(false));
  };

  return {fetchLocation};
};

export default useLocation;
