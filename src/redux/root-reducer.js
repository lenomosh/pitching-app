import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import {persistReducer} from "redux-persist";
import storage from  'redux-persist/lib/storage'

const rootReducer= combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persistConfig, rootReducer);
export default pReducer
