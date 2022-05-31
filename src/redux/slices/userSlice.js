import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
  user:
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    null,
  userBasket: JSON.parse(sessionStorage.getItem("userBasket")) || [],
  basketItemCounter: 0,
  favorite: JSON.parse(sessionStorage.getItem("favorite")) || [],
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
    pushUserBasket: (state, {payload}) => {
      state.userBasket.push(payload)
    },
    pushFavorite: (state, {payload}) => {
      state.favorite.push(payload)
    },
    subTractFavorite: (state, {payload}) => {
      state.favorite = payload
    },
  },
})

export const userSelector = (state) => state.user.user
export const userBasketSelector = (state) => state.user.userBasket
export const favoriteSelector = (state) => state.user.favorite

export const {
  setUser,
  removeUser,
  setUserBasket,
  pushUserBasket,
  pushFavorite,
  subTractFavorite,
} = userSlice.actions

export default userSlice.reducer
