import Api from './api';

export default class ApplicationApi {
  static getNews = ({
    pageNumber,
    pageSize,
  }: {
    pageNumber: number;
    pageSize: number;
  }) =>
    Api.request({
      method: 'get',
      url: 'v2/top-headlines',
      data: {pageNumber: pageNumber, pageSize: pageSize},
    });
}
