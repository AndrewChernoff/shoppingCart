import { configureStore  } from '@reduxjs/toolkit'
import loginizationReducer from '../redux/loginizationReducer'
import notificationReducer from '../redux/notificationReducer'
import products from '../redux/productsReducer'


const store = configureStore({
    reducer: {
      products: products,
      notification: notificationReducer,
      loginization: loginizationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  })

  console.log(store.getState())

export default store