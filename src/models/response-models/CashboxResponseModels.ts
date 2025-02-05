import { IBaseResponseModel } from "..";

export interface ICashbox {
  id: number;
  branchId: number;
  branchName: string;
  userId: number;
  isActive: boolean;
  userName: string;
  qrImagePath: string;
}

export interface IGetAllCashbox {
  items: ICashbox[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface IGetCashboxREsponseModel
  extends IBaseResponseModel<IGetAllCashbox> {}
