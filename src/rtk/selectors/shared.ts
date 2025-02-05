import { createSelector } from "reselect";

const getSharedState = (state: any) => state?.shared;

export const getLoadingState = createSelector(
  getSharedState,
  (data) => data.isLoading
);
