import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser, currentUser } from './operations';
const handlePending = state => {
    state.user.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.user.isLoading = false;
    state.user.error = action.payload;
  };

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
        [registerUser.pending]: handlePending,
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.user.isLoggedIn = true;
        },
        [registerUser.rejected]: handleRejected,
        [logInUser.pending]: handlePending,
          [logInUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.user.isLoggedIn = true;
          },
          [logInUser.rejected]: handleRejected,

          [logOutUser.pending](state){
            state.user.isLoading = true;
          },
          [logOutUser.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.user.isLoggedIn = false;
            state.user.isLoading = false;
          },
          [logOutUser.rejected]: handleRejected,

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