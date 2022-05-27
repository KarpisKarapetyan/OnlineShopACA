import axios from "axios"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"
import { useSubtractBasket } from "../../hooks/useSubtractBasket"
import { basketBtnShownSelector} from "../../redux/slices/basketSlice"
import Loadable from "../Loadable/Loadable"
//import classes from "./ManTshirts.module.css"
import "./ManTshirts.css"

const ManTshirts = () => {
  const [tshirtsArr, setTshirtsArr] = useState([])
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  useEffect(() => {
    axios.get(`${mainUrl}/manTshirts`).then((res) => {
      setTshirtsArr(res.data)
    })
  }, [])


  return (
    <div>
      {tshirtsArr.map((item, i) => {
        return (
          <div key={item.id}>
            <div className="item">
              <Loadable src={item.locaion}/>
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
