import { createApi } from "@reduxjs/toolkit/query/react";
import { IBaseResponseModel } from "../../models";
import baseQueryWithReAuth from "../helpers/baseQueryWithReAuth";

export const signApi = createApi({
  reducerPath: "signApi",
  tagTypes: ["GetUsers", "GetUsersForMerchant"],
  baseQuery: (args, api, extraOptions) => {
    return baseQueryWithReAuth(args, api, extraOptions);
  },
  endpoints: (builder) => ({
    signIn: builder.mutation<IBaseResponseModel<{}>, {}>({
      query: (signInReqBody) => {
        return {
          body: signInReqBody,
          url: `/Auth/Login`,
          method: "POST",
        };
      },
    }),
  }),
});
