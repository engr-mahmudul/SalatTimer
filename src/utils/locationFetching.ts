import GetLocation from 'react-native-get-location';
export const fetchLocation = async setSearching => {
  let myLocation;
  console.log(' Fetch Location is called..!');
  setSearching(true);
  try {
    const loc = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    });
    console.log('Fetched Location:', loc);
    myLocation = loc;
  } catch (error) {
    console.warn('Error fetching location:', error.message);
  }
  setSearching(false);
  return myLocation;
};
