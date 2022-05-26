import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
  basketBtnShownSelector,
  setIsBasketBtnShown,
  subtractIsBasketBtnShown,
} from "../../../../redux/slices/basketSlice"
import {
  setUserBasket,
  subtractUserBasket,
  userBasketSelector,
} from "../../../../redux/slices/userSlice"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const [basketItemCounter, setBasketItemCounter] = useState(0)
  const dispatch = useDispatch()


  const addBasket = (item) => {
    dispatch(setUserBasket(item))
    dispatch(setIsBasketBtnShown(item.id))
  }

  const subtractBasket = (item) => {
    const arr = userBasket
    const basketShownArr = isBasketBtnShown
    let index = arr.indexOf(item)
    let indexOfItemId = basketShownArr.indexOf(item.id)
    const filteredArr = arr.filter((item, i) => i !== index)
    console.log(filteredArr)
    const filteredItemIdArr = basketShownArr.filter(
      (item, i) => i !== indexOfItemId
    )
    dispatch(subtractUserBasket(filteredArr))
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
  }

  console.log(isBasketBtnShown)

  return (
    <div>
      {userBasket.map((item) => {
        return (
          <div key={item.id}>
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
