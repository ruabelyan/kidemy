import { IBaseResponseModel } from "..";

export interface BranchResponseModel {
  items: {
    id: number;
    created: string;
    name: string;
    address: string;
    city: string;
    phoneNumber: string;
    account: string;
    managerId: number;
    manager: {
      id: number;
      userName: string;
      normalizedUserName: string;
      email: string;
      normalizedEmail: string;
      emailConfirmed: true;
      passwordHash: string;
      securityStamp: string;
      concurrencyStamp: string;
      phoneNumber: string;
      phoneNumberConfirmed: true;
      twoFactorEnabled: true;
      lockoutEnd: string;
      lockoutEnabled: true;
      accessFailedCount: number;
      refreshToken: string;
      refreshTokenExpiryTime: string;
      createdBy: number;
      created: string;
      modifiedBy: number;
      modified: string;
      deleted: string;
      branches: {
        id: number;
        createdBy: number;
        created: string;
        modified: string;
        modifiedBy: number;
        deleted: string;
        name: string;
        address: string;
        city: string;
        phoneNumber: string;
        account: string;
        managerId: number;
        manager: string;
        merchantId: number;
        merchant: string;
        cashBoxes: [
          {
            id: number;
            createdBy: number;
            created: string;
            modified: string;
            modifiedBy: number;
            deleted: string;
            qrIdentifier: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
            branchId: number;
            branch: string;
            userId: number;
            user: {
              id: number;
              userName: string;
              normalizedUserName: string;
              email: string;
              normalizedEmail: string;
              emailConfirmed: true;
              passwordHash: string;
              securityStamp: string;
              concurrencyStamp: string;
              phoneNumber: string;
              phoneNumberConfirmed: true;
              twoFactorEnabled: true;
              lockoutEnd: string;
              lockoutEnabled: true;
              accessFailedCount: number;
              refreshToken: string;
              refreshTokenExpiryTime: string;
              createdBy: number;
              created: string;
              modifiedBy: number;
              modified: string;
              deleted: string;
            };
          }
        ];
      }[];
      merchants: {
        id: number;
        createdBy: number;
        created: string;
        modified: string;
        modifiedBy: number;
        deleted: string;
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
        commissionType: 1;
        commission: number;
        managerId: number;
        manager: string;
        branches: [
          {
            id: number;
            createdBy: number;
            created: string;
            modified: string;
            modifiedBy: number;
            deleted: string;
            name: string;
            address: string;
            city: string;
            phoneNumber: string;
            account: string;
            managerId: number;
            manager: string;
            merchantId: number;
            merchant: string;
            cashBoxes: [
              {
                id: number;
                createdBy: number;
                created: string;
                modified: string;
                modifiedBy: number;
                deleted: string;
                qrIdentifier: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
                branchId: number;
                branch: string;
                userId: number;
                user: {
                  id: number;
                  userName: string;
                  normalizedUserName: string;
                  email: string;
                  normalizedEmail: string;
                  emailConfirmed: true;
                  passwordHash: string;
                  securityStamp: string;
                  concurrencyStamp: string;
                  phoneNumber: string;
                  phoneNumberConfirmed: true;
                  twoFactorEnabled: true;
                  lockoutEnd: string;
                  lockoutEnabled: true;
                  accessFailedCount: number;
                  refreshToken: string;
                  refreshTokenExpiryTime: string;
                  createdBy: number;
                  created: string;
                  modifiedBy: number;
                  modified: string;
                  deleted: string;
                };
              }
            ];
          }
        ];
      }[];
    };
    merchantId: number;
    merchant: {
      id: number;
      createdBy: number;
      created: string;
      modified: string;
      modifiedBy: number;
      deleted: string;
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
      commissionType: 1;
      commission: number;
      managerId: number;
      manager: string;
      branches: {
        id: number;
        createdBy: number;
        created: string;
        modified: string;
        modifiedBy: number;
        deleted: string;
        name: string;
        address: string;
        city: string;
        phoneNumber: string;
        account: string;
        managerId: number;
        manager: string;
        merchantId: number;
        merchant: string;
        cashBoxes: {
          id: number;
          createdBy: number;
          created: string;
          modified: string;
          modifiedBy: number;
          deleted: string;
          qrIdentifier: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
          branchId: number;
          branch: string;
          userId: number;
          user: {
            id: number;
            userName: string;
            normalizedUserName: string;
            email: string;
            normalizedEmail: string;
            emailConfirmed: true;
            passwordHash: string;
            securityStamp: string;
            concurrencyStamp: string;
            phoneNumber: string;
            phoneNumberConfirmed: true;
            twoFactorEnabled: true;
            lockoutEnd: string;
            lockoutEnabled: true;
            accessFailedCount: number;
            refreshToken: string;
            refreshTokenExpiryTime: string;
            createdBy: number;
            created: string;
            modifiedBy: number;
            modified: string;
            deleted: string;
          };
        }[];
      }[];
    };
  }[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface GetBranchesResponseModel
  extends IBaseResponseModel<BranchResponseModel> {}

export interface IBranchById {
  id: number;
  created: string;
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
  account: string;
  managerId: number;
  merchantId: number;
}

export interface GetBranchByIdResponseModel
  extends IBaseResponseModel<IBranchById> {}
