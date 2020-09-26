import {createStore, applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'
import pReducer from './root-reducer'
import {persistStore} from "redux-persist";

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);
const persistor = persistStore(store)
export {store,persistor} ;

