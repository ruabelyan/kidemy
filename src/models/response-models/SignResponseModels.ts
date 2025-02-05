import { IBaseResponseModel } from "../shared-models";

export interface SignInResponseModel {
  token: string;
  refreshToken: string;
}

export interface JWTDecodeModel {
  email: string;
  token: string;
  permissions: number[];
  services: number[];
  role: number;
  username: string;
}

export interface ForgotPasswordResponseModel extends IBaseResponseModel<{}> {}
export interface ActivateOrDeactivateUserResponseModel
  extends IBaseResponseModel<{}> {}

export interface CreateUserResponseModel {
  data: boolean;
  message: string;
  errorCode: number;
  success: boolean;
}
