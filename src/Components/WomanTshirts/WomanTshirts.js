import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./WomanTshirts.css"
import { useAddBasket } from "../../hooks/useAddBasket"

const WomanTshirts = () => {

    const [womanTshirtsArr, setWomanTshirtsArr] = useState([])
    console.log("=================================================")
    useEffect(() => {
      axios.get(`${mainUrl}/allProducts`)
      .then(res => {
        const arr = res.data.filter(item => item.name.some((item) => item === 'woman tshirt'))
        setWomanTshirtsArr(arr)
      })
    }, []) 
    const addBasket = useAddBasket()
     
    return (
      <div className="womanTshrts">
         <span className='womanTshirtsTitle'> Woman Tshrts</span>
         <div className="womanTshrtsData">
         {
            womanTshirtsArr.map((item,i)=>{
                return(
                    <div key={i}  className ="womanTshrtsItems">
                        <div className="womanTshrtsDetailsImij">
                          <img src={item.location} />
                        </div>
                        <div className='womanTshrtsDetails'
                        >
                          <button onClick={() => addBasket(item)}>Add Basket</button>
                          <p> Size: {item.size} Price: {item.price} </p>
                        </div>
                      </div>
                )
            })
        }
         </div>
       
      </div>
    )
  }
  
  export default WomanTshirts
  

