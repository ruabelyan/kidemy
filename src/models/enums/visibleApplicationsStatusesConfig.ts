export enum ApplicationStatusesEnum {
  New = 0,
  EkengRequestFailed = 1,
  ClientApproveMonthAndAmount = 2,
  ScorePending = 3,
  ScoreReject = 4,
  ScoreApprove = 5,
  Reject = 7, // incorecct client or blacked
  ClientReject = 6,
  OtpApprove = 9,
  ClientApprove = 10,
  TimeOut = 11, // ended state
}

// export const visibleApplicationsStatusesConfig: Record<
//   ApplicationStatusesEnum,
//   { variant: "success" | "error" | "processing"; translationKey: string }
// > = {
//   [ApplicationStatusesEnum.New]: {
//     variant: "success",
//     translationKey: "Նոր",
//   },
//   [ApplicationStatusesEnum.EkengRequestFailed]: {
//     variant: "error",
//     translationKey: "ԷԿԵՆԳ -ը խափանված է",
//   },
//   [ApplicationStatusesEnum.ClientApproveMonthAndAmount]: {
//     variant: "success",
//     translationKey: "Գումարն ու ժամկետը հաստատված է հաճախորդի կողմից",
//   },
//   [ApplicationStatusesEnum.ScorePending]: {
//     variant: "processing",
//     translationKey: "Սպասում է սքորի պատասխանին",
//   },
//   [ApplicationStatusesEnum.ScoreReject]: {
//     variant: "error",
//     translationKey: "Մերժված սքորի կողմից",
//   },
//   [ApplicationStatusesEnum.Reject]: {
//     variant: "error",
//     translationKey: "Մերժված /սխալ կամ բլոկավորված հաճախորդ",
//   },
//   [ApplicationStatusesEnum.ScoreApprove]: {
//     variant: "success",
//     translationKey: "Հաստատված սքորի կողմից",
//   },
//   [ApplicationStatusesEnum.ClientReject]: {
//     variant: "error",
//     translationKey: "Հաճախորդի կողմից մերժված",
//   },
//   [ApplicationStatusesEnum.OtpApprove]: {
//     variant: "success",
//     translationKey: "OTP հաստատված",
//   },
//   [ApplicationStatusesEnum.ClientApprove]: {
//     variant: "success",
//     translationKey: "Հաճախորդի կողմից հաստատված",
//   },
//   [ApplicationStatusesEnum.TimeOut]: {
//     variant: "error",
//     translationKey: "Ժամկետանց",
//   },
// };

export const visibleApplicationsStatusesConfig: Record<
  ApplicationStatusesEnum,
  { variant: "success" | "error" | "processing"; translationKey: string }
> = {
  [ApplicationStatusesEnum.New]: {
    variant: "success",
    translationKey: "Նոր",
  },
  [ApplicationStatusesEnum.EkengRequestFailed]: {
    variant: "error",
    translationKey: "խափանված է",
  },
  [ApplicationStatusesEnum.ClientApproveMonthAndAmount]: {
    variant: "success",
    translationKey: "Հաստատված է",
  },
  [ApplicationStatusesEnum.ScorePending]: {
    variant: "processing",
    translationKey: "Սպասում է",
  },
  [ApplicationStatusesEnum.ScoreReject]: {
    variant: "error",
    translationKey: "Մերժված",
  },
  [ApplicationStatusesEnum.Reject]: {
    variant: "error",
    translationKey: "Մերժված/բլոկավորված",
  },
  [ApplicationStatusesEnum.ScoreApprove]: {
    variant: "success",
    translationKey: "Հաստատված է",
  },
  [ApplicationStatusesEnum.ClientReject]: {
    variant: "error",
    translationKey: "Մերժված",
  },
  [ApplicationStatusesEnum.OtpApprove]: {
    variant: "success",
    translationKey: "Հաստատված Է",
  },
  [ApplicationStatusesEnum.ClientApprove]: {
    variant: "success",
    translationKey: "Հաստատված Է",
  },
  [ApplicationStatusesEnum.TimeOut]: {
    variant: "error",
    translationKey: "Ժամկետանց",
  },
};
