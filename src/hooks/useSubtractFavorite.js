import { useDispatch, useSelector } from "react-redux"
import { favoriteSelector, subTractFavorite } from "../redux/slices/userSlice"

export const useSubtractFavorite = () => {

  const favorite = useSelector(favoriteSelector)
  const dispatch = useDispatch()

  const subtract = (item) => {
    const arr = favorite
    const obj = arr.find(elem => elem.id === item.id)
    const unseenBasketIndex = arr.indexOf(obj)
    const filteredUnseenArr = arr.filter((elem, i) => i !== unseenBasketIndex)
 
    dispatch(subTractFavorite(filteredUnseenArr))
  }
  return subtract
}