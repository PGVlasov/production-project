import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entites/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";

interface LogInByUsernameProps {
  username: string;
  password: string;
}

export const logInByUsername = createAsyncThunk<
  User,
  LogInByUsernameProps,
  { rejectValue: string }
>("login/logInByUsername", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>("http://localhost:8000/login", {
      username,
      password,
    });
    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(
      i18n.t("вы ввели неправельный паполь или имя пользователя")
    );
  }
});
