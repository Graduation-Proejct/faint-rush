import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpValue: false,
  editValue:false,
  loading:false,
  showModelx:false,
   cancel :true,
  list:[],
}

export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   
    setSignUpValue: (state, action) => {
      state.signUpValue = action.payload
    },
    setShowModel: (state, action) => {
      console.log("in"+action.payload);

      state.showModelx = action.payload
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
    setCancel: (state, action) => {
      state.loading = action.payload
    },
    addItem: (state,action) => {
     
      state.list.push(action.payload);
      
    },
    delItem: (state,action) => {
     
      if(state.list.indexOf(action.payload)>=0){
        state.list.splice(state.list.indexOf(action.payload), 1)
      }
     
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setSignUpValue,setEditValue,setLoading,setList,addItem,delItem,setCancel,setShowModel } = counterSlice.actions

export default counterSlice.reducer