import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: UserData | null;
  token: string | null;
  userPost:any[]
}

interface UserData {
  token:string;
  user:any
}


const UserInitialState: AuthState = {
  user: null,
  token: null,
  userPost:[]
};

const authSlice = createSlice({
  name: 'auth',
  initialState:UserInitialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: UserData }>) => {
      console.log(action.payload.user);
      
      state.user = action.payload.user.user;
      state.token=action.payload.user.token
    },
    updateUser:(state,action:PayloadAction<{user:UserData}>)=>{
      console.log(action.payload.user);
      
      state.user=action.payload.user.user

    },
    updateToken:(state,action:PayloadAction<{accessToken:string}>)=>{
      console.log(action.payload);
      
      state.token=action.payload.accessToken

    },
    logout: (state:any) => {
      state.user = null;
      state.token = null;
      state.userPost=[]
    },
    setUsePosts:(state,action:PayloadAction<{userPost:any[]}>)=>{
     state.userPost=action.payload.userPost
    }
  },
});

export const { loginSuccess, logout,setUsePosts,updateUser ,updateToken} = authSlice.actions;
export default authSlice.reducer;