import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser } from './operations';
const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

 export const usersAuthSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [registerUser.pending]: handlePending,
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [registerUser.rejected]: handleRejected,
        [logInUser.pending]: handlePending,
          [logInUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
          },
          [logInUser.rejected]: handleRejected,
          [logOutUser.pending]: handlePending,
          [logOutUser.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
          },
          [logOutUser.rejected]: handleRejected,
    }
 }) 