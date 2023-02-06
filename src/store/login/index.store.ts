import { createSlice } from '@reduxjs/toolkit';
import { singResponse } from './types.store';
import { Signup, signin } from './thunk.store';
import { ShowToast } from '../../components/toast';

const initialState : singResponse = {
    message: '',
    success: false,
    loading: false
  }

const store = createSlice({
  initialState,
  name: 'Signup',
  reducers: {},
  extraReducers: (builder) => {
    
  //Register
    builder.addCase(Signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Signup.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(Signup.rejected, (state) => {
      state.loading = false;
      ShowToast('Alerta', 'Falha ao carregar informações', 'error');
    });

    //Login
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(signin.rejected, (state) => {
      state.loading = false;
      ShowToast('Alerta', 'Falha ao carregar informações', 'error');
    });
    
  },
});
export default store.reducer;