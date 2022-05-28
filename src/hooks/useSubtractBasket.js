import { useDispatch, useSelector } from "react-redux"
import { basketBtnShownSelector, subtractIsBasketBtnShown } from "../redux/slices/basketSlice"
import { setBasketItemCounter, subtractUnseenBasket, unseenBasketSelector } from "../redux/slices/userSlice"

export const useSubtractBasket = () => {
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const unseenUserBasket = useSelector(unseenBasketSelector)
  const dispatch = useDispatch()

  const subtracting = (item) => {
    const unSeenArr = unseenUserBasket
    const basketShownArr = isBasketBtnShown
    const obj = unSeenArr.find(elem => elem.id === item.id)
    const unseenBasketIndex = unSeenArr.indexOf(obj)
    const indexOfItemId = basketShownArr.indexOf(item.id)
    const filteredUnseenArr = unSeenArr.filter((elem, i) => i !== unseenBasketIndex)
    const filteredItemIdArr = basketShownArr.filter((item, i) => i !== indexOfItemId)
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
    dispatch(subtractUnseenBasket(filteredUnseenArr))
  }
  return subtracting
}