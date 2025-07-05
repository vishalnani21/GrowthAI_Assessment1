import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 name: '',
  location: '',
  headline: '',
  reviews: 0,
  rating: 0,
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setBusinessName: (state, action) => {
      state.name = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
   setBackendData: (state, action) => {
  state.headline = action.payload.headline;
  state.reviews = action.payload.reviews;
  state.rating = action.payload.rating;
},
setGeneratedHeadline:(state,action)=>{
    state.headline=action.payload;
}
  },
});

export const { setBusinessName, setLocation,setBackendData,setGeneratedHeadline} = businessSlice.actions;
export default businessSlice.reducer;
