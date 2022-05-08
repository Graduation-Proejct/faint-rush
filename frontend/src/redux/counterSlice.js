import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpValue: false,
  editValue:false,
}

export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   
    setSignUpValue: (state, action) => {
      state.signUpValue = action.payload
    },
    setEditValue: (state, action) => {
      state.signUpValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setSignUpValue,setEditValue } = counterSlice.actions

export default counterSlice.reducer