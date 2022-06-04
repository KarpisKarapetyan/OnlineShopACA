import {useDispatch, useSelector} from "react-redux"
import {
  pushUserBasket,
  userSelector,
} from "../redux/slices/userSlice"

export const useAddBasket = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const adding = (item) => {
    if (user) {
      dispatch(pushUserBasket(item))
    } else {
      alert("please Log in")
    }
  }

  return adding
}
