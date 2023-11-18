import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchDeleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    
    try {

      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGetContacts = createAsyncThunk(
  'contact/fetchAll',
  async (token, thunkAPI) => {
    axios.defaults.headers['Authorization'] = token;
    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/addContact',
  async (arr, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        {
          name: arr.name,
          number: arr.number,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCreateUser = createAsyncThunk(
  'login/addUser',
  async (arr, thunkAPI) => {
    console.log(arr);
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        {
          name: arr.name,
          email: arr.email,
          password: arr.password,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchLoginUser = createAsyncThunk(
  'login/getUser',
  async (arr, thunkAPI) => {

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email: arr.email,
          password: arr.password,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
