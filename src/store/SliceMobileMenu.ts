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

    HandleIsOpenMenu: (state)=>{
      state.isOpen = !state.isOpen
    }
  },
});

export const { HandleIsOpenMenu } = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;