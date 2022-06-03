import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import {useAddBasket} from "../../hooks/useAddBasket"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import {
  favoriteSelector,
  userBasketSelector,
} from "../../redux/slices/userSlice"
// import { useAddFavorite } from '../../../hooks/useAddFavorite'
import ImageZoom from "../HomePage/ImageZoom/ImageZoom"
import "./TshirtMan.css"
import {useSelector} from "react-redux"
import {useAddFavorite} from "../../hooks/useAddFavorite"
import Loadable from "../Loadable/Loadable"
import { basketBtnShownSelector } from "../../redux/slices/basketSlice"
import { useSubtractBasket } from "../../hooks/useSubtractBasket"

const TshirtMan = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [tshirtManArr, setTshirtManArr] = useState([])
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("tshirtMan"))) {
      axios
        .get(`${mainUrl}/allProducts`)
        .then((res) => {
          const arr = res.data.filter((item) =>
            item.name.some((item) => item === "man tshirt")
          )
          setTshirtManArr(arr)
          return arr
        })
        .then((arr) => sessionStorage.setItem("tshirtMan", JSON.stringify(arr)))
    } else {
      setTshirtManArr(JSON.parse(sessionStorage.getItem("tshirtMan")))
    }
  }, [])

  const goBasket = useAddBasket()
  const goFavorite = useAddFavorite()
  const subtractBasket = useSubtractBasket()

  const sort = (e) => {
    if (e.target.value === "sortHigh") {
      const arr1 = tshirtManArr.sort((a, b) => a.price - b.price)
      setTshirtManArr([...arr1])
    }

    if (e.target.value === "sortDown") {
      const arr2 = tshirtManArr.sort((a, b) => b.price - a.price)
      setTshirtManArr([...arr2])
    }
  }

  return (
    <div className="bgColorBlue">
      <div className="sortDiv">
        <form action="#">
          <label for="lang"></label>
          <select name="sorting" onChange={sort}>
            <option value="javascript">Select sort type</option>
            <option value="sortHigh">PRICE (LOW - HIGH)</option>
            <option value="sortDown">PRICE (HIGH - LOW)</option>
          </select>
        </form>
      </div>
      <div className="manTitleContainer">
        <span> Man T-shirt</span>
      </div>
      <div className="manItemContainer">
        {tshirtManArr.map((item, i) => {
          return (
            <div key={i} className="manItem">
              <Loadable src={tshirtManArr[i].location} />
              <div className="dressDetailsCarusel">
                {isBasketBtnShown.includes(item.id) ? (
                  <div className="addAndSubtractBtns">
                    <button className="addBasketBtnStyle" onClick={() => goBasket(item)}>+</button>
                    <button className="subtractBasketBtn" onClick={() => subtractBasket(item)}>-</button>
                  </div>
                ) : (
                  <label className="iconItem" onClick={() => goBasket(item)}>
                  <AddShoppingCartIcon
                    className={userBasket.includes(item) ? "activFavorite" : ""}
                  />
                </label>
                )}
                <label className="iconItem" onClick={() => goFavorite(item)}>
                  <FavoriteIcon
                    className={
                      favoriteArr.includes(item) ? "activFavorite" : ""
                    }
                  />
                </label>
                <ImageZoom img={tshirtManArr[i].location} />
                <p>
                  {" "}
                  {item.price} AMD / {item.size}{" "}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TshirtMan
