import axios from "axios"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {mainUrl} from "../../api/api"
import {useAddBasket} from "../../hooks/useAddBasket"
import {useSubtractBasket} from "../../hooks/useSubtractBasket"
import {basketBtnShownSelector} from "../../redux/slices/basketSlice"
import Loadable from "../Loadable/Loadable"
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

  const sort = (e) => {
    console.log(e.target.value);
    if(e.target.value === 'sortHigh'){
      const arr1  = tshirtsArr.sort((a, b) => a.price - b.price)
      console.log(arr1);
      setTshirtsArr([...arr1])
    }

    if(e.target.value === "sortDown"){
      const arr2  = tshirtsArr.sort((a, b) => b.price - a.price)
      console.log(arr2);
      setTshirtsArr([...arr2])
    }
  }

  return (
    <div>
      <form action="#">
        <label for="lang">sort</label>
        <select name="sorting" onChange={sort}>
          <option value="javascript">Select sort type</option>
          <option value="sortHigh">in ascending order</option>
          <option value="sortDown">in descending order</option>
        </select>
      </form>
      {tshirtsArr.map((item, i) => {
        return (
          <div key={item.id}>
            <div className="item">
              <Loadable src={tshirtsArr[i].location} />
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
