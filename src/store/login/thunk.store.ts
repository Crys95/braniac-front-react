import { createAsyncThunk } from '@reduxjs/toolkit';
import  { AxiosError } from 'axios';
import api from '../../service/api';
import { RequestSignup, RequestSignin } from './types.store';

//Register
export const Signup = createAsyncThunk(
  '/Signup',
  async (request:RequestSignup, { rejectWithValue }) => {
    try {
      const response = await api.post('/signup', {
        request,
      });
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response?.data);
      return rejectWithValue(error);
    }
  },
);

//Login
export const signin = createAsyncThunk(
    '/signin',
    async (request:RequestSignin, { rejectWithValue }) => {
      try {
        const response = await api.post('/signin', {
          request,
        });
        return response;
      } catch (err) {
        const error = err as AxiosError;
        console.log(error.response?.data);
        return rejectWithValue(error);
      }
    },
  );