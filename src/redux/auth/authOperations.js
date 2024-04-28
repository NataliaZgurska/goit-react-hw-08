// Додайте у файл redux / auth / operations.js операції,
//     оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// Токен авторизованого користувача потрібно зберігати в локальному сховищі
// за допомогою бібліотеки persist.

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT
//бере з собою ключ-token
export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
//очищуємо token
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

// register - для реєстрації нового користувача.
export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      console.log('REGISTER data: ', data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

//     login - для логіну існуючого користувача
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//     logout - для виходу з додатка.Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/users/logout');
    clearToken();
    return;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

//     refreshUser - оновлення користувача за токеном.Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
