import { useDispatch, useSelector } from "react-redux"
import { favoriteSelector, subTractFavorite } from "../redux/slices/userSlice"

export const useSubtractFavorite = () => {
  const favorite = useSelector(favoriteSelector)
  const dispatch = useDispatch()

  const subtract = (item) => {
    const obj = favorite.find(elem => elem.id === item.id)
    const objIndex = favorite.indexOf(obj)
    const filteredFavoriteArr = favorite.filter((elem, i) => i !== objIndex)
 
    dispatch(subTractFavorite(filteredFavoriteArr))
  }
  return subtract
}