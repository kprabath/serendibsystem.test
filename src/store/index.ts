import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

let store: Store = createStore(rootReducer, {}, applyMiddleware(...middleware));

if (__DEV__) {
  store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );
}

sagaMiddleware.run(rootSaga);

export {store};
