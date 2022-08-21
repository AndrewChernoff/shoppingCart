import { configureStore  } from '@reduxjs/toolkit'
import products from '../redux/productsReducer'


const store = configureStore({
    reducer: {products: products},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  })

  console.log(store.getState())

export default store