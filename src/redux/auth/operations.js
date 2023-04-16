import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  clearAuthHeader,
  contactApi,
  setAuthHeader,
} from 'services/phonebookAPI';

contactApi();

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await api.userRegistration(credentials);
//       console.log(data)
//       api.setAuthHeader(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message} Please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logIn = createAsyncThunk(
//   'auth/logIn',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await api.userAuthorization(credentials);
//       api.setAuthHeader(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(
        `Something went wrong. Invalid login or password. Please try again. ❌`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
//   try {
//     await api.userLogOut();
//     api.clearAuthHeader();
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });
export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   // Чтение токена из состояния через getState()
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }

//   try {
//     // Если есть токен, добавляем его в HTTP-заголовок и выполняем запрос
//     api.setAuthHeader(persistedToken);
//     const data = await api.userRefreshing();
//     return data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
