import { createSlice } from "@reduxjs/toolkit";

export interface initialState {
  isOpen: boolean
}

const initialState: initialState = {
  isOpen: false
};

export const SliceSwitchFilter = createSlice({
  name: "SliceSwitchFilter",
  initialState,
  reducers: {
  },
});

export const { } = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;