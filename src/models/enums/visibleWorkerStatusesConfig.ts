export enum WorkerStatusesEnum {
  InActive = 3,
  Active = 1,
  Blocked = 2,
}

export const visibleWorkersStatusesConfig: Record<
  WorkerStatusesEnum,
  { variant: "success" | "error" | "processing"; translationKey: string }
> = {
  [WorkerStatusesEnum.InActive]: {
    variant: "error",
    translationKey: "Ոչ Ակտիվ",
  },
  [WorkerStatusesEnum.Active]: {
    variant: "success",
    translationKey: "Ակտիվ",
  },
  [WorkerStatusesEnum.Blocked]: {
    variant: "processing",
    translationKey: "Բլոկավորված",
  },
};
