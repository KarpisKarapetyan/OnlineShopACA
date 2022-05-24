import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem('user') ||
    sessionStorage.getItem("user") ||
    null
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
        }
    }
})

export const userSelector = state => state.user.user

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer