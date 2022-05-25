import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authSlice from "./slices/authSlice"
import basketSlice from "./slices/basketSlice"
import filterSlice from "./slices/filterSlice";

export const rootReducer = combineReducers({
    user: userReducer,
    authRoute: authSlice,
    isBasketShown: basketSlice,
    filterData : filterSlice
})