import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {useSubtractFavorite} from "../../../../hooks/useSubtractFavorite"
import {
  favoriteSelector,
  userSelector,
} from "../../../../redux/slices/userSlice"
import "../Favorite.css"

function FavoriteComponent() {
  const favorite = useSelector(favoriteSelector)
  const [favoriteArr, setFavoriteArr] = useState([])
  const subtract = useSubtractFavorite()
  const user = useSelector(userSelector)

  useEffect(() => {
    const arr = favorite
    if (user) {
      sessionStorage.setItem("favorite", JSON.stringify(favorite))
    }

    setFavoriteArr(arr)
  }, [favorite])

  return (
    <div>
      {favoriteArr.map((item) => {
        return (
          <div key={item.id} className="favoriteItem">
            <div className="littleImage"><img src={item.location}/></div>
            <div>{item.size}</div>
            <div>{item.price}</div>
            <button onClick={() => subtract(item)}>remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default FavoriteComponent
