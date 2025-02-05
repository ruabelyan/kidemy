import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  token: "",
};

export type SharedState = typeof initialState;

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    dispatchLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { dispatchLoader, setToken } = sharedSlice.actions;

export const sharedReducer = sharedSlice.reducer;
