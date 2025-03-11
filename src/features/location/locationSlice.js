import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const latitude = action.payload.latitude;
      const longitude = action.payload.longitude;
      state.latitude = latitude;
      state.longitude = longitude;
    },
  },
});

export default locationSlice.reducer;
export const {setLocation} = locationSlice.actions;
