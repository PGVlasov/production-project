import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInByUsername } from "../services/logInByUsername/LogInByUsername";
import { LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(logInByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logInByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReduser } = loginSlice;
