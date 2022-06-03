import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import {useAddBasket} from "../../hooks/useAddBasket"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import {useSelector} from "react-redux"
import {
  favoriteSelector,
  userBasketSelector,
} from "../../redux/slices/userSlice"
import {useAddFavorite} from "../../hooks/useAddFavorite"
import ImageZoom from "../HomePage/ImageZoom/ImageZoom"
import Loadable from "../Loadable/Loadable"

const KidsJackets = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [kidsJacketsArr, setKidsJacketsArr] = useState([])
  const goBasket = useAddBasket()
  const goFavorite = useAddFavorite()

  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("kidsJackets"))){
      axios
      .get(`${mainUrl}/allProducts`)
      .then(console.log("================================================="))
      .then((res) => {
        const arr = res.data.filter((item) =>
          item.name.some((item) => item === "kids jacket")
        )
        setKidsJacketsArr(arr)
        return arr
      }).then(arr => sessionStorage.setItem('kidsJackets', JSON.stringify(arr)))
    }else{
      setKidsJacketsArr(JSON.parse(sessionStorage.getItem("kidsJackets")))
    }
    
  }, [])

  const sort = (e) => {
    if (e.target.value === "sortHigh") {
      const arr1 = kidsJacketsArr.sort((a, b) => a.price - b.price)
      setKidsJacketsArr([...arr1])
    }

    if (e.target.value === "sortDown") {
      const arr2 = kidsJacketsArr.sort((a, b) => b.price - a.price)
      setKidsJacketsArr([...arr2])
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
        <span>Kids Jacket</span>
      </div>
      <div className="manItemContainer">
        {kidsJacketsArr.map((item, i) => {
          return (
            <div key={i} className="manItem">
              <Loadable  src={kidsJacketsArr[i].location}/>
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
                <ImageZoom img={kidsJacketsArr[i].location} />
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

export default KidsJackets
