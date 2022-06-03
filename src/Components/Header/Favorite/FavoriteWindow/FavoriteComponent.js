import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {useSubtractFavorite} from "../../../../hooks/useSubtractFavorite"
import {
  favoriteSelector,
  userSelector,
} from "../../../../redux/slices/userSlice"
import classes from "../FavoriteComponent.module.css"

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
    <div className={classes.items}>
      {favoriteArr.map((item) => {
        return (
          <div key={item.id} className={classes.favoriteItem}>
            <div className={classes.favoriteItemImg}><img src={item.location}/></div>
            <div className={classes.text}>
            <p>
              {" "}
              {item.price} AMD / {item.size}{" "}
            </p>
            <button onClick={() => subtract(item)}>remove</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FavoriteComponent
