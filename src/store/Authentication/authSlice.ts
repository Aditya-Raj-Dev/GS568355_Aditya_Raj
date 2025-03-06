import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: String | null;
  token: string | null;
}

interface LoginPayload {
  email: string;
  token: string;
}

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");
console.log(storedToken, "token");

const initialState: AuthState = {
  isAuthenticated: storedToken ? true : false,
  user: storedUser || null,
  token: storedToken || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      // console.log(action, "action");
      // console.log(state, "state");
      state.isAuthenticated = true;
      state.user = action.payload.email;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", action.payload.email);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
