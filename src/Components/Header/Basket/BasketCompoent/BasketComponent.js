import {useEffect, useState,} from "react"
import {useDispatch, useSelector} from "react-redux"
import { useAddBasket } from "../../../../hooks/useAddBasket"
import { useSubtractBasket } from "../../../../hooks/useSubtractBasket"
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
    unseenUserBasket.forEach(item => {
      newArr.push({...item})
    })

    const arr = newArr.reduce((acc, item, i, array) => {
      if(i !== 0){
        if(item.id === array[i - 1].id){
          for(let i = 0; i < acc.length; i++){
            if(acc[i].id === item.id){
              acc[i].count += 1
              break
            }
          }
          return acc
        }else{
          item.count = 1
          acc.push(item)
          return acc
        }
      }else{
        item.count = 1
        acc.push(item)
        return acc
      }
    }, [])
    dispatch(setUserBasket(arr))
  }, [basketItemCounter])


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
