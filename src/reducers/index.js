import {
  FETCH_NEWS_FULFILLED,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_REJECTED,
  FETCH_NEW_FULFILLED,
  FETCH_NEW_PENDING,
  FETCH_NEW_REJECTED,
} from '../actions/actionTypes';

const initialState = {
  ids: [],
  loading: false,
  error: null,
  data: [],
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {...state, loading: true, ids: [], error: null, data: []};
    case FETCH_NEWS_FULFILLED:
      return {...state, loading: false, ids: action.payload, error: null};
    case FETCH_NEWS_REJECTED:
      return {...state, loading: false, error: action.payload};
    case FETCH_NEW_PENDING:
      return {...state, loading: true, error: null};
    case FETCH_NEW_FULFILLED:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
        error: null,
      };
    case FETCH_NEW_REJECTED:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
