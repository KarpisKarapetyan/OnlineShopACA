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
import ImageZoom from "../HomePage/ImageZoom/ImageZoom"
import {useSelector} from "react-redux"
import {useAddFavorite} from "../../hooks/useAddFavorite"
import Loadable from "../Loadable/Loadable"

const AllKids = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [allKids, setAllKids] = useState([])
  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("allKids"))){
      axios.get(`${mainUrl}/allProducts`).then((res) => {
        const arr = res.data.filter(
          (item) =>
            item.name.some((item) => item === "kids tshirt") ||
            item.name.some((item) => item === "kids jacket")
        )
        setAllKids(arr)
        return arr
      }).then(arr => sessionStorage.setItem('allKids', JSON.stringify(arr)))
    }else{
      setAllKids(JSON.parse(sessionStorage.getItem("allKids")))
    }
  }, [])

  const goBasket = useAddBasket()
  const goFavorite = useAddFavorite()

  const sort = (e) => {
    if (e.target.value === "sortHigh") {
      const arr1 = allKids.sort((a, b) => a.price - b.price)
      setAllKids([...arr1])
    }

    if (e.target.value === "sortDown") {
      const arr2 = allKids.sort((a, b) => b.price - a.price)
      setAllKids([...arr2])
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
        <span>Kids</span>
      </div>
      <div className="manItemContainer">
        {allKids.map((item, i) => {
          return (
            <div key={i} className="manItem">
              <Loadable src={allKids[i].location} />
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
                <ImageZoom img={allKids[i].location} />
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

export default AllKids
