import axios from 'axios'
import { useState } from 'react'
import { mainUrl } from '../../../api/api'
import Carousel from './Carousel/Carousel'
import './Products.css'

function Products (){
    const [products,setProducts] =useState([])

    axios.get(`${mainUrl}/manTshirts`)
      .then((res) => setProducts(res.data)

      )
    return (
        
             <>
                     {products.map((item , i)=>(
                        <Carousel key={i} >
                            <div className='item'>  
                                <img src={item.location} /> 
                            </div>
                        </Carousel> 
                          
                    ))}
             </>
               
         
    )
}
export default Products