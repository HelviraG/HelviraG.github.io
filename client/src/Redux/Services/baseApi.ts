import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig }  from 'axios';
    
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, Authorization, Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods, GET, POST, PUT, OPTIONS, HEAD, application/json, application/x-www-from-urlencoded, multipart/form-data, text/plain, */*';

axios.defaults.headers.common['Content-Type'] = 'application/json, application/x-www-from-urlencoded, multipart/form-data, text/plain, */*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS, HEAD';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.interceptors.response.use(
  response => (response && response.data ? response.data : response),
  error => {
    // Redirect when user is not authorised
    if (error.response.status === 401) {
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

export const axiosBaseQuery =
(
  { baseUrl }: { baseUrl: string } = { baseUrl: '' },
): BaseQueryFn<{
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}> => async ({ url, method = 'GET', data, params }) => {
  try {
    const result = await axios(
      { url: baseUrl + url, method, data, params }
    );
    
    console.log(url, baseUrl, method, data, params, result);

    return { data: result };
  } catch (axiosError) {
    let err = axiosError as AxiosError;

    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: '/api' }),
  endpoints: () => ({}),
});