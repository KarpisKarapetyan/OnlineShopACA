import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./KidsJackets.css"
import { useAddBasket } from "../../hooks/useAddBasket"

const KidsJackets = () => {

    const [womanTshirtsArr, setWomanTshirtsArr] = useState([])
    console.log("=================================================")
    useEffect(() => {
      axios.get(`${mainUrl}/womanTshirts`)
      .then(res => setWomanTshirtsArr(res.data))
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
  
  export default KidsJackets
  

