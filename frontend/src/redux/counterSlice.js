import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpValue: false,
  editValue:false,
  loading:false,
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
    setLoading: (state, action) => {
      state.signUpValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setSignUpValue,setEditValue,setLoading } = counterSlice.actions

export default counterSlice.reducer