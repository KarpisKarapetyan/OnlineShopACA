import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useAddBasket} from "../../../../hooks/useAddBasket"
import {useSubtractBasket} from "../../../../hooks/useSubtractBasket"
import {
  setUserBasket,
  unseenBasketSelector,
  userBasketSelector,
} from "../../../../redux/slices/userSlice"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const unseenUserBasket = useSelector(unseenBasketSelector)
  const dispatch = useDispatch()

  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  useEffect(() => {
    const newArr = []
    unseenUserBasket.forEach((item) => {
      newArr.push({...item})
    })

    const arr = newArr.reduce((acc, item, i) => {
        if(i !== 0){
          const obj = acc.find(elem => elem.id === item.id)
          if(obj){
            const index = acc.indexOf(obj)
            acc[index].count++
            return acc
          }
          else{
            item.count = 1
            acc.push(item)
            return acc
          }
        }
        else{
          item.count = 1
          acc.push(item)
          return acc
        }
    }, [])

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
