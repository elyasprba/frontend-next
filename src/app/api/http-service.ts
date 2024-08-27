import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const httpService: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_HOST,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

httpService.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default httpService;
