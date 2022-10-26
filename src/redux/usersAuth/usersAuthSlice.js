import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser, currentUser } from './operations';


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrentUser: false,
};

export const usersAuthSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.user.isLoggedIn = true;
    },
 
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.user.isLoggedIn = true;
    },

    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.user.isLoggedIn = false;
      state.user.isLoading = false;
    },

    [currentUser.pending](state){
      state.user.isCurrentUser = true;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.user.isLoggedIn = true;
      state.user.isCurrentUser = false;
    },
    [currentUser.rejected](state){
      state.user.isCurrentUser = false;
    },
  }
 }) 