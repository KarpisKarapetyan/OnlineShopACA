import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useAddBasket} from "../../../../hooks/useAddBasket"
import {useSubtractBasket} from "../../../../hooks/useSubtractBasket"
import {
  basketCounterSelector,
  setUserBasket,
  unseenBasketSelector,
  userBasketSelector,
} from "../../../../redux/slices/userSlice"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const unseenUserBasket = useSelector(unseenBasketSelector)
  const basketItemCounter = useSelector(basketCounterSelector)
  const dispatch = useDispatch()

  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  useEffect(() => {
    const newArr = []
    unseenUserBasket.forEach((item) => {
      newArr.push({...item})
    })

    const arr = newArr.reduce((acc, item, i, array) => {
      if (i !== 0) {
          for (let i = 0; i < acc.length; i++) {
            console.log("acc for", acc)
            if (acc[i].id === item.id) {
              console.log('acc if', acc);
              acc[i].count += 1
              break
            } else {
              item.count = 1
              acc.push(item)
              console.log("acc else if", acc)
              return acc
            }
          }
        } else {
          item.count = 1
          acc.push(item)
          console.log("acc else", acc)
          return acc
        }
    }, [])
    console.log("arr", arr)
    dispatch(setUserBasket(arr))
  }, [unseenUserBasket])

  return (
    <div>
      {userBasket.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.count}</div>
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
