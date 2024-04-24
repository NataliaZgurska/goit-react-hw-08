import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  //редьюсери
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
