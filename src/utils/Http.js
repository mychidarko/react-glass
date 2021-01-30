import React, { setGlobal } from "reactn";
import { toast } from "react-toastify";
import axios from "axios";

import { rootState } from "Reducers";
import { Notify } from "Components";

export const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Http.interceptors.request.use((config) => {
  const url = config?.url?.split("/") || [];
  const unAuthRoutes = ["login", "forgotten"];

  if (unAuthRoutes.filter((x) => url.includes(x)).length === 0)
    config.headers["Authorization"] = `Bearer ${localStorage["access_token"]}`;

  return config;
});

Http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status) {
      if (error.response.status === 401) {
        setGlobal(rootState);
      }

      if (error.response.status === 500) {
        toast(<Notify body="A server error occured" type="error" />);
      }
    }

    return Promise.reject(error);
  },
);

export default Http;
