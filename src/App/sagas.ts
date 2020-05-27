import { fork } from 'redux-saga/effects';

import { watchGetData } from './actions';
import { watchPostData } from '../pages/Document/actions';


export function* appSaga() {
  yield fork(watchGetData);
  yield fork(watchPostData);
}