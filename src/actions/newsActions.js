import {
  FETCH_NEWS_FULFILLED,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_REJECTED,
  FETCH_NEW_FULFILLED,
  FETCH_NEW_PENDING,
  FETCH_NEW_REJECTED,
} from './actionTypes';
import axios from 'axios';
import {API_URL} from '../constants';

export const fetchNews = () => async dispatch => {
  dispatch({type: FETCH_NEWS_PENDING});
  try {
    const result = await axios.get(`${API_URL}/topstories.json`);
    dispatch({type: FETCH_NEWS_FULFILLED, payload: result.data});
    result.data.forEach((item, index) => {
      if (index < 30) {
        dispatch(fetchNewsById(item));
      }
    });
  } catch (error) {
    dispatch({type: FETCH_NEWS_REJECTED, payload: error});
  }
};

export const fetchNewsById = id => async dispatch => {
  dispatch({type: FETCH_NEW_PENDING});
  try {
    const result = await axios.get(`${API_URL}/item/${id}.json`);
    dispatch({type: FETCH_NEW_FULFILLED, payload: result.data});
  } catch (error) {
    dispatch({type: FETCH_NEW_REJECTED, payload: error});
  }
};
