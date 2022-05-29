import axios from 'axios'
import { useEffect, useState } from 'react'
import { mainUrl } from '../../../api/api'
import { useAddBasket } from '../../../hooks/useAddBasket'
import Carousel from './Carousel/Carousel'
import FavoriteIcon from '../Favorite/Favorite'
import AddShoppingcard from '../BasketIcon/basketIcon'
import './Products.css'

function Products (){
    const [products,setProducts] = useState([])
    
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
                                    <div  onClick={()=> goBasket(item)}><AddShoppingcard /></div>  
                                    <div><FavoriteIcon /></div>
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