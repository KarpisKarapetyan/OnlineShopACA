import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useAddBasket} from "../../../../hooks/useAddBasket"
import {useSubtractBasket} from "../../../../hooks/useSubtractBasket"
import { basketBtnShownSelector } from "../../../../redux/slices/basketSlice"
import {
  favoriteSelector,
  userBasketSelector,
} from "../../../../redux/slices/userSlice"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const [basketArr, setBasketArr] = useState([])
  const dispatch = useDispatch()
  const favorite = useSelector(favoriteSelector)

  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  useEffect(() => {
    sessionStorage.removeItem('favorite')
    sessionStorage.removeItem("isBasketBtnShown")
    sessionStorage.setItem('favorite', JSON.stringify(favorite))
    sessionStorage.setItem('isBasketBtnShown', JSON.stringify(isBasketBtnShown))
    sessionStorage.removeItem('userBasket')
    sessionStorage.setItem('userBasket', JSON.stringify(userBasket))

    const newArr = []
    userBasket.forEach((item) => {
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

   setBasketArr(arr)
  }, [userBasket])

  return (
    <div>
      {basketArr.map((item) => {
        return (
          <div className="letterColor" key={item.id}>
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
