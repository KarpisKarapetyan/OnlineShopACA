import axios from 'axios'
import { useEffect, useState } from 'react'
import { mainUrl } from '../../../api/api'
import Carousel from './Carousel/Carousel'
import './Products.css'

function Products (){
    const [products,setProducts] =useState([])
    useEffect(()=>{
        axios.get(`${mainUrl}/allProducts`)
      .then((res) => setProducts(res.data.flat(1)))
    },[])
    
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
                            <div className='item' >  
                                <img src={item?.location} />  
                            </div>
                            <div className='dressDetailsCarusel'>
                                <p> Price: {item.price} AMD Size: {item.size}</p>
                            </div>
                 </div>
                 ))}
             </Carousel>   
             </>             
    )
}
export default Products