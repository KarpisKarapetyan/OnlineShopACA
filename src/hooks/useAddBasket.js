import {useDispatch, useSelector} from "react-redux"
import {setIsBasketBtnShown} from "../redux/slices/basketSlice"
import {
  setUnseenUserBasket,
  userSelector,
} from "../redux/slices/userSlice"

export const useAddBasket = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const adding = (item) => {
    if (user) {
      dispatch(setUnseenUserBasket(item))
      dispatch(setIsBasketBtnShown(item.id))
    } else {
      alert("please Log in")
    }
  }

  return adding
}
