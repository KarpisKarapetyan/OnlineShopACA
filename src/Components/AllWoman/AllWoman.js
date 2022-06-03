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

const AllWoman = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [allWomanArr, setAllWomanArr] = useState([])

  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("allWoman"))){
      axios.get(`${mainUrl}/allProducts`).then((res) => {
        const arr = res.data.filter(
          (item) =>
            item.name.some((item) => item === "woman tshirt") ||
            item.name.some((item) => item === "woman jacket")
        )
        setAllWomanArr(arr)
        return arr
      }).then(arr => sessionStorage.setItem('allWoman', JSON.stringify(arr)))
    }else{
      setAllWomanArr(JSON.parse(sessionStorage.getItem('allWoman')))
    }
  }, [])

  const addBasket = useAddBasket()
  const addFavorite = useAddFavorite()

  const sort = (e) => {
    if (e.target.value === "sortHigh") {
      const arr1 = allWomanArr.sort((a, b) => a.price - b.price)
      setAllWomanArr([...arr1])
    }

    if (e.target.value === "sortDown") {
      const arr2 = allWomanArr.sort((a, b) => b.price - a.price)
      setAllWomanArr([...arr2])
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
        <span>Woman</span>
      </div>

      <div className="manItemContainer">
        {allWomanArr.map((item, i) => {
          return (
            <div key={item.id} className="manItem">
              <Loadable src={allWomanArr[i].location}/>
              <div className="dressDetailsCarusel">
                <label className="iconItem" onClick={() => addBasket(item)}>
                  <AddShoppingCartIcon
                    className={userBasket.includes(item) ? "activFavorite" : ""}
                  />
                </label>
                <label className="iconItem" onClick={() => addFavorite(item)}>
                  <FavoriteIcon
                    className={
                      favoriteArr.includes(item) ? "activFavorite" : ""
                    }
                  />
                </label>
                <ImageZoom img={allWomanArr[i].location} />
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
export default AllWoman
