import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  baseUrl,
  register,
  signin,
  change,
  forgot,
  getUserData,
  update,
} from '../../../constants/url';
import { persistor } from '../../store/store';
import { logout } from './authSlice';
import {
  IRegistrationFormData,
  ISignInFormData,
  IChangePasswordParams,
  IUpdateDetailsFormData,
} from './type';
import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: IRegistrationFormData, thunkAPI) => {
    var formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirm_password', user.confirm_password);
    formData.append('gender', user.gender);
    formData.append('phone_no', Number(user.phone_no));
    try {
      const response = await axios.post(`${baseUrl}/${register}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.show('Registration successful', Toast.SHORT);
      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (user: ISignInFormData, thunkAPI) => {
    var formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    try {
      console.log('form data entering ', formData);
      const response = await axios.post(`${baseUrl}/${signin}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('after form data', response?.data);
      Toast.show('sign in successful', Toast.SHORT);
      return response.data;
    } catch (error : any) {
      console.log('thunk catch --->', error);
      Toast.show('Incorrect Credentials', Toast.SHORT);
      console.log( 'return statement-->' ,thunkAPI.rejectWithValue(error.message))
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (params: IChangePasswordParams, thunkAPI) => {
    var formData = new FormData();
    formData.append('old_password', params.old_password);
    formData.append('password', params.password);
    formData.append('confirm_password', params.confirm_password);
    const headers = {
      access_token: params.access_token,
      'Content-Type': 'multipart/form-data',
    };
    try {
      const response = await axios.post(`${baseUrl}/${change}`, formData, {
        headers,
      });
      Toast.show('password changed succesfully', Toast.SHORT);
      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, thunkAPI) => {
    var formData = new FormData();
    formData.append('email', email);
    try {
      const response = await axios.post(`${baseUrl}/${forgot}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.show('A mail has been sent to you', Toast.SHORT);
      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getUserAccountDetails = createAsyncThunk(
  'auth/getUserAccountDetails',
  async (access_token: string | undefined, thunkAPI) => {
    const headers = {
      access_token: access_token,
    };
    try {
      const response = await axios.get(`${baseUrl}/${getUserData}`, {
        headers,
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateDetails = createAsyncThunk(
  'auth/updateDetails',
  async (user: IUpdateDetailsFormData, thunkAPI) => {
    console.log('>', user);
    var formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('dob', user.dob);
    formData.append('profile_pic', user.profile_pic);
    formData.append('phone_no', Number(user.phone_no));
    const headers = {
      access_token: user.access_token,
      'Content-Type': 'multipart/form-data',
    };
    try {
      const response = await axios.post(`${baseUrl}/${update}`, formData, {
        headers,
      });
      Toast.show('Details updated successfully', Toast.SHORT);
      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logoutAndClearPersistedData =
  () =>
    async (
      dispatch: (arg0: { payload: undefined; type: 'auth/logout' }) => void,
    ) => {
      dispatch(logout());
      await persistor.purge();
    };
