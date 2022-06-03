import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import {setAdmin} from '../redux/slices/adminSlice'
import {mainUrl} from "../api/api"
import {basketBtnShownSelector, subtractIsBasketBtnShown} from "../redux/slices/basketSlice"
import {
  removeUser,
  setUserBasket,
  subTractFavorite,
  userSelector,
} from "../redux/slices/userSlice"

export const useLogout = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout =  () => {
    dispatch(setUserBasket([]))
    dispatch(subtractIsBasketBtnShown([]))
    dispatch(subTractFavorite([]))

    localStorage.setItem(`${user.userBasket}`, JSON.stringify(JSON.parse(sessionStorage.getItem('userBasket'))))
    localStorage.setItem(`${user.isBasketBtnShown}`, JSON.stringify(JSON.parse(sessionStorage.getItem('isBasketBtnShown'))))
    localStorage.setItem(`${user.favorite}`, JSON.stringify(JSON.parse(sessionStorage.getItem('favorite'))))

    sessionStorage.removeItem('userBasket')
    sessionStorage.removeItem('isBasketBtnShown')
    sessionStorage.removeItem('favorite')

    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    dispatch(removeUser())
    dispatch(setAdmin(false))
      navigate('../homePage')
  }

  return logout
}