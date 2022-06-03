import { useDispatch, useSelector } from "react-redux"
import { basketBtnShownSelector, subtractIsBasketBtnShown } from "../redux/slices/basketSlice"
import { setUserBasket, userBasketSelector } from "../redux/slices/userSlice"

export const useSubtractBasket = () => {
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const userBasket = useSelector(userBasketSelector)
  const dispatch = useDispatch()

  const subtracting = (item) => {
    const obj = userBasket.find(elem => elem.id === item.id)
    const basketIndex = userBasket.indexOf(obj)
    const indexOfItemId = isBasketBtnShown.indexOf(item.id)
    const arr = [...userBasket];
    arr.splice(basketIndex , 1)
    const filteredItemIdArr = isBasketBtnShown.filter((item, i) => i !== indexOfItemId)
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
    dispatch(setUserBasket(arr))
  }
  return subtracting
}