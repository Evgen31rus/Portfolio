import { createSlice } from "@reduxjs/toolkit";

export interface initialState {
  
}

const initialState: initialState = {
 
};

export const SliceSwitchFilter = createSlice({
  name: "SliceSwitchFilter",
  initialState,
  reducers: {
  },
});

export const { } = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;