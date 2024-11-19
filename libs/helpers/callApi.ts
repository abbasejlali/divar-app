import axios from "axios";

// helper
import { errorAlert, successAlert } from "@/utils/alerts";

export const callapi = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      throw err;
    }
  );
  axiosInstance.interceptors.response.use(
    (res) => {
      // successAlert("با موفقیت انجام شد");
      return res;
    },
    async (err) => {
      // errorAlert("متاسفانه مشکلی پیش آمده است");
      throw err;
    }
  );
  return axiosInstance;
};
