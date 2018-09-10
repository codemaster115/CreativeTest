import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  REMOVE_MESSAGE_REQUEST,
  REMOVE_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_FAILURE
} from '../actions/types';

const initialState = {
  list: [],
  status: null,
  error: null,
  loading: false
};

export default function message(state = initialState, {type, payload}) {
  switch (type) {
    case GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case ADD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, payload],
        error: null
      }
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case REMOVE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REMOVE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(msg => msg.uid != payload),
        error: null
      };
    case REMOVE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}