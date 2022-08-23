import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  productsItems: [],
  cart: [],
  totalPrice: 0,
  login: false
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    loginInCart: (state) => {
      state.login = !state.login
    },
    productsPending: (state) => {
      state.status = "loading";
    },
    fetchProducts: (state, { payload }) => {
      state.status = "loading";
      state.productsItems = payload;
      state.status = "idle";
    },
    addInCart: (state, { payload }) => {
      const repeatedProduct = state.cart.find((el) => el.id === payload.id);
      if (repeatedProduct) {
        repeatedProduct.quantity++;
      } else {
        state.cart.push(payload);
      }
    },
    incrementQuantity: (state, {payload}) => {
      const product = state.cart.find((el) => el.id === payload);
      product.quantity++;
    },
    decrementQuantity: (state, {payload}) => {
      const product = state.cart.find((el) => el.id === payload);
      if(product.quantity <= 1) {
        state.cart = state.cart.filter(el => el.id !== payload)
      } else {
        product.quantity--;
      }
    },
    removeProduct: (state, {payload}) => {
        state.cart = state.cart.filter(el => el.id !== payload)
    }
  },
});

export const {
   addInCart, removeProduct,
   fetchProducts, incrementQuantity, decrementQuantity, 
   loginInCart
   } = products.actions;

export default products.reducer;
