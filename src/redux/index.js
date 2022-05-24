import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authSlice from "./slices/authSlice"
import basketSlice from "./slices/basketSlice"

export const rootReducer = combineReducers({
    user: userReducer,
    authRoute: authSlice,
    isBasketShown: basketSlice
})