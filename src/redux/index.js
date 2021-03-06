import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authSlice from "./slices/authSlice"
import basketSlice from "./slices/basketSlice"
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import adminSlice from "./slices/adminSlice";
import isAddProductSlice from './slices/addProduct'
import adminProductSlice from './slices/adminProducts'

export const rootReducer = combineReducers({
    user: userReducer,
    authRoute: authSlice,
    isBasketShown: basketSlice,
    filterData : filterSlice,
    searchArr: searchSlice,
    admin : adminSlice,
    isAddProduct : isAddProductSlice,
    adminProduct : adminProductSlice
})