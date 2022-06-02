import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./KidsJackets.css"
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
      <>
        <div className="kidsJackets">
         <span className='kidsJacketsTitle'> Kids Jacets</span>
        </div>
        {console.log("kidsJacketsArr-->",kidsJacketsArr)}
        {
           
            kidsJacketsArr?.map((item,i)=>{
                return(
                    <div key={item.id} >
                          <div >
                              <img src={item.location} />
                          </div>
                       <div className='dressDetailsCarusel' >
                                <div className='iconsCarusel' >
                                    <label className='iconsCaruselBas' onClick={()=> goBasket(item)}> 
                                    <AddShoppingCartIcon className={userBasket.includes(item) ? "activFavorite" : ''}/> </label>
                                </div>
                                <div className='iconsCarusel'> 
                                    <label className='iconsCaruselFav' onClick={()=> goFavorite(item)}> 
                                    <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/> </label>
                                    <ImageZoom img = {kidsJacketsArr[i].location}/> 
                                </div>
                                <p > {item.price} AMD / {item.size}  </p>
                </div>
                    </div>
                       )})
          }
        </>             
    )
}
  
export default KidsJackets
