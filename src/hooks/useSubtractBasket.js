import { useDispatch, useSelector } from "react-redux"
import { basketBtnShownSelector, subtractIsBasketBtnShown } from "../redux/slices/basketSlice"
import { setUserBasket,unseenBasketSelector, userBasketSelector } from "../redux/slices/userSlice"

export const useSubtractBasket = () => {
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const userBasket = useSelector(userBasketSelector)
  const dispatch = useDispatch()

  const subtracting = (item) => {
    const arr = userBasket
    const basketShownArr = isBasketBtnShown
    const obj = arr.find(elem => elem.id === item.id)
    const unseenBasketIndex = arr.indexOf(obj)
    const indexOfItemId = basketShownArr.indexOf(item.id)
    const filteredUnseenArr = arr.filter((elem, i) => i !== unseenBasketIndex)
    const filteredItemIdArr = basketShownArr.filter((item, i) => i !== indexOfItemId)
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
    dispatch(setUserBasket(filteredUnseenArr))
  }
  return subtracting
}