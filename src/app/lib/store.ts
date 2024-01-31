import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart'
import { productReducer } from './features/products'
import { productApi } from './services/product'

export const makeStore = () => {
  return configureStore({
    reducer: {
    cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    productReducer,
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(productApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']