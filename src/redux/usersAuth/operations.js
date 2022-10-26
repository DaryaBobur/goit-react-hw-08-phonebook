import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthenticationUser = token => {
    axios.defaults.headers.common.Authorization = `${token}`;
}

const clearAuthenticationUser = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const registerUser = createAsyncThunk(
    'users/register', async (dataUsers, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', dataUsers);
            setAuthenticationUser(response.data.token);
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logInUser = createAsyncThunk(
    'users/login', async (dataUsers, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', dataUsers);
            setAuthenticationUser(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOutUser = createAsyncThunk(
    'users/logout', async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthenticationUser();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const currentUser = createAsyncThunk(
   "users/current", async(_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.users.token;
    console.log(savedToken)
    if(savedToken === null) {
        console.log('Токена нет, уходим из function');
    return thunkAPI.rejectWithValue();
    }

    try {
        setAuthenticationUser(savedToken);
        const response = await axios.get("/users/current")
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   } 
)