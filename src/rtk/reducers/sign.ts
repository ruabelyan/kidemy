import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export type SignState = typeof initialState;

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {},
});

export const signReducer = signSlice.reducer;
