import {useDispatch, useSelector} from "react-redux"
import { favoriteSelector, pushFavorite } from "../redux/slices/userSlice"

export const useAddFavorite = () => {
  const favorite = useSelector(favoriteSelector)
  const dispatch = useDispatch()
  const adding = (item) => {
    if(!(favorite.find(elem => item.id === elem.id)))
      dispatch(pushFavorite(item))
    } 
  return adding
}
