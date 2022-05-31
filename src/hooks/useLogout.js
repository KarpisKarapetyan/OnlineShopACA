import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {mainUrl} from "../api/api"
import {basketBtnShownSelector, subtractIsBasketBtnShown} from "../redux/slices/basketSlice"
import {
  favoriteSelecotr,
  favoriteSelector,
  removeUser,
  setUserBasket,
  subtractUnseenBasket,
  unseenBasketSelector,
  userBasketSelector,
  userSelector,
} from "../redux/slices/userSlice"

export const useLogout = () => {
  const user = useSelector(userSelector)
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const favorite = useSelector(favoriteSelector)
  const dispatch = useDispatch()

  const logout =  () => {
    const id = user.id

    const obj = {
      name: user.name,
      password: user.password,
      id: id,
      userBasket: userBasket,
      isBasketBtnShown: isBasketBtnShown,
      favorite: favorite
    }

    dispatch(setUserBasket([]))
    dispatch(subtractIsBasketBtnShown([]))

    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem('userBasket')
    sessionStorage.removeItem('favorite')
    sessionStorage.removeItem('isBasketBtnShown')
    dispatch(removeUser())

    axios
      .delete(`${mainUrl}/users/${id}`)
      .then(() => axios.post(`${mainUrl}/users`, obj))
  }

  return logout
}
