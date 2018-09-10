import { all } from 'redux-saga/effects';
import msg from './message';

export default function* rootSaga() {
  yield all([
    msg()
  ])
}