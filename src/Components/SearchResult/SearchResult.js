import {useSelector} from "react-redux"
import {searchSelector} from "../../redux/slices/searchSlice"
import classes from "./SearchResult.module.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'
import { favoriteSelector, userBasketSelector } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Loadable from "../Loadable/Loadable";

const SearchResult = () => {
  const searchArr = useSelector(searchSelector)
  const userBasket = useSelector(userBasketSelector)
  const favoriteArr = useSelector(favoriteSelector)
  const navigate = useNavigate()

  if (searchArr.length !== 0) {
    return (
      <div className={classes.background}>
        <div className={classes.title}><span>Your search result is</span></div>
        <div className={classes.searchContainer}>
          {searchArr.map((item, i) => {
            return ( 
              <div key={item.id} className={classes.searchItem}>
                <Loadable src={searchArr[i].location}/>
                <div className={classes.textOfItem}>
                  <label className={classes.searchIconItem} onClick={() => goBasket(item)}>
                    <AddShoppingCartIcon
                      className={
                        userBasket.includes(item) ? "activFavorite" : ""
                      }
                    />
                  </label>
                  <label className={classes.searchIconItem} onClick={() => goFavorite(item)}>
                    <FavoriteIcon
                      className={
                        favoriteArr.includes(item) ? "activFavorite" : ""
                      }
                    />
                  </label>
                  <ImageZoom img={searchArr[i].location} />
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
  } else {
    navigate('../MakeOrder')
  }
}

export default SearchResult
