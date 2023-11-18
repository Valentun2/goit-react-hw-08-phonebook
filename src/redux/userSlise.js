import toast from 'react-hot-toast';

const { createSlice } = require('@reduxjs/toolkit');
const { fetchCreateUser, fetchLoginUser, refreshUser } = require('./operations');

const loginInitialState = {
  user: {
    name: '',
    email: '',
  },
  authorizationToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerSlise = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    logOut(state) {
      state.authorizationToken = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCreateUser.pending, (state, action) => {

      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.authorizationToken = true
        toast.success('registration was successful')

      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        console.log(action);
       toast.error('Check the correctness of the data')
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {

        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(fetchLoginUser.rejected, ( action) => {
        toast.error('Invalid email or password')

      })
     .addCase( refreshUser.pending, (state) => {
        state.isRefreshing = true;
      },)
      .addCase( refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase( refreshUser.rejected, (state) =>{
        state.isRefreshing = false;
      })
    },
});
export const { logOut } = registerSlise.actions;
export const userReduser = registerSlise.reducer;
