import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import {setAdmin} from '../redux/slices/adminSlice'
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
    dispatch(subTractFavorite([]))

    localStorage.setItem(`${user.userBasket}`, JSON.stringify(JSON.parse(sessionStorage.getItem('userBasket'))))
    localStorage.setItem(`${user.favorite}`, JSON.stringify(JSON.parse(sessionStorage.getItem('favorite'))))

    sessionStorage.removeItem('userBasket')
    sessionStorage.removeItem('favorite')

    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    dispatch(removeUser())
    dispatch(setAdmin(false))
      navigate('../homePage')
  }

  return logout
}