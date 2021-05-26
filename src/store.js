import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {news} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, news);

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(logger, ReduxThunk),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
