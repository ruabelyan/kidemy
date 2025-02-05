export const baseUrl =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_BASE_URL_TEST
    : import.meta.env.VITE_BASE_URL;
