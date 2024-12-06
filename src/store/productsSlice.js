import {createSlice} from "@reduxjs/toolkit";
import products from "../data/products";


const initialState = {
  products: products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
