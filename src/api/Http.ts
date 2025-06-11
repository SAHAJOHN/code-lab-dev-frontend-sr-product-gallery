import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosRequestConfigCustom extends AxiosRequestConfig {
  headers: any;
}

const Http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
  timeout: 300000,
});

Http.interceptors.request.use(
  (config: AxiosRequestConfigCustom) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (
      error != null &&
      error.response != null &&
      error.response.status === 401
    ) {
      //
    }
    return Promise.reject(error);
  },
);

export default Http;
