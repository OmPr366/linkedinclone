import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';





export const userContext = createSlice({
  name: 'user',
  initialState : {
    user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logInUser: (state, action) => {
      
      state.value = action.payload;
    },
    logOutUser: (state) => {
      state.value = null;
    },
    
  },
});

export const { logInUser, logOutUser } = userContext.actions;

export const selectUser = (state)=>state.user.user;

export default userContext.reducer;
