import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBasketShown: false
}

const basketSlice = createSlice({
    name: "isBasketShown",
    initialState,
    reducers: {
        setIsBasketShown: (state, {payload}) => {
            state.isBasketShown = payload
        }
    }
})

export const basketSelector = state => state.isBasketShown.isBasketShown

export const {setIsBasketShown} = basketSlice.actions

export default basketSlice.reducer