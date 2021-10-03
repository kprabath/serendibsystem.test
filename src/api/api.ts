import Axios, {AxiosRequestConfig, AxiosError} from 'axios';
import {BASE_URL, NEWS_API_KEY} from '../constants';
import {store} from '../store';
import {toggleLoader} from '../store/actions/common.action';

interface IRequest {
  url?: string;
  data?: object | {pageSize: number; pageNumber: number};
  method?: AxiosRequestConfig['method'];
  headers?: AxiosRequestConfig['headers'];
}

const createPath = (
  url?: string,
  data?: {pageSize: number; pageNumber: number},
) => {
  const path = `${BASE_URL}${url}?country=us&apiKey=${NEWS_API_KEY}&pageSize=${data?.pageSize}&page=${data?.pageNumber}`;
  return path;
};

const request = ({url, data, method, headers: addHeaders}: IRequest) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      ...addHeaders,
    };

    const requestUrl = createPath(url, data);
    const axiosReqConfig: AxiosRequestConfig = {
      data,
      headers,
      method: method,
      url: requestUrl,
      timeout: 3000,
    };

    store.dispatch(toggleLoader({action: 'start'}));

    Axios(axiosReqConfig)
      .then(res => {
        resolve(res.data);
        store.dispatch(toggleLoader({action: 'stop'}));
      })
      .catch((er: AxiosError) => {
        reject({response: {}});
        store.dispatch(toggleLoader({action: 'stop'}));
      });
  });
};

export default {request};
