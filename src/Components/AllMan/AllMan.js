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
import {useSelector} from "react-redux"
import {useAddFavorite} from "../../hooks/useAddFavorite"
import Loadable from "../Loadable/Loadable"

const AllMan = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [manList, setManList] = useState([])
  useEffect(() => {
    axios.get(`${mainUrl}/allProducts`).then((res) => {
      const arr = res.data.filter(
        (item) =>
          item.name.some((item) => item === "man tshirt") ||
          item.name.some((item) => item === "man jacket")
      )
      setManList(arr)
    })
  }, [])

  const goBasket = useAddBasket()
  const goFavorite = useAddFavorite()

  const sort = (e) => {
    if (e.target.value === "sortHigh") {
      const arr1 = manList.sort((a, b) => a.price - b.price)
      setManList([...arr1])
    }

    if (e.target.value === "sortDown") {
      const arr2 = manList.sort((a, b) => b.price - a.price)
      setManList([...arr2])
    }
  }

  return (
    <div className="bgColorBlue">
      <form action="#">
        <label for="lang">sort</label>
        <select name="sorting" onChange={sort}>
          <option value="javascript">Select sort type</option>
          <option value="sortHigh">PRICE (LOW - HIGH)</option>
          <option value="sortDown">PRICE (HIGH - LOW)</option>
        </select>
      </form>
      <div className="manTitleContainer">
        <span>Men</span>
      </div>
      <div className="manItemContainer">
        {manList.map((item, i) => {
          return (
            <div key={i} className="manItem">
              <Loadable src={manList[i].location} />
              <div className="dressDetailsCarusel">
                <label className="iconItem" onClick={() => goBasket(item)}>
                  <AddShoppingCartIcon
                    className={userBasket.includes(item) ? "activFavorite" : ""}
                  />
                </label>
                <label className="iconItem" onClick={() => goFavorite(item)}>
                  <FavoriteIcon
                    className={
                      favoriteArr.includes(item) ? "activFavorite" : ""
                    }
                  />
                </label>
                <ImageZoom img={manList[i].location} />
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

export default AllMan
