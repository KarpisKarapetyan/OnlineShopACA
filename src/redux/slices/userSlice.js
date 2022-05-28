import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
  user: localStorage.getItem("user") || sessionStorage.getItem("user") || null,
  userBasket: [],
  unseenUserBasket: [],
  basketItemCounter: 0,
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
      state.userBasket = payload
    },
    setUnseenUserBasket: (state, {payload}) => {
      state.unseenUserBasket.push(payload)
    },
    subtractUnseenBasket: (state, {payload}) => {
      state.unseenUserBasket = payload
    }
  },
})

export const userSelector = (state) => state.user.user
export const userBasketSelector = (state) => state.user.userBasket
export const unseenBasketSelector = (state) => state.user.unseenUserBasket

export const {
  setUser,
  removeUser,
  setUserBasket,
  setUnseenUserBasket,
  subtractUnseenBasket,
} = userSlice.actions

export default userSlice.reducer
