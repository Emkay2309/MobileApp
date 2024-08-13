import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  baseUrl,
  getCart,
  addCart,
  editCartItem,
  deleteCartItem,
} from '../../../constants/url';
import {IGetCartListParams, IAddToCartParams, IDeleteCartParams} from './type';


export const getCartList = createAsyncThunk(
  'cart/getCartList',
  async (params: IGetCartListParams, thunkAPI) => {
    try {
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.get(`${baseUrl}/${getCart}`, {
        headers,
      });

      console.log('cart response in redux' , response.data)

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params: IAddToCartParams, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      formData.append('quantity', params.quantity);

      console.log('prod',formData)

      const headers = {
        access_token: params.access_token, // Add your access token to the custom header
        'Content-Type': 'multipart/form-data', // Important for FormData
      };
      const response = await axios.post(`${baseUrl}/${addCart}`, formData, {
        headers,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editCart = createAsyncThunk(
  'cart/editCart',
  async (params: IAddToCartParams, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      formData.append('quantity', params.quantity);
      
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };

      console.log('edit cart with new quantity clicked , in redux ',`${baseUrl}/${editCartItem}`);
      // console.log('-----')
      // console.log('formdata : ',formData);
      // console.log('-----')
      // console.log(headers);
      // console.log('------->')

      const response = await axios.post(`${baseUrl}/${editCartItem}`, formData, {
        headers,
      });

      return response?.data;
    } catch (error: any) {
      console.log('in error');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const deleteCart = createAsyncThunk(
  'cart/deleteCart',
  async (params: IDeleteCartParams, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post(
        `${baseUrl}/${deleteCartItem}`,
        formData,
        {
          headers,
        },
      );
      console.log('in redux --> deleting ' , params.product_id , 'cause quantity is 0')
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);