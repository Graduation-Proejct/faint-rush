import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setUsername } = userSlice.actions;

export default userSlice.reducer;
