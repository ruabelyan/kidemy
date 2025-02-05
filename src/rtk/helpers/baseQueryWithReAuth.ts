import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { signOut } from ".";
import { setToken } from "..";
import { baseUrl } from "./../../constants/constants";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    /* @ts-ignore */
    const tokenFromState = getState?.()?.shared?.token;

    if (token) {
      headers.set("Authorization", "Bearer " + (tokenFromState || token));
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const refreshToken = window.localStorage.getItem("refreshToken");
  const accessToken = window.localStorage.getItem("token");

  if (result?.error?.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      {
        url: "/Auth/RefreshToken",
        body: {
          token: accessToken,
          refreshToken: refreshToken,
        },
        method: "POST",
        headers: {},
      },
      api,
      extraOptions
    );
    /* @ts-expect-error */
    if (refreshResult?.data?.data) {
      // store the new token
      /* @ts-expect-error */
      const data = refreshResult.data?.data;
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("refreshToken", data.refreshToken);
      api.dispatch(setToken(data.token));
      result = await baseQuery(args, api, extraOptions);
    } else {
      // remove token and sign out
      signOut();
    }
  }
  return result;
};
const token = localStorage.getItem("token");

export default baseQueryWithReAuth;
