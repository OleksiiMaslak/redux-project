import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {reducer as favoritReduser} from './favorites/favorites.slice';
import { userSlice } from './user/user.slice';
import {api} from './api/api'

const reducers = combineReducers({
  favorites: favoritReduser,
  user: userSlice.reducer, 
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

