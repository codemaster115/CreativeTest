import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()
const middleWare = [
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
)

sagaMiddleware.run(sagas)

export default store