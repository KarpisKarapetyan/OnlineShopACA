import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBasketShown: false,
    isBasketBtnShown: []
}

const basketSlice = createSlice({
    name: "isBasketShown",
    initialState,
    reducers: {
        setIsBasketShown: (state, {payload}) => {
            state.isBasketShown = payload
        },
        setIsBasketBtnShown: (state, {payload}) => {
            state.isBasketBtnShown.push(payload)
        },
        subtractIsBasketBtnShown: (state, {payload}) => {
            state.isBasketBtnShown = payload
        }
    }
})

export const basketSelector = state => state.isBasketShown.isBasketShown
export const basketBtnShownSelector = state => state.isBasketShown.isBasketBtnShown

export const {setIsBasketShown, setIsBasketBtnShown, subtractIsBasketBtnShown} = basketSlice.actions

export default basketSlice.reducer