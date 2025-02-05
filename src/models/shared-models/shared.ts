export interface IIsAuthorized {
  token: string;
  username: string;
}
export interface SortModel {
  sortDescending?: boolean;
  sortBy?: string | null;
}

export interface IPagination {
  pageNumber: number;
  pageSize: number;
}

export interface IBaseRequestModel {
  showLoader?: boolean;
  pagination?: IPagination;
  sorting?: SortModel;
}
export interface IBaseResponseModel<T> {
  isSuccess: boolean;
  error: {
    code: number;
    description: string;
  };
  data: T;
}

export type PrimaryKey = string | number;

export interface PageConfigViewModel {
  Order: number;
  IsActive: boolean;
  Name: string;
}
