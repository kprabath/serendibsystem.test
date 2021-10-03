import {all} from 'redux-saga/effects';

import applicationSaga from './sagas/application.saga';

export default function* AllSagas() {
  yield all([applicationSaga()]);
}
