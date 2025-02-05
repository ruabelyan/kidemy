import { alert } from "@/ui-components";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { dispatchLoader } from "../reducers";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    // console.log(action.payload);
    // Enable Loader

    if (action?.meta?.arg?.originalArgs?.showLoader) {
      api.dispatch(dispatchLoader(true));
    }

    console.log(action.payload);

    if (action?.payload?.success === false) {
      alert.error({
        alertLabel: action?.payload?.message,
        autoClose: true,
      });
    }

    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      // Disable Loader
      api.dispatch(dispatchLoader(false));

      if (action.payload.status === 500) {
        alert.error({
          alertLabel: "Ինչ որ բան այն չէ",
          autoClose: true,
        });
      }
      if (action.payload.status === 400) {
        console.log("======");
        alert.error({
          alertLabel: action.payload?.title || "Ինչ որ բան այն չէ։",
          autoClose: true,
        });
      }
    }

    if (action?.meta?.baseQueryMeta?.response && !isRejectedWithValue(action)) {
      api.dispatch(dispatchLoader(false));
    }

    return next(action);
  };
