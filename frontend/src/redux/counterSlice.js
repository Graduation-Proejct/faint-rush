import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpValue: false,
  editValue:false,
  isNot:false,
  loading:false,
  showModelx:false,
   cancel :false,
  list:[],
  medicalHistory:"",
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
    setIsNot: (state, action) => {
      state.isNot = action.payload
    },
    setCancel: (state, action) => {
      state.loading = action.payload
    },
   setMedicalHistory: (state, action) => {
      state.medicalHistory = action.payload
    },
    addItem: (state,action) => {
     
      state.list.push(action.payload);
      
    },
    setQuestions: (state,action) => {
      for (let index = 0; index < action.payload.length; index++) {
      
        state.list.push(action.payload[index]);
     }
      
      
    },
    delItem: (state,action) => {
     
      if(state.list.indexOf(action.payload)>=0){
        state.list.splice(state.list.indexOf(action.payload), 1)
      }
     
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setSignUpValue,setEditValue,setLoading,setList,addItem,delItem,setCancel,setShowModel,setMedicalHistory,setQuestions,setIsNot } = counterSlice.actions

export default counterSlice.reducer