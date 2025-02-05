import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import * as apiReducers from "../api";
import { rtkQueryErrorLogger } from "./errorCatchingMiddleware";
import rootReducer from "./rootReducer";

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      [
        ...getDefaultMiddleware(),
        ...Object.values(apiReducers).map((api) => api.middleware),
        logger,
        rtkQueryErrorLogger,
      ] as ReturnType<typeof getDefaultMiddleware>,
  });
};

export const state = createStore().getState();

export default createStore;
