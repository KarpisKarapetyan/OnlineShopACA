import axios from 'axios'
import { useEffect, useState } from 'react'
import { mainUrl } from '../../../api/api'
import { useAddBasket } from '../../../hooks/useAddBasket'
import Carousel from './Carousel/Carousel'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux'
import { favoriteSelector, userBasketSelector } from '../../../redux/slices/userSlice'
import { useAddFavorite } from '../../../hooks/useAddFavorite'
import ImageZoom from '../ImageZoom/ImageZoom'
import './Products.css'

function Products (){
    const [products,setProducts] = useState([])
    const favoriteArr = useSelector(favoriteSelector)
    const userBasket = useSelector(userBasketSelector)

    useEffect(()=>{
        if(!sessionStorage.getItem("BestSeller")){
            axios.get(`${mainUrl}/bestSelling`)
         .then((res) => {
            setProducts(res.data)
            return res.data
        }).then((result) => sessionStorage.setItem("BestSeller", JSON.stringify(result)))}
        setProducts(JSON.parse(sessionStorage.getItem("BestSeller")))
    },[])
        
    const goBasket = useAddBasket()
    const goFavorite = useAddFavorite()
    return (
             <>
             <div className="productsMain">
                <span className='productTitle'> Best Selling  </span>
             </div>
             <div className='aboutProduct'>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div> 
             <Carousel>
             {products?.map((item , i)=>(
                 <div key={i}>
                            <div className='itemProducts' >
                                 
                                <img src={item?.location} />  
                            </div>
                            <div className='dressDetailsCarusel' >
                                <div className='iconsCarusel' >
                                    <label className='iconsCaruselBas' onClick={()=> goBasket(item)}> 
                                    <AddShoppingCartIcon className={userBasket.includes(item) ? "activFavorite" : ''}/> </label>
                                </div>
                                <div className='iconsCarusel'> 
                                    <label className='iconsCaruselFav' onClick={()=> goFavorite(item)}> 
                                    <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/> </label>
                                    <ImageZoom img = {products[i].location}/>
                                </div>
                                <p > {item.price} AMD / {item.size}  </p>
                            </div>
                 </div>
               
                 ))}
             </Carousel> 
             </>             
    )
}
export default Products