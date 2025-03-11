import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';
import searchingReducer from '../features/searching/searchingSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    searching: searchingReducer,
  },
});

export default store;
