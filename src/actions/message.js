import {
  GET_MESSAGES_REQUEST,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  REMOVE_MESSAGE_REQUEST,
  REMOVE_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_FAILURE,
} from './types';

export function getMessages() {
  return {
    type: GET_MESSAGES_REQUEST
  }
}

export function addMessageRequest(payload) {
  return {
    type: ADD_MESSAGE_REQUEST,
    payload
  }
}

export function addMessageSuccess(payload) {
  return {
    type: ADD_MESSAGE_SUCCESS,
    payload
  }
}
export function addMessageFail(payload) {
  return {
    type: ADD_MESSAGE_FAILURE,
    payload
  }
}

export function removeMessageRequest(payload) {
  return {
    type: REMOVE_MESSAGE_REQUEST,
    payload
  }
}

export function removeMessageSuccess(payload) {
  return {
    type: REMOVE_MESSAGE_SUCCESS,
    payload
  }
}

export function removeMessageFail(payload) {
  return {
    type: REMOVE_MESSAGE_FAILURE,
    payload
  }
}
