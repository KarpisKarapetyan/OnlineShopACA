import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useAddBasket} from "../../../../hooks/useAddBasket"
import {useSubtractBasket} from "../../../../hooks/useSubtractBasket"
import {basketBtnShownSelector} from "../../../../redux/slices/basketSlice"
import {userBasketSelector} from "../../../../redux/slices/userSlice"
import classes from "./BasketComponent.module.css"

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const [basketArr, setBasketArr] = useState([])
  const [basketPrice, setBasketPrice] = useState(0)

  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  useEffect(() => {
    sessionStorage.setItem("isBasketBtnShown", JSON.stringify(isBasketBtnShown))
    sessionStorage.setItem("userBasket", JSON.stringify(userBasket))
    
    const newArr = []
    userBasket.forEach((item) => {
      newArr.push({...item})
    })

    const arr = newArr.reduce((acc, item, i) => {
      if (i !== 0) {
        const obj = acc.find((elem) => elem.id === item.id)
        if (obj) {
          const index = acc.indexOf(obj)
          acc[index].count++
          return acc
        } else {
          item.count = 1
          acc.push(item)
          return acc
        }
      } else {
        item.count = 1
        acc.push(item)
        return acc
      }
    }, [])

    const price = newArr.reduce((acc, item) => {
      acc += +item.price
      return acc
    }, 0)

    setBasketPrice(price)
    setBasketArr(arr)
  }, [userBasket])

  return (
    <div className={classes.items}>
      {basketArr.map((item) => {
        return (
          <div className={classes.basketItem} key={item.id}>
            <div className={classes.basketItemImg}>
              <img src={item.location} />
            </div>
            <div>
              <p>{item.count} Qty</p>
            <p>
              {" "}
              {item.price} AMD / {item.size}{" "}
            </p>
            </div>
            <button onClick={() => addBasket(item)}>+</button>
            <button onClick={() => subtractBasket(item)}>-</button>
          </div>
        )
      })}

      <div>{basketPrice}</div>
      <button className={classes.buyButton}>Buy</button>
    </div>
  )
}

export default BasketComponent
