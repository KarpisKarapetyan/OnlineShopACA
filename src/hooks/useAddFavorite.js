import {useDispatch} from "react-redux"
import { pushFavorite } from "../redux/slices/userSlice"

export const useAddFavorite = () => {
  const dispatch = useDispatch()
  const adding = (item) => {
      dispatch(pushFavorite(item))
    } 
  return adding
}
