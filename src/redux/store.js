import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { api } from './api/ApiSlice';
import useTokenReducer from './features/users/UserTokenSlice';


const persistConfig = {
  key: 'next',
  storage,
 
};

const rootReducer = combineReducers({
  UserAccessToken: useTokenReducer,
  [api.reducerPath]: api.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});


export default store;
