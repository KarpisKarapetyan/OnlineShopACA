import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteSelector, userBasketSelector } from '../../redux/slices/userSlice'
// import { useAddFavorite } from '../../../hooks/useAddFavorite'
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'
import "./TshirtMan.css"
import {useSelector} from "react-redux";
import {useAddFavorite} from "../../hooks/useAddFavorite";


const TshirtMan = () => {
    const favoriteArr = useSelector(favoriteSelector)
    const userBasket = useSelector(userBasketSelector)
    const [tshirtManArr, setTshirtManArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/manTshirts`)
      .then(res => setTshirtManArr(res.data))
    }, [])

    const goBasket = useAddBasket()
    const goFavorite = useAddFavorite()
 
    return (
      <div className="bgColorBlue">
          <div className="manTitleContainer">
              <span> Man Tshirt</span>
          </div>
          <div className="manItemContainer">
              {
                  tshirtManArr.map((item, i) => {
                      return (
                          <div key={i} className="manItem">
                              <img src={item.location}/>
                              <div className="manDetails">
                                  <label className='iconItem' onClick={() => goBasket(item)}>
                                      <AddShoppingCartIcon
                                          className={userBasket.includes(item) ? "activFavorite" : ''}/>
                                  </label>
                                  <label className='iconItem' onClick={() => goFavorite(item)}>
                                      <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/>
                                  </label>
                                  <ImageZoom img={tshirtManArr[i].location}/>
                                  <span> {item.price} AMD / {item.size}  </span>
                              </div>
                          </div>
                      )
                  })
              }
          </div>

      </div>
    )
  }
  
  export default TshirtMan