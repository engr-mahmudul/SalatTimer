import {createSlice} from '@reduxjs/toolkit';

const initialState = false;
const searchingSlice = createSlice({
  name: 'searching',
  initialState,
  reducers: {
    setSearching: (state, action) => {
      return action.payload; // ✅ Correct way to update a primitive value
    },
  },
});
export default searchingSlice.reducer;
export const {setSearching} = searchingSlice.actions;
