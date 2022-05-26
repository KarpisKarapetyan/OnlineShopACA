import {useEffect,} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
  basketBtnShownSelector,
  setIsBasketBtnShown,
  subtractIsBasketBtnShown,
} from "../../../../redux/slices/basketSlice"
import {
  basketCounterSelector,
  setBasketItemCounter,
  setUnseenUserBasket,
  setUserBasket,
  subtractUnseenBasket,
  subtractUserBasket,
  unseenBasketSelector,
  userBasketSelector,
} from "../../../../redux/slices/userSlice"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const unseenUserBasket = useSelector(unseenBasketSelector)
  const basketItemCounter = useSelector(basketCounterSelector)
  const dispatch = useDispatch()

  console.log(basketItemCounter);
  console.log(unseenUserBasket)

  const addBasket = (item) => {
    const arr = userBasket
      const findedItem = arr.find((element) => element === item)
      if (findedItem) {
        dispatch(setUnseenUserBasket(item))
      } else {
        dispatch(setBasketItemCounter(1))
        dispatch(setUserBasket(item))
        dispatch(setUnseenUserBasket(item))
        dispatch(setIsBasketBtnShown(item.id))
      }
  }

  const subtractBasket = (item) => {
    const arr = userBasket
    const unSeenArr = unseenUserBasket
    const basketShownArr = isBasketBtnShown

    const index = arr.indexOf(item)
    const unseenBasketIndex = unSeenArr.indexOf(item)
    const indexOfItemId = basketShownArr.indexOf(item.id)

    const filteredArr = arr.filter((item, i) => i !== index)
    const filteredUnseenArr = unSeenArr.filter((item, i) => i !== unseenBasketIndex)
    const filteredItemIdArr = basketShownArr.filter(
      (item, i) => i !== indexOfItemId
    )

    dispatch(subtractUserBasket(filteredArr))
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
    dispatch(subtractUnseenBasket(filteredUnseenArr))
  }

  return (
    <div>
      {userBasket.map((item) => {
        return (
          <div key={item.id}>
            <div>{basketItemCounter}</div>
            <div>{item.price}</div>
            <div>{item.size}</div>
            <button onClick={() => addBasket(item)}>+</button>
            <button onClick={() => subtractBasket(item)}>-</button>
          </div>
        )
      })}
    </div>
  )
}

export default BasketComponent
