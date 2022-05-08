import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  email: "",
  username: "",
  password:"",
  type:"",
  phone:"", 
  valid:false,
  list:[],
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setValid: (state, action) => {
      state.valid = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setItemName: (state, action) => {
      state.list[action.payload.id-1].name = action.payload.name;
    },
    setItemRlation: (state, action) => {
      state.list[action.payload.id-1].relation = action.payload.relation;
    },
    setItemPhone: (state, action) => {
      state.list[action.payload.id-1].phone = action.payload.phone;
    },
    addItem: (state) => {
     
      state.list.push({id:state.list.length+1,relation: 'ddv', name: 'ahmed', phone:'0123',});
      const article = { name:state.username, email:state.email ,password:state.password , phone:state.phone , type:state.type, list:state.list};
      axios.put('http://localhost:8080/signupdata/', article)
    },

    setList:(state, action) => {
      state.list = action.payload;
    },
    
   
  },
});

// Action creators are generated for each case reducer function
export const { setList,setEmail, setUsername,setValid,setPassword,setItemName,setItemRlation,addItem,setItemPhone,setPhone ,setType} = userSlice.actions;

export default userSlice.reducer;
