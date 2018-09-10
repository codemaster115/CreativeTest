import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_MESSAGES_REQUEST,
  ADD_MESSAGE_REQUEST,
  REMOVE_MESSAGE_REQUEST
} from '../actions/types';

import {
  getMessages,
  addMessageSuccess,
  addMessageFail,
  removeMessageSuccess,
  removeMessageFail

} from '../actions/message';

export function* getMessagesRequestHandler({ payload }) {
  try {
    yield put(getMessages())
  } catch (err) {
    yield put(getMessages)
  }
}

export function* addMessageRequestHandler({ payload }) {
  try {
    yield put(addMessageSuccess(payload))
  } catch (err) {
    yield put(addMessageFail(err))
  }
}

export function* removeMessageRequestHandler({ payload }) {
  try {
    yield put(removeMessageSuccess(payload))
  } catch (err) {
    yield put(removeMessageFail(err))
  }
}

export default function* msgSaga() {
  yield takeLatest(GET_MESSAGES_REQUEST, getMessagesRequestHandler)
  yield takeLatest(ADD_MESSAGE_REQUEST, addMessageRequestHandler)
  yield takeLatest(REMOVE_MESSAGE_REQUEST, removeMessageRequestHandler)
}