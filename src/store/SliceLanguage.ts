import { createSlice } from "@reduxjs/toolkit";

export interface initialState {
  RussianLanguage: boolean
}

const initialState: initialState = {
    RussianLanguage: true
};

export const SliceSwitchFilter = createSlice({
  name: "SliceSwitchFilter",
  initialState,
  reducers: {

    HandleSwitchLanguage: (state) => {
        state.RussianLanguage = !state.RussianLanguage
    }

  },
});

export const { HandleSwitchLanguage } = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;