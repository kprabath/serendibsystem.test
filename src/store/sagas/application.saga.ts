import {takeLatest, call, put} from 'redux-saga/effects';
import ApplicationApi from '../../api/application.api';
import {GET_NEWS, GET_NEWS_SUCCESS} from '../../constants';

interface Tsaga {
  type: string;
  payload?: any;
}

export function* getNews({payload}: Tsaga) {
  try {
    // fetching news api data
    console.log('PAYLOAD', payload);
    const data = yield call(ApplicationApi.getNews, payload);
    yield put({type: GET_NEWS_SUCCESS, payload: data});
  } catch (er) {
    // Handle error and update the UI from here
  }
}

export default function* applicationSaga() {
  yield takeLatest(GET_NEWS, getNews);
}
