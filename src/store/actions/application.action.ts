import {GET_NEWS} from '../../constants';

export const getNews = (payload: {pageSize: number; pageNumber: number}) => ({
  type: GET_NEWS,
  payload,
});
