import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../service/api';
import { RequestSignup, RequestSignin } from './types.store';

//Login
export const signin = createAsyncThunk(
  '/signin',
  async (request: RequestSignin, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signin', request, {
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response?.data);
      return rejectWithValue(error);
    }
  },
);

//Register
export const Signup = createAsyncThunk(
  '/Signup',
  async (request: RequestSignup, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signup', request, {
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response?.data);
      return rejectWithValue(error);
    }
  },
);
