import {createStore,applyMiddleware} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {rootReducer} from '../redux/root-reducer'
import logger from 'redux-logger'
import {persistReducer,persistStore} from 'redux-persist'
import thunk from 'redux-thunk'


const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist:['reminder','user'],
    blacklist:['app']
}
const middleware = [thunk]
export const persistreducer = persistReducer(persistConfig,rootReducer);
export default store = createStore(persistreducer,applyMiddleware(...middleware))
export const persistor=persistStore(store);

