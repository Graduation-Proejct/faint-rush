import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: "",
  username: "",
  password: "",
  type: "",
  phone: "",
  valid: false,
  list: [],
  UID:"",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUID: (state, action) => {
      state.UID = action.payload;
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
      state.list[action.payload.id - 1].name = action.payload.name;
    },
    setItemRlation: (state, action) => {
      state.list[action.payload.id - 1].relation = action.payload.email;
    },
    setItemEmail: (state, action) => {
      state.list[action.payload.id - 1].email = action.payload.email;
    },
    setItemPhone: (state, action) => {
      state.list[action.payload.id - 1].phone = action.payload.phone;
    },
    delCareTaker: (state, action) => {
      console.log("-----------------------------")
      console.log(action.payload)
      console.log(state.list)
      console.log(current(state).list.indexOf(action.payload))
      var a=current(state).list.indexOf(action.payload)
                  state.list.splice(a, 1)
    },

    addItem: (state,action) => {
      if(state.list.indexOf(action.payload)<0){
        state.list.push(action.payload);}

      
      
      
     // axios.put("http://localhost:8080/signupdata/", article);
    },

    setList: (state, action) => {

      for (let index = 0; index < action.payload.length; index++) {
         ;
        state.list.push({
          id:index+1,
          UID: action.payload[index]._UID,
          relation:"",
          email:action.payload[index]._email,
          name: action.payload[index]._name,
          phone:action.payload[index]._phone,
        });
        
      }

      
    },

    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    setFireBaseServer: (state, action) => {
      state.fireBaseServer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setList,
  setEmail,
  setUsername,
  setValid,
  setPassword,
  setItemName,
  setItemRlation,
  addItem,
  setItemPhone,
  setPhone,
  setType,
  setFireBaseServer,
  setItemEmail,
  setSocket,
  delCareTaker,
  setUID,
} = userSlice.actions;

export default userSlice.reducer;
