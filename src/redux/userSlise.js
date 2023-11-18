
const { createSlice } = require('@reduxjs/toolkit');
const { fetchCreateUser, fetchLoginUser } = require('./operations');

const loginInitialState = {
  user: {
    name: '',
    email: '',
  },
  authorizationToken: null,
  isLoggedIn : false,
  isRefreshing:false,
};

const registerSlise = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    logOut(state) {
      state.authorizationToken = null;
        state.user = { name: '',
        email: '',};
       state.isLoggedIn = false
  }},
  extraReducers: builder => {
    builder
    .addCase(fetchCreateUser.pending, (state, action) => {
      console.log(action.payload);
    })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
       state.isLoggedIn = true
       
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        console.log(action);

        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
       state.isLoggedIn = true
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const {logOut} = registerSlise.actions
export const userReduser = registerSlise.reducer;
