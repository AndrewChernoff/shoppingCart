import { configureStore  } from '@reduxjs/toolkit'
import notificationReducer from '../redux/notificationReducer'
import products from '../redux/productsReducer'


const store = configureStore({
    reducer: {
      products: products,
      notification: notificationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  })

  console.log(store.getState())

export default store