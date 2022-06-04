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

  if(favoriteArr.length !== 0) {
    return (
      <div className={classes.items}>
        <h3 className={classes.title}>FAVORITES</h3>
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
  }else{
    return (
      <div className={classes.items}>
        <h3 className={classes.title}>FAVORITES</h3>
        <p className={classes.textOfPtag}>You dont have any products</p>
        <p className={classes.textOfPtag}>in your Favorite list</p>
      </div>
    )
  }
  
}

export default FavoriteComponent
