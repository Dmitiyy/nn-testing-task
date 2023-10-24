import { configureStore } from '@reduxjs/toolkit'
import ratesReducer from './reducers/rates'
import { ratesApi } from './services/rates'

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    [ratesApi.reducerPath]: ratesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ratesApi.middleware)
})