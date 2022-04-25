import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";
import { User } from "@model/types";

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    isAuthenticated: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      if (!state.user.isAuthenticated) {
        state.user = action.payload;
      }
    },
    logout: (state, action: PayloadAction<User>) => {
      if (state.user.isAuthenticated) {
        state.user = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
