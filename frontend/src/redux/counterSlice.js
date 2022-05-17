import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpValue: false,
  editValue:false,
  loading:false,
  list:[],
}

export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   
    setSignUpValue: (state, action) => {
      state.signUpValue = action.payload
    },
    setList: (state, action) => {
      state.list = action.payload
    },
    setEditValue: (state, action) => {
      state.signUpValue = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    addItem: (state,action) => {
     
      state.list.push(action.payload);
      
    },
    delItem: (state,action) => {
     
      
      state.list.splice(state.list.indexOf(action.payload), 1)
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setSignUpValue,setEditValue,setLoading,setList,addItem,delItem } = counterSlice.actions

export default counterSlice.reducer