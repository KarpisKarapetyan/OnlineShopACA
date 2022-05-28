import {useDispatch, useSelector} from "react-redux"
import {setIsBasketBtnShown} from "../redux/slices/basketSlice"
import {
  setBasketItemCounter,
  setUnseenUserBasket,
  userBasketSelector,
  userSelector,
} from "../redux/slices/userSlice"

export const useAddBasket = () => {
  const user = useSelector(userSelector)
  const userBasket = useSelector(userBasketSelector)
  const dispatch = useDispatch()

  const adding = (item) => {
    if (user) {
      const arr = userBasket
      const findedItem = arr.find((element) => element.id === item.id)
      if (findedItem) {
        dispatch(setUnseenUserBasket(item))
        dispatch(setBasketItemCounter(Math.random()))
        dispatch(setIsBasketBtnShown(item.id))
      } else {
        dispatch(setBasketItemCounter(1))
        dispatch(setUnseenUserBasket(item))
        dispatch(setIsBasketBtnShown(item.id))
      }
    } else {
      alert("please Log in")
    }
  }

  return adding
}
