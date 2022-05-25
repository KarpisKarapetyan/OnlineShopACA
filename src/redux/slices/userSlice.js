import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem('user') ||
    sessionStorage.getItem("user") ||
    null,
    userBasket: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
        },
        removeUser: (state) => {
            state.user = null
        },
        setUserBasket: (state, {payload}) => {
            state.userBasket.push(payload)
        },
        subtractUserBasket: (state, {payload}) => {
            console.log(payload);
            state.userBasket = payload
        }
    }
})

export const userSelector = state => state.user.user
export const userBasketSelector = state => state.user.userBasket

export const {setUser, removeUser, setUserBasket, subtractUserBasket} = userSlice.actions

export default userSlice.reducer