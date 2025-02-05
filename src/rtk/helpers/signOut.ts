import { IIsAuthorized } from "models";

export const signOut = (isAuthorized?: (value: IIsAuthorized) => void) => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("username");
  isAuthorized?.({
    token: "",
    username: "",
  });
};
