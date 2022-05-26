import axios from 'axios'
import { useState } from 'react'
import { mainUrl } from '../../../api/api'
import Carousel from './Carousel/Carousel'
import './Products.css'

function Products (){
    const [products,setProducts] =useState([])

    axios.get(`${mainUrl}/allProducts`)
      .then((res) => setProducts(res.data.flat(1))

      )
    return (
        
             <>
             <div className="productTitle">
                <span className='titleSpan'> Products </span>
             </div>
             <Carousel>
             {products?.map((item , i)=>(
                 <div key={i}>
                     <div className='item' >  
                                <img src={item?.location} /> 
                                
                            </div>
                            <div>
                            <p> {item.price}</p>
                            </div>
                 </div>
                            
                          
                    ))}
             </Carousel>
                 
             </>
               
         
    )
}
export default Products