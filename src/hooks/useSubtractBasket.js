import { useDispatch, useSelector } from "react-redux"
import { setUserBasket, userBasketSelector } from "../redux/slices/userSlice"

export const useSubtractBasket = () => {
  const userBasket = useSelector(userBasketSelector)
  const dispatch = useDispatch()

  const subtracting = (item) => {
    const obj = userBasket.find(elem => elem.id === item.id)
    const basketIndex = userBasket.indexOf(obj)
    const arr = [...userBasket];
    arr.splice(basketIndex , 1)
    dispatch(setUserBasket(arr))
  }
  return subtracting
}