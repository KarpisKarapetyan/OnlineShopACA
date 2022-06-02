import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux'
import { favoriteSelector, userBasketSelector } from '../../redux/slices/userSlice'
import { useAddFavorite } from '../../hooks/useAddFavorite'
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'

const KidsJackets = () => {
  const favoriteArr = useSelector(favoriteSelector)
  const userBasket = useSelector(userBasketSelector)
  const [kidsJacketsArr, setKidsJacketsArr] = useState([])
  const goBasket = useAddBasket()
  const goFavorite = useAddFavorite()
   
    useEffect(() => {
      axios.get(`${mainUrl}/kidsJackets`)
      .then(res => setKidsJacketsArr(res.data))
     
    }, []) 
    
     
 
    return (
      <div className="bgColorBlue">
          <div className="manTitleContainer"> 
              <span>Kids Jacet</span>
          </div>
          <div className="manItemContainer">
              {
                  kidsJacketsArr.map((item, i) => {
                      return (
                          <div key={i} className="manItem">
                              <img src={item.location}/>
                              <div className="dressDetailsCarusel">
                                  <label className='iconItem' onClick={() => goBasket(item)}>
                                      <AddShoppingCartIcon
                                          className={userBasket.includes(item) ? "activFavorite" : ''}/>
                                  </label>
                                  <label className='iconItem' onClick={() => goFavorite(item)}>
                                  <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/>
                                  </label>
                                  <ImageZoom img={kidsJacketsArr[i].location}/>
                                  <p> {item.price} AMD / {item.size}  </p>
                              </div>
                          </div>
                      )
                  })
              }
          </div>

      </div>
  )
}

export default KidsJackets
