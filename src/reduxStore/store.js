import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
export default store;
