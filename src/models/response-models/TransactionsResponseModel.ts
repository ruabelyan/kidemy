import { IBaseResponseModel } from "..";

export interface ITransaction {
  id: number;
  transactionId: string;
  deviceId: string;
  clientCode: string;
  clientAccount: string;
  cashBoxId: number;
  destinationAccount: string;
  amount: number;
  tip: number;
  asTransactionId: number;
  asReverseTransactionId: number;
  state: number;
}

export interface IGetAllTransactions {
  items: ITransaction[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface IGetTransactionsResponseModel
  extends IBaseResponseModel<IGetAllTransactions> {}
