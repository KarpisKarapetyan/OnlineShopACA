import {useDispatch, useSelector} from "react-redux"
import {setIsBasketBtnShown} from "../redux/slices/basketSlice"
import {
  pushUserBasket,
  userBasketSelector,
  userSelector,
} from "../redux/slices/userSlice"

export const useAddBasket = () => {
  const user = useSelector(userSelector)
  const userBasket = useSelector(userBasketSelector)
  const dispatch = useDispatch()

  const adding = (item) => {
    if (user) {

      dispatch(pushUserBasket(item))
      dispatch(setIsBasketBtnShown(item.id))
    } else {
      alert("please Log in")
    }
  }

  return adding
}
