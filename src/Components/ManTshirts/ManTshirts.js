import axios from "axios"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {mainUrl} from "../../api/api"
import {
  basketBtnShownSelector,
  setIsBasketBtnShown,
  subtractIsBasketBtnShown,
} from "../../redux/slices/basketSlice"
import {
  setUserBasket,
  subtractUserBasket,
  userBasketSelector,
  userSelector,
} from "../../redux/slices/userSlice"
import classes from "./ManTshirts.module.css"

const ManTshirts = () => {
  const user = useSelector(userSelector)
  const [tshirtsArr, setTshirtsArr] = useState([])
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${mainUrl}/manTshirts`).then((res) => {
      setTshirtsArr(res.data)
    })
  }, [])

  const addBasket = (item) => {
    if (user) {
      dispatch(setUserBasket(item))
      dispatch(setIsBasketBtnShown(item.id))
    }
    else{
        alert("please Log in")
    }
  }

  const subtractBasket = (item) => {
    const arr = userBasket
    const basketShownArr = isBasketBtnShown
    let index = arr.indexOf(item)
    let indexOfItemId = basketShownArr.indexOf(item.id)
    const filteredArr = arr.filter((item, i) => i !== index)
    console.log(filteredArr);
    const filteredItemIdArr = basketShownArr.filter(
      (item, i) => i !== indexOfItemId
    )
    dispatch(subtractUserBasket(filteredArr))
    dispatch(subtractIsBasketBtnShown(filteredItemIdArr))
  }

  return (
    <div>
      {tshirtsArr.map((item, i) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.location} />
            </div>
            <span>{item.price}</span>
            <span>{item.size}</span>
            {isBasketBtnShown.includes(item.id) ? (
              <div>
                <button onClick={() => addBasket(item)}>+</button>
                <button onClick={() => subtractBasket(item)}>-</button>
              </div>
            ) : (
              <button onClick={() => addBasket(item)}>add basket</button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ManTshirts
