import { IBaseResponseModel } from "..";

export interface MerchantResponseModel {
  items: {
    id: number;
    name: string;
    taxId: string;
    legalAddress: string;
    clientCode: string;
    legalName: string;
    note: string;
  }[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface GetMerchantsResponseModel
  extends IBaseResponseModel<MerchantResponseModel> {}

export interface IMerchantById {
  id: number;
  created: string;
  name: string;
  taxId: string;
  legalAddress: string;
  phoneNumber: string;
  clientCode: string;
  legalName: string;
  email: string;
  activityType: string;
  note: string;
  mininumAmount: number;
  maxinumAmount: number;
  commissionType: number;
  commission: number;
}

export interface GetMerchantByIdResponseModel
  extends IBaseResponseModel<IMerchantById> {}

export interface IUsers {
  items: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
    userName: string;
    state: number;
  }[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface IGetMerchantDataFromAS {
  clientCode: string;
  taxCode: string;
  name: string;
  eName: string;
  email: string;
  activityType: string;
  createdDate: string;
  phoneNumber: string;
  address: string;
}
