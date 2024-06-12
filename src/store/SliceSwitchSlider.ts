import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  translate: number
}

const initialState = {
 translate: 0 
};

export const SliceSwitchFilter = createSlice({
  name: "SliceSwitchSlider",
  initialState,
  reducers: {
    
    HandleSwitchRight: (state)=>{
      state.translate ==-800? state.translate = -800 : state.translate -=400
    },
    HandleSwitchLeft: (state)=>{
      state.translate==0? state.translate = 0 : state.translate +=400
    }

  },
});

export const {HandleSwitchRight, HandleSwitchLeft} = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;